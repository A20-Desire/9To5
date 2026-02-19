"use client";

import GradientBackground from './GradientBackground';

const ThemeShell = ({ children, className = "" }) => {
  return (
    <div className={`relative min-h-screen text-white ${className}`}>
      <GradientBackground />
      <div className="relative z-10">{children}</div>
    </div>
  );
};

export default ThemeShell;
