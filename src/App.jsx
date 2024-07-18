import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { Route,Routes,BrowserRouter } from 'react-router-dom'
import Home from './page/Home'
import Inwood from './page/Inwood'

function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/inwood-ecommerce-landingpage' element={<Inwood/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
