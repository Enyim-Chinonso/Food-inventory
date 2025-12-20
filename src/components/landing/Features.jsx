'use client'

import { useEffect, useRef } from 'react'
import gsap from '@/lib/gsap'

export default function Features() {
  const sectionRef = useRef(null)

  useEffect(() => {
    gsap.from(sectionRef.current.children, {
      opacity: 0,
      y: 40,
      duration: 0.8,
      stagger: 0.15,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: sectionRef.current,
        start: 'top 80%',
      },
    })
  }, [])

  return (
    <section className="py-5 bg-light" id="features">
      <div className="container">
        <div className="text-center mb-5">
          <h2 className="fw-bold">Powerful Features</h2>
          <p className="text-muted">
            Everything you need to manage food inventory efficiently.
          </p>
        </div>

        <div ref={sectionRef} className="row g-4">
          {features.map((item, index) => (
            <div key={index} className="col-md-6 col-lg-4">
              <div className="p-4 h-100 border rounded-4 bg-white shadow-sm">
                <h5 className="fw-semibold">{item.title}</h5>
                <p className="text-muted">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

const features = [
  {
    title: 'Inventory Tracking',
    desc: 'Monitor stock levels in real time and prevent shortages.',
  },
  {
    title: 'Expiry Monitoring',
    desc: 'Get alerts before food items expire to reduce waste.',
  },
  {
    title: 'Supplier Management',
    desc: 'Track suppliers, costs, and delivery performance.',
  },
  {
    title: 'Usage Analytics',
    desc: 'Understand consumption trends and optimize ordering.',
  },
  {
    title: 'Waste Reduction',
    desc: 'Identify losses and improve food handling efficiency.',
  },
  {
    title: 'Reports & Insights',
    desc: 'Generate actionable reports for smarter decisions.',
  },
]
