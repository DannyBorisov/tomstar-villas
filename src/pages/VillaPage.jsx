import { useEffect, useRef } from 'preact/hooks'
import mapboxgl from 'mapbox-gl'
import 'mapbox-gl/dist/mapbox-gl.css'
import { villas } from '../data/villas'
import { Navbar } from '../components/Navbar'
import { Footer } from '../components/Footer'
import { Carousel } from '../components/Carousel'
import './VillaPage.css'

mapboxgl.accessToken = import.meta.env.VITE_MAPBOX_TOKEN

export function VillaPage({ villaId }) {
  const villa = villas[villaId]

  if (!villa) {
    return <div>Villa not found</div>
  }

  return (
    <>
      <Navbar />
      <VillaHero villa={villa} />
      <VillaGallery villa={villa} />
      {villa.carouselImages && villa.carouselImages.length > 0 && (
        <Carousel images={villa.carouselImages} title="INTERIOR GALLERY" />
      )}
      <VillaAmenities villa={villa} />
      <VillaFeatures villa={villa} />
      <VillaLocation villa={villa} />
      <VillaCTA villa={villa} />
      <Footer />
    </>
  )
}

function VillaHero({ villa }) {
  return (
    <section className="villa-hero">
      <div className="villa-hero-background" style={{ backgroundImage: `url('${villa.heroImage}')` }}></div>
      <div className="villa-hero-fade"></div>
      <div className="villa-hero-content">
        <nav className="villa-breadcrumb">
          <a href="/">Home</a>
          <span>&gt;</span>
          <a href="/#villas">Villas</a>
          <span>&gt;</span>
          <span>{villa.name.replace('VILLA ', 'Villa ')}</span>
        </nav>

        <h1 className="villa-hero-title">{villa.name}</h1>
        <p className="villa-hero-tagline">{villa.tagline}</p>

        <div className="villa-hero-stats">
          <div className="villa-stat">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/>
              <circle cx="9" cy="7" r="4"/>
              <path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75"/>
            </svg>
            <span>{villa.stats.guests} Guests</span>
          </div>
          <div className="villa-stat">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M3 18v-6a2 2 0 012-2h14a2 2 0 012 2v6M3 18v2M21 18v2M6 10V7a2 2 0 012-2h8a2 2 0 012 2v3"/>
            </svg>
            <span>{villa.stats.bedrooms} Bedrooms</span>
          </div>
          <div className="villa-stat">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M4 12h16a1 1 0 011 1v3a4 4 0 01-4 4H7a4 4 0 01-4-4v-3a1 1 0 011-1zM6 12V5a2 2 0 012-2h1a2 2 0 012 2v1"/>
            </svg>
            <span>{villa.stats.bathrooms} Bathrooms</span>
          </div>
          <div className="villa-stat">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M2 12h20M2 16h20"/>
              <rect x="4" y="4" width="16" height="4" rx="1"/>
            </svg>
            <span>Private Pool</span>
          </div>
        </div>

        <div className="villa-hero-actions">
          <div className="villa-book-dropdown">
            <button className="villa-book-btn">BOOK NOW</button>
            <div className="villa-book-dropdown-menu">
              {villa.bookingLinks.map((link, index) => (
                <a key={index} href={link.href} target="_blank" rel="noopener noreferrer">
                  {link.name}
                </a>
              ))}
            </div>
          </div>
          <span className="villa-price">From <strong>${villa.price}</strong> / night</span>
        </div>
      </div>
    </section>
  )
}

function VillaGallery({ villa }) {
  return (
    <section className="villa-gallery-section">
      <h2 className="villa-section-title">YOUR PRIVATE PARADISE</h2>
      <div className="villa-section-divider"></div>
      <p className="villa-section-desc">{villa.description}</p>

      <div className="villa-gallery-grid">
        {villa.galleryImages.map((img, index) => (
          <div key={index} className={`villa-gallery-item gallery-item-${index + 1}`}>
            <img src={img} alt={`${villa.name} - Image ${index + 1}`} />
          </div>
        ))}
      </div>

      {villa.galleryLink && (
        <div className="villa-gallery-link">
          <a href={villa.galleryLink} target="_blank" rel="noopener noreferrer" className="villa-photos-btn">
            VIEW ALL PHOTOS
          </a>
        </div>
      )}
    </section>
  )
}

function VillaAmenities({ villa }) {
  const icons = {
    pool: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M2 12h20M2 16h20"/>
        <rect x="4" y="4" width="16" height="4" rx="1"/>
      </svg>
    ),
    wifi: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M5 12.55a11 11 0 0114 0M8.53 16.11a6 6 0 016.95 0M12 20h.01"/>
      </svg>
    ),
    ac: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <rect x="2" y="4" width="20" height="8" rx="2"/>
        <path d="M6 16v2M10 16v4M14 16v2M18 16v4"/>
      </svg>
    ),
    kitchen: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <rect x="4" y="3" width="16" height="18" rx="2"/>
        <path d="M4 9h16M4 15h16"/>
        <circle cx="12" cy="12" r="1"/>
      </svg>
    ),
    tv: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <rect x="2" y="5" width="20" height="14" rx="2"/>
        <path d="M8 21h8"/>
      </svg>
    ),
    cleaning: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83"/>
      </svg>
    ),
    parking: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <rect x="3" y="3" width="18" height="18" rx="2"/>
        <path d="M9 17V7h4a3 3 0 010 6H9"/>
      </svg>
    )
  }

  return (
    <section className="villa-amenities-section">
      <h2 className="villa-section-title">VILLA AMENITIES</h2>
      <div className="villa-section-divider"></div>

      <div className="villa-amenities-grid">
        {villa.amenities.map((amenity, index) => (
          <div key={index} className="villa-amenity-item">
            <div className="villa-amenity-icon">
              {icons[amenity.icon]}
            </div>
            <span>{amenity.label}</span>
          </div>
        ))}
      </div>
    </section>
  )
}

function VillaFeatures({ villa }) {
  return (
    <section className="villa-features-section">
      <div className="villa-features-grid">
        <div className="villa-features-column">
          <h3>FEATURES</h3>
          <ul className="villa-features-list">
            {villa.features.map((feature, index) => (
              <li key={index}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M5 12l5 5L20 7"/>
                </svg>
                {feature}
              </li>
            ))}
          </ul>
        </div>

        <div className="villa-features-column">
          <h3>HOUSE RULES</h3>
          <ul className="villa-rules-list">
            {villa.rules.map((rule, index) => (
              <li key={index}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="12" cy="12" r="10"/>
                  <path d="M12 8v4M12 16h.01"/>
                </svg>
                {rule}
              </li>
            ))}
          </ul>
        </div>

        <div className="villa-features-column">
          <h3>SERVICES</h3>
          <ul className="villa-services-list">
            {villa.services.map((service, index) => (
              <li key={index}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4"/>
                </svg>
                {service}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}

function VillaLocation({ villa }) {
  return (
    <section className="villa-location-section">
      <div className="villa-location-content">
        <h2 className="villa-section-title">PRIME LOCATION</h2>
        <div className="villa-section-divider villa-section-divider-left"></div>
        <p className="villa-location-desc">{villa.location.description}</p>
        <p className="villa-address">{villa.location.address}</p>

        <div className="villa-distances">
          {villa.location.distances.map((distance, index) => (
            <div key={index} className="villa-distance-item">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5a2.5 2.5 0 010-5 2.5 2.5 0 010 5z"/>
              </svg>
              <div>
                <strong>{distance.time}</strong>
                <span>{distance.label}</span>
              </div>
            </div>
          ))}
        </div>

        <h3 className="villa-nearby-title">NEARBY ATTRACTIONS</h3>
        <ul className="villa-nearby-list">
          {villa.nearby.map((place, index) => (
            <li key={index}>
              <span className="nearby-name">{place.name}</span>
              <span className="nearby-distance">{place.distance}</span>
            </li>
          ))}
        </ul>
      </div>

      <VillaMap coordinates={villa.location.coordinates} />
    </section>
  )
}

function VillaMap({ coordinates }) {
  const mapContainer = useRef(null)
  const map = useRef(null)

  useEffect(() => {
    if (map.current) return

    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/mapbox/streets-v12',
      center: [coordinates.lng, coordinates.lat],
      zoom: 14
    })

    const marker = document.createElement('div')
    marker.innerHTML = `<svg viewBox="0 0 24 24" fill="#b8986e" width="40" height="40">
      <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5a2.5 2.5 0 010-5 2.5 2.5 0 010 5z"/>
    </svg>`
    marker.style.cursor = 'pointer'

    new mapboxgl.Marker(marker)
      .setLngLat([coordinates.lng, coordinates.lat])
      .addTo(map.current)

    return () => map.current?.remove()
  }, [coordinates])

  return <div ref={mapContainer} className="villa-location-map" />
}

function VillaCTA({ villa }) {
  const villaName = villa.name.replace('VILLA ', '')

  return (
    <section className="villa-cta-section">
      <div className="villa-cta-content">
        <h2>READY TO EXPERIENCE {villaName}?</h2>
        <p>Book your stay today and enjoy a unique island getaway.</p>
        <div className="villa-cta-dropdown">
          <button className="villa-cta-btn">BOOK NOW</button>
          <div className="villa-cta-dropdown-menu">
            {villa.bookingLinks.map((link, index) => (
              <a key={index} href={link.href} target="_blank" rel="noopener noreferrer">
                {link.name}
              </a>
            ))}
          </div>
        </div>
      </div>
      <div className="villa-cta-decoration" style={{ backgroundImage: `url('${villa.heroImage}')` }}></div>
    </section>
  )
}
