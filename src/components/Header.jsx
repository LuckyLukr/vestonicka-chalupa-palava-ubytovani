import React, { useState } from 'react'

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  const handleMobileLinkClick = () => {
    setMenuOpen(false)
  }

  return (
    <header className="sticky top-0 z-50 border-b border-white/60 bg-cream/90 backdrop-blur-md shadow-sm">
      <div className="bg-sand border-b border-gold/30">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-2">
          <div className="flex flex-col gap-2 text-sm text-forest/80 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex flex-wrap items-center gap-4">
              <span className="flex items-center gap-2">
                <span aria-hidden="true">📍</span>
                Dolní Věstonice 296, 691 29
              </span>
              <span className="flex items-center gap-2">
                <span aria-hidden="true">🍇</span>
                Ubytování v srdci Pálavy a vinařské oblasti
              </span>
            </div>
            <div className="flex flex-wrap items-center gap-4">
              <a href="tel:+420603576670" className="focus-ring hover:text-wine transition">+420 603 576 670</a>
              <a href="mailto:v.macanova@seznam.cz" className="focus-ring hover:text-wine transition">v.macanova@seznam.cz</a>
            </div>
          </div>
        </div>
      </div>

      <nav aria-label="Hlavní navigace" className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between py-4">
          <a href="#hero" className="focus-ring flex items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-sage to-forest text-xl text-white shadow-soft">
              🏡
            </div>
            <div>
              <div className="text-lg font-extrabold text-forest">Věstonická Chalupa</div>
              <div className="text-sm text-forest/70">Moderní pobyt pod Pálavou</div>
            </div>
          </a>

          <div className="hidden lg:flex items-center gap-8">
            <a href="#hero" className="focus-ring text-sm font-semibold text-forest/80 transition hover:text-wine">Domů</a>
            <a href="#gallery" className="focus-ring text-sm font-semibold text-forest/80 transition hover:text-wine">Galerie</a>
            <a href="#about" className="focus-ring text-sm font-semibold text-forest/80 transition hover:text-wine">O chalupě</a>
            <a href="#pricing" className="focus-ring text-sm font-semibold text-forest/80 transition hover:text-wine">Ceník</a>
            <a href="#trips" className="focus-ring text-sm font-semibold text-forest/80 transition hover:text-wine">Okolí</a>
            <a href="#contact" className="focus-ring text-sm font-semibold text-forest/80 transition hover:text-wine">Kontakt</a>
          </div>

          <div className="hidden md:flex items-center gap-4">
            <a href="tel:+420603576670" className="focus-ring text-xl font-bold text-forest hover:text-wine transition">
              +420 603 576 670
            </a>
            <a
              href="#reservation"
              className="focus-ring rounded-xl bg-wine px-5 py-3 text-sm font-bold text-white shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
            >
              Kontaktovat majitele
            </a>
          </div>

          <button
            type="button"
            aria-label="Otevřít menu"
            aria-expanded={menuOpen}
            aria-controls="mobileMenu"
            onClick={() => setMenuOpen(!menuOpen)}
            className="focus-ring inline-flex items-center justify-center rounded-xl border border-gold/40 bg-white p-3 text-forest shadow-sm lg:hidden"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>

        <div id="mobileMenu" className={`${menuOpen ? '' : 'hidden'} border-t border-gold/30 pb-4 lg:hidden`}>
          <div className="flex flex-col gap-2 pt-4">
            <a href="#hero" onClick={handleMobileLinkClick} className="focus-ring rounded-xl px-3 py-3 text-sm font-semibold hover:bg-sand">Domů</a>
            <a href="#gallery" onClick={handleMobileLinkClick} className="focus-ring rounded-xl px-3 py-3 text-sm font-semibold hover:bg-sand">Galerie</a>
            <a href="#about" onClick={handleMobileLinkClick} className="focus-ring rounded-xl px-3 py-3 text-sm font-semibold hover:bg-sand">O chalupě</a>
            <a href="#pricing" onClick={handleMobileLinkClick} className="focus-ring rounded-xl px-3 py-3 text-sm font-semibold hover:bg-sand">Ceník</a>
            <a href="#trips" onClick={handleMobileLinkClick} className="focus-ring rounded-xl px-3 py-3 text-sm font-semibold hover:bg-sand">Okolí</a>
            <a href="#contact" onClick={handleMobileLinkClick} className="focus-ring rounded-xl px-3 py-3 text-sm font-semibold hover:bg-sand">Kontakt</a>
            <a href="#reservation" onClick={handleMobileLinkClick} className="focus-ring mt-2 rounded-xl bg-wine px-4 py-3 text-center text-sm font-bold text-white">
              Kontaktovat majitele
            </a>
          </div>
        </div>
      </nav>
    </header>
  )
}
