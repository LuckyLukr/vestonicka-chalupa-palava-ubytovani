import React from 'react'

export default function Hero() {
  return (
    <section id="hero" className="relative isolate overflow-hidden">
      <div
        className="absolute inset-0 bg-center bg-cover"
        style={{ backgroundImage: "url('https://picsum.photos/1400/700')" }}
        role="img"
        aria-label="Přírodní a venkovská atmosféra Pálavy"
      ></div>
      <div className="hero-overlay absolute inset-0"></div>

      <div className="relative mx-auto grid min-h-[88vh] max-w-7xl items-center px-4 py-20 sm:px-6 lg:grid-cols-2 lg:px-8">
        <div className="max-w-2xl text-white">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-white/15 px-4 py-2 text-sm font-semibold backdrop-blur-sm">
            <span aria-hidden="true">🍷</span>
            Srdce Pálavy • vinařská oblast • klidný pobyt
          </div>
          <h1 className="text-4xl font-extrabold leading-tight sm:text-5xl lg:text-6xl">
            Věstonická Chalupa
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-8 text-white/90 sm:text-xl">
            Útulné a stylové ubytování v Dolních Věstonicích pro všechny, kteří chtějí zpomalit,
            užít si přírodu, víno, cyklovýlety i pohodový čas s rodinou nebo přáteli.
          </p>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <a
              href="#contact"
              className="focus-ring inline-flex items-center justify-center gap-2 rounded-2xl bg-wine px-6 py-4 text-base font-bold text-white shadow-warm transition hover:-translate-y-0.5 hover:shadow-lg"
            >
              <span aria-hidden="true">☎️</span>
              Kontaktovat majitele
            </a>
            <a
              href="#gallery"
              className="focus-ring inline-flex items-center justify-center rounded-2xl border border-white/40 bg-white/10 px-6 py-4 text-base font-bold text-white backdrop-blur-sm transition hover:bg-white/20"
            >
              Prohlédnout galerii
            </a>
          </div>

          <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-4">
            <div className="rounded-3xl bg-white/12 p-4 backdrop-blur-sm">
              <div className="text-2xl font-extrabold">8</div>
              <div className="mt-1 text-sm text-white/85">hostů pohodlně</div>
            </div>
            <div className="rounded-3xl bg-white/12 p-4 backdrop-blur-sm">
              <div className="text-2xl font-extrabold">3</div>
              <div className="mt-1 text-sm text-white/85">ložnice</div>
            </div>
            <div className="rounded-3xl bg-white/12 p-4 backdrop-blur-sm">
              <div className="text-2xl font-extrabold">Pálava</div>
              <div className="mt-1 text-sm text-white/85">pár minut od vás</div>
            </div>
            <div className="rounded-3xl bg-white/12 p-4 backdrop-blur-sm">
              <div className="text-2xl font-extrabold">Relax</div>
              <div className="mt-1 text-sm text-white/85">v klidné atmosféře</div>
            </div>
          </div>
        </div>

        <div className="hidden lg:flex lg:justify-end">
          <div className="max-w-md rounded-[2rem] border border-white/20 bg-white/85 p-6 shadow-warm backdrop-blur-md">
            <h2 className="text-2xl font-extrabold text-forest">Proč právě sem?</h2>
            <ul className="mt-6 space-y-4 text-sm text-forest/80">
              <li className="flex gap-3">
                <span className="mt-1 text-lg" aria-hidden="true">🌿</span>
                <span>Moderní a útulné zázemí s přírodní atmosférou a měkkým, příjemným designem.</span>
              </li>
              <li className="flex gap-3">
                <span className="mt-1 text-lg" aria-hidden="true">🍇</span>
                <span>Skvělá poloha pro objevování vinic, místních sklípků, přírody i cyklotras.</span>
              </li>
              <li className="flex gap-3">
                <span className="mt-1 text-lg" aria-hidden="true">🔥</span>
                <span>Plně vybavená chalupa s posezením, grilem a zázemím pro pohodové večery.</span>
              </li>
              <li className="flex gap-3">
                <span className="mt-1 text-lg" aria-hidden="true">🏡</span>
                <span>Ideální pro rodiny, menší skupiny přátel i klidný víkend mimo město.</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
