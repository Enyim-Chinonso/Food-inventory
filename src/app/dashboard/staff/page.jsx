'use client'

import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import Link from 'next/link'
import DashboardHeader from '@/components/DashboardHeader'

export default function StaffDashboard() {
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
    <div className="container-fluid">
        <DashboardHeader title="Staff Dashboard" />
        
   {/* Header */}
       <div ref={headerRef} className="mb-4">
         <h2 className="fw-bold mb-1">Staff Dashboard</h2>
        <p className="text-muted mb-0">
           Monitor stock and perform daily inventory tasks
         </p>
       </div>

      {/* Summary Cards */}
      <div className="row g-4 mb-4">
        {[
          { title: 'Items Available', value: 1240 },
          { title: 'Low Stock', value: 18, color: 'warning' },
          { title: 'Expiring Soon', value: 7, color: 'danger' },
          { title: 'Tasks Today', value: 5 },
        ].map((item, index) => (
          <div
            key={index}
            className="col-sm-6 col-lg-3"
            ref={(el) => (cardsRef.current[index] = el)}
          >
            <div className="card border-0 shadow-sm h-100">
              <div className="card-body">
                <p className="text-muted small mb-1">{item.title}</p>
                <h3 className={`fw-bold text-${item.color || 'dark'}`}>
                  {item.value}
                </h3>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Alerts & Tasks */}
      <div className="row g-4">
        {/* Alerts */}
        <div className="col-lg-6">
          <div className="card border-0 shadow-sm h-100">
            <div className="card-body">
              <h5 className="fw-semibold mb-3">Attention Required</h5>

              <ul className="list-group list-group-flush small">
                <li className="list-group-item d-flex justify-content-between">
                  <span>Vegetable Oil</span>
                  <span className="badge bg-warning text-dark">Low Stock</span>
                </li>
                <li className="list-group-item d-flex justify-content-between">
                  <span>Frozen Chicken</span>
                  <span className="badge bg-danger">Expiring Soon</span>
                </li>
                <li className="list-group-item d-flex justify-content-between">
                  <span>Rice (5kg)</span>
                  <span className="badge bg-warning text-dark">Low Stock</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Tasks */}
        <div className="col-lg-6">
          <div className="card border-0 shadow-sm h-100">
            <div className="card-body">
              <h5 className="fw-semibold mb-3">Today’s Tasks</h5>

              <ul className="list-unstyled small mb-0">
                <li className="mb-3">
                  ✔ Update stock for <strong>Vegetable Oil</strong>
                </li>
                <li className="mb-3">
                  ✔ Check expiry dates in <strong>Frozen Foods</strong>
                </li>
                <li>
                  ✔ Receive new supply from <strong>GreenFarm Ltd</strong>
                </li>
              </ul>

              <Link
                href="/dashboard/inventory"
                className="btn btn-outline-primary btn-sm mt-3"
              >
                Go to Inventory
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
