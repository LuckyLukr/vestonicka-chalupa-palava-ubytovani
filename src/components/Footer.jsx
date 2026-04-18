import React, { useEffect, useState } from 'react'

export default function Footer() {
  const [year, setYear] = useState('')

  useEffect(() => {
    setYear(new Date().getFullYear())
  }, [])

  return (
    <footer className="bg-forest text-white">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-4">
          <div>
            <div className="flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10 text-xl">🏡</div>
              <div>
                <h2 className="text-xl font-extrabold">Věstonická Chalupa</h2>
                <p className="text-sm text-white/70">Útulné ubytování v srdci Pálavy</p>
              </div>
            </div>
            <p className="mt-5 text-sm leading-7 text-white/75">
              Moderní, hravá a útulná chalupa v Dolních Věstonicích. Ideální místo pro odpočinek,
              výlety po Pálavě a objevování vinařské atmosféry jižní Moravy.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-bold">Kontakt</h3>
            <ul className="mt-5 space-y-3 text-sm text-white/75">
              <li>Dolní Věstonice 296</li>
              <li>691 29, Dolní Věstonice</li>
              <li><a href="tel:+420603576670" className="focus-ring hover:text-white">+420 603 576 670</a></li>
              <li><a href="tel:+420728649081" className="focus-ring hover:text-white">+420 728 649 081</a></li>
              <li><a href="mailto:v.macanova@seznam.cz" className="focus-ring hover:text-white break-all">v.macanova@seznam.cz</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold">Rychlé odkazy</h3>
            <ul className="mt-5 space-y-3 text-sm text-white/75">
              <li><a href="#hero" className="focus-ring hover:text-white">Domů</a></li>
              <li><a href="#gallery" className="focus-ring hover:text-white">Fotogalerie</a></li>
              <li><a href="#about" className="focus-ring hover:text-white">O chalupě</a></li>
              <li><a href="#pricing" className="focus-ring hover:text-white">Ceník</a></li>
              <li><a href="#reservation" className="focus-ring hover:text-white">Poptávka a rezervace</a></li>
              <li><a href="#map" className="focus-ring hover:text-white">Mapa</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold">Okolí</h3>
            <ul className="mt-5 space-y-3 text-sm text-white/75">
              <li>Pálava a přírodní scenérie</li>
              <li>Vinařská oblast jižní Moravy</li>
              <li>Cyklostezky a turistické trasy</li>
              <li>Pohodová atmosféra Dolních Věstonic</li>
            </ul>

            <div className="mt-6 flex gap-3">
              <a href="mailto:v.macanova@seznam.cz" aria-label="Napsat e-mail" className="focus-ring inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/10 transition hover:bg-white/20">✉️</a>
              <a href="tel:+420603576670" aria-label="Zavolat" className="focus-ring inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/10 transition hover:bg-white/20">📞</a>
              <a href="#map" aria-label="Zobrazit mapu" className="focus-ring inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/10 transition hover:bg-white/20">📍</a>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-white/10 pt-6 text-sm text-white/60">
          © {year} Věstonická Chalupa. Všechna práva vyhrazena.
        </div>
      </div>
    </footer>
  )
}
