export type Category = {
  id: "excursions" | "transfers" | "bike" | "custom";
  image: string;
  alt: { ru: string; en: string };
  count: string;
};

export const categories: Category[] = [
  { id: "excursions", image: "/images/category-excursions.jpg", alt: { ru: "Горный пейзаж Далата", en: "Dalat highland scenery" }, count: "04" },
  { id: "transfers", image: "/images/category-transfers.jpg", alt: { ru: "Частный автомобиль у побережья", en: "Private car by the coast" }, count: "01" },
  { id: "bike", image: "/images/category-bike.jpg", alt: { ru: "Поездка на байке по горной дороге", en: "Motorbike ride along a mountain road" }, count: "01" },
  { id: "custom", image: "/images/category-custom.jpg", alt: { ru: "Тропа к водопаду во Вьетнаме", en: "Vietnam waterfall trail" }, count: "∞" },
];