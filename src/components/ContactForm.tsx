'use client'

import { useState } from 'react'
import { CheckCircle, AlertCircle, Loader2 } from 'lucide-react'

// ---------------------------------------------
// NASTAVENÍ: Zaregistrujte se na formspree.io,
// vytvořte nový formulář a VÁŠE_FORM_ID nahraďte
// skutečným ID (vypadá jako "xpwzgkqb").
// ---------------------------------------------
const FORMSPREE_ID = 'VASE_FORM_ID'

type Status = 'idle' | 'sending' | 'success' | 'error'

export default function ContactForm() {
  const [status, setStatus] = useState<Status>('idle')

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setStatus('sending')

    const form = e.currentTarget
    const data = new FormData(form)

    try {
      const res = await fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
        method: 'POST',
        body: data,
        headers: { Accept: 'application/json' },
      })

      if (res.ok) {
        setStatus('success')
        form.reset()
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  if (status === 'success') {
    return (
      <div className="flex flex-col items-center justify-center py-16 text-center">
        <CheckCircle className="w-14 h-14 text-green-500 mb-4" />
        <h3 className="font-serif text-xl font-bold text-gray-900 mb-2">Zpráva odeslána!</h3>
        <p className="text-gray-500">Odpovíme vám co nejdříve, obvykle do 24 hodin.</p>
        <button
          onClick={() => setStatus('idle')}
          className="mt-6 btn-outline text-sm py-2"
        >
          Odeslat další zprávu
        </button>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="name">
          Jméno a příjmení *
        </label>
        <input
          id="name"
          name="name"
          type="text"
          required
          disabled={status === 'sending'}
          className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent transition disabled:opacity-50"
          placeholder="Vaše jméno"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="email">
          E-mail *
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          disabled={status === 'sending'}
          className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent transition disabled:opacity-50"
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
          disabled={status === 'sending'}
          className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent transition disabled:opacity-50"
          placeholder="+420 xxx xxx xxx"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="message">
          Zpráva *
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          required
          disabled={status === 'sending'}
          className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent transition resize-none disabled:opacity-50"
          placeholder="Váš dotaz nebo žádost o rezervaci..."
        />
      </div>

      {status === 'error' && (
        <div className="flex items-center gap-2 text-red-600 bg-red-50 rounded-xl px-4 py-3 text-sm">
          <AlertCircle className="w-4 h-4 shrink-0" />
          Nastala chyba při odesílání. Zkuste to prosím znovu nebo nás kontaktujte telefonicky.
        </div>
      )}

      <button
        type="submit"
        disabled={status === 'sending'}
        className="btn-primary w-full justify-center disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:scale-100"
      >
        {status === 'sending' ? (
          <>
            <Loader2 className="w-4 h-4 animate-spin" />
            Odesílám...
          </>
        ) : (
          'Odeslat zprávu'
        )}
      </button>

      <p className="text-gray-400 text-xs text-center">
        Odpovíme co nejdříve, obvykle do 24 hodin.
      </p>
    </form>
  )
}
