"use client";

import GradientBackground from './GradientBackground';
import { LightboxModal, LightboxProvider } from './LightboxContext';
import { ContactModal } from './ContactModalContext';

const ThemeShell = ({ children, className = "" }) => {
  return (
    <LightboxProvider>
      <div className={`relative min-h-screen text-white ${className}`}>
        <GradientBackground />
        <div className="relative z-10">{children}</div>
        <LightboxModal />
        <ContactModal />
      </div>
    </LightboxProvider>
  );
};

export default ThemeShell;
