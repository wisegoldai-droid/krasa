import type { Metadata } from 'next'
import GalerieClient from './GalerieClient'
import photosData from '@/lib/photos.json'
import type { Photo } from '@/lib/types'

export const metadata: Metadata = { title: 'Fotogalerie' }

export default function GaleriePage() {
  const photos = photosData as Photo[]
  // Build year list
  const years = [...new Set(photos.map((p) => p.date?.slice(0, 4)).filter(Boolean))].sort(
    (a, b) => Number(b) - Number(a)
  )

  return (
    <div className="pt-24 pb-20">
      <div className="bg-gradient-to-br from-brand-50 to-purple-50 py-16 mb-12">
        <div className="container-main text-center">
          <h1 className="section-title">Fotogalerie</h1>
          <p className="section-subtitle">
            {photos.length} fotografií z akcí 2009–2026
          </p>
        </div>
      </div>
      <div className="container-main">
        <GalerieClient photos={photos} years={years as string[]} />
      </div>
    </div>
  )
}
