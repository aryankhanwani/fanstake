# Telegram Waitlist Setup Instructions

## How to Set Up Telegram Notifications for Waitlist Emails

Follow these steps to receive waitlist signups directly in your Telegram:

### Step 1: Create a Telegram Bot

1. Open Telegram and search for **@BotFather**
2. Start a conversation and send the command: `/newbot`
3. Follow the prompts to:
   - Choose a name for your bot (e.g., "Fanstake Waitlist Bot")
   - Choose a username for your bot (must end with "bot", e.g., "fanstake_waitlist_bot")
4. BotFather will give you a **Bot Token** (looks like: `123456789:ABCdefGHIjklMNOpqrsTUVwxyz`)
5. **Copy and save this token** - you'll need it in Step 3

### Step 2: Get Your Chat ID

1. Open Telegram and search for **@userinfobot**
2. Start a conversation with it
3. It will immediately reply with your **Chat ID** (a number like: `123456789`)
4. **Copy and save this Chat ID** - you'll need it in Step 3

### Step 3: Configure Environment Variables

1. Create a file named `.env.local` in the root of your project (same directory as `package.json`)
2. Add the following content:

```
TELEGRAM_BOT_TOKEN=your_bot_token_here
TELEGRAM_CHAT_ID=your_chat_id_here
```

3. Replace `your_bot_token_here` with the bot token from Step 1
4. Replace `your_chat_id_here` with your chat ID from Step 2

### Step 4: Restart Your Development Server

After creating the `.env.local` file, restart your Next.js development server:

```bash
npm run dev
```

### Testing

1. Open your website
2. Click "Join the Waitlist"
3. Enter an email address and submit
4. Check your Telegram - you should receive a message with the email address!

### Troubleshooting

- **Not receiving messages?** Make sure:
  - The bot token is correct (no extra spaces)
  - The chat ID is correct (just the number, no quotes)
  - You've restarted your dev server after creating `.env.local`
  - The `.env.local` file is in the root directory

- **Getting errors?** Check the terminal/console for error messages

### Security Note

Never commit your `.env.local` file to git! It's already in `.gitignore` to protect your credentials.

