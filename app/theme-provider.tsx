// for dynamically changes CSS variables
// can fetch everything here from a database later to be chapter-specific, just using default georgia tech stuff for now

"use client";
import { ReactNode, useEffect } from "react";

interface ThemeProviderProps {
  children: ReactNode;
}

export default function ThemeProvider({ children }: ThemeProviderProps) { 
  useEffect(() => {
    document.documentElement.style.setProperty(
      "--primary-rgb",
      "179 163 105" // database value here
    );
    document.documentElement.style.setProperty(
      "--secondary-rgb",
      "0 48 87" // database value here
    );
  }, []);

  return <>{children}</>;
}