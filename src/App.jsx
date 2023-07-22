import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import Helping_hand from './components/Helping_hand'
import Review from './components/Review'
import Company_phrase from './components/Company_phrase'
import Country from './components/Country'
import Contact_us from './components/Contact_us'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    {/* <Navbar/>
    <Helping_hand/>
    <Review/>
    <Company_phrase/>
    <Country/> */}
    <Contact_us/>
    </>
  )
}

export default App
