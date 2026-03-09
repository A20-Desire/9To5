"use client";

import Image from 'next/image';
import { useLightbox } from './LightboxContext';

const LightboxImage = ({ src, alt = 'Expanded image', className = '', onClick, ...props }) => {
  const { openLightbox } = useLightbox();

  const handleOpen = (event) => {
    if (onClick) {
      onClick(event);
    }
    if (event.defaultPrevented) return;
    openLightbox({ src, alt });
  };

  const handleKeyDown = (event) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      openLightbox({ src, alt });
    }
  };

  return (
    <Image
      src={src}
      alt={alt}
      onClick={handleOpen}
      onKeyDown={handleKeyDown}
      tabIndex={0}
      role="button"
      className={`${className} cursor-zoom-in`}
      {...props}
    />
  );
};

export default LightboxImage;
