import './Navbar.css'

export function Navbar() {
  const bookingLinks = [
    { name: 'Airbnb', href: 'https://www.airbnb.com/rooms/1589206898956083265?guests=1&adults=1&s=67&unique_share_id=d1e3b8dd-c6d2-4608-9986-fd64afe08fe5' },
    { name: 'Booking.com', href: 'https://www.booking.com/Share-ah3qwG0' },
    { name: 'Agoda', href: 'https://www.agoda.com/en-gb/tom-star-pool-villa-layan/hotel/phetchabun-th.html?adults=2&rooms=1&checkIn=2026-07-29&los=2&ds=S01DIwZDh1iMTiaL' }
  ]

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
      </div>
    </header>
  )
}
