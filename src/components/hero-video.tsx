"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

export function HeroVideo() {
  const [ready, setReady] = useState(false);
  const [visibleIndex, setVisibleIndex] = useState(0);
  const firstVideoRef = useRef<HTMLVideoElement>(null);
  const secondVideoRef = useRef<HTMLVideoElement>(null);
  const activeIndexRef = useRef(0);

  useEffect(() => {
    const firstVideo = firstVideoRef.current;
    const secondVideo = secondVideoRef.current;
    if (!firstVideo || !secondVideo) return;
    const videos = [firstVideo, secondVideo];

    let active = true;
    const desktopQuery = window.matchMedia("(min-width: 1024px)");
    let resetTimer: number | undefined;

    const loadVideo = () => {
      const source = desktopQuery.matches ? "/videos/hero.mp4" : "/videos/hero-720.mp4";
      const sourceChanged = videos.some((video) => video.getAttribute("src") !== source);

      if (sourceChanged) {
        setReady(false);
        videos.forEach((video) => {
          video.src = source;
          video.load();
        });
      }

      void videos[activeIndexRef.current].play().then(() => {
        if (active) setReady(true);
      }).catch((error: unknown) => {
        if (!active) return;

        setReady(false);
        reportPlaybackError(error);
      });
    };

    const handleEnded = (event: Event) => {
      const currentIndex = videos.indexOf(event.currentTarget as HTMLVideoElement);
      if (!active || currentIndex !== activeIndexRef.current) return;

      const nextIndex = 1 - currentIndex;
      const nextVideo = videos[nextIndex];
      nextVideo.currentTime = 0;

      void nextVideo.play().then(() => {
        if (!active) return;

        activeIndexRef.current = nextIndex;
        setVisibleIndex(nextIndex);
        window.clearTimeout(resetTimer);
        resetTimer = window.setTimeout(() => {
          const previousVideo = videos[currentIndex];
          previousVideo.pause();
          previousVideo.currentTime = 0;
        }, 1400);
      }).catch((error: unknown) => {
        if (!active) return;

        reportPlaybackError(error);
        const currentVideo = videos[currentIndex];
        currentVideo.currentTime = 0;
        void currentVideo.play().catch(reportPlaybackError);
      });
    };

    const handlePlaying = () => {
      if (active) setReady(true);
    };
    const handleError = (event: Event) => {
      if (videos.indexOf(event.currentTarget as HTMLVideoElement) === activeIndexRef.current) {
        setReady(false);
        console.error("Unable to load the hero video.");
      }
    };

    videos.forEach((video) => {
      video.addEventListener("ended", handleEnded);
      video.addEventListener("playing", handlePlaying);
      video.addEventListener("error", handleError);
    });
    desktopQuery.addEventListener("change", loadVideo);
    loadVideo();

    return () => {
      active = false;
      window.clearTimeout(resetTimer);
      videos.forEach((video) => {
        video.pause();
        video.removeEventListener("ended", handleEnded);
        video.removeEventListener("playing", handlePlaying);
        video.removeEventListener("error", handleError);
      });
      desktopQuery.removeEventListener("change", loadVideo);
    };
  }, []);

  return (
    <div className="hero-video-container" aria-hidden="true">
      <Image className="hero-video-poster" src="/videos/hero-poster.jpg" alt="" fill priority sizes="100vw" unoptimized />
      {[firstVideoRef, secondVideoRef].map((videoRef, index) => (
        <video
          key={index}
          ref={videoRef}
          muted
          playsInline
          preload="auto"
          poster="/videos/hero-poster.jpg"
          aria-hidden="true"
          tabIndex={-1}
          className={`hero-video${ready && visibleIndex === index ? " hero-video-visible" : ""}`}
        />
      ))}
      <div className="hero-video-overlay" />
    </div>
  );
}

function reportPlaybackError(error: unknown) {
  if (!(error instanceof DOMException && ["AbortError", "NotAllowedError"].includes(error.name))) {
    console.error("Unable to play the hero video:", error);
  }
}