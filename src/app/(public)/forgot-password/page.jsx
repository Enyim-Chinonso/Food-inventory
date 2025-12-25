'use client'

import { useEffect, useRef, useState } from 'react'
import gsap from 'gsap'
import Link from 'next/link'

export default function ForgotPasswordPage() {
  const formRef = useRef(null)
  const [submitted, setSubmitted] = useState(false)

  useEffect(() => {
    gsap.from(formRef.current, {
      opacity: 0,
      y: 40,
      duration: 1,
      ease: 'power3.out',
    })
  }, [])

  return (
    <section className="min-vh-100 d-flex align-items-center justify-content-center bg-light">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-6 col-lg-5">
            <div ref={formRef} className="card shadow-sm border-0 p-4">
              <h3 className="fw-bold mb-3 text-center">Forgot your password?</h3>

              {!submitted ? (
                <>
                  <p className="text-muted text-center mb-4">
                    Enter your email address and we’ll send you a link to reset your password.
                  </p>

                  <form
                    onSubmit={(e) => {
                      e.preventDefault()
                      setSubmitted(true)
                    }}
                  >
                    <div className="mb-3">
                      <label className="form-label">Email address</label>
                      <input
                        type="email"
                        className="form-control form-control-lg"
                        placeholder="you@example.com"
                        required
                      />
                    </div>

                    <button className="btn btn-dark btn-lg w-100">
                      Send reset link
                    </button>
                  </form>
                </>
              ) : (
                <div className="text-center">
                  <p className="text-success fw-semibold">
                    If an account exists for this email, a password reset link has been sent.
                  </p>
                </div>
              )}

              <div className="text-center mt-4">
                <Link href="/login" className="text-decoration-none">
                  ← Back to login
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
