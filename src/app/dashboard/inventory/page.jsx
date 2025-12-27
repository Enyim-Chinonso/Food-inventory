'use client'

import { useEffect, useRef } from 'react'
import gsap from 'gsap'

export default function InventoryPage() {
  const headerRef = useRef(null)
  const tableRef = useRef(null)

  useEffect(() => {
    gsap.from(headerRef.current, {
      opacity: 0,
      y: 20,
      duration: 0.6,
      ease: 'power3.out',
    })

    gsap.from(tableRef.current, {
      opacity: 0,
      y: 30,
      duration: 0.6,
      delay: 0.2,
      ease: 'power3.out',
    })
  }, [])

  return (
    <>
      {/* Page Header */}
      <div ref={headerRef} className="mb-4">
        <h2 className="fw-bold mb-1">Inventory</h2>
        <p className="text-muted mb-0">
          Track, manage, and monitor all food items in your system
        </p>
      </div>

      {/* Controls */}
      <div className="d-flex flex-wrap gap-3 mb-4">
        <input
          type="text"
          className="form-control w-auto"
          placeholder="Search items..."
        />

        <select className="form-select w-auto">
          <option>All Status</option>
          <option>In Stock</option>
          <option>Low Stock</option>
          <option>Expiring Soon</option>
        </select>

        <button className="btn btn-primary ms-auto">
          + Add Item
        </button>
      </div>

      {/* Inventory Table */}
      <div ref={tableRef} className="card border-0 shadow-sm">
        <div className="card-body p-0">
          <div className="table-responsive">
            <table className="table table-hover align-middle mb-0">
              <thead className="table-light">
                <tr>
                  <th>Item Name</th>
                  <th>Category</th>
                  <th>Quantity</th>
                  <th>Status</th>
                  <th>Expiry Date</th>
                  <th className="text-end">Actions</th>
                </tr>
              </thead>

              <tbody>
                <tr>
                  <td>Rice (5kg)</td>
                  <td>Grains</td>
                  <td>120</td>
                  <td>
                    <span className="badge bg-success">
                      In Stock
                    </span>
                  </td>
                  <td>12 Aug 2025</td>
                  <td className="text-end">
                    <button className="btn btn-sm btn-outline-secondary me-2">
                      View
                    </button>
                    <button className="btn btn-sm btn-outline-primary">
                      Edit
                    </button>
                  </td>
                </tr>

                <tr>
                  <td>Vegetable Oil</td>
                  <td>Cooking Oil</td>
                  <td>18</td>
                  <td>
                    <span className="badge bg-warning text-dark">
                      Low Stock
                    </span>
                  </td>
                  <td>30 Jun 2025</td>
                  <td className="text-end">
                    <button className="btn btn-sm btn-outline-secondary me-2">
                      View
                    </button>
                    <button className="btn btn-sm btn-outline-primary">
                      Edit
                    </button>
                  </td>
                </tr>

                <tr>
                  <td>Frozen Chicken</td>
                  <td>Frozen Foods</td>
                  <td>10</td>
                  <td>
                    <span className="badge bg-danger">
                      Expiring Soon
                    </span>
                  </td>
                  <td>05 May 2025</td>
                  <td className="text-end">
                    <button className="btn btn-sm btn-outline-secondary me-2">
                      View
                    </button>
                    <button className="btn btn-sm btn-outline-primary">
                      Edit
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  )
}
