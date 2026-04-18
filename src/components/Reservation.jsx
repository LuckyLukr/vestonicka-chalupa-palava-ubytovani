import React from 'react'

export default function Reservation() {
  return (
    <section id="reservation" className="bg-sand py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="rounded-[2rem] bg-white p-8 shadow-soft">
            <span className="inline-flex rounded-full bg-cream px-4 py-2 text-sm font-semibold text-wine">Poptávka a rezervace</span>
            <h2 className="mt-5 text-3xl font-extrabold text-forest sm:text-4xl">Jednoduchá domluva bez složitého rezervačního systému</h2>
            <p className="mt-4 text-lg leading-8 text-forest/75">
              Pokud máte zájem o pronájem, stačí zavolat nebo napsat e-mail. Rádi vám potvrdíme dostupnost,
              odpovíme na dotazy a domluvíme vše potřebné.
            </p>

            <div className="mt-8 rounded-3xl bg-cream p-6">
              <h3 className="text-lg font-bold text-forest">Jak rezervace probíhá</h3>
              <div className="mt-5 grid gap-4 sm:grid-cols-3">
                <div className="rounded-3xl bg-white p-5 shadow-soft">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-sand text-lg font-bold text-wine">1</div>
                  <p className="mt-4 text-sm leading-7 text-forest/75">Ozvete se telefonicky nebo e-mailem s termínem a počtem hostů.</p>
                </div>
                <div className="rounded-3xl bg-white p-5 shadow-soft">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-sand text-lg font-bold text-wine">2</div>
                  <p className="mt-4 text-sm leading-7 text-forest/75">Po potvrzení je potřeba do 5 dnů uhradit rezervační poplatek ve výši 1/2 z celkové ceny.</p>
                </div>
                <div className="rounded-3xl bg-white p-5 shadow-soft">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-sand text-lg font-bold text-wine">3</div>
                  <p className="mt-4 text-sm leading-7 text-forest/75">Po uhrazení rezervačního poplatku bude váš pobyt závazně rezervován.</p>
                </div>
              </div>
            </div>

            <div className="mt-8 rounded-3xl border border-gold/30 bg-white p-6">
              <p className="text-sm leading-7 text-forest/75">
                Pro rychlé info doporučujeme zavolat nebo napsat e-mail. Rádi s vámi domluvíme vhodný termín
                i podmínky pobytu.
              </p>
            </div>
          </div>

          <div id="contact" className="rounded-[2rem] bg-gradient-to-br from-white to-cream p-8 shadow-soft">
            <span className="inline-flex rounded-full bg-sand px-4 py-2 text-sm font-semibold text-wine">Kontakt</span>
            <h2 className="mt-5 text-3xl font-extrabold text-forest">Spojte se s námi</h2>
            <p className="mt-4 text-lg leading-8 text-forest/75">
              Rychlý kontakt je nejjednodušší cesta, jak zjistit dostupnost nebo si domluvit pobyt.
            </p>

            <div className="mt-8 space-y-4">
              <a href="tel:+420603576670" className="focus-ring flex items-center justify-between rounded-3xl bg-white p-5 shadow-soft transition hover:-translate-y-0.5 hover:shadow-warm">
                <div>
                  <p className="text-sm text-forest/60">Telefon</p>
                  <p className="text-xl font-bold text-forest">+420 603 576 670</p>
                </div>
                <span className="text-2xl" aria-hidden="true">📞</span>
              </a>

              <a href="tel:+420728649081" className="focus-ring flex items-center justify-between rounded-3xl bg-white p-5 shadow-soft transition hover:-translate-y-0.5 hover:shadow-warm">
                <div>
                  <p className="text-sm text-forest/60">Telefon</p>
                  <p className="text-xl font-bold text-forest">+420 728 649 081</p>
                </div>
                <span className="text-2xl" aria-hidden="true">📱</span>
              </a>

              <a href="mailto:v.macanova@seznam.cz" className="focus-ring flex items-center justify-between rounded-3xl bg-white p-5 shadow-soft transition hover:-translate-y-0.5 hover:shadow-warm">
                <div>
                  <p className="text-sm text-forest/60">E-mail</p>
                  <p className="text-lg font-bold text-forest break-all">v.macanova@seznam.cz</p>
                </div>
                <span className="text-2xl" aria-hidden="true">✉️</span>
              </a>

              <div className="rounded-3xl bg-white p-5 shadow-soft">
                <p className="text-sm text-forest/60">Adresa</p>
                <p className="mt-1 text-base font-semibold text-forest">Dolní Věstonice 296, 691 29, Dolní Věstonice</p>
              </div>
            </div>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <a
                href="tel:+420603576670"
                className="focus-ring inline-flex items-center justify-center rounded-2xl bg-wine px-6 py-4 text-base font-bold text-white shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
              >
                Zavolat
              </a>
              <a
                href="mailto:v.macanova@seznam.cz"
                className="focus-ring inline-flex items-center justify-center rounded-2xl border border-gold/40 bg-white px-6 py-4 text-base font-bold text-forest transition hover:bg-sand"
              >
                Napsat e-mail
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
