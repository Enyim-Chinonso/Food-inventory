'use client'

import { useEffect, useRef } from 'react'
import gsap from 'gsap'

export default function PublicNavbar() {
  const navRef = useRef(null)
  const linksRef = useRef([])
  const collapseRef = useRef(null)
  const bsCollapseRef = useRef(null) // store the collapse instance

  useEffect(() => {
    // Navbar entrance animation
    gsap.from(navRef.current, {
      y: -80,
      opacity: 0,
      duration: 1,
      ease: 'power3.out',
    })

    // Animate nav links on load
    gsap.from(linksRef.current, {
      y: -20,
      opacity: 0,
      duration: 0.8,
      delay: 0.5,
      stagger: 0.1,
      ease: 'power3.out',
    })

    // Dynamically import Bootstrap Collapse only on client
    const setupCollapse = async () => {
      if (!collapseRef.current) return
      const Collapse = (await import('bootstrap/js/dist/collapse')).default
      bsCollapseRef.current = new Collapse(collapseRef.current, { toggle: false })

      collapseRef.current.addEventListener('show.bs.collapse', () => {
        gsap.fromTo(
          linksRef.current,
          { x: -50, opacity: 0 },
          { x: 0, opacity: 1, duration: 0.5, stagger: 0.1, ease: 'power3.out' }
        )
      })
    }

    setupCollapse()
  }, [])

  // Collapse the navbar on mobile when a link is clicked
  const handleNavLinkClick = () => {
    if (bsCollapseRef.current && window.innerWidth < 992) {
      bsCollapseRef.current.hide()
    }
  }

  const setLinkRef = (el, index) => {
    linksRef.current[index] = el
  }

  return (
    <nav
      ref={navRef}
      className="navbar navbar-expand-lg navbar-dark bg-dark position-fixed top-0 w-100 px-4 shadow"
      style={{ zIndex: 1000 }}
    >
      <div className="container-fluid">
        <a className="navbar-brand fw-bold" href="/">
          FoodTrack
        </a>

        {/* Hamburger Button for Mobile */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Navbar Links */}
        <div className="collapse navbar-collapse" id="navbarSupportedContent" ref={collapseRef}>
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0 d-flex align-items-center gap-3">
            <li className="nav-item">
              <a
                ref={(el) => setLinkRef(el, 0)}
                className="nav-link text-white nav-hover"
                href="#features"
                onClick={handleNavLinkClick}
              >
                Features
              </a>
            </li>
            <li className="nav-item">
              <a
                ref={(el) => setLinkRef(el, 1)}
                className="nav-link text-white nav-hover"
                href="#about"
                onClick={handleNavLinkClick}
              >
                About
              </a>
            </li>
            <li className="nav-item">
              <a
                ref={(el) => setLinkRef(el, 2)}
                className="btn btn-outline-light btn-sm"
                href="/login"
                onClick={handleNavLinkClick}
              >
                Login
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}
