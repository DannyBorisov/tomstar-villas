import { useState } from 'preact/hooks'
import './Carousel.css'

export function Carousel({ images, title = "INTERIOR GALLERY" }) {
  const [currentIndex, setCurrentIndex] = useState(0)

  const goToPrevious = () => {
    setCurrentIndex(prev => prev === 0 ? images.length - 1 : prev - 1)
  }

  const goToNext = () => {
    setCurrentIndex(prev => prev === images.length - 1 ? 0 : prev + 1)
  }

  const goToSlide = (index) => {
    setCurrentIndex(index)
  }

  if (!images || images.length === 0) return null

  return (
    <section className="carousel-section">
      <h2 className="carousel-title">{title}</h2>
      <div className="carousel-divider"></div>

      <div className="carousel-container">
        <button className="carousel-btn carousel-btn-prev" onClick={goToPrevious}>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M15 18l-6-6 6-6" />
          </svg>
        </button>

        <div className="carousel-slide">
          <img
            src={images[currentIndex]}
            alt={`Interior ${currentIndex + 1}`}
          />
        </div>

        <button className="carousel-btn carousel-btn-next" onClick={goToNext}>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M9 18l6-6-6-6" />
          </svg>
        </button>
      </div>

      <div className="carousel-dots">
        {images.map((_, index) => (
          <button
            key={index}
            className={`carousel-dot ${index === currentIndex ? 'active' : ''}`}
            onClick={() => goToSlide(index)}
          />
        ))}
      </div>

      <div className="carousel-thumbnails">
        {images.map((img, index) => (
          <button
            key={index}
            className={`carousel-thumbnail ${index === currentIndex ? 'active' : ''}`}
            onClick={() => goToSlide(index)}
          >
            <img src={img} alt={`Thumbnail ${index + 1}`} />
          </button>
        ))}
      </div>
    </section>
  )
}
