import type { Metadata } from 'next'
import { ExternalLink, Newspaper } from 'lucide-react'

export const metadata: Metadata = { title: 'Odkazy a ohlasy' }

const pressItems = [
  // Přidejte články, recenze a zmínky v tisku
  // Příklad:
  // {
  //   source: 'Pražský deník',
  //   title: 'Senioři se skvěle bavili na Chaberském dvoře',
  //   date: '2024-11-15',
  //   url: 'https://...',
  // },
]

const links = [
  {
    label: 'Chaberský dvůr',
    url: 'https://www.chabersky-dvur.cz',
    desc: 'Místo konání pořadu',
  },
  // Doplňte další relevantní odkazy
]

export default function OdkazyPage() {
  return (
    <div className="pt-24 pb-20">
      <div className="bg-gradient-to-br from-brand-50 to-purple-50 py-16 mb-12">
        <div className="container-main text-center">
          <h1 className="section-title">Odkazy a ohlasy</h1>
          <p className="section-subtitle">Co o nás napsali a užitečné odkazy</p>
        </div>
      </div>

      <div className="container-main max-w-3xl space-y-16">

        {/* Press */}
        <section>
          <h2 className="font-serif text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
            <Newspaper className="w-6 h-6 text-brand-500" />
            Napsali o nás
          </h2>
          {pressItems.length === 0 ? (
            <div className="bg-gray-50 rounded-2xl p-10 text-center text-gray-400">
              <Newspaper className="w-10 h-10 mx-auto mb-3 opacity-30" />
              <p>Články a recenze budou doplněny</p>
            </div>
          ) : (
            <div className="space-y-4">
              {pressItems.map((item, i) => (
                <a
                  key={i}
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="card p-5 flex items-start gap-4 hover:border-brand-200 border border-transparent transition-colors group"
                >
                  <div className="w-10 h-10 bg-brand-100 rounded-xl flex items-center justify-center shrink-0">
                    <Newspaper className="w-5 h-5 text-brand-600" />
                  </div>
                  <div className="flex-1">
                    <p className="text-xs text-brand-600 font-semibold mb-0.5">{item.source}</p>
                    <h3 className="font-semibold text-gray-900 group-hover:text-brand-700 transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-xs text-gray-400 mt-1">{item.date}</p>
                  </div>
                  <ExternalLink className="w-4 h-4 text-gray-300 group-hover:text-brand-500 transition-colors shrink-0 mt-1" />
                </a>
              ))}
            </div>
          )}
        </section>

        {/* Links */}
        <section>
          <h2 className="font-serif text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
            <ExternalLink className="w-6 h-6 text-brand-500" />
            Užitečné odkazy
          </h2>
          <div className="space-y-3">
            {links.map((l) => (
              <a
                key={l.label}
                href={l.url}
                target="_blank"
                rel="noopener noreferrer"
                className="card p-5 flex items-center gap-4 hover:border-brand-200 border border-transparent transition-colors group"
              >
                <div className="w-10 h-10 bg-brand-100 rounded-xl flex items-center justify-center shrink-0">
                  <ExternalLink className="w-5 h-5 text-brand-600" />
                </div>
                <div className="flex-1">
                  <p className="font-semibold text-gray-900 group-hover:text-brand-700 transition-colors">{l.label}</p>
                  {l.desc && <p className="text-gray-500 text-sm">{l.desc}</p>}
                </div>
                <ExternalLink className="w-4 h-4 text-gray-300 group-hover:text-brand-500 transition-colors shrink-0" />
              </a>
            ))}
          </div>
        </section>
      </div>
    </div>
  )
}
