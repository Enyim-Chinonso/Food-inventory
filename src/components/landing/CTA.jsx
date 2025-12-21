'use client'

import { useEffect, useRef } from 'react'
import gsap from '@/lib/gsap'

export default function CTA() {
  const ctaRef = useRef(null)

  useEffect(() => {
    gsap.from(ctaRef.current, {
      opacity: 0,
      scale: 0.95,
      duration: 0.8,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: ctaRef.current,
        start: 'top 85%',
      },
    })
  }, [])

  return (
    <section
      className="py-5 text-white"
      style={{
        background: 'linear-gradient(135deg, #0f2027, #203a43, #2c5364)',
      }}
    >
      <div className="container text-center">
        <div ref={ctaRef} className="py-5">
          <h2 className="fw-bold mb-3">
            Ready to Take Control of Your Food Inventory?
          </h2>
          <p className="mb-4 fs-5">
            Start managing stock smarter, reducing waste, and improving
            efficiency today.
          </p>

          <a href="/login" className="btn btn-outline-light btn-lg px-5">
            Get Started Now
          </a>
        </div>
      </div>
    </section>
  )
}
