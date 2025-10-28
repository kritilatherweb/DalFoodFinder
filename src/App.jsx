import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import Header from './components/Header'
import Contact from './components/Contact'
import About from './components/About'
import Projects from './components/Projects'
import Testimonials from './components/Testimonials'
function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='w-full overflow-hidden'>
    <Header/>
    <About/>
    <Projects/>
    <Testimonials/>
    <Contact/>

    </div>
  )
}

export default App
