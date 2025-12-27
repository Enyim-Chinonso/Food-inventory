'use client'

import { useEffect, useRef } from 'react'
import gsap from 'gsap'

export default function SuppliersPage() {
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
        <h2 className="fw-bold mb-1">Suppliers</h2>
        <p className="text-muted mb-0">
          Manage suppliers, contacts, and supply relationships
        </p>
      </div>

      {/* Controls */}
      <div className="d-flex flex-wrap gap-3 mb-4">
        <input
          type="text"
          className="form-control w-auto"
          placeholder="Search suppliers..."
        />

        <select className="form-select w-auto">
          <option>All Status</option>
          <option>Active</option>
          <option>Inactive</option>
        </select>

        <button className="btn btn-primary ms-auto">
          + Add Supplier
        </button>
      </div>

      {/* Suppliers Table */}
      <div ref={tableRef} className="card border-0 shadow-sm">
        <div className="card-body p-0">
          <div className="table-responsive">
            <table className="table table-hover align-middle mb-0">
              <thead className="table-light">
                <tr>
                  <th>Supplier Name</th>
                  <th>Contact Person</th>
                  <th>Phone</th>
                  <th>Email</th>
                  <th>Status</th>
                  <th className="text-end">Actions</th>
                </tr>
              </thead>

              <tbody>
                <tr>
                  <td>GreenFarm Foods Ltd</td>
                  <td>John Okeke</td>
                  <td>+234 801 234 5678</td>
                  <td>contact@greenfarm.com</td>
                  <td>
                    <span className="badge bg-success">Active</span>
                  </td>
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
                  <td>Prime Oil Distributors</td>
                  <td>Aisha Bello</td>
                  <td>+234 809 876 5432</td>
                  <td>sales@primeoil.com</td>
                  <td>
                    <span className="badge bg-success">Active</span>
                  </td>
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
                  <td>Frozen Hub</td>
                  <td>Samuel Ade</td>
                  <td>+234 703 456 7890</td>
                  <td>info@frozenhub.com</td>
                  <td>
                    <span className="badge bg-secondary">Inactive</span>
                  </td>
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
