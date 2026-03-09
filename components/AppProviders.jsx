"use client";

import { ContactModalProvider } from './ContactModalContext';

const AppProviders = ({ children }) => {
  return (
    <ContactModalProvider>
      {children}
    </ContactModalProvider>
  );
};

export default AppProviders;
