import type { Metadata } from 'next'
import { Play } from 'lucide-react'

export const metadata: Metadata = { title: 'Videa a zdravice Marka Ebena' }

// -- Přidejte YouTube/Vimeo URL videí sem --
const videos = [
  {
    title: 'Zdravice Marka Ebena',
    description: 'Marek Eben zdraví účastníky pořadu Krása zralého věku',
    youtubeId: '', // Vyplňte YouTube ID videa (část za ?v= v URL)
    thumbnail: null,
  },
  // Přidejte další videa stejným způsobem
]

function YouTubeEmbed({ id, title }: { id: string; title: string }) {
  return (
    <div className="relative w-full aspect-video rounded-2xl overflow-hidden shadow-lg">
      <iframe
        src={`https://www.youtube.com/embed/${id}`}
        title={title}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        className="absolute inset-0 w-full h-full"
      />
    </div>
  )
}

export default function VideoPage() {
  const validVideos = videos.filter((v) => v.youtubeId)

  return (
    <div className="pt-24 pb-20">
      <div className="bg-gradient-to-br from-brand-50 to-purple-50 py-16 mb-12">
        <div className="container-main text-center">
          <h1 className="section-title">Videa a zdravice</h1>
          <p className="section-subtitle">Zdravice Marka Ebena a záznamy z pořadů</p>
        </div>
      </div>

      <div className="container-main">
        {validVideos.length === 0 ? (
          <div className="text-center py-20">
            <div className="w-20 h-20 bg-brand-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Play className="w-10 h-10 text-brand-400" />
            </div>
            <h2 className="font-serif text-xl font-bold text-gray-700 mb-2">Videa budou brzy</h2>
            <p className="text-gray-400 max-w-md mx-auto">
              Připravujeme videa a zdravice z pořadů. Brzy zde najdete zdravici Marka Ebena
              a záznamy z akcí.
            </p>
            <p className="text-gray-300 text-sm mt-6">
              Pro správce: doplňte YouTube ID v souboru <code className="bg-gray-100 px-2 py-0.5 rounded text-xs">src/app/video/page.tsx</code>
            </p>
          </div>
        ) : (
          <div className="grid md:grid-cols-2 gap-8">
            {validVideos.map((video) => (
              <article key={video.youtubeId} className="space-y-3">
                <YouTubeEmbed id={video.youtubeId} title={video.title} />
                <h3 className="font-serif text-lg font-bold text-gray-900">{video.title}</h3>
                {video.description && (
                  <p className="text-gray-500 text-sm">{video.description}</p>
                )}
              </article>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
