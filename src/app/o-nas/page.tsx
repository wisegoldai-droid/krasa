import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { Heart, Music, Users, Award, ArrowRight } from 'lucide-react'

export const metadata: Metadata = { title: 'O nás' }

const pillars = [
  { icon: Music, label: 'Tancuj' },
  { icon: Heart, label: 'Miluj' },
  { icon: Users, label: 'Zpívej' },
  { icon: Award, label: 'Žij' },
]

export default function ONasPage() {
  return (
    <div className="pt-24 pb-20">
      {/* Header */}
      <div className="bg-gradient-to-br from-brand-50 to-purple-50 py-16 mb-12">
        <div className="container-main text-center">
          <h1 className="section-title">O nás</h1>
          <p className="section-subtitle">
            Agentura KUKR a pořad Krása zralého věku
          </p>
        </div>
      </div>

      <div className="container-main">
        {/* About section */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
          <div>
            <h2 className="font-serif text-3xl font-bold text-gray-900 mb-4">
              Pořad Krása zralého věku
            </h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              Hudebně komponovaný pořad určený dříve narozeným pořádáme od roku 2009.
              Každé naše setkání je vždy krásné, prostoupené láskou a naplněno radostí
              ze společného bytí.
            </p>
            <p className="text-gray-600 leading-relaxed mb-4">
              Hosty pořadu jsou přední čeští umělci — herečky, zpěváci, moderátoři a muzikanti,
              kteří svým talentem vytvářejí nezapomenutelnou atmosféru. Naše setkání se konají
              v komorním divadelním sálu Chaberského dvora v Praze 8 – Dolních Chabrech.
            </p>
            <p className="text-gray-600 leading-relaxed mb-6">
              Věříme, že stářím život nekončí — naopak přináší moudrost, zkušenosti a schopnost
              plně vychutnat každý přítomný okamžik.
            </p>
            <blockquote className="border-l-4 border-brand-500 pl-4 italic text-brand-800 text-lg font-serif">
              „Stářím život nekončí"
            </blockquote>
          </div>
          <div className="relative">
            <div className="relative h-96 rounded-3xl overflow-hidden shadow-xl">
              <Image
                src="https://983301db8e.clvaw-cdnwnd.com/7a6561c6d3cad6850fecea38c4ad8aff/200003287-785d77957e/200000055.jpg"
                alt="Krása zralého věku"
                fill
                className="object-cover"
                unoptimized
              />
            </div>
          </div>
        </div>

        {/* 4 pillars */}
        <div className="bg-brand-950 text-white rounded-3xl p-10 mb-20 text-center">
          <h2 className="font-serif text-2xl font-bold mb-2">4 pilíře správného uchopení žití</h2>
          <p className="text-brand-300 mb-8">Filosofie každého setkání</p>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
            {pillars.map(({ icon: Icon, label }) => (
              <div key={label} className="flex flex-col items-center gap-3">
                <div className="w-14 h-14 bg-brand-800 rounded-full flex items-center justify-center">
                  <Icon className="w-7 h-7 text-brand-300" />
                </div>
                <span className="font-semibold text-lg">{label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Autorka */}
        <div className="bg-white rounded-3xl shadow-md p-10 mb-20">
          <h2 className="font-serif text-3xl font-bold text-gray-900 mb-6">Autorka pořadu</h2>
          <div className="grid md:grid-cols-[1fr_auto] gap-8 items-start">
            <div>
              <h3 className="font-serif text-xl font-semibold text-brand-800 mb-3">
                Mgr. Hana Marie Kunešová
              </h3>
              <p className="text-gray-600 leading-relaxed mb-3">
                Autorka a moderátorka pořadu Krása zralého věku. Od roku 2009 vytváří setkání,
                na které se senioři a dříve narození vždy těší. Díky svému přístupu a výběru
                hostů dokáže pokaždé vytvořit atmosféru, která je nepřenositelná.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Pořad organizuje pod záštitou agentury KUKR, která zajišťuje všechny aspekty
                produkce — od výběru hostů, přes organizaci místa konání, až po doprovodný
                program a tombolu.
              </p>
            </div>
            <div className="bg-brand-50 rounded-2xl p-6 min-w-[200px]">
              <p className="text-brand-800 font-semibold text-sm mb-1">Agentura KUKR</p>
              <p className="text-gray-500 text-sm">Perštejnská 286/16</p>
              <p className="text-gray-500 text-sm">PSČ 184 00, Praha 8</p>
              <p className="text-gray-500 text-sm mb-3">Dolní Chabry</p>
              <a href="tel:+420602444775" className="block text-brand-600 text-sm hover:underline">
                602 444 775
              </a>
              <a href="tel:+420608118899" className="block text-brand-600 text-sm hover:underline">
                608 11 88 99
              </a>
            </div>
          </div>
        </div>

        {/* Partners note */}
        <div className="text-center">
          <h2 className="font-serif text-2xl font-bold mb-3">Partneři akcí</h2>
          <p className="text-gray-500 mb-6">
            Pořad je realizován díky podpoře partnerů a sponzorů. Jejich pomoc umožňuje
            připravit bohatý program a tombolu pro všechny hosty.
          </p>
          <Link href="/kontakty" className="btn-primary">
            Kontaktovat nás <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </div>
  )
}
