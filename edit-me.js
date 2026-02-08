// ===========================
// DEPITERIA — Панель управления (редактируйте только этот файл)
// ===========================
//
// ✅ Что можно менять без “кодинга”:
// • промокод и текст акции
// • ссылки (онлайн-запись / WhatsApp / Telegram / карта)
// • список филиалов (добавить/удалить/поменять адрес и ссылку)
// • галерея (добавить/удалить фото)
//
// ⚠️ Важно:
// • Текст в кавычках "..." — это то, что Вы меняете.
// • После изменения сохраните файл — Netlify сам обновит сайт.
//

window.DEPITERIA_EDIT = {
  promo: {
    code: "NEW30",
    marqueeText: "−30% для новых клиентов по промокоду NEW30",
    badgeText: "NEW" // значок в блоке “Спец‑предложение”
  },

  links: {
    booking: "https://dikidi.net/g372810?p=0.sp",
    whatsapp: "https://wa.me/79778178101",
    telegram: "https://t.me/Depiteria",
    yandexAll: "https://yandex.com/maps/213/moscow/chain/depiteria/153959652754/"
  },

  // ====== Филиалы (добавляйте/удаляйте блоки по шаблону) ======
  branches: [
    {
      title: "м. Римская / м. Площадь Ильича",
      address: "ул. Новорогожская, 8",
      booking: "https://dikidi.ru/684025",
      map: "https://yandex.ru/maps/org/depiteria/88730798007/?ll=37.697697%2C55.751540&z=12.99"
    },
    {
      title: "м. Митино",
      address: "ул. Барышиха, 14к2",
      booking: "https://dikidi.ru/1308746",
      map: "https://yandex.ru/maps/org/depiteria/95141882777/?ll=37.371460%2C55.847092&z=14"
    },
    {
      title: "м. Сокольники",
      address: "ул. Барболина, 4",
      booking: "https://dikidi.ru/1686191",
      map: "https://yandex.ru/maps/org/depiteria/202460503332/"
    },
    {
      title: "м. Электрозаводская",
      address: "ул. Большая Почтовая, 71",
      booking: "https://dikidi.ru/1642774",
      map: "https://yandex.ru/maps/org/depiteria/166313827621/"
    },
    {
      title: "м. Волоколамская",
      address: "Новотушинский проезд, 6к1",
      booking: "https://dikidi.ru/1438428",
      map: "https://yandex.ru/maps/org/depiteria/106594817874/"
    }
  ],

  // ====== Галерея (фото/баннеры) ======
  // src — миниатюра, full — что открыть при клике (можно одинаково)
  gallery: [
    { src: "assets/mix_big.webp", full: "assets/mix_big.webp", alt: "Комплекс микс — big" },
    { src: "assets/wax_bikini.webp", full: "assets/wax_bikini.webp", alt: "Воск — глубокое бикини" },
    { src: "assets/mix_small.webp", full: "assets/mix_small.webp", alt: "Комплекс микс — small" },
    { src: "assets/wax_banner.webp", full: "assets/wax_banner.webp", alt: "Воск — баннер" },
    { src: "assets/mix_banner.webp", full: "assets/mix_banner.webp", alt: "Комплексы микс — баннер" },
    { src: "assets/mix_banner_laser1.webp", full: "assets/mix_banner_laser1.webp", alt: "Комплекс + лазер — 1" },
    { src: "assets/mix_banner_laser2.webp", full: "assets/mix_banner_laser2.webp", alt: "Комплекс + лазер — 2" },
    { src: "assets/laser_price.webp", full: "assets/laser_price.webp", alt: "Лазер — прайс" },
    { src: "assets/sugaring_banner.webp", full: "assets/sugaring_banner.webp", alt: "Шугаринг — баннер" }
  ]
};
