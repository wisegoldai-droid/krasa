import type { Metadata } from 'next'

export const metadata: Metadata = { title: 'Videa a zdravice Marka Ebena' }

const videos = [
  {
    title: 'Zdravice Marka Ebena',
    description: 'Marek Eben zdraví účastníky pořadu Krása zralého věku',
    youtubeId: 'qGzon5decdo',
  },
  {
    title: 'Krása zralého věku',
    description: 'Záznam z pořadu Krása zralého věku',
    youtubeId: 'g1CvPLyueT0',
  },
  {
    title: 'VIII. setkání - Praha, Secesní sál Na Marjánce (1. část)',
    description: '26. 11. 2009, Praha',
    youtubeId: 'i2XGkTn6Ap8',
  },
]

function YouTubeEmbed({ id, title }: { id: string; title: string }) {
  return (
    <div className="relative w-full aspect-video rounded-2xl overflow-hidden shadow-lg bg-black">
      <iframe
        src={`https://www.youtube.com/embed/${id}?rel=0`}
        title={title}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        className="absolute inset-0 w-full h-full"
      />
    </div>
  )
}

export default function VideoPage() {
  return (
    <div className="pt-24 pb-20">
      <div className="bg-gradient-to-br from-brand-50 to-purple-50 py-16 mb-12">
        <div className="container-main text-center">
          <h1 className="section-title">Videa a zdravice</h1>
          <p className="section-subtitle">Zdravice Marka Ebena a záznamy z pořadů</p>
        </div>
      </div>

      <div className="container-main">
        <div className="grid md:grid-cols-2 gap-10">
          {videos.map((video) => (
            <article key={video.youtubeId} className="space-y-3">
              <YouTubeEmbed id={video.youtubeId} title={video.title} />
              <h3 className="font-serif text-lg font-bold text-gray-900">{video.title}</h3>
              {video.description && (
                <p className="text-gray-500 text-sm">{video.description}</p>
              )}
            </article>
          ))}
        </div>

        <div className="mt-16 bg-brand-50 rounded-2xl p-8 text-center">
          <p className="text-brand-800 font-medium mb-2">Máte další video k přidání?</p>
          <p className="text-gray-500 text-sm">
            Otevřete soubor <code className="bg-white px-2 py-0.5 rounded text-xs border">src/app/video/page.tsx</code> a
            přidejte YouTube ID do pole <code className="bg-white px-2 py-0.5 rounded text-xs border">videos</code>.
          </p>
        </div>
      </div>
    </div>
  )
}
