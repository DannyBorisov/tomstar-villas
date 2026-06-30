import { useState } from 'react'
import './Navbar.css'

export function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  const bookingLinks = [
    { name: 'Airbnb', href: 'https://www.airbnb.com/rooms/1589206898956083265?guests=1&adults=1&s=67&unique_share_id=d1e3b8dd-c6d2-4608-9986-fd64afe08fe5' },
    { name: 'Booking.com', href: 'https://www.booking.com/Share-ah3qwG0' },
    { name: 'Agoda', href: 'https://www.agoda.com/en-gb/tom-star-pool-villa-layan/hotel/phetchabun-th.html?adults=2&rooms=1&checkIn=2026-07-29&los=2&ds=S01DIwZDh1iMTiaL' }
  ]

  const toggleMenu = () => setMenuOpen(!menuOpen)
  const closeMenu = () => setMenuOpen(false)

  return (
    <header className="navbar">
      <div className="navbar-container">
        <a href="/" className="navbar-logo">
          <img src="/logo.png" alt="Tom Star Pool Villas" className="logo-image" />
        </a>

        <nav className="navbar-nav">
          <a href="/" className="nav-link">VILLAS</a>
          <a href="/villas/rawai" className="nav-link">RAWAI</a>
          <a href="/villas/bangtao" className="nav-link">BANG TAO</a>
        </nav>

        <div className="book-dropdown">
          <button className="book-btn">BOOK NOW</button>
          <div className="book-dropdown-menu">
            {bookingLinks.map((link, index) => (
              <a key={index} href={link.href} target="_blank" rel="noopener noreferrer">
                {link.name}
              </a>
            ))}
          </div>
        </div>

        {/* Hamburger button for mobile */}
        <button
          className={`hamburger-btn ${menuOpen ? 'open' : ''}`}
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <span className="hamburger-line"></span>
          <span className="hamburger-line"></span>
          <span className="hamburger-line"></span>
        </button>
      </div>

      {/* Mobile drawer backdrop */}
      <div
        className={`mobile-backdrop ${menuOpen ? 'open' : ''}`}
        onClick={closeMenu}
      />

      {/* Mobile drawer */}
      <div className={`mobile-drawer ${menuOpen ? 'open' : ''}`}>
        <nav className="drawer-nav">
          <a href="/" className="drawer-link" onClick={closeMenu}>VILLAS</a>
          <a href="/villas/rawai" className="drawer-link" onClick={closeMenu}>RAWAI</a>
          <a href="/villas/bangtao" className="drawer-link" onClick={closeMenu}>BANG TAO</a>
        </nav>

        <div className="drawer-divider"></div>

        <div className="drawer-booking">
          <span className="drawer-booking-title">BOOK NOW</span>
          {bookingLinks.map((link, index) => (
            <a
              key={index}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="drawer-booking-link"
              onClick={closeMenu}
            >
              {link.name}
            </a>
          ))}
        </div>
      </div>
    </header>
  )
}
