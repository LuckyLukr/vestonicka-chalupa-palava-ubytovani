import React from 'react'

export default function MapSection() {
  return (
    <section id="map" className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <span className="inline-flex rounded-full bg-sand px-4 py-2 text-sm font-semibold text-wine">Mapa</span>
          <h2 className="mt-5 text-3xl font-extrabold text-forest sm:text-4xl">Najdete nás v Dolních Věstonicích</h2>
          <p className="mt-4 text-lg leading-8 text-forest/75">
            Chalupa se nachází v atraktivní lokalitě přímo u Pálavy. Skvělý výchozí bod pro výlety,
            vinařské zážitky i klidné procházky po okolí.
          </p>
        </div>

        <div className="mt-12 grid gap-8 lg:grid-cols-[1.15fr_0.85fr]">
          <div className="overflow-hidden rounded-[2rem] border border-gold/30 shadow-soft">
            <iframe
              title="Mapa lokality Věstonická Chalupa, Dolní Věstonice"
              aria-label="Mapa s lokalitou Dolní Věstonice 296, 691 29, Dolní Věstonice"
              src="https://www.google.com/maps?q=Doln%C3%AD%20V%C4%9Bstonice%20296%2C%20691%2029%20Doln%C3%AD%20V%C4%9Bstonice&z=13&output=embed"
              className="h-[420px] w-full"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>

          <div className="rounded-[2rem] bg-cream p-8 shadow-soft">
            <h3 className="text-2xl font-extrabold text-forest">Poloha, která má atmosféru</h3>
            <ul className="mt-6 space-y-4 text-sm leading-7 text-forest/75">
              <li className="flex gap-3"><span aria-hidden="true">📍</span><span>Dolní Věstonice 296, 691 29, Dolní Věstonice</span></li>
              <li className="flex gap-3"><span aria-hidden="true">🍇</span><span>Vinařská oblast s typickou moravskou atmosférou a místními sklípky</span></li>
              <li className="flex gap-3"><span aria-hidden="true">⛰️</span><span>Blízkost Pálavy, výhledů, přírody i oblíbených turistických tras</span></li>
              <li className="flex gap-3"><span aria-hidden="true">🚲</span><span>Výborné podmínky pro cyklistiku, pěší výlety i klidné víkendy</span></li>
            </ul>

            <div className="mt-8 rounded-3xl bg-white p-5 shadow-soft">
              <p className="text-sm leading-7 text-forest/75">
                Mapa je na webu zvýrazněná tak, aby návštěvník hned viděl, že se chalupa nachází
                v jedné z nejkrásnějších a nejvyhledávanějších částí jižní Moravy.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
