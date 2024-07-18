import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { Route,Routes,BrowserRouter } from 'react-router-dom'
import Home from './page/Home'
import Inwood from './page/Inwood'
import Positivirus from './page/Positivirus'
import Corporate from './page/Corporate'
import EcommercePaws from './page/EcommercePaws'


function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/responsive-ecommerce-landingpage' element={<EcommercePaws />}/>
        <Route path='/inwood-ecommerce-landingpage' element={<Inwood/>}/>
        <Route path='/positivirus' element={<Positivirus/>}/>
        <Route path='/corporate' element={<Corporate/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
