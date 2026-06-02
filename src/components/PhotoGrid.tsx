'use client'

import { useState } from 'react'
import Image from 'next/image'
import { X, ChevronLeft, ChevronRight } from 'lucide-react'
import type { Photo } from '@/lib/types'

interface Props {
  photos: Photo[]
}

export default function PhotoGrid({ photos }: Props) {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null)

  function prev() {
    if (lightboxIndex === null) return
    setLightboxIndex((lightboxIndex - 1 + photos.length) % photos.length)
  }
  function next() {
    if (lightboxIndex === null) return
    setLightboxIndex((lightboxIndex + 1) % photos.length)
  }

  return (
    <>
      <div className="columns-2 sm:columns-3 lg:columns-4 gap-3 space-y-3">
        {photos.map((photo, i) => (
          <button
            key={photo.id}
            onClick={() => setLightboxIndex(i)}
            className="relative block w-full overflow-hidden rounded-xl group"
          >
            <Image
              src={photo.url}
              alt={photo.filename}
              width={400}
              height={300}
              className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-300"
              unoptimized
            />
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 rounded-xl" />
          </button>
        ))}
      </div>

      {/* Lightbox */}
      {lightboxIndex !== null && (
        <div
          className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center"
          onClick={() => setLightboxIndex(null)}
        >
          <button
            className="absolute top-4 right-4 text-white p-2 hover:bg-white/10 rounded-full transition-colors"
            onClick={() => setLightboxIndex(null)}
          >
            <X className="w-6 h-6" />
          </button>
          <button
            className="absolute left-4 top-1/2 -translate-y-1/2 text-white p-2 hover:bg-white/10 rounded-full transition-colors"
            onClick={(e) => { e.stopPropagation(); prev() }}
          >
            <ChevronLeft className="w-8 h-8" />
          </button>
          <div
            className="relative max-w-5xl max-h-[90vh] mx-auto px-16"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={photos[lightboxIndex].url}
              alt={photos[lightboxIndex].filename}
              width={1200}
              height={900}
              className="max-h-[85vh] w-auto object-contain mx-auto rounded-lg"
              unoptimized
            />
            <p className="text-center text-white/60 text-sm mt-3">
              {lightboxIndex + 1} / {photos.length} · {photos[lightboxIndex].date}
            </p>
          </div>
          <button
            className="absolute right-4 top-1/2 -translate-y-1/2 text-white p-2 hover:bg-white/10 rounded-full transition-colors"
            onClick={(e) => { e.stopPropagation(); next() }}
          >
            <ChevronRight className="w-8 h-8" />
          </button>
        </div>
      )}
    </>
  )
}
