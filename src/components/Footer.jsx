import './Footer.css'
import { FooterBackground } from './footer/FooterBackground'
import { FooterAmenities } from './footer/FooterAmenities'
import { FooterCTA } from './footer/FooterCTA'
import { FooterSocial } from './footer/FooterSocial'

export function Footer() {
  return (
    <FooterBackground>
      <div className="footer-section footer-section-amenities">
        <FooterAmenities />
      </div>
      <div className="footer-section footer-section-cta">
        <FooterCTA />
      </div>
      <div className="footer-section footer-section-social">
        <FooterSocial />
      </div>
    </FooterBackground>
  )
}
