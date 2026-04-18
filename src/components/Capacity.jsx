import React from 'react'

const cards = [
  {
    icon: '🛏️',
    title: '3 ložnice',
    desc: 'Prakticky rozvržené pokoje pro klidný spánek a dostatek soukromí.',
  },
  {
    icon: '👨‍👩‍👧‍👦',
    title: 'Až 8 hostů',
    desc: 'Ideální kapacita pro rodinu, partu přátel nebo společný pobyt ve vinařském kraji.',
  },
  {
    icon: '☀️',
    title: 'Letní režim',
    desc: 'Během prázdnin se chalupa pronajímá turnusově od soboty do soboty.',
  },
  {
    icon: '🌙',
    title: 'Od 2 nocí',
    desc: 'Mimo sezónu lze domluvit i víkendový pobyt pro pohodový únik z každodennosti.',
  },
]

export default function Capacity() {
  return (
    <section id="capacity" className="bg-sand py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <span className="inline-flex rounded-full bg-white px-4 py-2 text-sm font-semibold text-wine shadow-soft">Pokoje / kapacita</span>
          <h2 className="mt-5 text-3xl font-extrabold text-forest sm:text-4xl">Přehledné ubytování pro rodiny i menší skupiny</h2>
          <p className="mt-4 text-lg leading-8 text-forest/75">
            Chalupa nabízí 3 ložnice a pohodlné zázemí až pro 8 hostů. V letních prázdninách je maximální kapacita až 10 osob.
            Vše je navržené tak, aby byl pobyt praktický, pohodový a příjemný od prvního dne.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {cards.map((c) => (
            <article key={c.title} className="rounded-4xl bg-white p-6 shadow-soft transition hover:-translate-y-1 hover:shadow-warm">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-sand text-2xl">{c.icon}</div>
              <h3 className="mt-5 text-xl font-bold">{c.title}</h3>
              <p className="mt-3 text-sm leading-7 text-forest/75">{c.desc}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
