"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import UltraLoader from "./UltraLoader";

export default function ClientLoaderWrapper({ children }) {
  const [loading, setLoading] = useState(true);
  const pathname = usePathname();

  useEffect(() => {
    setLoading(true);

    const timer = setTimeout(() => {
      setLoading(false);
    }, 1200);

    return () => clearTimeout(timer);
  }, [pathname]);

  return (
    <>
      {loading && <UltraLoader />}
      {children}
    </>
  );
}