import './FooterBackground.css'

export function FooterBackground({ children }) {
  return (
    <footer className="footer-background">
      {/* Left decorative palm leaf */}
      <div className="footer-decoration footer-decoration-left">
        <svg viewBox="0 0 200 400" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Palm frond 1 */}
          <path
            d="M100 400 Q90 350 60 300 Q30 250 10 200 Q0 150 20 100 Q40 50 80 20"
            stroke="currentColor"
            strokeWidth="2"
            fill="none"
          />
          <path d="M100 400 Q85 340 50 280" stroke="currentColor" strokeWidth="1" fill="none" />
          <path d="M100 400 Q95 360 70 320" stroke="currentColor" strokeWidth="1" fill="none" />
          {/* Leaves branching left */}
          <path d="M60 300 Q40 290 20 300 Q40 280 60 300" fill="currentColor" />
          <path d="M50 280 Q30 265 10 275 Q30 255 50 280" fill="currentColor" />
          <path d="M40 250 Q20 235 5 245 Q20 225 40 250" fill="currentColor" />
          <path d="M30 220 Q10 210 0 215 Q15 195 30 220" fill="currentColor" />
          <path d="M25 190 Q10 180 0 185 Q15 170 25 190" fill="currentColor" />
          <path d="M22 160 Q10 150 5 155 Q15 140 22 160" fill="currentColor" />
          {/* Leaves branching right */}
          <path d="M60 300 Q80 285 100 290 Q80 275 60 300" fill="currentColor" />
          <path d="M50 280 Q70 260 90 265 Q70 250 50 280" fill="currentColor" />
          <path d="M40 250 Q60 235 80 240 Q60 225 40 250" fill="currentColor" />
          <path d="M30 220 Q50 205 70 210 Q50 195 30 220" fill="currentColor" />
          <path d="M25 190 Q45 175 65 180 Q45 165 25 190" fill="currentColor" />
          {/* Palm frond 2 - slight offset */}
          <path
            d="M120 400 Q115 360 100 320 Q85 280 75 240 Q65 200 70 160 Q80 120 100 90"
            stroke="currentColor"
            strokeWidth="1.5"
            fill="none"
          />
          <path d="M100 320 Q80 310 65 320 Q80 300 100 320" fill="currentColor" />
          <path d="M85 280 Q65 270 55 280 Q70 260 85 280" fill="currentColor" />
          <path d="M75 250 Q58 240 50 248 Q62 232 75 250" fill="currentColor" />
          <path d="M100 320 Q120 305 135 315 Q115 300 100 320" fill="currentColor" />
          <path d="M85 280 Q105 265 120 275 Q100 260 85 280" fill="currentColor" />
        </svg>
      </div>

      {/* Right decorative palm leaf */}
      <div className="footer-decoration footer-decoration-right">
        <svg viewBox="0 0 200 400" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Palm frond 1 - mirrored */}
          <path
            d="M100 400 Q110 350 140 300 Q170 250 190 200 Q200 150 180 100 Q160 50 120 20"
            stroke="currentColor"
            strokeWidth="2"
            fill="none"
          />
          <path d="M100 400 Q115 340 150 280" stroke="currentColor" strokeWidth="1" fill="none" />
          <path d="M100 400 Q105 360 130 320" stroke="currentColor" strokeWidth="1" fill="none" />
          {/* Leaves branching right */}
          <path d="M140 300 Q160 290 180 300 Q160 280 140 300" fill="currentColor" />
          <path d="M150 280 Q170 265 190 275 Q170 255 150 280" fill="currentColor" />
          <path d="M160 250 Q180 235 195 245 Q180 225 160 250" fill="currentColor" />
          <path d="M170 220 Q190 210 200 215 Q185 195 170 220" fill="currentColor" />
          <path d="M175 190 Q190 180 200 185 Q185 170 175 190" fill="currentColor" />
          <path d="M178 160 Q190 150 195 155 Q185 140 178 160" fill="currentColor" />
          {/* Leaves branching left */}
          <path d="M140 300 Q120 285 100 290 Q120 275 140 300" fill="currentColor" />
          <path d="M150 280 Q130 260 110 265 Q130 250 150 280" fill="currentColor" />
          <path d="M160 250 Q140 235 120 240 Q140 225 160 250" fill="currentColor" />
          <path d="M170 220 Q150 205 130 210 Q150 195 170 220" fill="currentColor" />
          <path d="M175 190 Q155 175 135 180 Q155 165 175 190" fill="currentColor" />
          {/* Palm frond 2 - slight offset */}
          <path
            d="M80 400 Q85 360 100 320 Q115 280 125 240 Q135 200 130 160 Q120 120 100 90"
            stroke="currentColor"
            strokeWidth="1.5"
            fill="none"
          />
          <path d="M100 320 Q120 310 135 320 Q120 300 100 320" fill="currentColor" />
          <path d="M115 280 Q135 270 145 280 Q130 260 115 280" fill="currentColor" />
          <path d="M125 250 Q142 240 150 248 Q138 232 125 250" fill="currentColor" />
          <path d="M100 320 Q80 305 65 315 Q85 300 100 320" fill="currentColor" />
          <path d="M115 280 Q95 265 80 275 Q100 260 115 280" fill="currentColor" />
        </svg>
      </div>

      {/* Content container */}
      <div className="footer-content">
        {children}
      </div>
    </footer>
  )
}
