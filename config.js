// ===== ВСЁ, ЧТО МЕНЯЕТСЯ ПОД КЛИЕНТА, — ЗДЕСЬ =====
window.SITE_CONFIG = {
  company: "Blue Horizon Private Tours",
  hero: "assets/photos/hero.svg",     // фон первого экрана (на весь экран, лучше 1920x1080)
  logo: "assets/logo.svg",            // путь к логотипу; "" = первая буква названия
  country: { ru: "Вьетнам", en: "Vietnam", vi: "Việt Nam" },
  city: { ru: "Нячанг", en: "Nha Trang", vi: "Nha Trang" },
  phone: "+84900000000",
  whatsapp: "+84900000000",
  telegram: "your_telegram",           // username без @
  email: "hello@example.com",
  currency: "USD",
  languages: ["ru", "en", "vi"],
  defaultLang: "ru",
  formEndpoint: "",                    // Formspree/Make/Zapier URL. Пусто = заявка уходит в WhatsApp
  analytics: { ga4Id: "", metaPixelId: "" }, // G-XXXXXXXXXX и ID пикселя; пусто = не подключается
  categories: {
    vip: { ru: "VIP", en: "VIP", vi: "VIP" },
    yacht: { ru: "Яхты", en: "Yachts", vi: "Du thuyền" },
    private: { ru: "Частные", en: "Private", vi: "Riêng tư" },
    family: { ru: "Семейные", en: "Family", vi: "Gia đình" },
    exclusive: { ru: "Эксклюзив", en: "Exclusive", vi: "Độc quyền" }
  },
  // premium:true — показывается в блоке «дорогих» предложений. price — от, за группу (не за человека)
  tours: [
    { id: "yacht-day", cat: "yacht", premium: true, price: 1800, duration: "8h", icon: "⛵", photo: "assets/photos/yacht.svg",
      title: { ru: "Аренда яхты на день", en: "Private yacht charter", vi: "Thuê du thuyền riêng" },
      desc: { ru: "Яхта с экипажем, бухты островов, обед на борту, до 10 гостей.", en: "Crewed yacht, island bays, lunch on board, up to 10 guests." } },
    { id: "vip-islands", cat: "vip", premium: true, price: 1200, duration: "10h", icon: "🏝️", photo: "assets/photos/vip.svg",
      title: { ru: "VIP-тур по островам", en: "VIP island tour", vi: "Tour đảo VIP" },
      desc: { ru: "Скоростной катер, личный гид, трансфер с отеля, без очередей.", en: "Speedboat, personal guide, hotel transfer, no queues." } },
    { id: "sunset-exclusive", cat: "exclusive", premium: true, price: 950, duration: "4h", icon: "🌅", photo: "assets/photos/sunset.svg",
      title: { ru: "Закат на закрытом маршруте", en: "Sunset on a closed route", vi: "Hoàng hôn tuyến riêng" },
      desc: { ru: "Маршрут, который нет в каталогах: ужин, музыка, фотограф.", en: "A route that is in no catalogue: dinner, music, photographer." } },
    { id: "private-guide", cat: "private", price: 280, duration: "6h", icon: "🧭", photo: "assets/photos/guide.svg",
      title: { ru: "Частная экскурсия по городу", en: "Private city tour", vi: "Tour thành phố riêng" },
      desc: { ru: "Свой гид и авто на день. Маршрут строится под вас.", en: "Your own guide and car for the day, built around you." } },
    { id: "family-day", cat: "family", price: 420, duration: "7h", icon: "👨‍👩‍👧", photo: "assets/photos/family.svg",
      title: { ru: "Семейный день на море", en: "Family day at sea", vi: "Ngày biển cho gia đình" },
      desc: { ru: "Спокойный темп, детские жилеты, остановки для купания.", en: "Relaxed pace, kids’ life vests, swim stops." } },
    { id: "family-trek", cat: "family", price: 360, duration: "5h", icon: "🌴", photo: "assets/photos/trek.svg",
      title: { ru: "Семейная прогулка по водопадам", en: "Family waterfall trip", vi: "Thác nước cùng gia đình" },
      desc: { ru: "Лёгкий маршрут, грязевые ванны, обед в местной деревне.", en: "Easy route, mud baths, lunch in a local village." } }
  ],
  i18n: {
    ru: { announce: "Ответ за 15 минут · Яхты и частные туры под ключ", nav_vip: "Премиум", nav_tours: "Экскурсии", nav_how: "Как это работает", nav_book: "Заявка", hero_title: "Путешествие, которое организовано под вас", hero_sub: "Яхты, частные гиды и закрытые маршруты. Оставьте заявку в любое время — ответ придёт в течение 15 минут.", cta_book: "Оставить заявку", cta_wa: "Написать в WhatsApp", vip_title: "Премиум и частные программы", vip_sub: "Один день, одна группа, ваш маршрут.", tours_title: "Все экскурсии", all: "Все", from: "от", per: "за группу", pick: "Выбрать", how_title: "Заявка работает круглосуточно", s1: "Выберите программу", s1t: "Дата, число гостей, пожелания. Это занимает минуту.", s2: "Заявка уходит нам сразу", s2t: "Приходит в мессенджер и на почту, даже ночью.", s3: "Подтверждаем детали", s3t: "Цена, время и встреча. Оплата только после согласования.", form_title: "Оставьте заявку", f_tour: "Программа", f_date: "Дата", f_guests: "Гостей", f_name: "Имя", f_contact: "Телефон или @telegram", f_msg: "Пожелания", f_send: "Отправить заявку", thanks: "Заявка принята. Мы свяжемся с вами в ближайшее время.", err: "Заполните имя и контакт.", call: "Позвонить", ans: "Ответ за 15 минут" },
    en: { announce: "Reply within 15 minutes · Yachts and private tours, fully arranged", nav_vip: "Premium", nav_tours: "Tours", nav_how: "How it works", nav_book: "Request", hero_title: "A journey arranged around you", hero_sub: "Yachts, private guides and closed routes. Send a request at any hour; we reply within 15 minutes.", cta_book: "Send a request", cta_wa: "Message on WhatsApp", vip_title: "Premium and private programs", vip_sub: "One day, one group, your route.", tours_title: "All tours", all: "All", from: "from", per: "per group", pick: "Choose", how_title: "Your request works around the clock", s1: "Pick a program", s1t: "Date, guests, wishes. It takes a minute.", s2: "We get it instantly", s2t: "It lands in our messenger and inbox, even at night.", s3: "We confirm the details", s3t: "Price, time and meeting point. You pay only after agreeing.", form_title: "Send a request", f_tour: "Program", f_date: "Date", f_guests: "Guests", f_name: "Name", f_contact: "Phone or @telegram", f_msg: "Wishes", f_send: "Send request", thanks: "Request received. We will contact you shortly.", err: "Please enter your name and contact.", call: "Call", ans: "Reply in 15 minutes" },
    vi: { announce: "Phản hồi trong 15 phút · Du thuyền và tour riêng trọn gói", nav_vip: "Cao cấp", nav_tours: "Tour", nav_how: "Cách hoạt động", nav_book: "Đặt tour", hero_title: "Hành trình được thiết kế riêng cho bạn", hero_sub: "Du thuyền, hướng dẫn viên riêng và tuyến độc quyền. Gửi yêu cầu bất cứ lúc nào, chúng tôi phản hồi trong 15 phút.", cta_book: "Gửi yêu cầu", cta_wa: "Nhắn WhatsApp", vip_title: "Chương trình cao cấp và riêng tư", vip_sub: "Một ngày, một nhóm, lộ trình của bạn.", tours_title: "Tất cả tour", all: "Tất cả", from: "từ", per: "mỗi nhóm", pick: "Chọn", how_title: "Yêu cầu hoạt động 24/7", s1: "Chọn chương trình", s1t: "Ngày, số khách, mong muốn. Chỉ mất một phút.", s2: "Chúng tôi nhận ngay", s2t: "Yêu cầu đến tin nhắn và email, kể cả ban đêm.", s3: "Xác nhận chi tiết", s3t: "Giá, giờ và điểm hẹn. Chỉ thanh toán sau khi thống nhất.", form_title: "Gửi yêu cầu", f_tour: "Chương trình", f_date: "Ngày", f_guests: "Số khách", f_name: "Tên", f_contact: "Điện thoại hoặc @telegram", f_msg: "Mong muốn", f_send: "Gửi yêu cầu", thanks: "Đã nhận yêu cầu. Chúng tôi sẽ liên hệ sớm.", err: "Vui lòng nhập tên và liên hệ.", call: "Gọi", ans: "Phản hồi trong 15 phút" }
  }
};

// ===== Главная страница в стиле каталога: секции по порядку =====
// t: hero | row | tabs | cta | grid | tiles ; scene: sunset|bay|night|city|beach|falls ; photo/video — свои файлы (необязательно)
// Тексты {ru,en}: для языка без перевода показывается en.
window.SITE_CONFIG.home = {
  announce: { ru: ["Ответ на заявку за 15 минут", "Трансфер от отеля включён в VIP-программы", "Оплата только после согласования"], en: ["Reply to your request in 15 minutes", "Hotel transfer included in VIP programs", "Pay only after you agree the details"] },
  sections: [
    { t: "hero", theme: "light", scene: "sunset", photo: "assets/photos/hero-yacht.jpg", video: "",
      title: { ru: "Яхта. Ваш маршрут.", en: "Your yacht. Your route." },
      text: { ru: "Экипаж, острова и обед на борту. Один день, только ваша группа.", en: "Crew, islands and lunch on board. One day, only your group." },
      cta: [{ go: "book", label: { ru: "Оставить заявку", en: "Send a request" } }, { go: "cat:yacht", label: { ru: "Смотреть яхты", en: "See yachts" } }] },
    { t: "row", id: "vip", filter: "premium", title: { ru: "Премиум-программы", en: "Premium programs" } },
    { t: "hero", theme: "dark", scene: "night", photo: "assets/photos/hero-sunset.jpg",
      title: { ru: "Закат. Закрытый маршрут.", en: "Sunset. A closed route." },
      text: { ru: "Ужин, музыка, фотограф. Маршрут, которого нет в каталогах.", en: "Dinner, music, a photographer. A route that is in no catalogue." },
      cta: [{ go: "tour:sunset-exclusive", label: { ru: "Запросить цену", en: "Get a quote" } }, { go: "cat:exclusive", label: { ru: "Эксклюзив", en: "Exclusive" } }] },
    { t: "row", filter: "family", title: { ru: "Для семьи", en: "For families" } },
    { t: "tabs", title: { ru: "Сейчас выбирают", en: "Popular right now" }, tabs: [
      { label: { ru: "Частные", en: "Private" }, tiles: [
        { scene: "city", go: "cat:private", title: { ru: "Город с личным гидом", en: "City with a private guide" }, text: { ru: "Маршрут строим под вас.", en: "Built around you." } },
        { scene: "bay", go: "cat:vip", title: { ru: "Острова на катере", en: "Islands by speedboat" }, text: { ru: "Без очередей.", en: "No queues." } },
        { scene: "night", go: "cat:exclusive", title: { ru: "Вечер на воде", en: "An evening on the water" }, text: { ru: "Ужин и музыка.", en: "Dinner and music." } },
        { scene: "sunset", go: "cat:yacht", title: { ru: "Яхта на день", en: "Yacht for a day" }, text: { ru: "До 10 гостей.", en: "Up to 10 guests." } }] },
      { label: { ru: "Семейные", en: "Family" }, tiles: [
        { scene: "beach", go: "cat:family", title: { ru: "День на море", en: "A day at sea" }, text: { ru: "Спокойный темп.", en: "Relaxed pace." } },
        { scene: "falls", go: "tour:family-trek", title: { ru: "Водопады", en: "Waterfalls" }, text: { ru: "Лёгкий маршрут.", en: "Easy route." } },
        { scene: "bay", go: "cat:family", title: { ru: "Купание в бухтах", en: "Swimming in bays" }, text: { ru: "Детские жилеты.", en: "Kids’ life vests." } },
        { scene: "city", go: "cat:private", title: { ru: "Город без спешки", en: "The city, unhurried" }, text: { ru: "Свой гид и авто.", en: "Own guide and car." } }] }] },
    { t: "cta", title: { ru: "Первая поездка? Подберём маршрут", en: "First trip? We will plan the route" }, text: { ru: "Напишите пожелания. Пришлём два варианта с ценой за 15 минут.", en: "Tell us your wishes. We send two options with prices in 15 minutes." } },
    { t: "grid", id: "tours", title: { ru: "Все программы", en: "All programs" } },
    { t: "tiles", title: { ru: "Как вы путешествуете?", en: "How do you travel?" }, tiles: [
      { scene: "sunset", go: "cat:yacht", title: { ru: "Яхты", en: "Yachts" } }, { scene: "bay", go: "cat:vip", title: { ru: "VIP", en: "VIP" } },
      { scene: "city", go: "cat:private", title: { ru: "Частные", en: "Private" } }, { scene: "beach", go: "cat:family", title: { ru: "Семья", en: "Family" } }] },
    { t: "tabs", id: "how", title: { ru: "Ещё", en: "There’s more" }, tabs: [
      { label: { ru: "Как это работает", en: "How it works" }, tiles: [
        { scene: "bay", go: "book", title: { ru: "1. Выберите программу", en: "1. Pick a program" }, text: { ru: "Дата, гости, пожелания.", en: "Date, guests, wishes." } },
        { scene: "night", go: "book", title: { ru: "2. Заявка у нас сразу", en: "2. We get it instantly" }, text: { ru: "В мессенджер и на почту, даже ночью.", en: "In our messenger and inbox, even at night." } },
        { scene: "sunset", go: "book", title: { ru: "3. Подтверждаем детали", en: "3. We confirm details" }, text: { ru: "Оплата после согласования.", en: "You pay after agreeing." } }] },
      { label: { ru: "Доверие", en: "Trust" }, tiles: [
        { scene: "falls", go: "book", title: { ru: "Местные гиды", en: "Local guides" }, text: { ru: "Знают маршруты, которых нет в каталогах.", en: "They know routes that are in no catalogue." } },
        { scene: "beach", go: "book", title: { ru: "Безопасность", en: "Safety" }, text: { ru: "Жилеты, страховка, опытные капитаны.", en: "Life vests, insurance, experienced captains." } },
        { scene: "city", go: "book", title: { ru: "Прозрачная цена", en: "Clear pricing" }, text: { ru: "Цена за группу, без скрытых доплат.", en: "A group price, no hidden extras." } }] }] }
  ]
};
