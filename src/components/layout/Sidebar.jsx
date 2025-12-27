'use client'

export default function Sidebar() {
  return (
    <aside className="border-end p-3 mt-5" style={{ width: '240px' }}>
      <p className="fw-bold mb-3">Dashboard</p>
      <ul className="nav flex-column gap-2">
        <li className="nav-item">Overview</li>
        <li className="nav-item">Inventory</li>
        <li className="nav-item">Suppliers</li>
        <li className="nav-item">Settings</li>
      </ul>
    </aside>
  )
}
