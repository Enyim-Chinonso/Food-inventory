'use client'

import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import DashboardHeader from '@/components/DashboardHeader'

export default function SettingsPage() {
  const headerRef = useRef(null)
  const cardsRef = useRef([])

  useEffect(() => {
    gsap.from(headerRef.current, {
      opacity: 0,
      y: 20,
      duration: 0.6,
      ease: 'power3.out',
    })

    gsap.from(cardsRef.current, {
      opacity: 0,
      y: 30,
      duration: 0.6,
      stagger: 0.15,
      delay: 0.2,
      ease: 'power3.out',
    })
  }, [])

  return (
    <>
   
      <DashboardHeader title="Settings Dashboard" />

      {/* Page Header */}
      <div ref={headerRef} className="mb-4">
        <h2 className="fw-bold mb-1">Settings</h2>
        <p className="text-muted mb-0">
          Manage your account preferences and system configuration
        </p>
      </div>

      {/* Settings Grid */}
      <div className="row g-4">

        {/* Profile Settings */}
        <div
          className="col-md-6"
          ref={(el) => (cardsRef.current[0] = el)}
        >
          <div className="card border-0 shadow-sm h-100">
            <div className="card-body">
              <h5 className="fw-semibold mb-3">Profile</h5>

              <div className="mb-3">
                <label htmlFor='name' className="form-label">Full Name</label>
                <input id='name' type="text" className="form-control" 
                defaultValue="Admin User" />
              </div>

              <div className="mb-3">
                <label htmlFor='email' className="form-label">Email Address</label>
                <input
                  id='email'
                  type="email"
                  className="form-control"
                  defaultValue="admin@foodinventory.com"
                />
              </div>

              <button className="btn btn-primary">
                Save Changes
              </button>
            </div>
          </div>
        </div>

        {/* Preferences */}
        <div
          className="col-md-6"
          ref={(el) => (cardsRef.current[1] = el)}
        >
          <div className="card border-0 shadow-sm h-100">
            <div className="card-body">
              <h5 className="fw-semibold mb-3">Preferences</h5>

              <div className="form-check form-switch mb-3">
                <input className="form-check-input" type="checkbox" defaultChecked />
                <label className="form-check-label">
                  Email notifications
                </label>
              </div>

              <div className="form-check form-switch mb-3">
                <input className="form-check-input" type="checkbox" />
                <label className="form-check-label">
                  SMS alerts for low stock
                </label>
              </div>

              <div className="form-check form-switch">
                <input className="form-check-input" type="checkbox" defaultChecked />
                <label className="form-check-label">
                  Auto-expiry reminders
                </label>
              </div>
            </div>
          </div>
        </div>

        {/* Security */}
        <div
          className="col-md-6"
          ref={(el) => (cardsRef.current[2] = el)}
        >
          <div className="card border-0 shadow-sm h-100">
            <div className="card-body">
              <h5 className="fw-semibold mb-3">Security</h5>

              <div className="mb-3">
                <label htmlFor='pass' className="form-label">Current Password</label>
                <input id='pass' type="password" className="form-control" />
              </div>

              <div className="mb-3">
                <label htmlFor='newpass' className="form-label">New Password</label>
                <input id='newpass' type="password" className="form-control" />
              </div>

              <button className="btn btn-outline-primary">
                Update Password
              </button>
            </div>
          </div>
        </div>

        {/* Danger Zone */}
        <div
          className="col-md-6"
          ref={(el) => (cardsRef.current[3] = el)}
        >
          <div className="card border-0 shadow-sm h-100">
            <div className="card-body">
              <h5 className="fw-semibold mb-3 text-danger">
                Danger Zone
              </h5>

              <p className="text-muted small">
                Logging out will end your current session.
              </p>

              <button className="btn btn-outline-danger">
                Log Out
              </button>
            </div>
          </div>
        </div>

      </div>
    </>
  )
}
