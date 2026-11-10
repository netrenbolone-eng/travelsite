"use client";

import { useEffect, useState } from "react";
import { Pause, Play } from "lucide-react";
import { ru } from "@/i18n/ru";
import { en } from "@/i18n/en";

export function AnnouncementBar({ locale }: { locale: "ru" | "en" }) {
  const messages = locale === "ru" ? ru.announcements : en.announcements;
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const controls = locale === "ru" ? ru.announcementControls : en.announcementControls;

  useEffect(() => {
    if (paused) return;
    const timer = window.setInterval(() => setActive((current) => (current + 1) % messages.length), 7000);
    return () => window.clearInterval(timer);
  }, [locale, messages.length, paused]);

  return (
    <div className="announcement-bar" aria-live="polite">
      <span>{messages[active]}</span>
      <button
        type="button"
        className="announcement-control"
        aria-label={paused ? controls.resume : controls.pause}
        title={paused ? controls.resume : controls.pause}
        aria-pressed={paused}
        onClick={() => setPaused((current) => !current)}
      >
        {paused ? <Play aria-hidden="true" /> : <Pause aria-hidden="true" />}
      </button>
    </div>
  );
}