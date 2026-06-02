import type { Metadata } from 'next'
import GalerieClient from './GalerieClient'
import photosData from '@/lib/photos.json'
import type { Photo } from '@/lib/types'

export const metadata: Metadata = { title: 'Fotogalerie' }

<<<<<<< HEAD
interface Props {
  searchParams: Promise<{ year?: string }>
}

export default async function GaleriePage({ searchParams }: Props) {
  const { year } = await searchParams
  const photos = photosData as Photo[]
=======
export default function GaleriePage() {
  const photos = photosData as Photo[]
  // Build year list
>>>>>>> 19b9d3ffbc72b4a9248bf973fd2a2655d3b4e37d
  const years = [...new Set(photos.map((p) => p.date?.slice(0, 4)).filter(Boolean))].sort(
    (a, b) => Number(b) - Number(a)
  )

  return (
    <div className="pt-24 pb-20">
      <div className="bg-gradient-to-br from-brand-50 to-purple-50 py-16 mb-12">
        <div className="container-main text-center">
          <h1 className="section-title">Fotogalerie</h1>
          <p className="section-subtitle">
<<<<<<< HEAD
            {photos.length} fotografii z akci 2009-2026
=======
            {photos.length} fotografií z akcí 2009–2026
>>>>>>> 19b9d3ffbc72b4a9248bf973fd2a2655d3b4e37d
          </p>
        </div>
      </div>
      <div className="container-main">
<<<<<<< HEAD
        <GalerieClient photos={photos} years={years as string[]} defaultYear={year} />
=======
        <GalerieClient photos={photos} years={years as string[]} />
>>>>>>> 19b9d3ffbc72b4a9248bf973fd2a2655d3b4e37d
      </div>
    </div>
  )
}
