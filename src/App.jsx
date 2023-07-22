import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import Helping_hand from './components/Helping_hand'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Navbar/>
    <Helping_hand/>
    </>
  )
}

export default App
