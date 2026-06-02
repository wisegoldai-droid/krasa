'use client'

<<<<<<< HEAD
import { useState, useEffect, useCallback, useRef } from 'react'
=======
import { useState } from 'react'
>>>>>>> 19b9d3ffbc72b4a9248bf973fd2a2655d3b4e37d
import Image from 'next/image'
import { X, ChevronLeft, ChevronRight } from 'lucide-react'
import type { Photo } from '@/lib/types'

interface Props {
  photos: Photo[]
}

export default function PhotoGrid({ photos }: Props) {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null)
<<<<<<< HEAD
  const touchStartX = useRef<number | null>(null)

  const close = useCallback(() => setLightboxIndex(null), [])

  const prev = useCallback(() => {
    setLightboxIndex((i) => i === null ? null : (i - 1 + photos.length) % photos.length)
  }, [photos.length])

  const next = useCallback(() => {
    setLightboxIndex((i) => i === null ? null : (i + 1) % photos.length)
  }, [photos.length])

  // Klavesnice
  useEffect(() => {
    if (lightboxIndex === null) return
    function handleKey(e: KeyboardEvent) {
      if (e.key === 'ArrowLeft') prev()
      if (e.key === 'ArrowRight') next()
      if (e.key === 'Escape') close()
    }
    window.addEventListener('keydown', handleKey)
    return () => window.removeEventListener('keydown', handleKey)
  }, [lightboxIndex, prev, next, close])

  // Zamezit scrollovani pri otevreni lightboxu
  useEffect(() => {
    document.body.style.overflow = lightboxIndex !== null ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [lightboxIndex])

  function handleTouchStart(e: React.TouchEvent) {
    touchStartX.current = e.touches[0].clientX
  }

  function handleTouchEnd(e: React.TouchEvent) {
    if (touchStartX.current === null) return
    const diff = touchStartX.current - e.changedTouches[0].clientX
    if (Math.abs(diff) > 50) {
      diff > 0 ? next() : prev()
    }
    touchStartX.current = null
=======

  function prev() {
    if (lightboxIndex === null) return
    setLightboxIndex((lightboxIndex - 1 + photos.length) % photos.length)
  }
  function next() {
    if (lightboxIndex === null) return
    setLightboxIndex((lightboxIndex + 1) % photos.length)
>>>>>>> 19b9d3ffbc72b4a9248bf973fd2a2655d3b4e37d
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

<<<<<<< HEAD
      {lightboxIndex !== null && (
        <div
          className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center select-none"
          onClick={close}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          {/* Zavrít */}
          <button
            className="absolute top-4 right-4 text-white p-2 hover:bg-white/10 rounded-full transition-colors z-10"
            onClick={close}
            title="Zavrit (Esc)"
          >
            <X className="w-6 h-6" />
          </button>

          {/* Sipka vlevo */}
          <button
            className="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 text-white p-3 hover:bg-white/10 rounded-full transition-colors z-10"
            onClick={(e) => { e.stopPropagation(); prev() }}
            title="Predchozi (←)"
          >
            <ChevronLeft className="w-8 h-8" />
          </button>

          {/* Fotka */}
=======
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
>>>>>>> 19b9d3ffbc72b4a9248bf973fd2a2655d3b4e37d
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
<<<<<<< HEAD
            <div className="flex items-center justify-center gap-4 mt-3">
              <p className="text-white/60 text-sm">
                {lightboxIndex + 1} / {photos.length}
              </p>
              <p className="text-white/40 text-xs">{photos[lightboxIndex].date}</p>
            </div>
          </div>

          {/* Sipka vpravo */}
          <button
            className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 text-white p-3 hover:bg-white/10 rounded-full transition-colors z-10"
            onClick={(e) => { e.stopPropagation(); next() }}
            title="Dalsi (→)"
          >
            <ChevronRight className="w-8 h-8" />
          </button>

          {/* Klavesnicova napoveda */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white/20 text-xs hidden md:flex gap-4">
            <span>← → pohyb</span>
            <span>Esc zavrit</span>
          </div>
=======
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
>>>>>>> 19b9d3ffbc72b4a9248bf973fd2a2655d3b4e37d
        </div>
      )}
    </>
  )
}
