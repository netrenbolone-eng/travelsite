// ===== ВСЁ, ЧТО МЕНЯЕТСЯ ПОД КЛИЕНТА, — ЗДЕСЬ =====
window.SITE_CONFIG = {
  company: "Blue Horizon Private Tours",
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
    { id: "yacht-day", cat: "yacht", premium: true, price: 1800, duration: "8h", icon: "⛵", photo: "assets/photos/yacht.jpg",
      title: { ru: "Аренда яхты на день", en: "Private yacht charter", vi: "Thuê du thuyền riêng" },
      desc: { ru: "Яхта с экипажем, бухты островов, обед на борту, до 10 гостей.", en: "Crewed yacht, island bays, lunch on board, up to 10 guests." } },
    { id: "vip-islands", cat: "vip", premium: true, price: 1200, duration: "10h", icon: "🏝️", photo: "assets/photos/vip.jpg",
      title: { ru: "VIP-тур по островам", en: "VIP island tour", vi: "Tour đảo VIP" },
      desc: { ru: "Скоростной катер, личный гид, трансфер с отеля, без очередей.", en: "Speedboat, personal guide, hotel transfer, no queues." } },
    { id: "sunset-exclusive", cat: "exclusive", premium: true, price: 950, duration: "4h", icon: "🌅", photo: "assets/photos/sunset.jpg",
      title: { ru: "Закат на закрытом маршруте", en: "Sunset on a closed route", vi: "Hoàng hôn tuyến riêng" },
      desc: { ru: "Маршрут, который нет в каталогах: ужин, музыка, фотограф.", en: "A route that is in no catalogue: dinner, music, photographer." } },
    { id: "private-guide", cat: "private", price: 280, duration: "6h", icon: "🧭", photo: "assets/photos/guide.jpg",
      title: { ru: "Частная экскурсия по городу", en: "Private city tour", vi: "Tour thành phố riêng" },
      desc: { ru: "Свой гид и авто на день. Маршрут строится под вас.", en: "Your own guide and car for the day, built around you." } },
    { id: "family-day", cat: "family", price: 420, duration: "7h", icon: "👨‍👩‍👧", photo: "assets/photos/family.jpg",
      title: { ru: "Семейный день на море", en: "Family day at sea", vi: "Ngày biển cho gia đình" },
      desc: { ru: "Спокойный темп, детские жилеты, остановки для купания.", en: "Relaxed pace, kids’ life vests, swim stops." } },
    { id: "family-trek", cat: "family", price: 360, duration: "5h", icon: "🌴", photo: "assets/photos/trek.jpg",
      title: { ru: "Семейная прогулка по водопадам", en: "Family waterfall trip", vi: "Thác nước cùng gia đình" },
      desc: { ru: "Лёгкий маршрут, грязевые ванны, обед в местной деревне.", en: "Easy route, mud baths, lunch in a local village." } }
  ],
  i18n: {
    ru: { nav_vip: "Премиум", nav_tours: "Экскурсии", nav_how: "Как это работает", nav_book: "Заявка", hero_title: "Путешествие, которое организовано под вас", hero_sub: "Яхты, частные гиды и закрытые маршруты. Оставьте заявку в любое время — ответ придёт в течение 15 минут.", cta_book: "Оставить заявку", cta_wa: "Написать в WhatsApp", vip_title: "Премиум и частные программы", vip_sub: "Один день, одна группа, ваш маршрут.", tours_title: "Все экскурсии", all: "Все", from: "от", per: "за группу", pick: "Выбрать", how_title: "Заявка работает круглосуточно", s1: "Выберите программу", s1t: "Дата, число гостей, пожелания. Это занимает минуту.", s2: "Заявка уходит нам сразу", s2t: "Приходит в мессенджер и на почту, даже ночью.", s3: "Подтверждаем детали", s3t: "Цена, время и встреча. Оплата только после согласования.", form_title: "Оставьте заявку", f_tour: "Программа", f_date: "Дата", f_guests: "Гостей", f_name: "Имя", f_contact: "Телефон или @telegram", f_msg: "Пожелания", f_send: "Отправить заявку", thanks: "Заявка принята. Мы свяжемся с вами в ближайшее время.", err: "Заполните имя и контакт.", call: "Позвонить", ans: "Ответ за 15 минут" },
    en: { nav_vip: "Premium", nav_tours: "Tours", nav_how: "How it works", nav_book: "Request", hero_title: "A journey arranged around you", hero_sub: "Yachts, private guides and closed routes. Send a request at any hour; we reply within 15 minutes.", cta_book: "Send a request", cta_wa: "Message on WhatsApp", vip_title: "Premium and private programs", vip_sub: "One day, one group, your route.", tours_title: "All tours", all: "All", from: "from", per: "per group", pick: "Choose", how_title: "Your request works around the clock", s1: "Pick a program", s1t: "Date, guests, wishes. It takes a minute.", s2: "We get it instantly", s2t: "It lands in our messenger and inbox, even at night.", s3: "We confirm the details", s3t: "Price, time and meeting point. You pay only after agreeing.", form_title: "Send a request", f_tour: "Program", f_date: "Date", f_guests: "Guests", f_name: "Name", f_contact: "Phone or @telegram", f_msg: "Wishes", f_send: "Send request", thanks: "Request received. We will contact you shortly.", err: "Please enter your name and contact.", call: "Call", ans: "Reply in 15 minutes" },
    vi: { nav_vip: "Cao cấp", nav_tours: "Tour", nav_how: "Cách hoạt động", nav_book: "Đặt tour", hero_title: "Hành trình được thiết kế riêng cho bạn", hero_sub: "Du thuyền, hướng dẫn viên riêng và tuyến độc quyền. Gửi yêu cầu bất cứ lúc nào, chúng tôi phản hồi trong 15 phút.", cta_book: "Gửi yêu cầu", cta_wa: "Nhắn WhatsApp", vip_title: "Chương trình cao cấp và riêng tư", vip_sub: "Một ngày, một nhóm, lộ trình của bạn.", tours_title: "Tất cả tour", all: "Tất cả", from: "từ", per: "mỗi nhóm", pick: "Chọn", how_title: "Yêu cầu hoạt động 24/7", s1: "Chọn chương trình", s1t: "Ngày, số khách, mong muốn. Chỉ mất một phút.", s2: "Chúng tôi nhận ngay", s2t: "Yêu cầu đến tin nhắn và email, kể cả ban đêm.", s3: "Xác nhận chi tiết", s3t: "Giá, giờ và điểm hẹn. Chỉ thanh toán sau khi thống nhất.", form_title: "Gửi yêu cầu", f_tour: "Chương trình", f_date: "Ngày", f_guests: "Số khách", f_name: "Tên", f_contact: "Điện thoại hoặc @telegram", f_msg: "Mong muốn", f_send: "Gửi yêu cầu", thanks: "Đã nhận yêu cầu. Chúng tôi sẽ liên hệ sớm.", err: "Vui lòng nhập tên và liên hệ.", call: "Gọi", ans: "Phản hồi trong 15 phút" }
  }
};
