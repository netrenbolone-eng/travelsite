export const site = {
  name: "Lotus Route",
  origin: "https://lotusroute.example", // DEMO: REPLACE with production origin
  phone: "+10000000000", // DEMO: REPLACE with international phone
  whatsapp: "10000000000", // DEMO: REPLACE with digits only, no plus
  telegram: "https://t.me/lotusroute_demo", // DEMO: REPLACE
  email: "hello@lotusroute.example", // DEMO: REPLACE
  address: "123 Example Street, Da Lat, Vietnam", // DEMO: REPLACE
  hours: { ru: "Ежедневно, 08:00–20:00 ICT", en: "Daily, 08:00–20:00 ICT" }, // DEMO: REPLACE
  mapEmbed: "https://www.google.com/maps?q=Da+Lat,+Vietnam&output=embed", // DEMO: REPLACE with business location
  depositUrl: "https://payments.example/lotus-route-deposit", // DEMO: REPLACE with secure payment link
  googleReviewsUrl: "https://maps.google.com/?q=Lotus+Route+Vietnam+reviews", // DEMO: REPLACE
  tripadvisorUrl: "https://www.tripadvisor.com/Search?q=Lotus+Route+Vietnam", // DEMO: REPLACE
  social: {
    instagram: "https://instagram.com/lotusroute_demo", // DEMO: REPLACE
    facebook: "https://facebook.com/lotusroute_demo", // DEMO: REPLACE
  },
  paymentMethods: ["Visa", "Mastercard"],
  demoRating: "4.9", // DEMO: REPLACE with verified rating or remove
  demoGuestCount: "1,200+", // DEMO: REPLACE with verified count or remove
  primaryCity: "Da Lat, Vietnam",
  coordinates: { latitude: 11.9404, longitude: 108.4583 }, // DEMO: REPLACE
} as const;