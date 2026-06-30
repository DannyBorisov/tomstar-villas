import { render } from 'preact'
import Router from 'preact-router'
import './index.css'
import { App } from './app.jsx'
import { VillaPage } from './pages/VillaPage.jsx'

function Main() {
  const handleRouteChange = () => {
    window.scrollTo(0, 0)
  }

  return (
    <Router onChange={handleRouteChange}>
      <App path="/" />
      <VillaPage path="/villas/rawai" villaId="rawai" />
      <VillaPage path="/villas/bangtao" villaId="bangtao" />
    </Router>
  )
}

render(<Main />, document.getElementById('app'))
