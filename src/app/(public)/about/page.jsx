'use client'

import { useEffect, useRef } from 'react'
import gsap from 'gsap'

export default function AboutPage() {
  const sectionRef = useRef(null)

  useEffect(() => {
    gsap.from(sectionRef.current, {
      opacity: 0,
      y: 40,
      duration: 1,
      ease: 'power3.out',
    })
  }, [])

  return (
    <section className="py-5 bg-light mt-5">
      <div className="container" ref={sectionRef}>
        {/* Page Header */}
        <div className="text-center mb-5">
          <h1 className="fw-bold">About Food Inventory System</h1>
          <p className="text-muted mt-3">
            Building smarter, data-driven solutions for modern food businesses.
          </p>
        </div>

        {/* About Content */}
        <div className="row align-items-center g-5">
          <div className="col-md-6">
            <h4 className="fw-semibold mb-3">What This Project Is About</h4>
            <p className="text-muted">
              The <strong>Food Inventory Management System</strong> is a modern
              web-based platform designed to help food businesses efficiently
              track inventory, monitor expiry dates, reduce waste, and make
              informed operational decisions.
            </p>
            <p className="text-muted">
              Many food businesses struggle with poor inventory visibility,
              expired products, and manual record keeping. This system solves
              those challenges by providing a centralized, intelligent, and
              easy-to-use inventory solution.
            </p>
          </div>

          <div className="col-md-6">
            <div className="card shadow-sm border-0">
              <div className="card-body p-4">
                <h5 className="fw-semibold mb-3">Key Problems We Solve</h5>
                <ul className="list-unstyled text-muted mb-0">
                  <li className="mb-2">✔ Stock shortages and overstocking</li>
                  <li className="mb-2">✔ Expired and wasted food items</li>
                  <li className="mb-2">✔ Poor inventory visibility</li>
                  <li className="mb-2">✔ Manual and error-prone tracking</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Features */}
        <div className="row mt-5 g-4">
          <div className="col-md-4">
            <div className="card h-100 shadow-sm border-0">
              <div className="card-body">
                <h6 className="fw-semibold">Smart Inventory Tracking</h6>
                <p className="text-muted small">
                  Track food items in real time, manage quantities, and stay in
                  control of your stock levels.
                </p>
              </div>
            </div>
          </div>

          <div className="col-md-4">
            <div className="card h-100 shadow-sm border-0">
              <div className="card-body">
                <h6 className="fw-semibold">Expiry Monitoring</h6>
                <p className="text-muted small">
                  Get visibility into expiry dates to reduce food waste and
                  improve safety.
                </p>
              </div>
            </div>
          </div>

          <div className="col-md-4">
            <div className="card h-100 shadow-sm border-0">
              <div className="card-body">
                <h6 className="fw-semibold">Analytics & Reporting</h6>
                <p className="text-muted small">
                  Make data-driven decisions using clear insights and inventory
                  reports.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Vision */}
        <div className="mt-5 text-center">
          <h4 className="fw-semibold mb-3">Our Vision</h4>
          <p className="text-muted mx-auto" style={{ maxWidth: '700px' }}>
            Our goal is to empower food businesses with simple, reliable, and
            intelligent digital tools that improve efficiency, reduce waste,
            and support sustainable growth in the food industry.
          </p>
        </div>
      </div>
    </section>
  )
}
