'use client'

import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import Link from 'next/link'
import DashboardHeader from '@/components/DashboardHeader'

export default function InventoryManagerDashboard() {
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
        <DashboardHeader title="Inventory Manager Dashboard" />
      {/* Header */}
      <div ref={headerRef} className="mb-4">
        <h2 className="fw-bold mb-1">Inventory Manager Dashboard</h2>
        <p className="text-muted mb-0">
          Control stock levels, suppliers, and inventory health
        </p>
      </div>

      {/* KPI Cards */}
      <div className="row g-4 mb-4">
        {[
          { title: 'Total Items', value: 1240 },
          { title: 'Low Stock Items', value: 22, color: 'warning' },
          { title: 'Expiring Soon', value: 9, color: 'danger' },
          { title: 'Active Suppliers', value: 14 },
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

      {/* Inventory Alerts */}
      <div className="row g-4 mb-4">
        <div className="col-lg-7">
          <div className="card border-0 shadow-sm h-100">
            <div className="card-body">
              <h5 className="fw-semibold mb-3">Inventory Health Alerts</h5>

              <ul className="list-group list-group-flush small">
                <li className="list-group-item d-flex justify-content-between align-items-center">
                  Rice (5kg bags)
                  <span className="badge bg-warning text-dark">
                    Low Stock
                  </span>
                </li>

                <li className="list-group-item d-flex justify-content-between align-items-center">
                  Frozen Chicken
                  <span className="badge bg-danger">
                    Expiring Soon
                  </span>
                </li>

                <li className="list-group-item d-flex justify-content-between align-items-center">
                  Vegetable Oil
                  <span className="badge bg-warning text-dark">
                    Low Stock
                  </span>
                </li>
              </ul>

              <Link
                href="/dashboard/inventory"
                className="btn btn-outline-primary btn-sm mt-3"
              >
                View Full Inventory
              </Link>
            </div>
          </div>
        </div>

        {/* Supplier Summary */}
        <div className="col-lg-5">
          <div className="card border-0 shadow-sm h-100">
            <div className="card-body">
              <h5 className="fw-semibold mb-3">Top Suppliers</h5>

              <ul className="list-unstyled small">
                <li className="mb-3">
                  <strong>GreenFarm Ltd</strong>
                  <div className="text-muted">
                    120 items supplied
                  </div>
                </li>

                <li className="mb-3">
                  <strong>AgroFoods Nigeria</strong>
                  <div className="text-muted">
                    95 items supplied
                  </div>
                </li>

                <li>
                  <strong>FreshMart Distributors</strong>
                  <div className="text-muted">
                    78 items supplied
                  </div>
                </li>
              </ul>

              <Link
                href="/dashboard/suppliers"
                className="btn btn-outline-secondary btn-sm"
              >
                Manage Suppliers
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="card border-0 shadow-sm">
        <div className="card-body d-flex flex-wrap gap-3">
          <Link
            href="/dashboard/inventory/add"
            className="btn btn-primary"
          >
            + Add New Item
          </Link>

          <Link
            href="/dashboard/inventory"
            className="btn btn-outline-primary"
          >
            Restock Items
          </Link>

          <Link
            href="/dashboard/reports"
            className="btn btn-outline-secondary"
          >
            View Reports
          </Link>
        </div>
      </div>
    </div>
  )
}
