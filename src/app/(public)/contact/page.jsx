'use client'

import { useEffect, useRef } from 'react'
import gsap from 'gsap'

export default function ContactPage() {
  const sectionRef = useRef(null)

  useEffect(() => {
    gsap.from(sectionRef.current, {
      opacity: 0,
      y: 60,
      duration: 1,
      ease: 'power3.out',
    })
  }, [])

  return (
    <section 
      ref={sectionRef}
      className="py-5"
      style={{ minHeight: '100vh', paddingTop: '120px', backgroundColor: '#f0f0f0'}}
    >
      <div className="container">
        {/* Header */}
        <div className="text-center mt-5 mb-5">
          <h2 className="fw-bold">Contact Us</h2>
          <p className="text-muted mt-2">
            Have questions, feedback, or partnership ideas? We’d love to hear from you.
          </p>
        </div>

        <div className="row g-5">
          {/* Contact Info */}
          <div className="col-md-5">
            <h5 className="fw-semibold mb-3">Get in Touch</h5>
            <p className="text-muted small">
              Reach out to us for support, inquiries, or collaboration opportunities.
            </p>

            <ul className="list-unstyled mt-4 small">
              <li className="mb-3">
                <i className="fas fa-envelope me-2 text-primary"></i>
                support@foodinventory.com
              </li>
              <li className="mb-3">
                <i className="fas fa-phone me-2 text-primary"></i>
                +234 XXX XXX XXXX
              </li>
              <li className="mb-3">
                <i className="fas fa-map-marker-alt me-2 text-primary"></i>
                Nigeria
              </li>
            </ul>

            {/* Social Icons */}
            <div className="d-flex gap-3 mt-4">
              <a href="https://wa.me/2348108111761" className="text-dark fs-4">
                <i className="fab fa-whatsapp"></i>
              </a>
              <a href="https://github.com/Enyim-Chinonso" className="text-dark fs-4">
                <i className="fab fa-github"></i>
              </a>
              <a href="https://web.facebook.com/?_rdc=1&_rdr#" className="text-dark fs-4">
                <i className="fab fa-facebook"></i>
              </a>
              <a href="#" className="text-dark fs-4">
                <i className="fab fa-linkedin"></i>
              </a>
            </div>
          </div>

          {/* Contact Form */}
          <div className="col-md-7">
            <div className="card shadow-sm border-0">
              <div className="card-body p-4">
                <h5 className="fw-semibold mb-4">Send a Message</h5>

                <form>
                  <div className="mb-3">
                    <label className="form-label">Full Name</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Your name"
                    />
                  </div>

                  <div className="mb-3">
                    <label className="form-label">Email Address</label>
                    <input
                      type="email"
                      className="form-control"
                      placeholder="you@example.com"
                    />
                  </div>

                  <div className="mb-3">
                    <label className="form-label">Message</label>
                    <textarea
                      className="form-control"
                      rows="4"
                      placeholder="Write your message here..."
                    ></textarea>
                  </div>

                  <button className="btn btn-primary px-4">
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
