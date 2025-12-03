"use client";

import { createContext, useContext, useState, ReactNode } from "react";
import EmailModal from "./EmailModal";

interface EmailModalContextType {
  openModal: () => void;
  closeModal: () => void;
  isOpen: boolean;
}

const EmailModalContext = createContext<EmailModalContextType | undefined>(undefined);

export function EmailModalProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  return (
    <EmailModalContext.Provider value={{ openModal, closeModal, isOpen }}>
      {children}
      <EmailModal isOpen={isOpen} onClose={closeModal} />
    </EmailModalContext.Provider>
  );
}

export function useEmailModal() {
  const context = useContext(EmailModalContext);
  if (context === undefined) {
    throw new Error("useEmailModal must be used within an EmailModalProvider");
  }
  return context;
}

