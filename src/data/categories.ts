export type Category = {
  id: "excursions" | "transfers" | "bike" | "custom";
  image: string;
  alt: { ru: string; en: string; vi: string };
  count: string;
};

export const categories: Category[] = [
  { id: "excursions", image: "/images/vietnam-falls.svg", alt: { ru: "Водопад среди зелёных гор Далата", en: "A waterfall among the green hills of Dalat", vi: "Thác nước giữa núi xanh Đà Lạt" }, count: "04" },
  { id: "transfers", image: "/images/vietnam-beach.svg", alt: { ru: "Побережье Вьетнама", en: "Vietnam coastline", vi: "Bờ biển Việt Nam" }, count: "01" },
  { id: "bike", image: "/images/vietnam-highlands.svg", alt: { ru: "Горные дороги и нагорье Вьетнама", en: "Mountain roads and Vietnam highlands", vi: "Đường núi và cao nguyên Việt Nam" }, count: "01" },
  { id: "custom", image: "/images/vietnam-bay.svg", alt: { ru: "Залив с зелёными горами", en: "A bay framed by green mountains", vi: "Vịnh biển bên những dãy núi xanh" }, count: "∞" },
];
