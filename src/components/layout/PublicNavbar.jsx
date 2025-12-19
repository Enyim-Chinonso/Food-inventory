'use client'

import { useEffect, useRef } from 'react'
import gsap from 'gsap'

export default function PublicNavbar() {
  const navRef = useRef(null)

  useEffect(() => {
    gsap.from(navRef.current, {
      y: -80,
      opacity: 0,
      duration: 1,
      ease: 'power3.out',
    })
  }, [])

  return (
    <nav
      ref={navRef}
      className="navbar navbar-expand-lg position-fixed top-0 w-100 px-4"
      style={{ zIndex: 1000 }}
    >
      <div className="container-fluid">
        <a className="navbar-brand text-white fw-bold" href="/">
          FoodTrack
        </a>

        <div className="ms-auto d-flex align-items-center gap-4">
          <a className="nav-link text-white" href="#features">Features</a>
          <a className="nav-link text-white" href="#about">About</a>
          <a className="btn btn-outline-light btn-sm" href="/login">
            Login
          </a>
        </div>
      </div>
    </nav>
  )
}
