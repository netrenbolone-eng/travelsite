"use client";

import { createContext, createElement, useCallback, useContext, useLayoutEffect, useRef, useState, type ReactNode } from "react";
import { usePathname } from "next/navigation";

export type ScrollChromeState = "hero" | "visible" | "hidden" | "page";

type ScrollChromeContextValue = {
  state: ScrollChromeState;
  setMenuOpen: (open: boolean) => void;
};

const ScrollChromeContext = createContext<ScrollChromeContextValue>({
  state: "hero",
  setMenuOpen: () => undefined,
});

export function ScrollChromeProvider({ children }: { children: ReactNode }) {
  const [state, setState] = useState<ScrollChromeState>("hero");
  const menuOpenRef = useRef(false);
  const pathname = usePathname();
  const setMenuOpen = useCallback((open: boolean) => {
    menuOpenRef.current = open;
    if (open) setState((current) => current === "hero" || current === "page" ? current : "visible");
  }, []);

  useLayoutEffect(() => {
    let previousY = window.scrollY;
    let frame = 0;
    const chrome = document.querySelector<HTMLElement>(".site-chrome");
    const header = chrome?.querySelector<HTMLElement>(".site-header");

    const update = (initial = false) => {
      frame = 0;
      const currentY = window.scrollY;
      const hero = document.querySelector<HTMLElement>(".hero-section");

      if (!hero || !header) {
        setState("page");
        previousY = currentY;
        return;
      }

      const heroEnd = hero.offsetTop + hero.offsetHeight;
      const barHeight = Number.parseFloat(getComputedStyle(document.documentElement).getPropertyValue("--bar-h")) || 0;
      const threshold = heroEnd - header.offsetHeight - barHeight;
      const movement = currentY - previousY;
      const headerFocused = Boolean(chrome?.contains(document.activeElement));

      setState((current) => {
        if (currentY < threshold) return "hero";
        if (menuOpenRef.current || headerFocused) return "visible";
        if (initial) return "visible";
        if (current === "hero") return movement >= 0 ? "hidden" : "visible";
        if (movement >= 6) return "hidden";
        if (movement <= -6) return "visible";
        return current;
      });

      if (initial || Math.abs(movement) >= 6) previousY = currentY;
    };

    const scheduleUpdate = () => {
      if (!frame) frame = window.requestAnimationFrame(() => update());
    };
    const handleFocusChange = () => scheduleUpdate();

    window.addEventListener("scroll", scheduleUpdate, { passive: true });
    window.addEventListener("resize", scheduleUpdate);
    chrome?.addEventListener("focusin", handleFocusChange);
    chrome?.addEventListener("focusout", handleFocusChange);
    update(true);

    return () => {
      window.removeEventListener("scroll", scheduleUpdate);
      window.removeEventListener("resize", scheduleUpdate);
      chrome?.removeEventListener("focusin", handleFocusChange);
      chrome?.removeEventListener("focusout", handleFocusChange);
      if (frame) window.cancelAnimationFrame(frame);
    };
  }, [pathname]);

  return createElement(ScrollChromeContext.Provider, { value: { state, setMenuOpen } }, children);
}

export function useScrollChrome(): ScrollChromeState {
  return useContext(ScrollChromeContext).state;
}

export function useSetMenuOpen(): ScrollChromeContextValue["setMenuOpen"] {
  return useContext(ScrollChromeContext).setMenuOpen;
}
