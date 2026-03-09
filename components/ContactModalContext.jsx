"use client";

import { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react';
import ContactForm from './ContactForm';

const ContactModalContext = createContext(null);

export const ContactModalProvider = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const openContactModal = useCallback(() => setIsOpen(true), []);
  const closeContactModal = useCallback(() => setIsOpen(false), []);

  useEffect(() => {
    if (!isOpen) return undefined;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [isOpen]);

  const value = useMemo(
    () => ({ isOpen, openContactModal, closeContactModal }),
    [isOpen, openContactModal, closeContactModal]
  );

  return (
    <ContactModalContext.Provider value={value}>
      {children}
    </ContactModalContext.Provider>
  );
};

export const useContactModal = () => {
  const context = useContext(ContactModalContext);
  if (!context) {
    throw new Error('useContactModal must be used within ContactModalProvider');
  }
  return context;
};

export const ContactModal = () => {
  const { isOpen, closeContactModal } = useContactModal();

  useEffect(() => {
    if (!isOpen) return undefined;
    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        closeContactModal();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, closeContactModal]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-[90] bg-black/80 backdrop-blur-sm flex items-center justify-center p-4"
      onClick={closeContactModal}
      role="presentation"
    >
      <div
        className="relative w-full max-w-2xl bg-black border border-white/10 rounded-3xl p-8 sm:p-10 shadow-2xl"
        onClick={(event) => event.stopPropagation()}
        role="dialog"
        aria-modal="true"
        aria-label="Contact form"
      >
        <div className="flex items-start justify-between gap-6">
          <div>
            <span className="text-xs font-mono tracking-widest text-white/50">[ GET STARTED ]</span>
            <h2 className="mt-3 text-3xl font-zentry uppercase font-black text-white">
              Book Your Styling Session
            </h2>
            <p className="mt-3 text-white/60 text-base leading-relaxed">
              Ready to elevate your wardrobe? Share a few details and our consultants will reach out to schedule your personal session.
            </p>
          </div>
          <button
            type="button"
            onClick={closeContactModal}
            className="h-10 w-10 rounded-full bg-white/10 text-white text-xl flex items-center justify-center hover:bg-white/20 transition"
            aria-label="Close contact form"
          >
            ×
          </button>
        </div>
        <ContactForm />
      </div>
    </div>
  );
};
