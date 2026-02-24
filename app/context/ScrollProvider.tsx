'use client'

import { createContext, useContext, useEffect, useState } from "react";

type ScrollContextType = {
  scrollY: number;
  scrolled: boolean;
};

const ScrollContext = createContext<ScrollContextType | null>(null);

export const ScrollProvider = ({ children }: { children: React.ReactNode }) => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(document.documentElement.scrollTop);
    };

    document.addEventListener("scroll", handleScroll, { passive: true });

    handleScroll();

    return () => {
      document.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <ScrollContext.Provider
      value={{
        scrollY,
        scrolled: scrollY > 50, // change threshold if needed
      }}
    >
      {children}
    </ScrollContext.Provider>
  );
};

export const useScroll = () => {
  const context = useContext(ScrollContext);
  if (!context) throw new Error("useScroll must be used inside ScrollProvider");
  return context;
};