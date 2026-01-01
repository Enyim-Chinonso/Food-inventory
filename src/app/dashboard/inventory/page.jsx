"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import Link from "next/link";
import DashboardHeader from '@/components/DashboardHeader'


const inventoryItems = [
  {
    id: 1,
    name: "Rice (5kg)",
    category: "Grains",
    quantity: 120,
    status: "In Stock",
    statusColor: "success",
    expiry: "12 Aug 2025",
  },
  {
    id: 2,
    name: "Vegetable Oil",
    category: "Cooking Oil",
    quantity: 18,
    status: "Low Stock",
    statusColor: "warning",
    expiry: "30 Jun 2025",
  },
  {
    id: 3,
    name: "Frozen Chicken",
    category: "Frozen Foods",
    quantity: 10,
    status: "Expiring Soon",
    statusColor: "danger",
    expiry: "05 May 2025",
  },
  {
    id: 4,
    name: "Tomato Paste",
    category: "Canned Foods",
    quantity: 65,
    status: "In Stock",
    statusColor: "success",
    expiry: "18 Nov 2025",
  },
  {
    id: 5,
    name: "Spaghetti",
    category: "Pasta",
    quantity: 22,
    status: "Low Stock",
    statusColor: "warning",
    expiry: "01 Feb 2026",
  },
];

export default function InventoryPage() {
  const headerRef = useRef(null);
  const tableRef = useRef(null);

  useEffect(() => {
    gsap.from(headerRef.current, {
      opacity: 0,
      y: 20,
      duration: 0.6,
      ease: "power3.out",
    });

    gsap.from(tableRef.current, {
      opacity: 0,
      y: 30,
      duration: 0.6,
      delay: 0.2,
      ease: "power3.out",
    });
  }, []);

  return (
    <div className="container-fluid px-0">
      <DashboardHeader title="Inventory Dashboard" />
      {/* Header */}
      <div ref={headerRef} className="mb-4">
        <h2 className="fw-bold mb-1">Inventory</h2>
        <p className="text-muted mb-0">
          Track, manage, and monitor all food items in your system
        </p>
      </div>

      {/* Controls */}
      <div className="d-flex flex-column flex-md-row gap-3 mb-4 align-items-md-center">
        <input
          type="text"
          className="form-control"
          placeholder="Search items..."
          style={{ maxWidth: 280 }}
        />

        <select className="form-select" style={{ maxWidth: 220 }}>
          <option value="">All Status</option>
          <option>In Stock</option>
          <option>Low Stock</option>
          <option>Expiring Soon</option>
        </select>

        <div className="ms-md-auto">
          <button className="btn btn-primary">+ Add Item</button>
        </div>
      </div>

      {/* ===== DESKTOP TABLE ===== */}
      <div ref={tableRef} className="card border-0 shadow-sm d-none d-md-block">
        <div className="card-body p-0">
          <div className="table-responsive">
            <table className="table table-hover align-middle mb-0">
              <thead className="table-light">
                <tr>
                  <th>Item</th>
                  <th>Category</th>
                  <th>Quantity</th>
                  <th>Status</th>
                  <th>Expiry</th>
                  <th className="text-end">Actions</th>
                </tr>
              </thead>
              <tbody>
                {inventoryItems.map((item) => (
                  <tr key={item.id}>                  
                    <td>{item.category}</td>
                    <td>{item.quantity}</td>
                    <td>
                      <span className={`badge bg-${item.statusColor}`}>
                        {item.status}
                      </span>
                    </td>
                    <td>{item.expiry}</td>
                    <td className="text-end">
                      <Link
                        href={`/dashboard/inventory/${item.id}`}
                        className="btn btn-sm btn-outline-secondary me-2"
                      >
                        View
                      </Link>
                      <Link
                        href={`/dashboard/inventory/${item.id}/edit`}
                        className="btn btn-sm btn-outline-primary"
                      >
                        Edit
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* ===== MOBILE CARDS ===== */}
      <div className="d-md-none mt-3">
        {inventoryItems.map((item) => (
          <div key={item.id} className="card border-0 shadow-sm mb-3">
            <div className="card-body">
              <div className="d-flex justify-content-between mb-2">
                <strong>{item.name}</strong>
                <span className={`badge bg-${item.statusColor}`}>
                  {item.status}
                </span>
              </div>

              <div className="text-muted small">Category: {item.category}</div>
              <div className="text-muted small">Quantity: {item.quantity}</div>
              <div className="text-muted small mb-3">
                Expiry: {item.expiry}
              </div>

              <div className="d-flex gap-2">
                <Link
                  href={`/dashboard/inventory/${item.id}`}
                  className="btn btn-sm btn-outline-secondary w-50"
                >
                  View
                </Link>
                <Link
                  href={`/dashboard/inventory/${item.id}/edit`}
                  className="btn btn-sm btn-outline-primary w-50"
                >
                  Edit
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
