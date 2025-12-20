'use client'

import { useEffect, useRef } from 'react'
import gsap from '@/lib/gsap'

export default function HowItWorks() {
  const stepsRef = useRef(null)

  useEffect(() => {
    gsap.from(stepsRef.current.children, {
      opacity: 0,
      y: 30,
      duration: 0.7,
      stagger: 0.2,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: stepsRef.current,
        start: 'top 80%',
      },
    })
  }, [])

  return (
    <section className="py-5">
      <div className="container">
        <div className="text-center mb-5">
          <h2 className="fw-bold">How It Works</h2>
          <p className="text-muted">
            Get started with simple steps to manage your food inventory efficiently.
          </p>
        </div>

        <div ref={stepsRef} className="row g-4">
          {steps.map((step, index) => (
            <div key={index} className="col-md-6 col-lg-3">
              <div className="p-4 h-100 border rounded-4 text-center">
                <div className="mb-3 fs-2 fw-bold text-primary">
                  {index + 1}
                </div>
                <h5 className="fw-semibold">{step.title}</h5>
                <p className="text-muted">{step.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

const steps = [
  {
    title: 'Create an Account',
    desc: 'Sign up and set up your food business profile.',
  },
  {
    title: 'Add Inventory',
    desc: 'Record food items, quantities, locations, and expiry dates.',
  },
  {
    title: 'Monitor & Track',
    desc: 'Track usage, stock levels, and receive alerts.',
  },
  {
    title: 'Analyze & Improve',
    desc: 'Use reports to reduce waste and improve decisions.',
  },
]
