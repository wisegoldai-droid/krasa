import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { Calendar, MapPin, Users, ArrowLeft, Camera } from 'lucide-react'
import { getEventById, getPastEvents } from '@/lib/events'

interface Props {
  params: Promise<{ id: string }>
}

export async function generateStaticParams() {
  return getPastEvents().map((e) => ({ id: e.id }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params
  const event = getEventById(id)
  if (!event) return {}
  return { title: event.title }
}

function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString('cs-CZ', {
    weekday: 'long',
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  })
}

export default async function EventDetailPage({ params }: Props) {
  const { id } = await params
  const event = getEventById(id)
  if (!event) notFound()

  return (
    <div className="pt-24 pb-20">
      <div className="container-main max-w-4xl">
        <Link
          href="/uskutecnene"
          className="inline-flex items-center gap-2 text-brand-600 hover:text-brand-800 mb-8 text-sm font-medium transition-colors"
        >
          <ArrowLeft className="w-4 h-4" /> Zpet na uskutecnene akce
        </Link>

        {event.coverPhoto && (
          <div className="relative w-full h-72 md:h-96 rounded-3xl overflow-hidden shadow-xl mb-10">
            <Image
              src={event.coverPhoto}
              alt={event.title}
              fill
              className="object-cover object-top"
              unoptimized
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
          </div>
        )}

        <div className="flex flex-wrap gap-3 mb-4 text-sm text-gray-500">
          <span className="flex items-center gap-1.5">
            <Calendar className="w-4 h-4 text-brand-400" />
            <span className="capitalize">{formatDate(event.date)}</span>
          </span>
          <span className="flex items-center gap-1.5">
            <MapPin className="w-4 h-4 text-brand-400" />
            {event.venue}{event.venueAddress && `, ${event.venueAddress}`}
          </span>
        </div>

        <h1 className="font-serif text-3xl md:text-4xl font-bold text-gray-900 mb-6 leading-tight">
          {event.title}
        </h1>

        {event.guests.length > 0 && (
          <div className="flex items-start gap-3 mb-8 p-4 bg-brand-50 rounded-2xl">
            <Users className="w-5 h-5 text-brand-500 mt-0.5 shrink-0" />
            <div>
              <p className="text-xs text-brand-600 font-semibold uppercase tracking-wider mb-1">Hoste</p>
              <div className="flex flex-wrap gap-2">
                {event.guests.map((g) => (
                  <span key={g} className="bg-white text-brand-700 text-sm px-3 py-1 rounded-full font-medium shadow-sm border border-brand-100">
                    {g}
                  </span>
                ))}
              </div>
            </div>
          </div>
        )}

        <div className="text-gray-700 leading-relaxed mb-12 space-y-4">
          {event.description.split('\n').map((para, i) => (
            <p key={i}>{para}</p>
          ))}
        </div>

        <div className="border-t border-gray-100 pt-8 flex flex-col sm:flex-row gap-4 justify-between items-start sm:items-center">
          <Link
            href={event.galleryYear ? `/galerie?year=${event.galleryYear}` : '/galerie'}
            className="inline-flex items-center gap-2 btn-outline text-sm py-2.5"
          >
            <Camera className="w-4 h-4" />
            {event.galleryYear ? `Fotogalerie ${event.galleryYear}` : 'Fotogalerie'}
          </Link>
          <Link href="/uskutecnene" className="inline-flex items-center gap-2 text-gray-400 hover:text-brand-600 text-sm transition-colors">
            <ArrowLeft className="w-4 h-4" /> Vsechny akce
          </Link>
        </div>
      </div>
    </div>
  )
}
