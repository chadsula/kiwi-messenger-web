import { useEffect, useState } from "react";

export default function useMediaQuery(query: string): boolean {
  const getMatches = (q: string): boolean => {
    if (typeof window !== "undefined" && typeof window.matchMedia === "function") {
      return window.matchMedia(q).matches;
    }
    return false; // default for SSR
  };

  const [matches, setMatches] = useState<boolean>(() => getMatches(query));

  useEffect(() => {
    const mediaQueryList = window.matchMedia(query);
    const listener = (event: MediaQueryListEvent) => {
      setMatches(event.matches);
    };

    mediaQueryList.addEventListener("change", listener);
    // Set initial match (in case state was stale or on hydration)
    setMatches(mediaQueryList.matches);

    return () => mediaQueryList.removeEventListener("change", listener);
  }, [query]);

  return matches;
}
