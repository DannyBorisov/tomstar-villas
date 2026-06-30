import './VillaDetails.css'

export function VillaDetails({
  id,
  title = "RAVA VILLA",
  subtitle = "MODERN LIVING WITH TIMELESS DESIGN",
  description = "Step into a world of elegance and spacious comfort. Rava Villa offers the perfect setting for unforgettable moments with family and friends.",
  amenities = [
    { icon: "bed", label: "BEDROOMS", value: "5" },
    { icon: "bath", label: "BATHROOMS", value: "4" },
    { icon: "pool", label: "PRIVATE POOL", value: "" },
    { icon: "kitchen", label: "FULLY EQUIPPED KITCHEN", value: "" }
  ],
  image = "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=1200&q=80",
  detailsLink = "#",
  reverse = false
}) {
  const icons = {
    bed: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M3 18v-6a2 2 0 012-2h14a2 2 0 012 2v6M3 18v2M21 18v2M6 10V7a2 2 0 012-2h8a2 2 0 012 2v3"/>
        <rect x="3" y="14" width="18" height="4" rx="1"/>
      </svg>
    ),
    bath: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M4 12h16a1 1 0 011 1v3a4 4 0 01-4 4H7a4 4 0 01-4-4v-3a1 1 0 011-1zM6 12V5a2 2 0 012-2h1a2 2 0 012 2v1"/>
        <path d="M7 20v2M17 20v2"/>
      </svg>
    ),
    pool: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M2 12h20M2 16h20"/>
        <path d="M6 8V4M10 8V4M14 8V4M18 8V4"/>
        <rect x="4" y="4" width="16" height="4" rx="1"/>
      </svg>
    ),
    kitchen: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <rect x="4" y="3" width="16" height="18" rx="2"/>
        <path d="M4 9h16M4 15h16"/>
        <circle cx="12" cy="12" r="1"/>
      </svg>
    )
  }

  return (
    <section id={id} className={`villa-details ${reverse ? 'villa-details-reverse' : ''}`}>
      <div className="villa-details-content">
        <h2 className="villa-details-title">{title}</h2>
        <div className="villa-details-divider"></div>
        <p className="villa-details-subtitle">{subtitle}</p>
        <p className="villa-details-desc">{description}</p>

        <div className="villa-amenities">
          {amenities.map((amenity, index) => (
            <div key={index} className="amenity-item">
              <div className="amenity-icon">
                {icons[amenity.icon]}
              </div>
              <span className="amenity-label">
                {amenity.value && <strong>{amenity.value} </strong>}
                {amenity.label}
              </span>
            </div>
          ))}
        </div>

        <a href={detailsLink} className="villa-gallery-btn">VIEW DETAILS</a>
      </div>

      <div className="villa-details-image">
        <img src={image} alt={title} loading="lazy" />
      </div>
    </section>
  )
}
