# Krása zralého věku — Next.js web

Moderní web pro pořad **Krása zralého věku** (agentura KUKR).

## Start lokálně

```bash
npm install
npm run dev
# → http://localhost:3000
```

## Build & deploy

```bash
npm run build   # produkční build
npm start       # spuštění produkčního serveru
```

## Deployment na Vercel

1. Nahrajte projekt na GitHub
2. Jděte na [vercel.com](https://vercel.com) → Import Project → vyberte repo
3. Framework: **Next.js** (auto-detekce)
4. Deploy → hotovo ✓

## Struktura projektu

```
src/
  app/
    page.tsx            ← Úvodní stránka
    program/page.tsx    ← Program 2026
    galerie/            ← Fotogalerie (+ klientská logika)
    uskutecnene/        ← Uskutečněné akce
    o-nas/page.tsx      ← O nás
    kontakty/page.tsx   ← Kontakty + formulář
    layout.tsx          ← Root layout (Navbar + Footer)
    globals.css         ← Tailwind + globální styly
  components/
    Navbar.tsx          ← Responzivní navigace
    Footer.tsx          ← Footer
    EventCard.tsx       ← Karta akce (default + featured varianta)
    PhotoGrid.tsx       ← Masonry galerie + lightbox
  lib/
    events.ts           ← Data o akcích (přidejte nové akce zde)
    photos.json         ← 606 fotografií z XLS exportu
    types.ts            ← TypeScript typy
```

## Přidání nové akce

Otevřete `src/lib/events.ts` a přidejte nový objekt do pole `events`:

```ts
{
  id: 'uniquni-id',
  title: 'Název akce',
  date: '2026-09-22',          // YYYY-MM-DD
  time: '15:30',
  endTime: '17:30',
  venue: 'Divadelní sál Chaberského dvora',
  venueAddress: 'Praha 8 – Dolní Chabry',
  description: 'Popis akce...',
  guests: ['Jméno Hosta'],
  status: 'upcoming',          // nebo 'past'
  coverPhoto: 'https://...',   // URL fotky
}
```

## Technologie

- **Next.js 14** (App Router)
- **TypeScript**
- **Tailwind CSS**
- **Lucide React** (ikony)
