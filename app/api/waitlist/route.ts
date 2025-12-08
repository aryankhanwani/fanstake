import { NextRequest, NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';

export async function POST(request: NextRequest) {
  try {
    const { email } = await request.json();

    if (!email || !email.includes('@')) {
      return NextResponse.json(
        { error: 'Valid email is required' },
        { status: 400 }
      );
    }

    // Store email in Supabase
    const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
    const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY || process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

    if (supabaseUrl && supabaseKey) {
      const supabase = createClient(supabaseUrl, supabaseKey);
      const normalizedEmail = email.toLowerCase().trim();
      
      // Check if email already exists
      const { data: existingEmail, error: checkError } = await supabase
        .from('waitlist_emails')
        .select('email')
        .eq('email', normalizedEmail)
        .single();

      if (checkError && checkError.code !== 'PGRST116') {
        // PGRST116 is "not found" error, which is expected for new emails
        console.error('Error checking email:', checkError);
      }

      if (existingEmail) {
        return NextResponse.json(
          { error: 'This email is already registered. You are already on the waitlist!' },
          { status: 409 }
        );
      }
      
      // Insert new email
      const { error: dbError } = await supabase
        .from('waitlist_emails')
        .insert([
          {
            email: normalizedEmail,
            created_at: new Date().toISOString(),
          },
        ]);

      if (dbError) {
        // If it's a duplicate error (shouldn't happen after check, but just in case)
        if (dbError.code === '23505') {
          return NextResponse.json(
            { error: 'This email is already registered. You are already on the waitlist!' },
            { status: 409 }
          );
        }
        console.error('Supabase error:', dbError);
        return NextResponse.json(
          { error: 'Failed to save email. Please try again.' },
          { status: 500 }
        );
      }
    }

    // Get Telegram credentials from environment variables
    const botToken = process.env.TELEGRAM_BOT_TOKEN;
    const chatId = process.env.TELEGRAM_CHAT_ID;

    if (!botToken || !chatId) {
      console.error('Telegram credentials not configured');
      return NextResponse.json(
        { error: 'Telegram not configured' },
        { status: 500 }
      );
    }

    // Format the message
    const message = `🎉 *New Waitlist Signup*\n\n📧 Email: ${email}\n⏰ Time: ${new Date().toLocaleString()}\n\nFrom: FANSTAKE Website`;

    // Send message to Telegram
    const telegramUrl = `https://api.telegram.org/bot${botToken}/sendMessage`;
    
    const response = await fetch(telegramUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        chat_id: chatId,
        text: message,
        parse_mode: 'Markdown',
      }),
    });

    if (!response.ok) {
      const errorData = await response.json();
      console.error('Telegram API error:', errorData);
      return NextResponse.json(
        { error: 'Failed to send notification' },
        { status: 500 }
      );
    }

    return NextResponse.json(
      { success: true, message: 'Email submitted successfully' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error processing waitlist submission:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

