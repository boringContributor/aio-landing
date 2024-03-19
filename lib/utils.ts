
import {useEffect, useState} from "react";
import { ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
 
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function createSlug(title: string) {
    // Convert the blog title to lowercase
    let slug = title.toLowerCase();
  
    // Replace spaces and special characters with hyphens
    slug = slug.replace(/\s+/g, '-'); // Replace spaces with hyphens
    slug = slug.replace(/[^a-z0-9-]/g, ''); // Remove special characters
  
    // Remove consecutive hyphens
    slug = slug.replace(/-{2,}/g, '-');
  
    // Remove hyphens from the beginning and end of the slug
    slug = slug.replace(/^-+|-+$/g, '');
  
    return slug;
  }


export function toGermanDate(date: string, options: Intl.DateTimeFormatOptions) {
    return new Intl.DateTimeFormat("de-DE", options).format(new Date(date))
}

const MOBILE_BREAKPOINT = 768;


export const useIsMobile = () => {
  const [width, setWidth] = useState(() => {
    // Initialize the width with window.innerWidth if window is available
    if (typeof window !== 'undefined') {
      return window.innerWidth;
    }
    // Return a default width for server-side rendering
    return MOBILE_BREAKPOINT + 1; // Adjust this value as needed
  });
  const handleWindowSizeChange = () => {
    setWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener('resize', handleWindowSizeChange);
    return () => {
      window.removeEventListener('resize', handleWindowSizeChange);
    };
  }, []);

  if (typeof window === 'undefined') {
    return false;
  }

  return width <= MOBILE_BREAKPOINT;
};