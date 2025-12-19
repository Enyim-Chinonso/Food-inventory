'use client'

import { useEffect, useRef } from 'react'
import gsap from 'gsap'

export default function Hero() {
  const heroRef = useRef(null)

  useEffect(() => {
    gsap.from(heroRef.current, {
      opacity: 0,
      y: 40,
      duration: 1.2,
      delay: 0.3,
      ease: 'power3.out',
    })
  }, [])

  return (


  <section
    className="vh-100 d-flex align-items-center justify-content-center text-white"
    style={{
      background: 'linear-gradient(135deg, #0f2027, #203a43, #2c5364)',
    }}
  >
    <div
      ref={heroRef}
      className="container text-center d-flex flex-column align-items-center"
    >
      <h1 className="display-4 fw-bold mb-4">
        Smart Food Inventory Management System
      </h1>

      <p className="lead mb-4" style={{ maxWidth: '650px' }}>
        Track food stock, reduce waste, monitor expiry dates, and manage
        suppliers with a modern, intelligent inventory platform.
      </p>

      <div className="d-flex gap-3 justify-content-center">
        <a href="/login" className="btn btn-outline-light btn-lg">
          Get Started
        </a>
        <a href="#features" className="btn btn-outline-light btn-lg">
          Learn More
        </a>
      </div>
    </div>
  </section>
)
}






    // <section
    //   className="vh-100 d-flex align-items-center justify-content-center text-white"
    //   style={{
    //     background: 'linear-gradient(135deg, #0f2027, #203a43, #2c5364)',
    //   }}
    // >
    //   <div ref={heroRef} className="container">
    //     <h1 className="display-4 fw-bold mb-4">
    //       Smart Food Inventory <br /> Management System
    //     </h1>
    //     <p className="lead mb-4" style={{ maxWidth: '600px' }}>
    //       Track food stock, reduce waste, monitor expiry dates, and manage
    //       suppliers with a modern, intelligent inventory platform.
    //     </p>

    //     <div className="d-flex gap-3">
    //       <a href="/login" className="btn btn-light btn-lg">
    //         Get Started
    //       </a>
    //       <a href="#features" className="btn btn-outline-light btn-lg">
    //         Learn More
    //       </a>
    //     </div>
    //   </div>
    // </section>
  