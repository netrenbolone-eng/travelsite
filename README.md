# Digital booking system for tours — demo template

Статический сайт (HTML/CSS/JS), без сборки. Работает на GitHub Pages, Netlify, Cloudflare Pages.

## Что менять под клиента — только `config.js`
Название, логотип, страна/город, телефон, WhatsApp, Telegram, email, валюта, языки, категории,
экскурсии (название, описание, цена, длительность, фото), `premium: true` для дорогих программ.
Фото — в `assets/photos/`, путь в `tours[].photo`. Новый язык: добавьте код в `languages` и блок в `i18n`.

## Заявки
`formEndpoint` пустой — заявка открывает WhatsApp с готовым текстом.
Для заявок на почту/в CRM вставьте URL Formspree, Make или Zapier.

## Аналитика (`config.js` → analytics)
`ga4Id: "G-XXXXXXXXXX"`, `metaPixelId: "123456789"`. Пустые поля — скрипты не грузятся.
События: `whatsapp_click`, `telegram_click`, `phone_click` (с полем `location`: hero/float/footer),
`select_item`, `form_start`, `generate_lead` (value = цена программы). В GA4 отметьте `generate_lead` как ключевое событие.
Если работаете с аудиторией из ЕС, добавьте баннер согласия на cookies.

## Публикация на GitHub Pages
1. Распакуйте архив и загрузите содержимое папки в репозиторий (корень, рядом с `index.html`).
2. Settings → Pages → Branch: `main` / root → Save.
