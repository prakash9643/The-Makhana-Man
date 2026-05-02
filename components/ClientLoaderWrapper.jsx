// "use client";

// import { useEffect, useState } from "react";
// import { usePathname } from "next/navigation";
// import UltraLoader from "./UltraLoader";

// export default function ClientLoaderWrapper({ children }) {
//   const [loading, setLoading] = useState(true);
//   const pathname = usePathname();

//   useEffect(() => {
//     setLoading(true);

//     const timer = setTimeout(() => {
//       setLoading(false);
//     }, 1200);

//     return () => clearTimeout(timer);
//   }, [pathname]);

//   return (
//     <>
//       {loading && <UltraLoader />}
//       {children}
//     </>
//   );
// }

"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import UltraLoader from "./UltraLoader";

export default function ClientLoaderWrapper({ children }) {
  const [loading, setLoading] = useState(true);
  const pathname = usePathname();

  useEffect(() => {
    setLoading(true);

    /*
      ── WHY THIS IS THE ROOT CAUSE ───────────────────────────────────────────
      The original code used a fixed 1200ms timer. The problem:

      Timeline (original):
        0ms   → Page renders → JS runs → setLoading(true) → UltraLoader shows
        0ms   → Browser starts fetching fonts (triggered by CSS @font-face)
        1200ms→ Timer fires → setLoading(false) → content APPEARS
        ???ms → Fonts finish loading → text REFLOWS from fallback → FOUT!

      The timer and font load are RACING. If fonts take > 1200ms (slow 3G,
      cold cache, Vercel cold start), the page reveals with fallback fonts,
      then flickers when custom fonts arrive.

      ── THE FIX: document.fonts.ready ───────────────────────────────────────
      document.fonts.ready is a Promise that resolves only when ALL fonts
      referenced in the current CSS have been loaded (or failed).

      Combined with <link rel="preload"> in layout.tsx, the fonts start
      downloading before CSS even parses, so document.fonts.ready resolves
      VERY quickly — usually under 100ms on first load, instantly on repeat.

      We keep a minimum 800ms display time so the loader animation feels
      intentional rather than a flash, and max out at 3000ms as a safety
      net for very slow connections.
      ─────────────────────────────────────────────────────────────────────── */

    const MIN_DISPLAY_MS = 800;  // loader shows for at least this long
    const MAX_WAIT_MS = 3000;    // safety cap — never block longer than this

    const start = Date.now();

    // Race: fonts ready vs. max timeout
    const fontsReady = document.fonts.ready;
    const timeout = new Promise((resolve) =>
      setTimeout(resolve, MAX_WAIT_MS)
    );

    Promise.race([fontsReady, timeout]).then(() => {
      const elapsed = Date.now() - start;
      const remaining = Math.max(0, MIN_DISPLAY_MS - elapsed);

      // Wait out the minimum display time if fonts loaded instantly
      setTimeout(() => {
        setLoading(false);
      }, remaining);
    });
  }, [pathname]);

  return (
    <>
      {loading && <UltraLoader />}
      {/*
        Hide content (not remove it) while loading.
        visibility: hidden keeps the DOM mounted so fonts
        get triggered/measured without layout shifts later.
        opacity: 0 ensures nothing bleeds through.
      */}
      <div
        style={{
          visibility: loading ? "hidden" : "visible",
          opacity: loading ? 0 : 1,
          transition: "opacity 0.3s ease",
        }}
      >
        {children}
      </div>
    </>
  );
}