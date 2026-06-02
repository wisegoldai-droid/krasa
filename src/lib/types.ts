export interface Photo {
  id: number
  filename: string
  size: string
  url: string
  date: string // YYYY-MM-DD
}

export interface Event {
  id: string
  title: string
  date: string        // ISO date
  time?: string       // "15:30"
  endTime?: string    // "17:30"
  venue: string
  venueAddress?: string
  description: string
  guests: string[]
  status: 'upcoming' | 'past'
  coverPhoto?: string
  reportText?: string
  photos?: Photo[]
  galleryYear?: string
}
