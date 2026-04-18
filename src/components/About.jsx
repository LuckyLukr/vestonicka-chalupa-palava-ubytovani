import React from 'react'

const amenities = [
  {
    icon: '🍳',
    title: 'Vybavená kuchyň',
    desc: 'Praktické zázemí pro společné vaření, snídaně i večerní posezení.',
  },
  {
    icon: '📺',
    title: 'Televize',
    desc: 'Pohodlný odpočinek i během klidnějších večerů nebo nepříznivého počasí.',
  },
  {
    icon: '🔥',
    title: 'Vnitřní i venkovní posezení s grilem',
    desc: 'Dostatek prostoru pro společné chvíle, grilování i odpočinek pod širým nebem.',
  },
  {
    icon: '🚿',
    title: 'Koupelna a samostatné WC',
    desc: 'Koupelna se sprchovým koutem a samostatné WC pro větší pohodlí během pobytu.',
  },
]

export default function About() {
  return (
    <section id="about" className="relative overflow-hidden bg-white py-20">
      <div className="section-blob absolute inset-0 pointer-events-none"></div>
      <div className="relative mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
        <div className="overflow-hidden rounded-[2rem] shadow-warm">
          <img src="https://picsum.photos/900/700?random=21" alt="Fotografie chalupy a okolní atmosféry" className="h-full w-full object-cover" />
        </div>

        <div className="flex flex-col justify-center">
          <span className="inline-flex w-fit rounded-full bg-sand px-4 py-2 text-sm font-semibold text-wine">O chalupě / vybavení</span>
          <h2 className="mt-5 text-3xl font-extrabold text-forest sm:text-4xl">Plně vybavená chalupa pro relax na Pálavě</h2>
          <p className="mt-5 text-lg leading-8 text-forest/75">
            Věstonická Chalupa je připravena na pohodový pobyt v každém ročním období.
            Nabízí útulné zázemí, příjemné posezení a vše důležité pro klidný víkend,
            delší dovolenou i letní pobyt v srdci vinařského kraje.
          </p>

          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {amenities.map((a) => (
              <div key={a.title} className="rounded-3xl border border-gold/30 bg-cream p-5 shadow-soft">
                <div className="text-2xl" aria-hidden="true">{a.icon}</div>
                <h3 className="mt-3 font-bold">{a.title}</h3>
                <p className="mt-2 text-sm leading-7 text-forest/75">{a.desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-8 grid gap-4 sm:grid-cols-3">
            <div className="rounded-3xl bg-sand p-5 text-center">
              <div className="text-3xl font-extrabold text-wine">3</div>
              <div className="mt-1 text-sm text-forest/70">ložnice</div>
            </div>
            <div className="rounded-3xl bg-sand p-5 text-center">
              <div className="text-3xl font-extrabold text-wine">8</div>
              <div className="mt-1 text-sm text-forest/70">hostů pohodlně</div>
            </div>
            <div className="rounded-3xl bg-sand p-5 text-center">
              <div className="text-3xl font-extrabold text-wine">Pálava</div>
              <div className="mt-1 text-sm text-forest/70">na dosah</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
