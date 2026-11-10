import type { LocalizedText } from "@/data/tours";

export type Review = {
  id: string;
  name: string;
  origin: LocalizedText;
  tour: LocalizedText;
  date: LocalizedText;
  text: LocalizedText;
  rating: number;
};

export const reviews: Review[] = [
  { id: "review-1", name: "Анна К.", origin: { ru: "Москва", en: "Moscow" }, tour: { ru: "Далат за один день", en: "Dalat in a Day" }, date: { ru: "Март 2026", en: "March 2026" }, text: { ru: "Маршрут собрали под нас, без гонки по точкам. Гид здорово говорил по-русски, а по дороге мы заехали в кофейню с потрясающим видом.", en: "The route was tailored to us, with no rushing from stop to stop. Our guide spoke great Russian, and we found a coffee spot with an incredible view." }, rating: 5 },
  { id: "review-2", name: "Илья и Марина", origin: { ru: "Санкт-Петербург", en: "Saint Petersburg" }, tour: { ru: "Острова Нячанга", en: "Nha Trang Islands" }, date: { ru: "Февраль 2026", en: "February 2026" }, text: { ru: "Ответили в тот же вечер, на следующий день уже были на катере. Всё объяснили заранее: где купаться, что взять и как оплачивать.", en: "They replied that evening and we were on the boat the next day. Everything was clear in advance: where to swim, what to bring and how to pay." }, rating: 5 },
  { id: "review-3", name: "Ольга С.", origin: { ru: "Казань", en: "Kazan" }, tour: { ru: "Дананг и Хойан", en: "Da Nang & Hoi An" }, date: { ru: "Январь 2026", en: "January 2026" }, text: { ru: "Очень удобно, что можно было сразу обсудить детали в Telegram. В Хойане задержались до фонарей, и нас спокойно дождались.", en: "It was easy to sort out the details on Telegram. We stayed in Hoi An until the lanterns came on, and our driver waited without rushing us." }, rating: 5 },
  { id: "review-4", name: "Денис Р.", origin: { ru: "Новосибирск", en: "Novosibirsk" }, tour: { ru: "Трансфер в отель", en: "Hotel Transfer" }, date: { ru: "Декабрь 2025", en: "December 2025" }, text: { ru: "Водитель был на месте, помог с багажом. Для первого дня во Вьетнаме такой простой старт очень выручил.", en: "The driver was there and helped with our luggage. That smooth start made our first day in Vietnam much easier." }, rating: 5 },
  { id: "review-5", name: "Татьяна и дети", origin: { ru: "Екатеринбург", en: "Yekaterinburg" }, tour: { ru: "Индивидуальный маршрут", en: "Custom Route" }, date: { ru: "Ноябрь 2025", en: "November 2025" }, text: { ru: "Подстроили день под детей и не торопили. Заранее обсудили остановки и варианты, если пойдёт дождь.", en: "They paced the day for our kids and never rushed us. We agreed on stops in advance, including a rainy-day option." }, rating: 5 },
];