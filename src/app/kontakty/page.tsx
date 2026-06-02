import type { Metadata } from 'next'
<<<<<<< HEAD
import { Phone, MapPin, Clock } from 'lucide-react'
import ContactForm from '@/components/ContactForm'
=======
import { Phone, MapPin, Clock, Mail } from 'lucide-react'
>>>>>>> 19b9d3ffbc72b4a9248bf973fd2a2655d3b4e37d

export const metadata: Metadata = { title: 'Kontakty' }

export default function KontaktyPage() {
  return (
    <div className="pt-24 pb-20">
      <div className="bg-gradient-to-br from-brand-50 to-purple-50 py-16 mb-12">
        <div className="container-main text-center">
          <h1 className="section-title">Kontakty</h1>
          <p className="section-subtitle">Neváhejte se na nás obrátit</p>
        </div>
      </div>

      <div className="container-main">
        <div className="grid md:grid-cols-2 gap-10 items-start">
<<<<<<< HEAD
=======
          {/* Contact info */}
>>>>>>> 19b9d3ffbc72b4a9248bf973fd2a2655d3b4e37d
          <div className="space-y-6">
            <div className="card p-7">
              <h2 className="font-serif text-xl font-bold mb-5 text-gray-900">Autorka pořadu</h2>
              <div className="space-y-4">
                <div className="flex gap-3">
                  <div className="w-10 h-10 bg-brand-100 rounded-xl flex items-center justify-center shrink-0">
<<<<<<< HEAD
                    <span className="text-brand-600 font-bold text-sm">HK</span>
=======
                    <Mail className="w-5 h-5 text-brand-600" />
>>>>>>> 19b9d3ffbc72b4a9248bf973fd2a2655d3b4e37d
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">Mgr. Hana Marie Kunešová</p>
                    <p className="text-gray-500 text-sm">Autorka a moderátorka pořadu</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <div className="w-10 h-10 bg-brand-100 rounded-xl flex items-center justify-center shrink-0">
                    <Phone className="w-5 h-5 text-brand-600" />
                  </div>
                  <div>
                    <a href="tel:+420602444775" className="block font-semibold text-brand-700 hover:underline">
                      602 444 775
                    </a>
                    <a href="tel:+420608118899" className="block text-brand-600 hover:underline text-sm">
                      608 11 88 99
                    </a>
                  </div>
                </div>
                <div className="flex gap-3">
                  <div className="w-10 h-10 bg-brand-100 rounded-xl flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5 text-brand-600" />
                  </div>
                  <div>
                    <p className="text-gray-700">Perštejnská 286/16</p>
<<<<<<< HEAD
                    <p className="text-gray-700">PSČ 184 00, Praha 8 - Dolní Chabry</p>
=======
                    <p className="text-gray-700">PSČ 184 00, Praha 8 – Dolní Chabry</p>
>>>>>>> 19b9d3ffbc72b4a9248bf973fd2a2655d3b4e37d
                  </div>
                </div>
              </div>
            </div>

<<<<<<< HEAD
            <div className="card p-7 border-l-4 border-yellow-400">
=======
            <div className="card p-7 border-l-4 border-gold-500">
>>>>>>> 19b9d3ffbc72b4a9248bf973fd2a2655d3b4e37d
              <h2 className="font-serif text-xl font-bold mb-5 text-gray-900">Rezervace míst</h2>
              <p className="text-gray-500 text-sm mb-4">
                Počet míst v sále je omezený. Pro rezervaci kontaktujte:
              </p>
              <div className="flex gap-3">
<<<<<<< HEAD
                <div className="w-10 h-10 bg-yellow-50 rounded-xl flex items-center justify-center shrink-0">
                  <Phone className="w-5 h-5 text-yellow-600" />
=======
                <div className="w-10 h-10 bg-gold-400/20 rounded-xl flex items-center justify-center shrink-0">
                  <Phone className="w-5 h-5 text-gold-600" />
>>>>>>> 19b9d3ffbc72b4a9248bf973fd2a2655d3b4e37d
                </div>
                <div>
                  <p className="font-semibold text-gray-900">Jitka Goldsteinová</p>
                  <a href="tel:+420283852858" className="block text-brand-700 hover:underline font-medium">
                    283 852 858
                  </a>
                  <a href="tel:+420604976653" className="block text-brand-600 hover:underline text-sm">
                    604 976 653
                  </a>
                </div>
              </div>
            </div>

            <div className="card p-7">
              <h2 className="font-serif text-xl font-bold mb-5 text-gray-900">Místo konání</h2>
              <div className="flex gap-3">
                <div className="w-10 h-10 bg-brand-100 rounded-xl flex items-center justify-center shrink-0">
                  <Clock className="w-5 h-5 text-brand-600" />
                </div>
                <div>
                  <p className="font-semibold text-gray-900">Divadelní sál Chaberského dvora</p>
<<<<<<< HEAD
                  <p className="text-gray-500 text-sm">Praha 8 - Dolní Chabry</p>
                  <p className="text-gray-400 text-sm mt-1">Typicky 15:30 - 17:30 hod.</p>
                  <a
                    href="https://maps.google.com/?q=Chabersky+dvur+Praha+8"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-brand-600 text-sm hover:underline mt-2 inline-block"
                  >
                    Otevřít v Google Maps
                  </a>
=======
                  <p className="text-gray-500 text-sm">Praha 8 – Dolní Chabry</p>
                  <p className="text-gray-400 text-sm mt-1">Typicky 15:30 – 17:30 hod.</p>
>>>>>>> 19b9d3ffbc72b4a9248bf973fd2a2655d3b4e37d
                </div>
              </div>
            </div>
          </div>

<<<<<<< HEAD
          <div className="card p-8">
            <h2 className="font-serif text-xl font-bold mb-6 text-gray-900">Napište nám</h2>
            <ContactForm />
=======
          {/* Contact form */}
          <div className="card p-8">
            <h2 className="font-serif text-xl font-bold mb-6 text-gray-900">Napište nám</h2>
            <form className="space-y-4" action="mailto:info@krasazralehoveku.cz" method="post" encType="text/plain">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="name">
                  Jméno a příjmení
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent transition"
                  placeholder="Vaše jméno"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="email">
                  E-mail
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent transition"
                  placeholder="vas@email.cz"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="phone">
                  Telefon
                </label>
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent transition"
                  placeholder="+420 xxx xxx xxx"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="message">
                  Zpráva
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  required
                  className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent transition resize-none"
                  placeholder="Váš dotaz nebo žádost o rezervaci..."
                />
              </div>
              <button type="submit" className="btn-primary w-full justify-center">
                Odeslat zprávu
              </button>
              <p className="text-gray-400 text-xs text-center">
                Odpovíme co nejdříve, obvykle do 24 hodin.
              </p>
            </form>
          </div>
        </div>

        {/* Map embed placeholder */}
        <div className="mt-12 rounded-2xl overflow-hidden shadow-md h-64 bg-gray-100 flex items-center justify-center">
          <div className="text-center text-gray-400">
            <MapPin className="w-8 h-8 mx-auto mb-2" />
            <p className="font-medium">Chaberský dvůr, Praha 8 – Dolní Chabry</p>
            <a
              href="https://maps.google.com/?q=Cha%C3%A4bersk%C3%BD+dv%C5%AFr+Praha+8"
              target="_blank"
              rel="noopener noreferrer"
              className="text-brand-600 text-sm hover:underline mt-1 inline-block"
            >
              Otevřít v Google Maps →
            </a>
>>>>>>> 19b9d3ffbc72b4a9248bf973fd2a2655d3b4e37d
          </div>
        </div>
      </div>
    </div>
  )
}
