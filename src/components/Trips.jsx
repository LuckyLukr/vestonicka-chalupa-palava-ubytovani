import React from 'react'

const attractions = [
  {
    icon: '⛰️',
    title: 'Pálava',
    desc: 'Oblíbené výlety, nádherné výhledy a jedinečná krajina, která láká k procházkám i focení.',
  },
  {
    icon: '🍷',
    title: 'Vinařská oblast',
    desc: 'Místní sklípky, degustace a večery s moravským vínem patří k nejhezčím zážitkům v okolí.',
  },
  {
    icon: '🚴',
    title: 'Cyklostezky a výlety',
    desc: 'Okolí je ideální pro kola, nenáročné trasy i celodenní objevování jižní Moravy.',
  },
  {
    icon: '🌿',
    title: 'Klidná atmosféra',
    desc: 'Perfektní prostředí pro zpomalení, odpočinek a čas strávený v pohodové přírodní kulise.',
  },
]

export default function Trips() {
  return (
    <section id="trips" className="bg-sand py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <span className="inline-flex rounded-full bg-white px-4 py-2 text-sm font-semibold text-wine shadow-soft">Okolí a tipy na výlety</span>
          <h2 className="mt-5 text-3xl font-extrabold text-forest sm:text-4xl">Pálava, víno, příroda a pohodová atmosféra</h2>
          <p className="mt-4 text-lg leading-8 text-forest/75">
            Okolí Věstonické Chalupy nabízí přesně to, co od jižní Moravy čekáte:
            krásnou krajinu, vinařský charakter, klidnou atmosféru i spoustu možností pro aktivní odpočinek.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {attractions.map((a) => (
            <article key={a.title} className="rounded-4xl bg-white p-6 shadow-soft transition hover:-translate-y-1 hover:shadow-warm">
              <div className="text-3xl" aria-hidden="true">{a.icon}</div>
              <h3 className="mt-4 text-xl font-bold">{a.title}</h3>
              <p className="mt-3 text-sm leading-7 text-forest/75">{a.desc}</p>
            </article>
          ))}
        </div>

        <div className="mt-12 rounded-[2rem] bg-gradient-to-r from-forest to-sage p-8 text-white shadow-warm">
          <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <div>
              <h3 className="text-2xl font-extrabold">Místo, kam se chcete vracet</h3>
              <p className="mt-4 text-base leading-8 text-white/90">
                Věstonická Chalupa spojuje pohodlí, útulnost a skvělou polohu. Ať už plánujete klidný víkend,
                týdenní pobyt nebo letní dovolenou, tady najdete zázemí, které vás přirozeně naladí na odpočinek.
              </p>
            </div>
            <div className="flex flex-col gap-4 sm:flex-row lg:justify-end">
              <a
                href="#reservation"
                className="focus-ring inline-flex items-center justify-center rounded-2xl bg-white px-6 py-4 text-base font-bold text-forest shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
              >
                Poslat poptávku
              </a>
              <a
                href="tel:+420603576670"
                className="focus-ring inline-flex items-center justify-center rounded-2xl border border-white/30 bg-white/10 px-6 py-4 text-base font-bold text-white backdrop-blur-sm transition hover:bg-white/20"
              >
                Zavolat
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
