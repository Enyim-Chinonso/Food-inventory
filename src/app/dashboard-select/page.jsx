'use client'

import gsap from 'gsap'
import { useEffect, useRef } from 'react'
import { useRouter } from 'next/navigation'

const dashboards = [
  {
    title: 'Admin Dashboard',
    description: 'Full access to inventory, users, analytics & settings',
    path: '/dashboard',
  },
  {
    title: 'Inventory Manager',
    description: 'Manage stock levels, suppliers and reports',
    path: '/dashboard/manager',
  },
  {
    title: 'Staff Dashboard',
    description: 'View inventory and update daily records',
    path: '/dashboard/staff',
  },
]

export default function DashboardSelect() {
  const router = useRouter()
  const cardsRef = useRef([])

  useEffect(() => {
    gsap.from(cardsRef.current, {
      opacity: 0,
      y: 30,
      stagger: 0.15,
      duration: 0.6,
      ease: 'power3.out',
    })
  }, [])

  return (
    <div className="container min-vh-100 d-flex flex-column justify-content-center">
      <div className="text-center mb-5">
        <h3 className="fw-bold">Choose Your Dashboard</h3>
        <p className="text-muted">
          Select the role you want to continue with
        </p>
      </div>

      <div className="row g-4 justify-content-center">
        {dashboards.map((item, i) => (
          <div
            key={i}
            className="col-md-4"
            ref={(el) => (cardsRef.current[i] = el)}
          >
            <div
              className="card h-100 border-0 shadow-sm p-4 dashboard-card"
              role="button"
              onClick={() => router.push(item.path)}
            >
              <h5 className="fw-bold mb-2">{item.title}</h5>
              <p className="text-muted mb-0">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
