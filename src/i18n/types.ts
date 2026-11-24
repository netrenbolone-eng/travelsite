export type Locale = "ru" | "en" | "vi";

export type RegionKey = "north" | "redRiver" | "northCentral" | "southCentral" | "southeast" | "mekong";

export type Dictionary = {
  announcements: string[];
  announcementControls: { pause: string; resume: string };
  header: { destinations: string; tours: string; experiences: string; how: string; reviews: string; faq: string; contacts: string; whatsapp: string; menu: string; close: string };
  hero: { eyebrow: string; title: string; description: string; whatsapp: string; tours: string; photoPlaceholder: string; photoAlt: string; scroll: string };
  trust: { rating: string; guests: string; guides: string; payments: string; demo: string };
  explorer: {
    eyebrow: string;
    title: string;
    description: string;
    interactive: string;
    mapLabel: string;
    chooseRegion: string;
    guide: string;
    places: string;
    regions: Record<RegionKey, { name: string; title: string; description: string; cities: string }>;
  };
  categories: { title: string; items: Record<string, string>; imagePlaceholder: string };
  tours: { title: string; subtitle: string; hit: string; fresh: string; from: string; book: string; ask: string; all: string; duration: string; reviews: string; dialogTitle: string; dialogDescription: string };
  workflow: { title: string; subtitle: string; steps: { title: string; description: string }[] };
  reviews: { title: string; subtitle: string; source: string; more: string; moreTripadvisor: string; demoNotice: string };
  faq: { title: string; subtitle: string; contact: string; items: Record<string, { question: string; answer: string }> };
  form: { title: string; description: string; name: string; contact: string; messenger: string; whatsapp: string; telegram: string; phone: string; tour: string; chooseTour: string; date: string; guests: string; comment: string; submit: string; sending: string; required: string; invalid: string; success: string; continueWhatsApp: string; spam: string; privacy: string; selectDate: string; paymentTitle: string; paymentLink: string; transfer: string; cash: string; paymentNote: string; depositOnline: string; helpChoose: string; dateNotSelected: string; sendError: string };
  contacts: { title: string; subtitle: string; address: string; hours: string; email: string; phone: string; mapTitle: string };
  footer: { tagline: string; social: string; payments: string; rights: string; privacy: string; policyTitle: string; policyBody: string[]; language: string; home: string };
  sticky: { whatsapp: string; telegram: string; call: string; contactLabel: string };
  common: { close: string; loading: string };
  metadata: { title: string; description: string };
};
