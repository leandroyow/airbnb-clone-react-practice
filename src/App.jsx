import Navbar from './components/navbar'
import HeroSection from './components/hero'
import Title from './components/title'
import CardContainer from './components/card-container'
import '../src/style/App.css'
import { StrictMode } from 'react'


function App() {

  return (
    <StrictMode>
      <Navbar />
      <HeroSection />
      <Title />
      <CardContainer />
    </StrictMode>

  )
}

export default App
