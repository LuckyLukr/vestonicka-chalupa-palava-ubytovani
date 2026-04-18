import React from 'react'

const items = [
  {
    src: 'https://picsum.photos/700/500?random=11',
    alt: 'Stylový pohled na exteriér chalupy',
    title: 'Pohodový venkovní vzhled',
    desc: 'Příjemná první impresie, která ladí s okolní krajinou Pálavy a venkovským charakterem místa.',
  },
  {
    src: 'https://picsum.photos/700/500?random=12',
    alt: 'Útulný interiér s moderním vybavením',
    title: 'Útulný interiér',
    desc: 'Měkké tvary, jemné stíny a teplé ladění vytváří klidné prostředí pro odpočinek po výletu.',
  },
  {
    src: 'https://picsum.photos/700/500?random=13',
    alt: 'Venkovní posezení s relaxační atmosférou',
    title: 'Posezení a večerní pohoda',
    desc: 'Venkovní prostor zve ke společným snídaním, grilování i klidným večerům u sklenky vína.',
  },
  {
    src: 'https://picsum.photos/700/500?random=14',
    alt: 'Ložnice v přírodním a klidném stylu',
    title: 'Klidné ložnice',
    desc: 'Příjemné zázemí pro kvalitní spánek a regeneraci po dni stráveném v přírodě nebo na kole.',
  },
  {
    src: 'https://picsum.photos/700/500?random=15',
    alt: 'Jídelní a obytná část chalupy',
    title: 'Společný prostor',
    desc: 'Místo pro dlouhé snídaně, plánování výletů i večerní posezení s rodinou nebo přáteli.',
  },
  {
    src: 'https://picsum.photos/700/500?random=16',
    alt: 'Přírodní atmosféra Pálavy a okolí',
    title: 'Okolí plné zážitků',
    desc: 'Vinice, kopce, výhledy a pohodová moravská atmosféra, která dělá z pobytu opravdu příjemný zážitek.',
  },
]

export default function Gallery() {
  return (
    <section id="gallery" className="relative bg-cream py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <span className="inline-flex rounded-full bg-sand px-4 py-2 text-sm font-semibold text-wine">Fotogalerie</span>
          <h2 className="mt-5 text-3xl font-extrabold text-forest sm:text-4xl">Nalaďte se na pohodovou atmosféru chalupy</h2>
          <p className="mt-4 text-lg leading-8 text-forest/75">
            Prostor, světlo, přírodní tóny a klid. Galerie ukazuje styl webu i prezentaci místa tak,
            aby si návštěvník snadno představil svůj pobyt. Fotografie jsou ilustrační a lze je kdykoliv nahradit skutečnými.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {items.map((item) => (
            <article key={item.src} className="overflow-hidden rounded-4xl bg-white shadow-soft transition hover:-translate-y-1 hover:shadow-warm">
              <img src={item.src} alt={item.alt} className="h-72 w-full object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-bold">{item.title}</h3>
                <p className="mt-3 text-sm leading-7 text-forest/75">{item.desc}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
