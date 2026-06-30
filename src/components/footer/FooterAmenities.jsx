import './FooterAmenities.css'

export function FooterAmenities() {
  const amenities = [
    { icon: 'pool', label: 'Private Pool' },
    { icon: 'security', label: '24/7 Security' },
    { icon: 'wifi', label: 'Free WiFi' },
    { icon: 'parking', label: 'Parking Space' },
    { icon: 'ac', label: 'Air Conditioning' },
    { icon: 'garden', label: 'Tropical Garden' }
  ]

  const icons = {
    pool: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M2 12h20M2 16h20"/>
        <path d="M6 8V4M10 8V4M14 8V4M18 8V4"/>
        <rect x="4" y="4" width="16" height="4" rx="1"/>
      </svg>
    ),
    security: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
        <path d="M9 12l2 2 4-4"/>
      </svg>
    ),
    wifi: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M5 12.55a11 11 0 0114 0M8.53 16.11a6 6 0 016.95 0M12 20h.01"/>
      </svg>
    ),
    parking: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <rect x="3" y="3" width="18" height="18" rx="2"/>
        <path d="M9 17V7h4a3 3 0 010 6H9"/>
      </svg>
    ),
    ac: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M12 2v20M2 12h20"/>
        <path d="M12 2a5 5 0 015 5M12 2a5 5 0 00-5 5M12 22a5 5 0 005-5M12 22a5 5 0 01-5-5M2 12a5 5 0 015-5M2 12a5 5 0 005 5M22 12a5 5 0 00-5-5M22 12a5 5 0 01-5 5"/>
      </svg>
    ),
    garden: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M12 22V8"/>
        <path d="M12 8c-3 0-6-2-6-6 2 0 4.5 1 6 3 1.5-2 4-3 6-3 0 4-3 6-6 6z"/>
        <path d="M8 14c-2 0-4-1.5-4-4 1.5 0 3 .5 4 2"/>
        <path d="M16 14c2 0 4-1.5 4-4-1.5 0-3 .5-4 2"/>
      </svg>
    )
  }

  return (
    <div className="footer-amenities">
      <div className="footer-amenities-grid">
        {amenities.map((amenity, index) => (
          <div key={index} className="amenity-item">
            <div className="amenity-icon">
              {icons[amenity.icon]}
            </div>
            <span className="amenity-label">{amenity.label}</span>
          </div>
        ))}
      </div>
    </div>
  )
}
