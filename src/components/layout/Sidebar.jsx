// 'use client'

// export default function Sidebar() {
//   return (
//     <aside className="border-end p-3 mt-5" style={{ width: '240px' }}>
//       <p className="fw-bold mb-3">Dashboard</p>
//       <ul className="nav flex-column gap-2">
//         <li className="nav-item">Overview</li>
//         <li className="nav-item">Inventory</li>
//         <li className="nav-item">Suppliers</li>
//         <li className="nav-item">Settings</li>
//       </ul>
//     </aside>
//   )
// }



'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function Sidebar() {
  const pathname = usePathname()

  const navItem = (href, label) => {
    const isActive = pathname === href

    return (
      <li className="nav-item mb-2">
        <Link
          href={href}
          className={`nav-link px-3 py-2 rounded ${
            isActive ? 'bg-primary text-white' : 'text-dark'
          }`}
        >
          {label}
        </Link>
      </li>
    )
  }

  return (
    <aside
      className="border-end bg-white"
      style={{ width: '240px' }}
    >
      <div className="p-4 border-bottom">
        <h5 className="fw-bold mb-0">FoodTrack</h5>
        <small className="text-muted">Dashboard</small>
      </div>

      <ul className="nav flex-column p-3">
        {navItem('/dashboard', 'Overview')}
        {navItem('/dashboard/inventory', 'Inventory')}
        {navItem('/dashboard/suppliers', 'Suppliers')}
        {navItem('/dashboard/settings', 'Settings')}
      </ul>
    </aside>
  )
}
