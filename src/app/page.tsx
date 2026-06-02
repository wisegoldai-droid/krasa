import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, Calendar, Heart, Music, Star } from 'lucide-react'
import EventCard from '@/components/EventCard'
import { getUpcomingEvents, getPastEvents } from '@/lib/events'

export default function HomePage() {
  const upcoming = getUpcomingEvents()
  const pastPreview = getPastEvents().slice(0, 3)

  return (
    <>
      {/* Hero */}
      <section className="relative min-h-screen flex items-center overflow-hidden pt-16">
        <div className="absolute inset-0 bg-gradient-to-br from-brand-50 via-white to-purple-50" />
        <div className="absolute top-20 right-0 w-[600px] h-[600px] bg-brand-200/30 rounded-full blur-3xl -translate-y-1/4 translate-x-1/4" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-purple-200/20 rounded-full blur-3xl translate-y-1/4 -translate-x-1/4" />

        <div className="container-main relative z-10 grid md:grid-cols-2 gap-12 items-center py-24">
          <div>
            <span className="inline-flex items-center gap-2 bg-brand-100 text-brand-700 text-sm font-semibold px-4 py-1.5 rounded-full mb-6">
              <Music className="w-4 h-4" /> Agentura KUKR
            </span>
            <h1 className="font-serif text-5xl md:text-6xl font-bold text-gray-900 leading-tight mb-6">
              Krasa<br />
              <span className="text-brand-700">zraleho veku</span>
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed mb-8 max-w-md">
              Hudebne komponovany porad urceny drive narozenym.
              Kazde setkani je krasne, prostoupene laskou a naplneno
              radosti ze spolecneho byti.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/program" className="btn-primary">
                Program 2026 <ArrowRight className="w-4 h-4" />
              </Link>
              <Link href="/galerie" className="btn-outline">
                Fotogalerie
              </Link>
            </div>
            <div className="mt-12 flex gap-8">
              {[
                { value: '15+', label: 'let poradu' },
                { value: '606', label: 'fotografii' },
                { value: '100+', label: 'akci' },
              ].map((s) => (
                <div key={s.label}>
                  <div className="text-2xl font-bold text-brand-700">{s.value}</div>
                  <div className="text-sm text-gray-500">{s.label}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative hidden md:block">
            <div className="relative w-full aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl">
              <Image
                src="https://983301db8e.clvaw-cdnwnd.com/7a6561c6d3cad6850fecea38c4ad8aff/200003287-785d77957e/200000055.jpg"
                alt="Krasa zraleho veku"
                fill
                className="object-cover object-top"
                priority
                unoptimized
              />
            </div>
            <div className="absolute -bottom-4 -left-6 bg-white rounded-2xl shadow-xl p-4 flex items-center gap-3">
              <div className="w-10 h-10 bg-brand-100 rounded-full flex items-center justify-center">
                <Heart className="w-5 h-5 text-brand-600" />
              </div>
              <div>
                <div className="text-xs text-gray-500">Motto poradu</div>
                <div className="text-sm font-semibold text-gray-800">Starim zivot nekonci</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Upcoming event */}
      {upcoming.length > 0 && (
        <section className="py-20 bg-white">
          <div className="container-main">
            <h2 className="section-title">Nejblizsi akce</h2>
            <p className="section-subtitle">Prijdte se s nami pobavit a uzit si krasny program</p>
            <EventCard event={upcoming[0]} variant="featured" />
          </div>
        </section>
      )}

      {/* Features */}
      <section className="py-20 bg-gray-50">
        <div className="container-main">
          <h2 className="section-title text-center">Co vas ceka</h2>
          <p className="section-subtitle text-center">Kazdy porad je jedinecny zazitk</p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-10">
            {[
              { icon: Music, title: 'Hudba a zpev', desc: 'Krasne pisnicky v podani vynikajicich umelcu' },
              { icon: Star, title: 'Slavni hoste', desc: 'Herecky, zpevaci a moderatori ceske sceny' },
              { icon: Heart, title: 'Pohoda a radost', desc: 'Atmosfera plna lasky a spolecneho byti' },
              { icon: Calendar, title: 'Pravidelna setkani', desc: 'Kulturni program pro drive narozene od roku 2009' },
            ].map(({ icon: Icon, title, desc }) => (
              <div key={title} className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-brand-100 rounded-xl flex items-center justify-center mb-4">
                  <Icon className="w-6 h-6 text-brand-600" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">{title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Past events preview */}
      <section className="py-20 bg-white">
        <div className="container-main">
          <div className="flex items-end justify-between mb-10">
            <div>
              <h2 className="section-title mb-1">Uskutecnene akce</h2>
              <p className="text-gray-500">Ohlednutí za krasnymi setkanimi</p>
            </div>
            <Link href="/uskutecnene" className="btn-outline hidden sm:flex">
              Vsechny akce <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {pastPreview.map((event) => (
              <EventCard key={event.id} event={event} />
            ))}
          </div>
          <div className="text-center mt-8 sm:hidden">
            <Link href="/uskutecnene" className="btn-outline">
              Vsechny akce <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-r from-brand-800 to-brand-950 text-white text-center">
        <div className="container-main">
          <h2 className="font-serif text-3xl font-bold mb-4">
            Prijdte se s nami pobavit!
          </h2>
          <p className="text-brand-200 text-lg mb-8">
            Vezmete s sebou dobrou naladu. Tesime se na Vas!
          </p>
          <Link href="/kontakty" className="btn-primary bg-white text-brand-800 hover:bg-brand-50">
            Rezervovat misto <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </>
  )
}
