import type { Metadata } from 'next'
import { ExternalLink, Newspaper } from 'lucide-react'

export const metadata: Metadata = { title: 'Napsali o nas' }

const pressItems = [
  {
    title: 'Listopadová Krása zralého věku Karel Voříšek a Zuzana Stírská roztančili sál',
    date: '11/2024',
    source: 'Chaberský zpravodaj a zpravodaj KZV 01-2025',
    url: null,
  },
  {
    title: 'Naďa Konvalinková a Hanka Křížková vnesli radost a noblesu',
    date: '09/2023',
    source: 'Zpravodaj KZV 2023',
    url: null,
  },
  {
    title: 'Krása zralého věku s herečkou a spisovatelkou Sandrou Pogodovou',
    date: '09/2022',
    source: 'Zpravodaj KZV 2022',
    url: null,
  },
  {
    title: 'Monika Absolonová s písní Popokatepetl roztančila seniory',
    date: '09/2021',
    source: 'Zpravodaj KZV 2021',
    url: null,
  },
  {
    title: 'Pramínek vlasů, Život je jen náhoda a Harlekýn v pořadu Krása zralého věku',
    date: '12/2019',
    source: 'Krása zralého věku 12 2019',
    url: null,
  },
  {
    title: 'Vánoční posezení v Chaberském dvoře',
    date: 'únor 2019',
    source: 'Chaberský zpravodaj 2019 02',
    url: null,
  },
  {
    title: 'Krása zralého věku',
    date: 'Listopad 2009',
    source: 'Listy Prahy 14',
    url: null,
  },
  {
    title: 'Hraničtí senioři oslavovali stáří',
    date: '4. 9. 2009',
    source: 'Hranický týden',
    url: null,
  },
]

const links = [
  {
    label: 'www.havlasova.cz',
    url: 'http://www.havlasova.cz',
    desc: 'Zdravotní a kondiční cvičení, konzultace a poradenství',
  },
  {
    label: 'www.indol-in.cz',
    url: 'http://www.indol-in.cz',
    desc: 'Onko Pharma s.r.o.',
  },
]

export default function OdkazyPage() {
  return (
    <div className="pt-24 pb-20">
      <div className="bg-gradient-to-br from-brand-50 to-purple-50 py-16 mb-12">
        <div className="container-main text-center">
          <h1 className="section-title">Napsali o nás</h1>
          <p className="section-subtitle">Ohlasy v tisku a užitečné odkazy</p>
        </div>
      </div>

      <div className="container-main max-w-3xl space-y-14">

        {/* Z tisku */}
        <section>
          <h2 className="font-serif text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
            <Newspaper className="w-6 h-6 text-brand-500" />
            Z tisku — Napsali o nás
          </h2>
          <div className="space-y-3">
            {pressItems.map((item, i) => (
              <div key={i} className="flex items-start gap-3 p-4 bg-white rounded-xl border border-gray-100 shadow-sm">
                <span className="text-brand-500 mt-1 shrink-0 text-lg font-bold">&#9632;</span>
                <div>
                  <span className="font-semibold text-gray-900">{item.title}</span>
                  <span className="text-gray-500">, {item.date}</span>
                  {item.source && (
                    <span className="text-gray-400"> — {item.source}</span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Odkazy */}
        <section>
          <h2 className="font-serif text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
            <ExternalLink className="w-6 h-6 text-brand-500" />
            Odkazy
          </h2>
          <div className="space-y-3">
            {links.map((l) => (
              <a
                key={l.label}
                href={l.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 bg-white rounded-xl border border-gray-100 shadow-sm hover:border-brand-200 hover:shadow-md transition-all group"
              >
                <ExternalLink className="w-5 h-5 text-brand-400 shrink-0" />
                <div>
                  <p className="font-semibold text-brand-600 group-hover:text-brand-800 transition-colors">
                    {l.label}
                  </p>
                  {l.desc && <p className="text-gray-500 text-sm">{l.desc}</p>}
                </div>
              </a>
            ))}
          </div>
        </section>

      </div>
    </div>
  )
}
