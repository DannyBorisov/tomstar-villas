import './Hero.css'

export function Hero() {
  return (
    <section className="hero">
      {/* Left Panel - RAWAI */}
      <div
        className="hero-panel hero-panel-left"
        style={{ backgroundImage: `url('/assets/rawai-exterior.jpg')` }}
      >
        <div className="panel-overlay"></div>
        <div className="hero-text">
          <h2 className="villa-title">RAWAI</h2>
          <p className="villa-tagline">MODERN. PRIVATE. TROPICAL.</p>
          <p className="villa-desc">
            Private pool villa in Phuket<br />
            with tropical vibes.
          </p>
          <a href="/villas/rawai" className="explore-btn">EXPLORE RAWAI</a>
        </div>
      </div>

      {/* Right Panel - BANG TAO */}
      <div
        className="hero-panel hero-panel-right"
        style={{ backgroundImage: `url('/assets/bangtao-exterior.jpg')` }}
      >
        <div className="panel-overlay"></div>
        <div className="hero-text">
          <h2 className="villa-title">BANG TAO</h2>
          <p className="villa-tagline">NATURAL. PEACEFUL. EXCLUSIVE.</p>
          <p className="villa-desc">
            Designed for relaxation and<br />
            connection with nature.
          </p>
          <a href="/villas/bangtao" className="explore-btn">EXPLORE BANG TAO</a>
        </div>
      </div>

      {/* Discover More */}
      <div className="discover-more">
        <a href="#villas" className="discover-link">
          <div className="discover-circle">
            <svg viewBox="0 0 24 24" fill="none" strokeWidth="2">
              <path d="M12 5v14M5 12l7 7 7-7" />
            </svg>
          </div>
          <span className="discover-text">DISCOVER MORE</span>
        </a>
      </div>
    </section>
  )
}
