import React from 'react'

const priceCards = [
  {
    label: 'Týdenní cena',
    value: '25 000 Kč',
    desc: 'Cena za letní prázdniny i standardní týdenní pobyt.',
  },
  {
    label: 'Minimální cena na noc',
    value: '4 000 Kč',
    desc: 'Pronájem celé chaty na jednu noc do 7 osob.',
  },
  {
    label: 'Od 8 osob',
    value: '600 Kč',
    desc: 'Za osobu / noc při vyšším počtu hostů.',
  },
  {
    label: 'Minimální délka pobytu',
    value: '2 noci',
    desc: 'Mimo sezónu možnost pronájmu i na víkend.',
  },
]

const included = [
  'ubytovací poplatky',
  'pronájem chaty s příslušenstvím',
  'ložní prádlo',
  'ručníky',
]

const notes = [
  'Chatu pronajímáme minimálně od dvou nocí.',
  'Mimo sezónu je možné pronajmout chatu i na víkend.',
  'V období letních prázdnin pouze turnusově od soboty do soboty.',
  'Cena za letní prázdniny: 25 000 Kč / týden.',
  'Maximální kapacita v letních prázdninách je 10 osob.',
]

export default function Pricing() {
  return (
    <section id="pricing" className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <span className="inline-flex rounded-full bg-sand px-4 py-2 text-sm font-semibold text-wine">Ceník</span>
          <h2 className="mt-5 text-3xl font-extrabold text-forest sm:text-4xl">Jasné podmínky a přehledné ceny</h2>
          <p className="mt-4 text-lg leading-8 text-forest/75">
            Ceník je nastaven jednoduše a srozumitelně. Hodí se pro týdenní pobyty i kratší pronájmy mimo hlavní sezónu.
          </p>
        </div>

        <div className="mt-12 grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="rounded-[2rem] border border-gold/30 bg-cream p-8 shadow-soft">
            <div className="grid gap-5 sm:grid-cols-2">
              {priceCards.map((p) => (
                <div key={p.label} className="rounded-3xl bg-white p-6 shadow-soft">
                  <p className="text-sm font-semibold uppercase tracking-wide text-wine">{p.label}</p>
                  <p className="mt-3 text-3xl font-extrabold text-forest">{p.value}</p>
                  <p className="mt-2 text-sm text-forest/75">{p.desc}</p>
                </div>
              ))}
            </div>

            <div className="mt-6 rounded-3xl bg-white p-6 shadow-soft">
              <h3 className="text-lg font-bold">Důležité informace k pobytu</h3>
              <ul className="mt-4 space-y-3 text-sm leading-7 text-forest/75">
                {notes.map((note) => (
                  <li key={note} className="flex gap-3">
                    <span aria-hidden="true">•</span>
                    <span>{note}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <aside className="rounded-[2rem] bg-gradient-to-br from-forest to-sage p-8 text-white shadow-warm">
            <span className="inline-flex rounded-full bg-white/15 px-4 py-2 text-sm font-semibold">Co je v ceně</span>
            <h3 className="mt-5 text-2xl font-extrabold">Vše důležité už máte zahrnuto</h3>
            <ul className="mt-6 space-y-4 text-sm leading-7 text-white/90">
              {included.map((item) => (
                <li key={item} className="flex gap-3">
                  <span aria-hidden="true">✅</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <div className="mt-8 rounded-3xl bg-white/10 p-5 backdrop-blur-sm">
              <p className="text-sm leading-7 text-white/90">
                Cílem je, aby byl váš pobyt co nejpříjemnější a bez zbytečných starostí.
                Stačí přijet, ubytovat se a užít si klid, Pálavu a moravskou pohostinnost.
              </p>
            </div>
          </aside>
        </div>
      </div>
    </section>
  )
}
