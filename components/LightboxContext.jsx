"use client";

import { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react';
import Image from 'next/image';

const LightboxContext = createContext(null);

export const LightboxProvider = ({ children }) => {
  const [activeItem, setActiveItem] = useState(null);

  const openLightbox = useCallback((item) => {
    if (!item?.src) return;
    setActiveItem(item);
  }, []);

  const closeLightbox = useCallback(() => {
    setActiveItem(null);
  }, []);

  useEffect(() => {
    if (!activeItem) return undefined;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [activeItem]);

  const value = useMemo(
    () => ({ activeItem, openLightbox, closeLightbox }),
    [activeItem, openLightbox, closeLightbox]
  );

  return (
    <LightboxContext.Provider value={value}>
      {children}
    </LightboxContext.Provider>
  );
};

export const useLightbox = () => {
  const context = useContext(LightboxContext);
  if (!context) {
    throw new Error('useLightbox must be used within LightboxProvider');
  }
  return context;
};

export const LightboxModal = () => {
  const { activeItem, closeLightbox } = useLightbox();

  useEffect(() => {
    if (!activeItem) return undefined;
    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        closeLightbox();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [activeItem, closeLightbox]);

  if (!activeItem) return null;

  return (
    <div
      className="fixed inset-0 z-[80] bg-black/80 backdrop-blur-sm flex items-center justify-center p-4"
      onClick={closeLightbox}
      role="presentation"
    >
      <div
        className="relative w-full max-w-5xl h-[85vh]"
        onClick={(event) => event.stopPropagation()}
        role="dialog"
        aria-modal="true"
        aria-label={activeItem.alt || 'Expanded image'}
      >
        <Image
          src={activeItem.src}
          alt={activeItem.alt || 'Expanded image'}
          fill
          className="object-contain rounded-2xl shadow-2xl"
          sizes="100vw"
          priority
        />
        <button
          type="button"
          onClick={closeLightbox}
          className="absolute top-4 right-4 h-10 w-10 rounded-full bg-black/70 text-white text-xl flex items-center justify-center hover:bg-black/90 transition"
          aria-label="Close image"
        >
          ×
        </button>
      </div>
    </div>
  );
};
