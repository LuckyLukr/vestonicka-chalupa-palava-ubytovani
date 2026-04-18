import React from 'react'

const features = [
  { icon: '🏡', label: 'Až 8 hostů' },
  { icon: '🛏️', label: '3 ložnice' },
  { icon: '🍷', label: 'Vinařská oblast' },
  { icon: '🚴', label: 'Cyklovýlety a příroda' },
  { icon: '✨', label: 'Příjemné a plně vybavené zázemí' },
]

export default function FeatureBar() {
  return (
    <section className="bg-sand/70 py-6">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {features.map((f) => (
            <div key={f.label} className="rounded-2xl bg-white p-4 text-center shadow-soft">
              <div className="text-2xl" aria-hidden="true">{f.icon}</div>
              <div className="mt-2 text-sm font-bold">{f.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
