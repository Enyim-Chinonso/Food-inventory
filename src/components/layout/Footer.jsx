'use client'

export default function Footer() {
  return (
    <footer className="bg-dark text-light pt-5 pb-4 mt-0">
      <div className="container">
        <div className="row gy-4">
          {/* Brand */}
          <div className="col-md-4">
            <h5 className="fw-bold mb-3">Food Inventory System</h5>
            <p className="text-light opacity-75 small">
              A smart platform for managing food stock, reducing waste,
              and improving operational efficiency for food businesses.
            </p>

            {/* Social Icons */}
            {/* <div className="d-flex gap-3 mt-3">
              <a href="https://github.com/" target="_blank" className="text-light fs-5">
                <i className="bi bi-github"></i>
              </a>
              <a href="https://wa.me/2340000000000" target="_blank" className="text-light fs-5">
                <i className="bi bi-whatsapp"></i>
              </a>
              <a href="https://facebook.com/" target="_blank" className="text-light fs-5">
                <i className="bi bi-facebook"></i>
              </a>
              <a href="https://linkedin.com/" target="_blank" className="text-light fs-5">
                <i className="bi bi-linkedin"></i>
              </a>
              <a href="https://x.com/" target="_blank" className="text-light fs-5">
                <i className="bi bi-twitter-x"></i>
              </a>
            </div> */}
          </div>

          {/* Navigation */}
          <div className="col-md-4">
            <h6 className="fw-semibold mb-3">Navigation</h6>
            <ul className="list-unstyled small">
              <li className="mb-2">
                <a href="/" className="text-light opacity-75 text-decoration-none">
                  Home
                </a>
              </li>
              <li className="mb-2">
                <a href="#features" className="text-light opacity-75 text-decoration-none">
                  Features
                </a>
              </li>
              <li className="mb-2">
                <a href="#how-it-works" className="text-light opacity-75 text-decoration-none">
                  How It Works
                </a>
              </li>
              <li className="mb-2">
                <a href="/login" className="text-light opacity-75 text-decoration-none">
                  Login
                </a>
              </li>
            </ul>
          </div>

          {/* Product */}
          <div className="col-md-4">
            <h6 className="fw-semibold mb-3">Product</h6>
            <ul className="list-unstyled small text-light opacity-75">
              <li className="mb-2">Inventory Management</li>
              <li className="mb-2">Expiry Date Tracking</li>
              <li className="mb-2">Supplier Management</li>
              <li className="mb-2">Analytics & Reports</li>
            </ul>
          </div>
        </div>

        <hr className="border-secondary my-4" />

        <div className="text-center small text-light opacity-75">
          © {new Date().getFullYear()} Food Inventory System. All rights reserved.
        </div>
      </div>
    </footer>
  )
}
