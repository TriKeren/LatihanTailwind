import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { Route,Routes,BrowserRouter } from 'react-router-dom'
import Home from './page/Home'
import EcommercePaws from './page/EcommercePaws'

function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/responsive-ecommerce-landingpage' element={<EcommercePaws />}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
