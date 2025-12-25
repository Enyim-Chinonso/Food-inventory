"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import Link from "next/link";

export default function RegisterPage() {
  const formRef = useRef(null);
  const [error, setError] = useState("");

  useEffect(() => {
    gsap.from(formRef.current, {
      opacity: 0,
      y: 40,
      duration: 1,
      ease: "power3.out",
    });
  }, []);

  function handleSubmit(e) {
    e.preventDefault();
    setError("");
    // Backend integration will go here later
  }

  return (
    <section className="min-vh-100 d-flex align-items-center justify-content-center mt-5 bg-light">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-7 col-lg-6">
            <div ref={formRef} className="card shadow-sm border-0 p-4">
              <h3 className="fw-bold mb-3 text-center">Create your account</h3>

              <p className="text-muted text-center mb-4">
                Get started with smart food inventory management
              </p>

              {error && <div className="alert alert-danger small">{error}</div>}

              <form onSubmit={handleSubmit}>
                <div className="row">
                  <div className="col-md-6 mb-3">
                    <label htmlFor="name" className="form-label">
                      Full Name
                    </label>
                    <input
                      id="name"
                      type="text"
                      className="form-control form-control-lg"
                      placeholder="Enter your full name"
                      required
                    />
                  </div>

                  <div className="col-md-6 mb-3">
                    <label htmlFor="email" className="form-label">
                      Email Address
                    </label>
                    <input
                      id="email"
                      type="email"
                      className="form-control form-control-lg"
                      placeholder="you@example.com"
                      required
                    />
                  </div>
                </div>

                <div className="mb-3">
                  <label htmlFor="role" className="form-label">Role</label>
                  <select id="role" className="form-select form-select-lg" required>
                    <option value="">Select your role</option>
                    <option value="admin">Business Owner / Admin</option>
                    <option value="manager">Store Manager</option>
                    <option value="staff">Staff</option>
                  </select>
                </div>

                <div className="row">
                  <div className="col-md-6 mb-3">
                    <label htmlFor="password" className="form-label">
                      Password
                    </label>
                    <input
                      id="password"
                      type="password"
                      className="form-control form-control-lg"
                      required
                    />

                  </div>
                
                  <div className="col-md-6 mb-3">
                    <label className="form-label">
                      Confirm Password
                    </label>
                    <input
                    id="password"
                      type="password"
                      className="form-control form-control-lg"
                      required
                    />
                  </div>
                </div>

                <button className="btn btn-dark btn-lg w-100 mt-2">
                  Create account
                </button>
              </form>

              <div className="text-center mt-4">
                <span className="text-muted small">
                  Already have an account?{" "}
                </span>
                <Link href="/login" className="small text-decoration-none">
                  Log in
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
