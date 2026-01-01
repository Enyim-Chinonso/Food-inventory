'use client'

import { useRouter } from 'next/navigation'

export default function DashboardHeader({ title }) {
  const router = useRouter()

  const handleLogout = () => {
    // Clear auth/session (mock for now)
    localStorage.removeItem('user')
    router.push('/login')
  }

  const handleSwitchDashboard = () => {
    router.push('/dashboard-select')
  }

  return (
    <div className="d-flex flex-column flex-md-row justify-content-between align-items-md-center mb-4 gap-3">
      <div>
        <h2 className="fw-bold mb-0">{title}</h2>
        <p className="text-muted small mb-0">
          Manage your workspace efficiently
        </p>
      </div>

      <div className="d-flex gap-2">
        <button
          onClick={handleSwitchDashboard}
          className="btn btn-outline-secondary btn-sm"
        >
          Switch Dashboard
        </button>

        <button
          onClick={handleLogout}
          className="btn btn-outline-danger btn-sm"
        >
          Logout
        </button>
      </div>
    </div>
  )
}
