# Lotus Route

Mobile-first bilingual Vietnam tours landing page built with Next.js App Router, TypeScript, Tailwind CSS, Radix UI and React Hook Form.

## Run locally

```bash
npm install
cp .env.example .env.local
# Add TELEGRAM_BOT_TOKEN and TELEGRAM_CHAT_ID to .env.local
npm run dev
```

Open `http://localhost:3000/ru` or `http://localhost:3000/en`. The root path redirects to Russian.

## Build and lint

```bash
npm run lint
npm run build
npm start
```

## Client configuration

- `src/config/site.ts` — name, contact details, links, location, working hours, payment URL and map.
- `src/data/tours.ts` — tour cards, descriptions, demo prices and photo paths.
- `src/data/categories.ts` — category tiles and image paths.
- `src/data/reviews.ts` — sample reviews; replace with verified reviews before launch.
- `src/data/faq.ts` — FAQ item IDs.
- `src/i18n/ru.ts` and `src/i18n/en.ts` — interface and FAQ copy.
- `public/images/README.md` — requested photo files and recommended dimensions.

Replace every `DEMO: REPLACE` value, placeholder contact/link, sample review and policy text before launch. The Telegram endpoint needs `TELEGRAM_BOT_TOKEN` and `TELEGRAM_CHAT_ID`; keep both in `.env.local` or your hosting provider's secret manager. Never commit secrets.

Photo slots render an accessible CSS placeholder until the corresponding local file is added under `public/images`. Once a file exists, it is rendered through `next/image`. The hero is the only priority image.

## Routes

- `/ru` — Russian landing page.
- `/en` — English landing page.
- `/ru/privacy-policy` and `/en/privacy-policy` — sample privacy notice. Replace it with approved legal text before launch.
- `/api/lead` — validated lead endpoint; sends messages to Telegram when server environment variables are configured.