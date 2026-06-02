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
          <h1 className="section-title">O nas</h1>
          <p className="section-subtitle">Hudebne komponovany vecer Krasa zraleho veku</p>
        </div>
      </div>

      <div className="container-main max-w-4xl">
        <div className="prose prose-lg max-w-none space-y-6 text-gray-700 leading-relaxed">

          <h2 className="font-serif text-2xl font-bold text-gray-900">
            Hudebne komponovany vecer KRASA ZRALEHO VEKU
          </h2>

          <p>
            Nase spolecenske vecery jsou o sile a energii, krase a kazni, puvabe a vybroušenosti,
            eleganci a jednoduchosti. Vek totiz neni rozhodujici pro nase prani, stanoviska a rozhodnuti.
            Krasni jsme v kazdem veku, pokud dovedeme prozivat kazdy den pri zachovani zdraveho sebevedomi.
            Dulezite je dospet k zaveru, ze prava krasa vychazi vzdy zevnitr nas, cili z duse. Dulezite je
            take vedet, ze ve zralem veku se setkavaji <strong>duch, kouzlo, zdvorilost a vytribenost</strong>.
            A pak uz je zcela pomijejici, ze podivame-li se do zrcadla, mame dojem, ze k nam kdosi prisel na navstevu...
          </p>

          <p>
            A o vnitrni krase, noblese, radosti a usmevu jsou nase pravidelne hudebni a interaktivni vecery,
            ktere jsem co do obsahu jiz poctrte v rade venovala prave kategorii senioru. Tito s nami zpivaji,
            tanci, hraji a vypravejí. Vyjimkou nejsou ani senioři, ktere zasahla tezka nemoc, diky ktere jsou
            upoutani na koleckove kreslo ci se neobejdou bez choditka. Bez nasich babicek a dedu si mnaha rodina
            neumí predstavit existenci. A tak to ma byt.
          </p>

          <div className="my-8 grid grid-cols-2 gap-4">
            <div className="relative h-64 rounded-2xl overflow-hidden shadow-md">
              <Image src={photos[0]} alt="Krasa zraleho veku" fill className="object-cover" unoptimized />
            </div>
            <div className="relative h-64 rounded-2xl overflow-hidden shadow-md">
              <Image src={photos[1]} alt="Krasa zraleho veku" fill className="object-cover" unoptimized />
            </div>
          </div>

          <p>
            Puvodne byl porad komponovany jako spojeni tri znacek - noveho vina, noblesniho mista a kvalitniho
            obsahu. Jednou jsme obdarovali deti z Jedlickova ustavu v Praze, darky potesili deti z detskeho domova
            u Benesova, podekovaly stavatum a architektum za jejich nezistnou pomoc pri nicivych povodních v roce
            2002 a sklonili se pred nekolikamilionovou sbirkou na zachranu goticke skrine varhan (z 18. stoleti)
            v kostele Brevnovskeho klastera v Praze 6.
          </p>

          <p>
            Obsahu a naplni poradu venovanemu seniorum jsem zustala od te doby verna. Mozna z pocitu vlastni
            nedůslednosti v peci o svou dnes jiz 82 letou matku, ktere se s rodinou snazime co mozna nejvice
            venovat. S pribyvajicim vekem si uvedomuji, ze clovek vlastne nic neztraci. Prave naopak. O tom se
            spolu s nami muze presvedcit kazdy z vas, komu fyzicke sily dovoli a prijde se pobavit a zapojit do
            zabavneho programu.
          </p>

          <div className="my-8 grid grid-cols-2 gap-4">
            <div className="relative h-64 rounded-2xl overflow-hidden shadow-md">
              <Image src={photos[2]} alt="Krasa zraleho veku" fill className="object-cover" unoptimized />
            </div>
            <div className="relative h-64 rounded-2xl overflow-hidden shadow-md">
              <Image src={photos[3]} alt="Krasa zraleho veku" fill className="object-cover" unoptimized />
            </div>
          </div>

          <p>
            Letos jsme mezi sebou privitali a do <strong>sine slavy uvedli pani Irenku Krskovou, emeritni
            reditelku ZUS z Potstatu</strong>, a to za jeji dlouholetou plodnou cinnost v oblasti hudby.
            Ale take i za vychovu cele rady dnes uznávanych hudebníku. Letosni vecer plny hudby, tance, zpevu,
            jidla i piti a krasnych divek na modnim molu ukazal, ze kazda krasa ma svuj cas.
            Ze zraly vek je noblesa duse i zivotni moudrost pokojneho stari.
          </p>

          <blockquote className="border-l-4 border-brand-500 pl-6 py-2 my-8 bg-brand-50 rounded-r-2xl">
            <p className="font-serif text-lg text-brand-800 italic font-semibold">
              Smirime-li se s tim, ze fyzicke sily ubyvaji a svuj zivot postavime na faktu,
              ze zvladneme vse, co muzeme, mame vyhrano.
            </p>
          </blockquote>

          <div className="bg-gray-50 rounded-2xl p-6 text-sm text-gray-600">
            <p className="font-semibold text-gray-800 mb-2">Kontakt pro nominace do sine slavy:</p>
            <p>
              <a href="mailto:info@krasazralehoveku.cz" className="text-brand-600 hover:underline">info@krasazralehoveku.cz</a>
              {' | '}
              <a href="mailto:agentura.kukr@seznam.cz" className="text-brand-600 hover:underline">agentura.kukr@seznam.cz</a>
            </p>
          </div>
        </div>

        <div className="mt-12 flex gap-4">
          <Link href="/kontakty" className="btn-primary">
            Kontaktovat nas <ArrowRight className="w-4 h-4" />
          </Link>
          <Link href="/uskutecnene" className="btn-outline">
            Uskutecnene akce
          </Link>
        </div>
      </div>
    </div>
  )
}
