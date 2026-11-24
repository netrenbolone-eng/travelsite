"use client";

import Image from "next/image";
import { ArrowUpRight, Compass, MapPin } from "lucide-react";
import { useState } from "react";
import type { Dictionary } from "@/i18n/types";
import type { RegionKey } from "@/i18n/types";

const regionKeys: RegionKey[] = ["north", "redRiver", "northCentral", "southCentral", "southeast", "mekong"];

type RegionPhoto = { src: string; fallback: string };

const regionScenes: Record<RegionKey, [RegionPhoto, RegionPhoto, RegionPhoto, RegionPhoto]> = {
  north: [
    { src: "https://images.unsplash.com/photo-1732098407342-6b6a05e3da3d?auto=format&fit=crop&w=1000&q=82", fallback: "/images/vietnam-highlands.svg" },
    { src: "/images/vietnam-falls.svg", fallback: "/images/vietnam-highlands.svg" },
    { src: "https://images.unsplash.com/photo-1528127269322-539801943592?auto=format&fit=crop&w=1000&q=82", fallback: "/images/vietnam-bay.svg" },
    { src: "/images/vietnam-guide.svg", fallback: "/images/vietnam-city.svg" },
  ],
  redRiver: [
    { src: "https://images.unsplash.com/photo-1528127269322-539801943592?auto=format&fit=crop&w=1000&q=82", fallback: "/images/vietnam-bay.svg" },
    { src: "/images/vietnam-city.svg", fallback: "/images/vietnam-bay.svg" },
    { src: "https://images.unsplash.com/photo-1732098407342-6b6a05e3da3d?auto=format&fit=crop&w=1000&q=82", fallback: "/images/vietnam-highlands.svg" },
    { src: "/images/vietnam-night.svg", fallback: "/images/vietnam-city.svg" },
  ],
  northCentral: [
    { src: "https://images.unsplash.com/photo-1533002832-1721d16b4bb9?auto=format&fit=crop&w=1000&q=82", fallback: "/images/vietnam-beach.svg" },
    { src: "/images/vietnam-falls.svg", fallback: "/images/vietnam-highlands.svg" },
    { src: "/images/vietnam-city.svg", fallback: "/images/vietnam-bay.svg" },
    { src: "https://images.unsplash.com/photo-1504699439244-a7e34870c35d?auto=format&fit=crop&w=1000&q=82", fallback: "/images/vietnam-night.svg" },
  ],
  southCentral: [
    { src: "https://images.unsplash.com/photo-1533002832-1721d16b4bb9?auto=format&fit=crop&w=1000&q=82", fallback: "/images/vietnam-beach.svg" },
    { src: "https://images.unsplash.com/photo-1504699439244-a7e34870c35d?auto=format&fit=crop&w=1000&q=82", fallback: "/images/vietnam-highlands.svg" },
    { src: "https://images.unsplash.com/photo-1528127269322-539801943592?auto=format&fit=crop&w=1000&q=82", fallback: "/images/vietnam-bay.svg" },
    { src: "https://images.unsplash.com/photo-1732098407342-6b6a05e3da3d?auto=format&fit=crop&w=1000&q=82", fallback: "/images/vietnam-city.svg" },
  ],
  southeast: [
    { src: "/images/vietnam-city.svg", fallback: "/images/vietnam-night.svg" },
    { src: "https://images.unsplash.com/photo-1533002832-1721d16b4bb9?auto=format&fit=crop&w=1000&q=82", fallback: "/images/vietnam-beach.svg" },
    { src: "/images/vietnam-night.svg", fallback: "/images/vietnam-city.svg" },
    { src: "https://images.unsplash.com/photo-1504699439244-a7e34870c35d?auto=format&fit=crop&w=1000&q=82", fallback: "/images/vietnam-sunset.svg" },
  ],
  mekong: [
    { src: "/images/vietnam-bay.svg", fallback: "/images/vietnam-beach.svg" },
    { src: "/images/vietnam-beach.svg", fallback: "/images/vietnam-bay.svg" },
    { src: "/images/vietnam-highlands.svg", fallback: "/images/vietnam-sunset.svg" },
    { src: "/images/vietnam-sunset.svg", fallback: "/images/vietnam-bay.svg" },
  ],
};

const markerPositions: Record<RegionKey, { top: string; left: string }> = {
  north: { top: "16%", left: "54%" },
  redRiver: { top: "29%", left: "59%" },
  northCentral: { top: "45%", left: "51%" },
  southCentral: { top: "64%", left: "58%" },
  southeast: { top: "79%", left: "47%" },
  mekong: { top: "91%", left: "43%" },
};

export function RegionExplorer({ dictionary }: { dictionary: Dictionary }) {
  const [activeRegion, setActiveRegion] = useState<RegionKey>("southCentral");
  const active = dictionary.explorer.regions[activeRegion];
  const photos = regionScenes[activeRegion];

  return (
    <section className="section-pad explorer-section" id="explore">
      <div className="container">
        <div className="explorer-heading">
          <div>
            <span className="section-kicker"><Compass aria-hidden="true" />{dictionary.explorer.eyebrow}</span>
            <h2 className="display-heading">{dictionary.explorer.title}</h2>
          </div>
          <p>{dictionary.explorer.description}</p>
        </div>
        <div className="explorer-layout">
          <div className="explorer-map-card">
            <div className="explorer-card-label"><Compass aria-hidden="true" />{dictionary.explorer.interactive}</div>
            <div className="vietnam-map-stage">
              <svg className="vietnam-map-svg" viewBox="0 0 320 560" role="img" aria-label="Stylised map of Vietnam with selectable regions">
                <defs>
                  <linearGradient id="mapBase" x1="0" y1="0" x2="1" y2="1">
                    <stop offset="0" stopColor="#e3e9e2" />
                    <stop offset="1" stopColor="#c8d8ce" />
                  </linearGradient>
                  <linearGradient id="mapHighlight" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0" stopColor="#c76a4f" />
                    <stop offset="1" stopColor="#8f342d" />
                  </linearGradient>
                  <filter id="mapShadow" x="-30%" y="-20%" width="160%" height="150%">
                    <feDropShadow dx="0" dy="8" stdDeviation="8" floodColor="#17372f" floodOpacity="0.12" />
                  </filter>
                </defs>
                <path className="map-country" filter="url(#mapShadow)" d="M132 27 150 38 166 31 184 45 179 63 195 78 183 99 199 117 187 138 207 157 192 179 199 199 184 221 201 243 187 265 201 286 187 307 202 329 188 349 207 373 190 396 199 416 182 438 189 459 169 480 157 465 152 442 137 424 147 399 130 378 141 353 123 333 137 308 122 286 137 261 121 238 136 215 119 194 135 172 118 150 135 129 120 108 136 88 124 69 140 53Z" />
                <path className={`map-region-shape ${activeRegion === "north" ? "is-active" : ""}`} d="m132 27 18 11 16-7 18 14-5 18 16 15-12 21 16 18-12 21-22-4-20-14-25 6-22-17 17-22-12-19 16-19Z" />
                <path className={`map-region-shape ${activeRegion === "redRiver" ? "is-active" : ""}`} d="m169 129 26-12 12 40-15 22 7 20-15 22-30-22-12-27 18-18Z" />
                <path className={`map-region-shape ${activeRegion === "northCentral" ? "is-active" : ""}`} d="m184 221 17 22-14 22 14 21-14 21 15 22-14 20-19-13-13-36 8-33-18-22 14-21Z" />
                <path className={`map-region-shape ${activeRegion === "southCentral" ? "is-active" : ""}`} d="m174 327 28 2-14 20 19 24-17 23 9 20-17 22-22-16 9-23-19-21 11-27Z" />
                <path className={`map-region-shape ${activeRegion === "southeast" ? "is-active" : ""}`} d="m160 422 22 16 7 21-20 21-12-15-5-23Z" />
                <path className={`map-region-shape ${activeRegion === "mekong" ? "is-active" : ""}`} d="m157 465 12 15-16 25-17-9-9-17 16-14Z" />
                <path className="map-border" d="M126 90 161 107 187 99M123 151l41 8 31-16M130 215l33 7 24-1M125 286l42 8 34-8M123 333l39 10 26-16M130 378l37 6 32-8M137 424l27-4 25 18" />
                <path className="map-island" d="M238 344c9-6 13-5 19-1m-4 18c7-4 12-4 17-1m-27 23c7-4 12-4 17 0" />
                <circle className="map-island-dot" cx="249" cy="382" r="3" />
                <circle className="map-island-dot" cx="266" cy="369" r="2.5" />
              </svg>
              {regionKeys.map((key) => (
                <button
                  key={key}
                  type="button"
                  className={`map-pin ${activeRegion === key ? "is-active" : ""}`}
                  style={{ top: markerPositions[key].top, left: markerPositions[key].left }}
                  onClick={() => setActiveRegion(key)}
                  aria-label={dictionary.explorer.regions[key].name}
                  aria-pressed={activeRegion === key}
                ><span /></button>
              ))}
              <div className="map-caption">{dictionary.explorer.mapLabel}</div>
            </div>
            <div className="region-selector-label">{dictionary.explorer.chooseRegion}</div>
            <div className="region-pills">
              {regionKeys.map((key) => (
                <button key={key} type="button" onClick={() => setActiveRegion(key)} className={activeRegion === key ? "is-active" : ""} aria-pressed={activeRegion === key}>
                  {dictionary.explorer.regions[key].name}
                </button>
              ))}
            </div>
          </div>
          <article className="explorer-feature-card" aria-live="polite">
            <div className="explorer-photo-grid">
              {photos.map((photo, index) => (
                <div className={`explorer-photo explorer-photo-${index + 1}`} key={`${activeRegion}-${photo.src}`}>
                  <Image
                    src={photo.src}
                    alt={`${active.title} — view ${index + 1}`}
                    width={800}
                    height={520}
                    unoptimized
                    onError={(event) => { event.currentTarget.src = photo.fallback; }}
                  />
                </div>
              ))}
            </div>
            <div className="explorer-feature-content">
              <span className="feature-region-tag"><MapPin aria-hidden="true" />{active.name}</span>
              <h3>{active.title}</h3>
              <p>{active.description}</p>
              <div className="explorer-cities"><span>{dictionary.explorer.places}</span><strong>{active.cities}</strong></div>
              <a href="#tours" className="explorer-guide-link">{dictionary.explorer.guide}<ArrowUpRight aria-hidden="true" /></a>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
