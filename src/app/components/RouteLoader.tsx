"use client";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Loader from "./Loader";

export default function RouteLoader({ children }: { children: React.ReactNode }) {
  const [loading, setLoading] = useState(true);
  const [fadeIn, setFadeIn] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setLoading(true);
    setFadeIn(false); // Reset fade-in effect

    const timeout = setTimeout(() => {
      setLoading(false);
      setFadeIn(true); // Apply fade-in effect when content appears
    }, 1500);

    return () => clearTimeout(timeout);
  }, [pathname]);

  if (loading) return <Loader />;

  return (
    <div
      style={{
        opacity: fadeIn ? 1 : 0,
        transition: "opacity 0.5s ease-in-out",
      }}
    >
      {children}
    </div>
  );
}
