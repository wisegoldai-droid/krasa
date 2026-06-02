import type { Metadata } from 'next'
import Link from 'next/link'
import { Calendar, MapPin, Clock, Phone, Users, ArrowRight } from 'lucide-react'
import { getUpcomingEvents } from '@/lib/events'

export const metadata: Metadata = { title: 'Program 2026' }

function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString('cs-CZ', {
    weekday: 'long',
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  })
}

export default function ProgramPage() {
  const events = getUpcomingEvents()

  return (
    <div className="pt-24 pb-20">
      {/* Header */}
      <div className="bg-gradient-to-br from-brand-50 to-purple-50 py-16 mb-12">
        <div className="container-main text-center">
          <h1 className="section-title">Program 2026</h1>
          <p className="section-subtitle max-w-2xl mx-auto">
            Plán nadcházejících setkání pořadu Krása zralého věku. Počet míst je omezený —
            rezervujte včas!
          </p>
        </div>
      </div>

      <div className="container-main">
        {events.length === 0 ? (
          <div className="text-center py-20 text-gray-400">
            <Calendar className="w-12 h-12 mx-auto mb-4 opacity-40" />
            <p className="text-lg">Brzy zveřejníme plán akcí</p>
          </div>
        ) : (
          <div className="space-y-8">
            {events.map((event) => (
              <div
                key={event.id}
                className="card p-8 border-l-4 border-brand-600"
              >
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6">
                  <div className="flex-1">
                    <span className="inline-block bg-brand-100 text-brand-700 text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full mb-3">
                      Nejbližší akce
                    </span>
                    <h2 className="font-serif text-2xl font-bold text-gray-900 mb-4">
                      {event.title}
                    </h2>

                    <div className="grid sm:grid-cols-2 gap-3 mb-6">
                      <div className="flex items-center gap-2 text-gray-600 text-sm">
                        <Calendar className="w-4 h-4 text-brand-500 shrink-0" />
                        <span className="capitalize">{formatDate(event.date)}</span>
                      </div>
                      {event.time && (
                        <div className="flex items-center gap-2 text-gray-600 text-sm">
                          <Clock className="w-4 h-4 text-brand-500 shrink-0" />
                          <span>{event.time} – {event.endTime} hod.</span>
                        </div>
                      )}
                      <div className="flex items-center gap-2 text-gray-600 text-sm">
                        <MapPin className="w-4 h-4 text-brand-500 shrink-0" />
                        <span>{event.venue}{event.venueAddress && `, ${event.venueAddress}`}</span>
                      </div>
                      {event.guests.length > 0 && (
                        <div className="flex items-center gap-2 text-gray-600 text-sm">
                          <Users className="w-4 h-4 text-brand-500 shrink-0" />
                          <span>{event.guests.join(', ')}</span>
                        </div>
                      )}
                    </div>

                    <p className="text-gray-600 leading-relaxed">{event.description}</p>
                  </div>

                  {/* Reservation box */}
                  <div className="md:w-72 shrink-0">
                    <div className="bg-brand-50 rounded-2xl p-6 border border-brand-100">
                      <p className="font-semibold text-brand-800 mb-1 text-sm uppercase tracking-wide">
                        POZOR! Počet míst je omezený!
                      </p>
                      <p className="text-gray-600 text-sm mb-4">Rezervujte místo co nejdříve.</p>
                      <div className="space-y-2 mb-4">
                        <div className="flex items-center gap-2 text-sm text-gray-700">
                          <Phone className="w-4 h-4 text-brand-500" />
                          <div>
                            <p className="font-medium">Jitka Goldsteinová</p>
                            <a href="tel:+420283852858" className="text-brand-600 hover:underline">283 852 858</a>
                            <span className="text-gray-400 mx-1">/</span>
                            <a href="tel:+420604976653" className="text-brand-600 hover:underline">604 976 653</a>
                          </div>
                        </div>
                      </div>
                      <Link href="/kontakty" className="btn-primary w-full justify-center text-sm py-2.5">
                        Napsat zprávu <ArrowRight className="w-4 h-4" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Info banner */}
        <div className="mt-16 bg-gray-50 rounded-2xl p-8 text-center">
          <h3 className="font-serif text-xl font-bold mb-2">Chcete být informováni o nových akcích?</h3>
          <p className="text-gray-500 mb-4">Kontaktujte nás a přidejte se na seznam zájemců.</p>
          <Link href="/kontakty" className="btn-outline">
            Kontaktovat nás
          </Link>
        </div>
      </div>
    </div>
  )
}
