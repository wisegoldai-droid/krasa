import Link from 'next/link'
<<<<<<< HEAD
import { Flower2, Phone, MapPin } from 'lucide-react'
=======
import { Flower2, Phone, MapPin, Mail } from 'lucide-react'
>>>>>>> 19b9d3ffbc72b4a9248bf973fd2a2655d3b4e37d

export default function Footer() {
  return (
    <footer className="bg-brand-950 text-white mt-24">
      <div className="container-main py-14 grid md:grid-cols-3 gap-10">
<<<<<<< HEAD
=======
        {/* Brand */}
>>>>>>> 19b9d3ffbc72b4a9248bf973fd2a2655d3b4e37d
        <div>
          <div className="flex items-center gap-2 mb-4">
            <Flower2 className="w-6 h-6 text-brand-400" />
            <span className="font-serif font-bold text-lg">Krása zralého věku</span>
          </div>
          <p className="text-brand-200 text-sm leading-relaxed">
            Hudebně komponovaný pořad určený dříve narozeným. Každé setkání je krásné,
            prostoupené láskou a naplněno radostí ze společného bytí.
          </p>
<<<<<<< HEAD
          <p className="mt-4 text-brand-400 text-xs italic">Stářím život nekončí</p>
        </div>

=======
          <p className="mt-4 text-brand-400 text-xs italic">„Stářím život nekončí"</p>
        </div>

        {/* Links */}
>>>>>>> 19b9d3ffbc72b4a9248bf973fd2a2655d3b4e37d
        <div>
          <h3 className="font-semibold text-brand-300 uppercase tracking-wider text-xs mb-4">
            Navigace
          </h3>
          <ul className="space-y-2 text-sm text-brand-200">
            {[
              ['/program', 'Program 2026'],
              ['/galerie', 'Fotogalerie'],
              ['/uskutecnene', 'Uskutečněné akce'],
<<<<<<< HEAD
              ['/video', 'Videa a zdravice'],
              ['/partneri', 'Partneři akcí'],
              ['/odkazy', 'Napsali o nás'],
=======
>>>>>>> 19b9d3ffbc72b4a9248bf973fd2a2655d3b4e37d
              ['/o-nas', 'O nás'],
              ['/kontakty', 'Kontakty'],
            ].map(([href, label]) => (
              <li key={href}>
                <Link href={href} className="hover:text-white transition-colors">
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

<<<<<<< HEAD
=======
        {/* Contact */}
>>>>>>> 19b9d3ffbc72b4a9248bf973fd2a2655d3b4e37d
        <div>
          <h3 className="font-semibold text-brand-300 uppercase tracking-wider text-xs mb-4">
            Kontakt
          </h3>
          <ul className="space-y-3 text-sm text-brand-200">
            <li className="flex items-start gap-2">
              <MapPin className="w-4 h-4 mt-0.5 shrink-0 text-brand-400" />
<<<<<<< HEAD
              <span>Perštejnská 286/16, PSČ 184 00<br />Praha 8 - Dolní Chabry</span>
=======
              <span>Perštejnská 286/16, PSČ 184 00<br />Praha 8 – Dolní Chabry</span>
>>>>>>> 19b9d3ffbc72b4a9248bf973fd2a2655d3b4e37d
            </li>
            <li className="flex items-center gap-2">
              <Phone className="w-4 h-4 shrink-0 text-brand-400" />
              <a href="tel:+420602444775" className="hover:text-white transition-colors">
                602 444 775
              </a>
            </li>
            <li className="flex items-center gap-2">
              <Phone className="w-4 h-4 shrink-0 text-brand-400" />
              <a href="tel:+420608118899" className="hover:text-white transition-colors">
                608 11 88 99
              </a>
            </li>
<<<<<<< HEAD
            <li className="text-brand-300 text-xs">Mgr. Hana Marie Kunešová</li>
=======
            <li className="flex items-center gap-2">
              <span className="w-4 h-4 shrink-0 text-brand-400 text-xs">✉</span>
              <span className="text-brand-300 text-xs">Mgr. Hana Marie Kunešová</span>
            </li>
>>>>>>> 19b9d3ffbc72b4a9248bf973fd2a2655d3b4e37d
          </ul>
          <div className="mt-4 text-xs text-brand-200">
            <strong className="text-brand-300">Rezervace míst:</strong><br />
            Jitka Goldsteinová<br />
            <a href="tel:+420283852858" className="hover:text-white">283 852 858</a>
            {' / '}
            <a href="tel:+420604976653" className="hover:text-white">604 976 653</a>
          </div>
        </div>
      </div>

      <div className="border-t border-brand-900 py-5 text-center text-brand-500 text-xs">
<<<<<<< HEAD
        &copy; 2009&ndash;{new Date().getFullYear()} Krása zralého věku &middot; Agentura KUKR &middot; Všechna práva vyhrazena
=======
        © 2009–{new Date().getFullYear()} Krása zralého věku · Agentura KUKR · Všechna práva vyhrazena
>>>>>>> 19b9d3ffbc72b4a9248bf973fd2a2655d3b4e37d
      </div>
    </footer>
  )
}
