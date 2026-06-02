import type { Metadata } from 'next'
import Image from 'next/image'
<<<<<<< HEAD
import Link from 'next/link'
import { Calendar, MapPin, Users, ArrowRight } from 'lucide-react'
import { getPastEvents } from '@/lib/events'

export const metadata: Metadata = { title: 'Uskutecnene akce' }
=======
import { Calendar, MapPin, Users } from 'lucide-react'
import { getPastEvents } from '@/lib/events'

export const metadata: Metadata = { title: 'Uskutečněné akce' }
>>>>>>> 19b9d3ffbc72b4a9248bf973fd2a2655d3b4e37d

function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString('cs-CZ', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  })
}

export default function UskutecnenePage() {
  const events = getPastEvents()

  return (
    <div className="pt-24 pb-20">
      <div className="bg-gradient-to-br from-brand-50 to-purple-50 py-16 mb-12">
        <div className="container-main text-center">
          <h1 className="section-title">Uskutečněné akce</h1>
          <p className="section-subtitle max-w-2xl mx-auto">
            Ohlédnutí za krásnými setkáními od roku 2009 do dnes
          </p>
        </div>
      </div>

      <div className="container-main">
<<<<<<< HEAD
        <div className="space-y-8">
          {events.map((event, i) => (
            <Link
              key={event.id}
              href={`/uskutecnene/${event.id}`}
              className="group grid md:grid-cols-[280px_1fr] gap-6 items-start bg-white rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden border border-gray-100 hover:border-brand-200"
            >
              {event.coverPhoto ? (
                <div className="relative h-52 md:h-full min-h-52 overflow-hidden">
=======
        <div className="space-y-10">
          {events.map((event, i) => (
            <article key={event.id} className="grid md:grid-cols-[280px_1fr] gap-8 items-start">
              {/* Photo */}
              {event.coverPhoto ? (
                <div className="relative h-56 md:h-full min-h-48 rounded-2xl overflow-hidden shadow-md">
>>>>>>> 19b9d3ffbc72b4a9248bf973fd2a2655d3b4e37d
                  <Image
                    src={event.coverPhoto}
                    alt={event.title}
                    fill
<<<<<<< HEAD
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
=======
                    className="object-cover"
>>>>>>> 19b9d3ffbc72b4a9248bf973fd2a2655d3b4e37d
                    unoptimized
                  />
                </div>
              ) : (
<<<<<<< HEAD
                <div className="h-52 bg-brand-100 flex items-center justify-center text-5xl">
                  🌸
                </div>
              )}

              <div className="p-6">
=======
                <div className="h-56 md:h-full min-h-48 rounded-2xl bg-brand-100 flex items-center justify-center text-brand-300">
                  <span className="text-5xl">🌸</span>
                </div>
              )}

              {/* Content */}
              <div>
>>>>>>> 19b9d3ffbc72b4a9248bf973fd2a2655d3b4e37d
                <div className="flex flex-wrap items-center gap-3 mb-3">
                  <span className="bg-brand-100 text-brand-700 text-xs font-bold px-3 py-1 rounded-full">
                    #{events.length - i}
                  </span>
                  <span className="text-gray-400 text-sm flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5" />
                    {formatDate(event.date)}
                  </span>
                  <span className="text-gray-400 text-sm flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5" />
                    {event.venue}
                  </span>
                </div>

<<<<<<< HEAD
                <h2 className="font-serif text-xl font-bold text-gray-900 mb-3 leading-tight group-hover:text-brand-700 transition-colors">
=======
                <h2 className="font-serif text-2xl font-bold text-gray-900 mb-3 leading-tight">
>>>>>>> 19b9d3ffbc72b4a9248bf973fd2a2655d3b4e37d
                  {event.title}
                </h2>

                {event.guests.length > 0 && (
                  <div className="flex items-center gap-2 mb-3">
                    <Users className="w-4 h-4 text-brand-400 shrink-0" />
                    <div className="flex flex-wrap gap-1.5">
                      {event.guests.map((g) => (
                        <span key={g} className="bg-brand-50 text-brand-700 text-xs px-2.5 py-0.5 rounded-full font-medium">
                          {g}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

<<<<<<< HEAD
                <p className="text-gray-500 text-sm leading-relaxed line-clamp-3 mb-4">
                  {event.description}
                </p>

                <span className="inline-flex items-center gap-1 text-brand-600 text-sm font-medium group-hover:gap-2 transition-all">
                  Číst více <ArrowRight className="w-4 h-4" />
                </span>
              </div>
            </Link>
=======
                <p className="text-gray-600 leading-relaxed">{event.description}</p>
              </div>
            </article>
>>>>>>> 19b9d3ffbc72b4a9248bf973fd2a2655d3b4e37d
          ))}
        </div>
      </div>
    </div>
  )
}
