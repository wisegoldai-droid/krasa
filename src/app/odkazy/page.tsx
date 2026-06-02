import type { Metadata } from 'next'
import { ExternalLink, Newspaper } from 'lucide-react'

export const metadata: Metadata = { title: 'Napsali o nas' }

const pressItems = [
  {
    title: 'Listopadová Krása zralého věku Karel Voříšek a Zuzana Stírská roztančili sál',
    date: '11/2024',
    source: 'Chaberský zpravodaj a zpravodaj KZV 01-2025',
    url: 'https://www.krasazralehoveku.cz/news/karel-vorisek-a-zuzana-stirska-roztancili-sal-11-2024/',
  },
  {
    title: 'Naďa Konvalinková a Hanka Křížková vnesli radost a noblesu',
    date: '09/2023',
    source: 'Zpravodaj KZV 2023',
    url: 'https://www.krasazralehoveku.cz/news/nada-konvalinkova-a-hanka-krizkova/',
  },
  {
    title: 'Krása zralého věku s herečkou a spisovatelkou Sandrou Pogodovou',
    date: '09/2022',
    source: 'Zpravodaj KZV 2022',
    url: 'https://www.krasazralehoveku.cz/news/krasa-zraleho-veku-s-hereckou-a-spisovatelkou-sandrou-pogodovou/',
  },
  {
    title: 'Monika Absolonová s písní Popokatepetl roztančila seniory',
    date: '09/2021',
    source: 'Zpravodaj KZV 2021',
    url: 'https://www.krasazralehoveku.cz/news/monika-absolonova-s-pisni-popokatepetl-roztancila-seniory-16-9-2021/',
  },
  {
    title: 'Pramínek vlasů, Život je jen náhoda a Harlekýn v pořadu Krása zralého věku',
    date: '12/2019',
    source: 'Krása zralého věku 12 2019',
    url: 'https://983301db8e.cbaul-cdnwnd.com/7a6561c6d3cad6850fecea38c4ad8aff/200009635-db7e1db7e2/Kr%C3%A1sa%20zral%C3%A9ho%20v%C4%9Bku_leden%202020.png',
  },
  {
    title: 'Vánoční posezení v Chaberském dvoře',
    date: 'únor 2019',
    source: 'Chaberský zpravodaj 2019 02',
    url: 'https://983301db8e.cbaul-cdnwnd.com/7a6561c6d3cad6850fecea38c4ad8aff/200004131-99eae9ae53/chabersky_zpravodaj_2019_02_web-8.pdf',
  },
  {
    title: 'Krása zralého věku',
    date: 'Listopad 2009',
    source: 'Listy Prahy 14',
    url: 'https://983301db8e.cbaul-cdnwnd.com/7a6561c6d3cad6850fecea38c4ad8aff/200001011-f3e0000b68/clanek-Listy-Prahy14-11-2009.pdf',
  },
  {
    title: 'Hraničtí senioři oslavovali stáří',
    date: '4. 9. 2009',
    source: 'Hranický týden',
    url: 'https://983301db8e.cbaul-cdnwnd.com/7a6561c6d3cad6850fecea38c4ad8aff/200001012-a4d51a5cee/clanek-hranicky-tydenik-4_9_2009.pdf',
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
            {pressItems.map((item, i) => {
              const inner = (
                <>
                  <span className="text-brand-500 mt-1 shrink-0 text-lg font-bold">&#9632;</span>
                  <div>
                    <span className={`font-semibold ${item.url ? 'text-brand-700' : 'text-gray-900'}`}>{item.title}</span>
                    <span className="text-gray-500">, {item.date}</span>
                    {item.source && (
                      <span className="text-gray-400"> — {item.source}</span>
                    )}
                  </div>
                </>
              )
              return item.url ? (
                <a
                  key={i}
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-3 p-4 bg-white rounded-xl border border-gray-100 shadow-sm hover:border-brand-200 hover:shadow-md transition-all"
                >
                  {inner}
                </a>
              ) : (
                <div key={i} className="flex items-start gap-3 p-4 bg-white rounded-xl border border-gray-100 shadow-sm">
                  {inner}
                </div>
              )
            })}
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
