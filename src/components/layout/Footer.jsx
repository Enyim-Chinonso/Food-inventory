'use client'

export default function Footer() {
  return (
    <footer className="bg-dark text-light pt-5 pb-4">
      <div className="container">
        <div className="row gy-4">
          {/* Brand */}
          <div className="col-md-4">
            <h5 className="fw-bold">Food Inventory System</h5>
            <p className="text-muted small">
              A smart platform for managing food stock, reducing waste,
              and improving operational efficiency.
            </p>
          </div>

          {/* Links */}
          <div className="col-md-4">
            <h6 className="fw-semibold mb-3">Quick Links</h6>
            <ul className="list-unstyled small">
              <li className="mb-2">
                <a href="/" className="text-decoration-none text-muted">
                  Home
                </a>
              </li>
              <li className="mb-2">
                <a href="#features" className="text-decoration-none text-muted">
                  Features
                </a>
              </li>
              <li className="mb-2">
                <a href="/login" className="text-decoration-none text-muted">
                  Login
                </a>
              </li>
            </ul>
          </div>

          {/* Info */}
          <div className="col-md-4">
            <h6 className="fw-semibold mb-3">Product</h6>
            <ul className="list-unstyled small">
              <li className="mb-2 text-muted">Inventory Management</li>
              <li className="mb-2 text-muted">Expiry Tracking</li>
              <li className="mb-2 text-muted">Analytics & Reports</li>
            </ul>
          </div>
        </div>

        <hr className="border-secondary my-4" />

        <div className="text-center small text-muted">
          © {new Date().getFullYear()} Food Inventory System. All rights reserved.
        </div>
      </div>
    </footer>
  )
}
