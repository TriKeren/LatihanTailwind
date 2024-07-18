import { Route,Routes,BrowserRouter } from 'react-router-dom'
import Home from './page/Home'
import Inwood from './page/Inwood'
import Positivus from './page/Positivus'
import Corporate from './page/Corporate'
import SaaS from './page/SaaS'
import ZebbDigital from './page/ZebbDigital'



function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/inwood-ecommerce-landingpage' element={<Inwood/>}/>
        <Route path='/positivus' element={<Positivus/>}/>
        <Route path='/corporate' element={<Corporate/>}/>
        <Route path='/saaS-landingpage' element={<SaaS/>}/>
        <Route path='/zebbdigital' element={<ZebbDigital/>}/>

      </Routes>
    </BrowserRouter>
  )
}

export default App
