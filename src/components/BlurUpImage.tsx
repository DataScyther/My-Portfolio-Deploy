import React, { useEffect, useRef, useState } from "react";

type BlurUpImageProps = React.ImgHTMLAttributes<HTMLImageElement> & {
  src: string;
  placeholderSrc?: string;
  alt: string;
};

/**
 * Blur-up image: starts blurred and slightly scaled, then sharpens when fully loaded.
 * If a placeholderSrc is provided, it loads first, then swaps to src.
 */
export const BlurUpImage: React.FC<BlurUpImageProps> = ({ src, placeholderSrc, alt, className = "", ...rest }) => {
  const [loaded, setLoaded] = useState(false);
  const imgRef = useRef<HTMLImageElement | null>(null);

  useEffect(() => {
    const img = new Image();
    img.src = src;
    img.onload = () => setLoaded(true);
  }, [src]);

  // If placeholderSrc provided, render that as the initial src to engage blur-up
  const displaySrc = placeholderSrc ?? src;

  return (
    <img
      ref={imgRef}
      src={displaySrc}
      data-src={src}
      alt={alt}
      className={`blur-up ${loaded ? "blur-up-loaded" : ""} ${className}`}
      {...rest}
      onLoad={() => {
        // if we rendered placeholder, swap to full-res after it has loaded
        if (placeholderSrc && imgRef.current && imgRef.current.getAttribute("src") !== src) {
          imgRef.current.setAttribute("src", src);
        }
      }}
    />
  );
};

export default BlurUpImage;
