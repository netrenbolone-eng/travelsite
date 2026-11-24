export type LocalizedText = { ru: string; en: string; vi: string };

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
    image: "/images/vietnam-highlands.svg",
    badge: "hit",
    name: { ru: "Горный Далат за один день", en: "Dalat Highlands in a Day", vi: "Khám phá cao nguyên Đà Lạt trong một ngày" },
    duration: { ru: "8 часов", en: "8 hours", vi: "8 giờ" },
    rating: "4.9",
    reviewCount: 126,
    price: 48,
    description: { ru: "Водопады, кофейные плантации и тихие дороги в горах.", en: "Waterfalls, coffee farms and quiet mountain roads.", vi: "Thác nước, nông trại cà phê và những cung đường núi yên bình." },
  },
  {
    id: "nhatrang-islands",
    category: "excursions",
    image: "/images/vietnam-yacht.svg",
    badge: "hit",
    name: { ru: "Острова Нячанга на катере", en: "Nha Trang Island Escape", vi: "Khám phá các đảo Nha Trang bằng cano" },
    duration: { ru: "7 часов", en: "7 hours", vi: "7 giờ" },
    rating: "4.9",
    reviewCount: 98,
    price: 55,
    description: { ru: "Снорклинг, бухты и обед у моря в небольшой группе.", en: "Snorkelling, quiet bays and a seaside lunch in a small group.", vi: "Lặn ngắm san hô, khám phá vịnh nhỏ và ăn trưa bên biển theo nhóm nhỏ." },
  },
  {
    id: "danang-hoian",
    category: "excursions",
    image: "/images/vietnam-city.svg",
    badge: "new",
    name: { ru: "Дананг и вечерний Хойан", en: "Da Nang & Hoi An at Dusk", vi: "Đà Nẵng và Hội An về đêm" },
    duration: { ru: "9 часов", en: "9 hours", vi: "9 giờ" },
    rating: "4.8",
    reviewCount: 42,
    price: 62,
    description: { ru: "Мраморные горы, старый город и фонари после заката.", en: "Marble Mountains, the old town and lanterns after sunset.", vi: "Ngũ Hành Sơn, phố cổ và những chiếc đèn lồng sau hoàng hôn." },
  },
  {
    id: "ba-na-hills",
    category: "excursions",
    image: "/images/vietnam-bay.svg",
    badge: "hit",
    name: { ru: "Золотой мост и Ba Na Hills", en: "Golden Bridge & Ba Na Hills", vi: "Cầu Vàng và Bà Nà Hills" },
    duration: { ru: "8 часов", en: "8 hours", vi: "8 giờ" },
    rating: "4.8",
    reviewCount: 73,
    price: 76,
    description: { ru: "Канатная дорога, горные виды и поездка без спешки.", en: "Cable car, mountain views and an easy-paced day out.", vi: "Cáp treo, phong cảnh núi non và một ngày khám phá thư thả." },
  },
  {
    id: "private-transfer",
    category: "transfers",
    image: "/images/vietnam-beach.svg",
    badge: "new",
    name: { ru: "Трансфер аэропорт — отель", en: "Airport-to-Hotel Transfer", vi: "Đưa đón từ sân bay đến khách sạn" },
    duration: { ru: "По расписанию рейса", en: "Timed to your flight", vi: "Theo giờ chuyến bay" },
    rating: "5.0",
    reviewCount: 31,
    price: 24,
    description: { ru: "Встреча в аэропорту и частная поездка до отеля.", en: "Airport pickup and a private ride straight to your hotel.", vi: "Đón tại sân bay và đưa riêng về khách sạn." },
  },
  {
    id: "dalat-by-bike",
    category: "bike",
    image: "/images/vietnam-guide.svg",
    badge: "new",
    name: { ru: "Далат на байке с гидом", en: "Dalat by Bike with a Local", vi: "Khám phá Đà Lạt bằng xe máy cùng hướng dẫn viên" },
    duration: { ru: "5 часов", en: "5 hours", vi: "5 giờ" },
    rating: "4.9",
    reviewCount: 28,
    price: 39,
    description: { ru: "Утренний маршрут с остановками у лучших видов.", en: "A morning ride with stops at the best viewpoints.", vi: "Chuyến đi buổi sáng với các điểm dừng ngắm cảnh đẹp." },
  },
];
