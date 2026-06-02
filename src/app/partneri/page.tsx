import type { Metadata } from 'next'
import { Heart, ArrowRight } from 'lucide-react'
import Link from 'next/link'

export const metadata: Metadata = { title: 'Partneři akcí' }

const partners = [
  {
    name: 'Úřad městské části Praha 8',
    note: 'Záštita a podpora pořadu',
    url: null,
  },
  // Doplňte další partnery a sponzory
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
        <div className="space-y-4 mb-16">
          {partners.map((p) => (
            <div key={p.name} className="card p-6 flex items-center gap-4">
              <div className="w-12 h-12 bg-brand-100 rounded-xl flex items-center justify-center shrink-0">
                <Heart className="w-6 h-6 text-brand-600" />
              </div>
              <div className="flex-1">
                <h3 className="font-semibold text-gray-900">{p.name}</h3>
                {p.note && <p className="text-gray-500 text-sm">{p.note}</p>}
              </div>
              {p.url && (
                <a
                  href={p.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-brand-600 hover:text-brand-800 transition-colors"
                >
                  <ArrowRight className="w-5 h-5" />
                </a>
              )}
            </div>
          ))}
        </div>

        {/* CTA pro nové partnery */}
        <div className="bg-gradient-to-br from-brand-800 to-brand-950 text-white rounded-3xl p-10 text-center">
          <h2 className="font-serif text-2xl font-bold mb-3">Chcete se stát partnerem?</h2>
          <p className="text-brand-200 mb-6 leading-relaxed">
            Rádi přivítáme nové partnery a sponzory. Kontaktujte nás a domluvíme
            vzájemně výhodnou spolupráci.
          </p>
          <Link href="/kontakty" className="btn-primary bg-white text-brand-800 hover:bg-brand-50">
            Kontaktovat nás <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </div>
  )
}
