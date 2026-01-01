'use client'

import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import DashboardHeader from '@/components/DashboardHeader'

export default function DashboardPage() {
  const headerRef = useRef(null)
  const cardsRef = useRef([])
  const sectionRef = useRef(null)

  useEffect(() => {
    gsap.from(headerRef.current, {
      opacity: 0,
      y: 20,
      duration: 0.8,
      ease: 'power3.out',
    })

    gsap.from(cardsRef.current, {
      opacity: 0,
      y: 30,
      duration: 0.8,
      stagger: 0.15,
      delay: 0.2,
      ease: 'power3.out',
    })

    gsap.from(sectionRef.current, {
      opacity: 0,
      y: 30,
      duration: 0.8,
      delay: 0.6,
      ease: 'power3.out',
    })
  }, [])

  return (
    <>
    <DashboardHeader title="Overview Dashboard" />

      {/* Page Header */}
      <div ref={headerRef} className="mb-4">
        <h2 className="fw-bold mb-1">Dashboard Overview</h2>
        <p className="text-muted mb-0">
          Monitor your inventory health and key activities
        </p>

<button
  className="btn btn-sm btn-outline-secondary"
  onClick={() => router.push('/dashboard-select')}
>
  Switch Dashboard
</button>


      </div>

      {/* KPI Cards */}
      <div className="row g-4 mb-5">
        {[
          { title: 'Total Items', value: '1,240', icon: '📦' },
          { title: 'Low Stock', value: '18', icon: '⚠️' },
          { title: 'Expiring Soon', value: '7', icon: '⏳' },
          { title: 'Suppliers', value: '12', icon: '🏭' },
        ].map((item, index) => (
          <div
            className="col-12 col-sm-6 col-lg-3"
            key={index}
            ref={(el) => (cardsRef.current[index] = el)}
          >
            <div className="card border-0 shadow-sm h-100">
              <div className="card-body d-flex justify-content-between align-items-center">
                <div>
                  <p className="text-muted small mb-1">{item.title}</p>
                  <h4 className="fw-bold mb-0">{item.value}</h4>
                </div>

                <div
                  className="d-flex align-items-center justify-content-center rounded-circle bg-light"
                  style={{ width: 48, height: 48, fontSize: 20 }}
                >
                  {item.icon}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Alerts & Activity */}
      <div ref={sectionRef} className="row g-4">
        {/* Alerts */}
        <div className="col-lg-6">
          <div className="card border-0 shadow-sm h-100">
            <div className="card-body">
              <h5 className="fw-semibold mb-3">Alerts</h5>

              <ul className="list-group list-group-flush">
                <li className="list-group-item d-flex justify-content-between">
                  <span>Rice (5kg bags)</span>
                  <span className="badge bg-warning text-dark">
                    Low Stock
                  </span>
                </li>

                <li className="list-group-item d-flex justify-content-between">
                  <span>Vegetable Oil</span>
                  <span className="badge bg-danger">
                    Expiring Soon
                  </span>
                </li>

                <li className="list-group-item d-flex justify-content-between">
                  <span>Frozen Chicken</span>
                  <span className="badge bg-warning text-dark">
                    Low Stock
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Recent Activity */}
        <div className="col-lg-6">
          <div className="card border-0 shadow-sm h-100">
            <div className="card-body">
              <h5 className="fw-semibold mb-3">Recent Activity</h5>

              <ul className="list-unstyled small mb-0">
                <li className="mb-3">
                  <strong>Admin</strong> added new stock for <em>Rice</em>
                  <div className="text-muted">2 hours ago</div>
                </li>

                <li className="mb-3">
                  <strong>Manager</strong> updated supplier information
                  <div className="text-muted">Yesterday</div>
                </li>

                <li>
                  <strong>System</strong> flagged expiring items
                  <div className="text-muted">2 days ago</div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
