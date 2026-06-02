import Image from 'next/image'
import Link from 'next/link'
import { Calendar, MapPin, Users, ArrowRight } from 'lucide-react'
import type { Event } from '@/lib/types'

interface Props {
  event: Event
  variant?: 'default' | 'featured'
}

function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString('cs-CZ', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  })
}

export default function EventCard({ event, variant = 'default' }: Props) {
  if (variant === 'featured') {
    return (
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-brand-800 to-brand-950 text-white shadow-2xl">
        {event.coverPhoto && (
          <div className="absolute inset-0 opacity-20">
            <Image src={event.coverPhoto} alt="" fill className="object-cover" unoptimized />
          </div>
        )}
        <div className="relative z-10 p-8 md:p-12">
          <span className="inline-block bg-gold-400 text-brand-950 text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full mb-4">
            Nejbližší akce
          </span>
          <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4 leading-tight">
            {event.title}
          </h2>
          <div className="flex flex-col sm:flex-row gap-4 text-brand-200 text-sm mb-6">
            <span className="flex items-center gap-1.5">
              <Calendar className="w-4 h-4" />
              {formatDate(event.date)}
              {event.time && ` · ${event.time}–${event.endTime}`}
            </span>
            <span className="flex items-center gap-1.5">
              <MapPin className="w-4 h-4" />
              {event.venue}
            </span>
          </div>
          <p className="text-brand-100 leading-relaxed mb-8 max-w-2xl">{event.description}</p>
          {event.guests.length > 0 && (
            <div className="flex items-center gap-2 mb-8">
              <Users className="w-4 h-4 text-brand-300" />
              <span className="text-brand-200 text-sm">{event.guests.join(', ')}</span>
            </div>
          )}
          <Link href="/kontakty" className="btn-primary bg-white text-brand-800 hover:bg-brand-50 hover:text-brand-900 hover:shadow-white/20">
            Rezervovat místo <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    )
  }

  return (
    <article className="card group">
      {event.coverPhoto && (
        <div className="relative h-52 overflow-hidden">
          <Image
            src={event.coverPhoto}
            alt={event.title}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-500"
            unoptimized
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
        </div>
      )}
      <div className="p-5">
        <p className="text-brand-600 text-xs font-semibold uppercase tracking-wider mb-1">
          {formatDate(event.date)}
        </p>
        <h3 className="font-serif font-bold text-lg text-gray-900 mb-2 leading-snug">
          {event.title}
        </h3>
        <p className="text-gray-500 text-sm mb-3 flex items-center gap-1.5">
          <MapPin className="w-3.5 h-3.5 shrink-0" />
          {event.venue}
        </p>
        <p className="text-gray-600 text-sm line-clamp-3 leading-relaxed">{event.description}</p>
        {event.guests.length > 0 && (
          <div className="mt-3 flex flex-wrap gap-1">
            {event.guests.map((g) => (
              <span key={g} className="bg-brand-50 text-brand-700 text-xs px-2 py-0.5 rounded-full">
                {g}
              </span>
            ))}
          </div>
        )}
      </div>
    </article>
  )
}
