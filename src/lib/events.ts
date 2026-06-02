import type { Event } from './types'

export const events: Event[] = [
  {
    id: 'sept-2026',
    title: 'Krása zralého věku',
    date: '2026-09-22',
    time: '15:30',
    endTime: '17:30',
    venue: 'Divadelní sál Chaberského dvora',
    venueAddress: 'Praha 8 – Dolní Chabry',
    description:
      'Hudebně komponovaný pořad určený dříve narozeným. Moderátor Petr Jančařík a pianista, zpěvák a moderátor Václav Tobrman. Moderuje Mgr. Hana Marie Kunešová, autorka pořadu.',
    guests: ['Petr Jančařík', 'Václav Tobrman'],
    status: 'upcoming',
    coverPhoto:
      'https://983301db8e.clvaw-cdnwnd.com/7a6561c6d3cad6850fecea38c4ad8aff/200003287-785d77957e/200000055.jpg',
  },
  {
    id: 'jun-2025',
    title: 'Míša Dolinová a Filip Sychra rozesmáli sál',
    date: '2025-06-01',
    venue: 'Divadelní sál Chaberského dvora',
    venueAddress: 'Praha 8 – Dolní Chabry',
    description:
      'Úžasní byli nejen hosté z umělecké sféry včetně vynikajícího hudebníka Václava Tobrmana, ale zvláště všichni hosté z řad dříve narozených. Jako vždy nechyběly hezké písničky, vtipné povídání, historky prožité s bardy naší divadelní scény, štědrá tombola a již tradiční lehké občerstvení.',
    guests: ['Míša Dolinová', 'Filip Sychra', 'Václav Tobrman'],
    status: 'past',
    coverPhoto:
      'https://983301db8e.clvaw-cdnwnd.com/7a6561c6d3cad6850fecea38c4ad8aff/200015739-8966b8966d/photo_2026-04-29_15-06-51.jpg',
  },
  {
    id: 'nov-2024',
    title: 'Karel Voříšek a Zuzana Stírská roztančili sál',
    date: '2024-11-01',
    venue: 'Divadelní sál Chaberského dvora',
    venueAddress: 'Praha 8 – Dolní Chabry',
    description:
      'Tohle komorní sál ještě nezažil! Po přípitku francouzským vínem beaujolaise se začalo rozmotávat klubko 2,5 hodinového programu. Bez nadsázky lze napsat, že kdo přišel, užil si. Kdo zaváhal, pochybil.',
    guests: ['Karel Voříšek', 'Zuzana Stírská'],
    status: 'past',
    coverPhoto:
      'https://983301db8e.cbaul-cdnwnd.com/7a6561c6d3cad6850fecea38c4ad8aff/200014087-a35f3a35f5/DSC_5931.jpg',
  },
  {
    id: 'sept-2023',
    title: 'Naďa Konvalinková a Hanka Křížková',
    date: '2023-09-01',
    venue: 'Divadelní sál Chaberského dvora',
    venueAddress: 'Praha 8 – Dolní Chabry',
    description:
      'Ti, co přišli, se dobře bavili. Každé naše setkání je vždy krásné, prostoupené láskou a naplněno radostí ze společného bytí.',
    guests: ['Naďa Konvalinková', 'Hanka Křížková'],
    status: 'past',
    coverPhoto:
      'https://983301db8e.cbaul-cdnwnd.com/7a6561c6d3cad6850fecea38c4ad8aff/200012955-8b2e18b2e4/DSC_7190 (1).jpg',
  },
  {
    id: 'dec-2022',
    title: 'Vánoční kavárna s Zdeňkou Volencovou',
    date: '2022-12-14',
    venue: 'Divadelní sál Chaberského dvora',
    venueAddress: 'Praha 8 – Dolní Chabry',
    description:
      'Adventní nálada, zpěv vánočních koled i písní a čtení autorské lyrické a milostné poezie autorky, herečky Zdeňky Žádníkové-Volencové.',
    guests: ['Zdeňka Žádníková-Volencová', 'Václav Tobrman'],
    status: 'past',
    coverPhoto:
      'https://983301db8e.cbaul-cdnwnd.com/7a6561c6d3cad6850fecea38c4ad8aff/200012406-b9b34b9b37/IMG-20221214-WA0007 (1).jpg',
  },
  {
    id: 'sept-2021',
    title: 'Monika Absolonová roztančila seniory',
    date: '2021-09-16',
    venue: 'Divadelní sál Chaberského dvora',
    venueAddress: 'Praha 8 – Dolní Chabry',
    description:
      'Legendární píseň z muzikálu Rebelové podtrhla atmosféru dalšího dílu. Sešli jsme se po roce a půl trvající odmlce způsobené koronou. Setkání bylo vskutku nádherné!',
    guests: ['Monika Absolonová', 'Erika Havlasová'],
    status: 'past',
    coverPhoto:
      'https://983301db8e.cbaul-cdnwnd.com/7a6561c6d3cad6850fecea38c4ad8aff/200009761-652d5652d8/Krasa zraleho veku Monika Absolonova 20210916_145755.jpg',
  },
]

export function getUpcomingEvents(): Event[] {
  return events.filter((e) => e.status === 'upcoming')
}

export function getPastEvents(): Event[] {
  return events.filter((e) => e.status === 'past').sort((a, b) => b.date.localeCompare(a.date))
}
