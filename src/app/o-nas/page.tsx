import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

export const metadata: Metadata = { title: 'O nas' }

const photos = [
  'https://983301db8e.cbaul-cdnwnd.com/7a6561c6d3cad6850fecea38c4ad8aff/200002721-6f4fe7049d/IMG_0263.jpg',
  'https://983301db8e.cbaul-cdnwnd.com/7a6561c6d3cad6850fecea38c4ad8aff/200002722-522965323b/IMG_0356.jpg',
  'https://983301db8e.cbaul-cdnwnd.com/7a6561c6d3cad6850fecea38c4ad8aff/200002724-3c37a3d319/IMG_0365.jpg',
  'https://983301db8e.cbaul-cdnwnd.com/7a6561c6d3cad6850fecea38c4ad8aff/200002723-72f7f73f20/IMG_6603.jpg',
]

export default function ONasPage() {
  return (
    <div className="pt-24 pb-20">
      <div className="bg-gradient-to-br from-brand-50 to-purple-50 py-16 mb-12">
        <div className="container-main text-center">
          <h1 className="section-title">O&nbsp;nás</h1>
          <p className="section-subtitle">Hudebně komponovaný večer Krása zralého věku</p>
        </div>
      </div>

      <div className="container-main max-w-4xl">
        <div className="space-y-6 text-gray-700 leading-relaxed text-lg">

          <h2 className="font-serif text-2xl font-bold text-gray-900">
            Hudebně komponovaný večer KRÁSA ZRALÉHO VĚKU
          </h2>

          <p>
            Naše společenské večery jsou o síle a energii, kráse a kázni, půvabu a vybroušenosti,
            eleganci a jednoduchosti. Věk totiž není rozhodující pro naše přání, stanoviska a rozhodnutí.
            Krásní jsme v každém věku, pokud dovedeme prožívat každý den při zachování zdravého sebevědomí.
            Důležité je dospět k závěru, že pravá krása vychází vždy zevnitř nás, čili z duše. Důležité je
            také vědět, že ve zralém věku se setkávají <strong>duch, kouzlo, zdvořilost a vytříbenost</strong>.
            A pak už je zcela pomíjející, že podíváme-li se do zrcadla, máme dojem, že k nám kdosi přišel na návštěvu...
          </p>

          <p>
            A o vnitřní kráse, noblese, radosti a úsměvu jsou naše pravidelné hudební a interaktivní večery,
            které jsem co do obsahu již počtvrté v řadě věnovala právě kategorii seniorů. Tito s námi zpívají,
            tančí, hrají a vyprávějí. Výjimkou nejsou ani senioři, které zasáhla těžká nemoc, díky které jsou
            upoutáni na kolečkové křeslo či se neobejdou bez chodítka. Bez našich babiček a dědů si mnohá rodina
            neumí představit existenci. A tak to má být.
          </p>

          <div className="my-8 grid grid-cols-2 gap-4">
            <div className="relative h-64 rounded-2xl overflow-hidden shadow-md">
              <Image src={photos[0]} alt="Krása zralého věku" fill className="object-cover" unoptimized />
            </div>
            <div className="relative h-64 rounded-2xl overflow-hidden shadow-md">
              <Image src={photos[1]} alt="Krása zralého věku" fill className="object-cover" unoptimized />
            </div>
          </div>

          <p>
            Původně byl pořad komponovaný jako spojení tří značek — nového vína, noblesního místa a kvalitního
            obsahu. Jednou jsme obdarovali děti z Jedličkova ústavu v Praze, dárky potěšili děti z dětského domova
            u Benešova, poděkovali stavařům a architektům za jejich nezištnou pomoc při ničivých povodních v roce
            2002 a sklonili se před několikamilionovou sbírkou na záchranu gotické skříně varhan (z 18. století)
            v kostele Břevnovského kláštera v Praze 6.
          </p>

          <p>
            Obsahu a náplni pořadu věnovanému seniorům jsem zůstala od té doby věrna. Možná z pocitu vlastní
            nedůslednosti v péči o svou dnes již 82 letou matku, které se s rodinou snažíme co možná nejvíce
            věnovat. S přibývajícím věkem si uvědomuji, že člověk vlastně nic neztrácí. Právě naopak. O tom se
            spolu s námi může přesvědčit každý z vás, komu fyzické síly dovolí a přijde se pobavit a zapojit do
            zábavného programu.
          </p>

          <div className="my-8 grid grid-cols-2 gap-4">
            <div className="relative h-64 rounded-2xl overflow-hidden shadow-md">
              <Image src={photos[2]} alt="Krása zralého věku" fill className="object-cover" unoptimized />
            </div>
            <div className="relative h-64 rounded-2xl overflow-hidden shadow-md">
              <Image src={photos[3]} alt="Krása zralého věku" fill className="object-cover" unoptimized />
            </div>
          </div>

          <p>
            Letos jsme mezi sebou přivítali a do <strong>síně slávy uvedli paní Irenku Krškovou, emeritní
            ředitelku ZUŠ z Potštátu</strong>, a to za její dlouholetou plodnou činnost v oblasti hudby.
            Letošní večer plný hudby, tance, zpěvu, jídla i pití a krásných dívek na módním molu ukázal,
            že každá krása má svůj čas. Že zralý věk je noblesa duše i životní moudrost pokojného stáří.
          </p>

          <blockquote className="border-l-4 border-brand-500 pl-6 py-3 my-8 bg-brand-50 rounded-r-2xl">
            <p className="font-serif text-lg text-brand-800 italic font-semibold">
              Smíříme-li se s tím, že fyzické síly ubývají a svůj život postavíme na faktu,
              že zvládneme vše, co můžeme, máme vyhráno.
            </p>
          </blockquote>

          <div className="bg-gray-50 rounded-2xl p-6 text-sm text-gray-600">
            <p className="font-semibold text-gray-800 mb-2">Kontakt pro nominace do síně slávy:</p>
            <p>
              <a href="mailto:info@krasazralehoveku.cz" className="text-brand-600 hover:underline">
                info@krasazralehoveku.cz
              </a>
              {' | '}
              <a href="mailto:agentura.kukr@seznam.cz" className="text-brand-600 hover:underline">
                agentura.kukr@seznam.cz
              </a>
            </p>
          </div>
        </div>

        <div className="mt-12 flex gap-4">
          <Link href="/kontakty" className="btn-primary">
            Kontaktovat nás <ArrowRight className="w-4 h-4" />
          </Link>
          <Link href="/uskutecnene" className="btn-outline">
            Uskutečněné akce
          </Link>
        </div>
      </div>
    </div>
  )
}
