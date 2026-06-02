import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

export const metadata: Metadata = { title: 'Partneři akcí' }

const mainPartners = [
  { name: 'Rada MČ a pracovníci ÚMČ Praha-Dolní Chabry', note: 'Záštita a podpora pořadu' },
  { name: 'Iveta a Josef Kalendovi, Chabrybárna', note: 'Partner pořadu' },
  { name: 'Merlot d Or Plzeň', note: 'Partner pořadu' },
]

const sponsors = [
  'VOX',
  'Tondach',
  'Vitar',
  'Rexite',
  'Pizza',
  'Onkopharma',
  'Herb Pharma',
  'Mattoni',
  'BEWIT',
  'Happí Konopí',
  'Teplice nad Bečvou',
  'Motor Gear',
  'T.E.Q.',
  'APC',
]

export default function PartneriPage() {
  return (
    <div className="pt-24 pb-20">
      <div className="bg-gradient-to-br from-brand-50 to-purple-50 py-16 mb-12">
        <div className="container-main text-center">
          <h1 className="section-title">Partneři akcí</h1>
          <p className="section-subtitle max-w-2xl mx-auto">
            Pořad Krása zralého věku je realizován díky laskavé podpoře partnerů a sponzorů
          </p>
        </div>
      </div>

      <div className="container-main max-w-3xl">
        <h2 className="font-serif text-2xl font-bold text-gray-900 mb-6">Hlavní partneři</h2>
        <div className="space-y-3 mb-14">
          {mainPartners.map((p) => (
            <div key={p.name} className="card p-5 flex items-center gap-4">
              <div className="w-10 h-10 bg-brand-100 rounded-xl flex items-center justify-center shrink-0 text-brand-600 font-bold text-lg">
                +
              </div>
              <div>
                <p className="font-semibold text-gray-900">{p.name}</p>
                {p.note && <p className="text-gray-500 text-sm">{p.note}</p>}
              </div>
            </div>
          ))}
        </div>

        <h2 className="font-serif text-2xl font-bold text-gray-900 mb-6">Sponzoři a přispěvatelé</h2>
        <div className="flex flex-wrap gap-3 mb-14">
          {sponsors.map((s) => (
            <span key={s} className="bg-white border border-gray-200 text-gray-700 px-4 py-2 rounded-xl text-sm font-medium shadow-sm">
              {s}
            </span>
          ))}
        </div>

        <p className="text-center text-gray-500 text-sm mb-14">
          Děkujeme všem partnerům za podporu akce Krása zralého věku.
        </p>

        <div className="bg-gradient-to-br from-brand-800 to-brand-950 text-white rounded-3xl p-10 text-center">
          <h2 className="font-serif text-2xl font-bold mb-3">Chcete se stát partnerem?</h2>
          <p className="text-brand-200 mb-6 leading-relaxed">
            Rádi přivítáme nové partnery a sponzory. Kontaktujte nás a domluvíme
            vzájemně výhodnou spolupráci.
          </p>
          <Link href="/kontakty" className="inline-flex items-center gap-2 px-6 py-3 bg-white text-brand-800 font-semibold rounded-full hover:bg-brand-50 transition-all">
            Kontaktovat nás <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </div>
  )
}
