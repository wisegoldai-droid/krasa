'use client'

import { useState, useMemo } from 'react'
import PhotoGrid from '@/components/PhotoGrid'
import type { Photo } from '@/lib/types'

interface Props {
  photos: Photo[]
  years: string[]
<<<<<<< HEAD
  defaultYear?: string
=======
>>>>>>> 19b9d3ffbc72b4a9248bf973fd2a2655d3b4e37d
}

const PAGE_SIZE = 60

<<<<<<< HEAD
export default function GalerieClient({ photos, years, defaultYear }: Props) {
  const [selectedYear, setSelectedYear] = useState<string>(defaultYear ?? 'all')
=======
export default function GalerieClient({ photos, years }: Props) {
  const [selectedYear, setSelectedYear] = useState<string>('all')
>>>>>>> 19b9d3ffbc72b4a9248bf973fd2a2655d3b4e37d
  const [page, setPage] = useState(1)

  const filtered = useMemo(() => {
    if (selectedYear === 'all') return photos
    return photos.filter((p) => p.date?.startsWith(selectedYear))
  }, [photos, selectedYear])

  const visible = filtered.slice(0, page * PAGE_SIZE)
  const hasMore = visible.length < filtered.length

  function selectYear(y: string) {
    setSelectedYear(y)
    setPage(1)
  }

  return (
    <>
<<<<<<< HEAD
=======
      {/* Year filter */}
>>>>>>> 19b9d3ffbc72b4a9248bf973fd2a2655d3b4e37d
      <div className="flex flex-wrap gap-2 mb-8">
        <button
          onClick={() => selectYear('all')}
          className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
            selectedYear === 'all'
              ? 'bg-brand-700 text-white'
              : 'bg-gray-100 text-gray-600 hover:bg-brand-100 hover:text-brand-700'
          }`}
        >
<<<<<<< HEAD
          Vse ({photos.length})
=======
          Vše ({photos.length})
>>>>>>> 19b9d3ffbc72b4a9248bf973fd2a2655d3b4e37d
        </button>
        {years.map((y) => {
          const count = photos.filter((p) => p.date?.startsWith(y)).length
          return (
            <button
              key={y}
              onClick={() => selectYear(y)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                selectedYear === y
                  ? 'bg-brand-700 text-white'
                  : 'bg-gray-100 text-gray-600 hover:bg-brand-100 hover:text-brand-700'
              }`}
            >
              {y} ({count})
            </button>
          )
        })}
      </div>

      <p className="text-gray-400 text-sm mb-6">
<<<<<<< HEAD
        Zobrazeno {visible.length} z {filtered.length} fotografii
=======
        Zobrazeno {visible.length} z {filtered.length} fotografií
>>>>>>> 19b9d3ffbc72b4a9248bf973fd2a2655d3b4e37d
      </p>

      <PhotoGrid photos={visible} />

      {hasMore && (
        <div className="text-center mt-10">
<<<<<<< HEAD
          <button onClick={() => setPage(page + 1)} className="btn-outline">
            Nacist dalsi ({filtered.length - visible.length} zbyvá)
=======
          <button
            onClick={() => setPage(page + 1)}
            className="btn-outline"
          >
            Načíst další ({filtered.length - visible.length} zbývá)
>>>>>>> 19b9d3ffbc72b4a9248bf973fd2a2655d3b4e37d
          </button>
        </div>
      )}
    </>
  )
}
