import React from 'react'

const members = [
  {
    name: 'Feisal',
    role: 'Chief Product Officer',
    img: '/team/image1.png',
    quote: 'Hier könnte Ihre Werbung stehen.'
  },
  {
    name: 'Isotta',
    role: 'Chief AI Officer',
    img: '/team/image1.png',
    quote: 'Hier könnte Ihre Werbung stehen.'
  },
  {
    name: 'Gabriele',
    role: 'Chief Computer Vision Officer',
    img: '/team/image1.png',
    quote: 'Hier könnte Ihre Werbung stehen.'
  },
  {
    name: 'Reto',
    role: 'Chief Slides Officer',
    img: '/team/image1.png',
    quote: 'Hier könnte Ihre Werbung stehen.'
  },
  {
    name: 'Silvan',
    role: 'Chief Prompting Officer',
    img: '/team/image1.png',
    quote: 'Hier könnte Ihre Werbung stehen.'
  },
  {
    name: 'Marco',
    role: 'Chief Sales Officer',
    img: '/team/image1.png',
    quote: 'Hier könnte Ihre Werbung stehen.'
  }
]

const Team = () => {
  return (
    <section className="team py-16 lg:py-24 px-6 lg:px-12 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-[#0d2847]">Meet the team</h2>
          <p className="text-sm text-[#0d2847]/70 mt-2">Clinicians, engineers and operators building better surgical tools.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 align-middle object-center">
          {members.map((m, idx) => (
            <div key={idx} className="team-member bg-white p-6 rounded-2xl border border-[#0d2847]/10 text-center">
              <div className="w-28 h-28 mx-auto mb-4 rounded-full overflow-hidden border-2 border-[#0d2847]/5">
                <img src={m.img} alt={m.name} className="w-full h-full object-cover" />
              </div>
              <div className="text-lg font-semibold text-[#0d2847]">{m.name}</div>
              <div className="text-sm text-[#0d2847]/60 mb-4">{m.role}</div>
              <blockquote className="text-sm text-[#0d2847]/70 italic">“{m.quote}”</blockquote>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Team