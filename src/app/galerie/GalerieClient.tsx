'use client'

import { useState, useMemo } from 'react'
import PhotoGrid from '@/components/PhotoGrid'
import type { Photo } from '@/lib/types'

interface Props {
  photos: Photo[]
  years: string[]
}

const PAGE_SIZE = 60

export default function GalerieClient({ photos, years }: Props) {
  const [selectedYear, setSelectedYear] = useState<string>('all')
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
      {/* Year filter */}
      <div className="flex flex-wrap gap-2 mb-8">
        <button
          onClick={() => selectYear('all')}
          className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
            selectedYear === 'all'
              ? 'bg-brand-700 text-white'
              : 'bg-gray-100 text-gray-600 hover:bg-brand-100 hover:text-brand-700'
          }`}
        >
          Vše ({photos.length})
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
        Zobrazeno {visible.length} z {filtered.length} fotografií
      </p>

      <PhotoGrid photos={visible} />

      {hasMore && (
        <div className="text-center mt-10">
          <button
            onClick={() => setPage(page + 1)}
            className="btn-outline"
          >
            Načíst další ({filtered.length - visible.length} zbývá)
          </button>
        </div>
      )}
    </>
  )
}
