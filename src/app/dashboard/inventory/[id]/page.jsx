// 'use client'

// import { useEffect, useRef } from 'react'
// import { useParams } from 'next/navigation'
// import gsap from 'gsap'

// export default function InventoryItemDetails() {
//   const { id } = useParams()
//   const headerRef = useRef(null)
//   const cardsRef = useRef([])

//   useEffect(() => {
//     gsap.from(headerRef.current, {
//       opacity: 0,
//       y: 20,
//       duration: 0.6,
//       ease: 'power3.out',
//     })

//     gsap.from(cardsRef.current, {
//       opacity: 0,
//       y: 30,
//       duration: 0.6,
//       stagger: 0.15,
//       delay: 0.2,
//       ease: 'power3.out',
//     })
//   }, [])

//   return (
//     <>
//       {/* Page Header */}
//       <div ref={headerRef} className="mb-4">
//         <h2 className="fw-bold mb-1">
//           Inventory Item Details
//         </h2>
//         <p className="text-muted mb-0">
//           Item ID: <strong>{id}</strong>
//         </p>
//       </div>

//       <div className="row g-4">

//         {/* Item Overview */}
//         <div className="col-lg-8" ref={(el) => (cardsRef.current[0] = el)}>
//           <div className="card border-0 shadow-sm">
//             <div className="card-body">

//               <div className="d-flex justify-content-between align-items-start mb-3">
//                 <div>
//                   <h4 className="fw-bold mb-1">Rice (5kg bags)</h4>
//                   <span className="badge bg-warning text-dark">
//                     Low Stock
//                   </span>
//                 </div>

//                 <div className="d-flex gap-2">
//                   <button className="btn btn-outline-primary btn-sm">
//                     Edit
//                   </button>
//                   <button className="btn btn-outline-success btn-sm">
//                     Restock
//                   </button>
//                 </div>
//               </div>

//               <div className="row g-3">
//                 <div className="col-md-4">
//                   <p className="text-muted small mb-1">Category</p>
//                   <p className="fw-semibold mb-0">Grains</p>
//                 </div>

//                 <div className="col-md-4">
//                   <p className="text-muted small mb-1">SKU</p>
//                   <p className="fw-semibold mb-0">RICE-5KG-001</p>
//                 </div>

//                 <div className="col-md-4">
//                   <p className="text-muted small mb-1">Quantity</p>
//                   <p className="fw-semibold mb-0">45 units</p>
//                 </div>

//                 <div className="col-md-4">
//                   <p className="text-muted small mb-1">Expiry Date</p>
//                   <p className="fw-semibold mb-0 text-danger">
//                     20 Aug 2025
//                   </p>
//                 </div>

//                 <div className="col-md-4">
//                   <p className="text-muted small mb-1">Supplier</p>
//                   <p className="fw-semibold mb-0">
//                     GreenFarm Foods Ltd
//                   </p>
//                 </div>

//                 <div className="col-md-4">
//                   <p className="text-muted small mb-1">Last Updated</p>
//                   <p className="fw-semibold mb-0">
//                     2 days ago
//                   </p>
//                 </div>
//               </div>

//             </div>
//           </div>
//         </div>

//         {/* Storage & Actions */}
//         <div className="col-lg-4" ref={(el) => (cardsRef.current[1] = el)}>
//           <div className="card border-0 shadow-sm mb-4">
//             <div className="card-body">
//               <h6 className="fw-semibold mb-3">Storage Info</h6>

//               <p className="mb-2">
//                 <span className="text-muted small">Location:</span><br />
//                 Main Warehouse – Section B
//               </p>

//               <p className="mb-0">
//                 <span className="text-muted small">Temperature:</span><br />
//                 Cool & Dry
//               </p>
//             </div>
//           </div>

//           <div className="card border-0 shadow-sm">
//             <div className="card-body">
//               <h6 className="fw-semibold mb-3 text-danger">
//                 Danger Zone
//               </h6>

//               <p className="text-muted small">
//                 Deleting this item will permanently remove it from inventory.
//               </p>

//               <button className="btn btn-outline-danger w-100">
//                 Delete Item
//               </button>
//             </div>
//           </div>
//         </div>

//       </div>
//     </>
//   )
// }






'use client'

import { useEffect, useRef } from 'react'
import { useParams } from 'next/navigation'
import gsap from 'gsap'
import Link from 'next/link'

/* 🔹 Temporary mock database */
const inventoryData = {
  1: {
    name: 'Rice (5kg bags)',
    category: 'Grains',
    sku: 'RICE-5KG-001',
    quantity: 45,
    expiry: '20 Aug 2025',
    supplier: 'GreenFarm Foods Ltd',
    location: 'Main Warehouse – Section B',
    temperature: 'Cool & Dry',
    lastUpdated: '2 days ago',
    description: 'Premium long-grain rice suitable for bulk storage.',
  },
  2: {
    name: 'Vegetable Oil (10L)',
    category: 'Oil',
    sku: 'OIL-10L-002',
    quantity: 120,
    expiry: '12 Dec 2025',
    supplier: 'SunGold Suppliers',
    location: 'Warehouse A – Shelf 3',
    temperature: 'Room Temperature',
    lastUpdated: '5 days ago',
    description: 'Refined vegetable oil for commercial cooking.',
  },
  3: {
    name: 'Vegetable Oil (10L)',
    category: 'Oil',
    sku: 'OIL-10L-002',
    quantity: 120,
    expiry: '12 Dec 2025',
    supplier: 'SunGold Suppliers',
    location: 'Warehouse A – Shelf 3',
    temperature: 'Room Temperature',
    lastUpdated: '5 days ago',
    description: 'Refined vegetable oil for commercial cooking.',
  },
  4: {
    name: 'Vegetable Oil (10L)',
    category: 'Oil',
    sku: 'OIL-10L-002',
    quantity: 120,
    expiry: '12 Dec 2025',
    supplier: 'SunGold Suppliers',
    location: 'Warehouse A – Shelf 3',
    temperature: 'Room Temperature',
    lastUpdated: '5 days ago',
    description: 'Refined vegetable oil for commercial cooking.',
  },
  5: {
    name: 'Vegetable Oil (10L)',
    category: 'Oil',
    sku: 'OIL-10L-002',
    quantity: 120,
    expiry: '12 Dec 2025',
    supplier: 'SunGold Suppliers',
    location: 'Warehouse A – Shelf 3',
    temperature: 'Room Temperature',
    lastUpdated: '5 days ago',
    description: 'Refined vegetable oil for commercial cooking.',
  },
}

function getStockStatus(quantity) {
  if (quantity <= 10) return { label: 'Critical', color: 'danger' }
  if (quantity <= 50) return { label: 'Low Stock', color: 'warning' }
  return { label: 'In Stock', color: 'success' }
}

export default function InventoryItemDetails() {
  const { id } = useParams()
  const headerRef = useRef(null)
  const cardsRef = useRef([])

  const item = inventoryData[id]

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

  if (!item) {
    return <p className="text-danger">Item not found.</p>
  }

  const stockStatus = getStockStatus(item.quantity)

  return (
    <>
      {/* Back Navigation */}
      <Link
        href="/dashboard/inventory"
        className="btn btn-sm btn-outline-secondary mb-4"
      >
        ← Back to Inventory
      </Link>

      {/* Page Header */}
      <div ref={headerRef} className="mb-4">
        <h2 className="fw-bold mb-1">{item.name}</h2>
        <p className="text-muted mb-0">
          SKU: <strong>{item.sku}</strong>
        </p>
      </div>

      <div className="row g-4">

        {/* Item Overview */}
        <div className="col-lg-8" ref={(el) => (cardsRef.current[0] = el)}>
          <div className="card border-0 shadow-sm">
            <div className="card-body">

              <div className="d-flex justify-content-between align-items-start mb-3">
                <span className={`badge bg-${stockStatus.color}`}>
                  {stockStatus.label}
                </span>

                <div className="d-flex gap-2">
                  <button className="btn btn-outline-primary btn-sm">
                    Edit
                  </button>
                  <button className="btn btn-outline-success btn-sm">
                    Restock
                  </button>
                </div>
              </div>

              <div className="row g-3">
                <Detail label="Category" value={item.category} />
                <Detail label="Quantity" value={`${item.quantity} units`} />
                <Detail label="Expiry Date" value={item.expiry} danger />
                <Detail label="Supplier" value={item.supplier} />
                <Detail label="Last Updated" value={item.lastUpdated} />
              </div>

              <hr />

              <p className="text-muted">{item.description}</p>

            </div>
          </div>
        </div>

        {/* Storage & Actions */}
        <div className="col-lg-4" ref={(el) => (cardsRef.current[1] = el)}>
          <div className="card border-0 shadow-sm mb-4">
            <div className="card-body">
              <h6 className="fw-semibold mb-3">Storage Info</h6>
              <p className="mb-2">
                <span className="text-muted small">Location</span><br />
                {item.location}
              </p>
              <p className="mb-0">
                <span className="text-muted small">Temperature</span><br />
                {item.temperature}
              </p>
            </div>
          </div>

          <div className="card border-0 shadow-sm">
            <div className="card-body">
              <h6 className="fw-semibold mb-3 text-danger">
                Danger Zone
              </h6>
              <p className="text-muted small">
                This action is irreversible.
              </p>
              <button className="btn btn-outline-danger w-100">
                Delete Item
              </button>
            </div>
          </div>
        </div>

      </div>
    </>
  )
}

/* 🔹 Reusable detail component */
function Detail({ label, value, danger }) {
  return (
    <div className="col-md-4">
      <p className="text-muted small mb-1">{label}</p>
      <p className={`fw-semibold mb-0 ${danger ? 'text-danger' : ''}`}>
        {value}
      </p>
    </div>
  )
}
