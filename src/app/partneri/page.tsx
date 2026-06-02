import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, Building2, Users, Wine } from 'lucide-react'

export const metadata: Metadata = { title: 'Partneri akci' }

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

      <div className="container-main max-w-3xl space-y-14">

        {/* Hlavni partneri */}
        <section>
          <h2 className="font-serif text-2xl font-bold text-gray-900 mb-6">Hlavní partneři</h2>
          <div className="grid gap-4">
            {[
              { icon: Building2, name: 'Rada MČ a pracovníci ÚMČ Praha-Dolní Chabry', desc: 'Municipální podpora akce' },
              { icon: Users,     name: 'Iveta a Josef Kalendovi', desc: 'Chabrybárna' },
              { icon: Wine,      name: 'Merlot d Ór Plzeň', desc: 'Vinařský partner' },
            ].map(({ icon: Icon, name, desc }) => (
              <div key={name} className="flex items-center gap-4 bg-white rounded-2xl border border-gray-100 shadow-sm px-6 py-4 hover:border-brand-200 hover:shadow-md transition-all">
                <div className="w-10 h-10 rounded-xl bg-brand-50 flex items-center justify-center shrink-0">
                  <Icon className="w-5 h-5 text-brand-500" />
                </div>
                <div>
                  <p className="font-semibold text-gray-900 leading-snug">{name}</p>
                  <p className="text-sm text-gray-400">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Kvalitni skola logo */}
        <section>
          <a href="http://www.ustav-skolstvi.cz" target="_blank" rel="noopener noreferrer"
            className="inline-block hover:opacity-80 transition-opacity">
            <Image
              src="/images/kvalitni-skola.png"
              alt="Kvalitní škola"
              width={200}
              height={200}
              unoptimized
            />
          </a>
        </section>

        {/* BEWIT */}
        <section>
          <a href="http://www.bewit.love" target="_blank" rel="noopener noreferrer"
            className="inline-block hover:opacity-80 transition-opacity">
            <Image
              src="https://983301db8e.cbaul-cdnwnd.com/7a6561c6d3cad6850fecea38c4ad8aff/200002608-d0043d0fe5/Domecek_2.png"
              alt="BEWIT"
              width={220}
              height={180}
              unoptimized
            />
          </a>
        </section>

        {/* Vsichni sponzori - grid z originalu */}
        <section>
          <h2 className="font-serif text-2xl font-bold text-gray-900 mb-6">Sponzoři a přispěvatelé</h2>
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
            <Image
              src="https://983301db8e.cbaul-cdnwnd.com/7a6561c6d3cad6850fecea38c4ad8aff/200001226-1fb0420aa4/partneri-11.gif"
              alt="Sponzoři pořadu Krása zralého věku"
              width={760}
              height={500}
              className="w-full h-auto"
              unoptimized
            />
          </div>
          <p className="text-center text-gray-500 text-sm mt-4 italic">
            Děkujeme všem partnerům za podporu akce Krása zralého věku.
          </p>
        </section>

        {/* CTA */}
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
