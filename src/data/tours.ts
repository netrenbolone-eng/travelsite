export type LocalizedText = { ru: string; en: string };

export type Tour = {
  id: string;
  category: "excursions" | "transfers" | "bike" | "custom";
  image: string;
  badge: "hit" | "new";
  name: LocalizedText;
  duration: LocalizedText;
  rating: string;
  reviewCount: number;
  price: number;
  description: LocalizedText;
};

export const tours: Tour[] = [
  {
    id: "dalat-highlands",
    category: "excursions",
    image: "/images/tour-dalat.jpg", // DEMO: REPLACE with your photo
    badge: "hit",
    name: { ru: "Горный Далат за один день", en: "Dalat Highlands in a Day" },
    duration: { ru: "8 часов", en: "8 hours" },
    rating: "4.9",
    reviewCount: 126,
    price: 48,
    description: { ru: "Водопады, кофейные плантации и тихие дороги в горах.", en: "Waterfalls, coffee farms and quiet mountain roads." },
  },
  {
    id: "nhatrang-islands",
    category: "excursions",
    image: "/images/tour-nhatrang.jpg", // DEMO: REPLACE with your photo
    badge: "hit",
    name: { ru: "Острова Нячанга на катере", en: "Nha Trang Island Escape" },
    duration: { ru: "7 часов", en: "7 hours" },
    rating: "4.9",
    reviewCount: 98,
    price: 55,
    description: { ru: "Снорклинг, бухты и обед у моря в небольшой группе.", en: "Snorkelling, quiet bays and a seaside lunch in a small group." },
  },
  {
    id: "danang-hoian",
    category: "excursions",
    image: "/images/tour-danang-hoian.jpg", // DEMO: REPLACE with your photo
    badge: "new",
    name: { ru: "Дананг и вечерний Хойан", en: "Da Nang & Hoi An at Dusk" },
    duration: { ru: "9 часов", en: "9 hours" },
    rating: "4.8",
    reviewCount: 42,
    price: 62,
    description: { ru: "Мраморные горы, старый город и фонари после заката.", en: "Marble Mountains, the old town and lanterns after sunset." },
  },
  {
    id: "ba-na-hills",
    category: "excursions",
    image: "/images/tour-ba-na-hills.jpg", // DEMO: REPLACE with your photo
    badge: "hit",
    name: { ru: "Золотой мост и Ba Na Hills", en: "Golden Bridge & Ba Na Hills" },
    duration: { ru: "8 часов", en: "8 hours" },
    rating: "4.8",
    reviewCount: 73,
    price: 76,
    description: { ru: "Канатная дорога, горные виды и поездка без спешки.", en: "Cable car, mountain views and an easy-paced day out." },
  },
  {
    id: "private-transfer",
    category: "transfers",
    image: "/images/tour-transfer.jpg", // DEMO: REPLACE with your photo
    badge: "new",
    name: { ru: "Трансфер аэропорт — отель", en: "Airport-to-Hotel Transfer" },
    duration: { ru: "По расписанию рейса", en: "Timed to your flight" },
    rating: "5.0",
    reviewCount: 31,
    price: 24,
    description: { ru: "Встреча в аэропорту и частная поездка до отеля.", en: "Airport pickup and a private ride straight to your hotel." },
  },
  {
    id: "dalat-by-bike",
    category: "bike",
    image: "/images/tour-bike.jpg", // DEMO: REPLACE with your photo
    badge: "new",
    name: { ru: "Далат на байке с гидом", en: "Dalat by Bike with a Local" },
    duration: { ru: "5 часов", en: "5 hours" },
    rating: "4.9",
    reviewCount: 28,
    price: 39,
    description: { ru: "Утренний маршрут с остановками у лучших видов.", en: "A morning ride with stops at the best viewpoints." },
  },
];