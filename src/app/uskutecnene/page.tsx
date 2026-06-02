import type { Metadata } from 'next'
import Image from 'next/image'
import { Calendar, MapPin, Users } from 'lucide-react'
import { getPastEvents } from '@/lib/events'

export const metadata: Metadata = { title: 'Uskutečněné akce' }

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
        <div className="space-y-10">
          {events.map((event, i) => (
            <article key={event.id} className="grid md:grid-cols-[280px_1fr] gap-8 items-start">
              {/* Photo */}
              {event.coverPhoto ? (
                <div className="relative h-56 md:h-full min-h-48 rounded-2xl overflow-hidden shadow-md">
                  <Image
                    src={event.coverPhoto}
                    alt={event.title}
                    fill
                    className="object-cover"
                    unoptimized
                  />
                </div>
              ) : (
                <div className="h-56 md:h-full min-h-48 rounded-2xl bg-brand-100 flex items-center justify-center text-brand-300">
                  <span className="text-5xl">🌸</span>
                </div>
              )}

              {/* Content */}
              <div>
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

                <h2 className="font-serif text-2xl font-bold text-gray-900 mb-3 leading-tight">
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

                <p className="text-gray-600 leading-relaxed">{event.description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  )
}
