import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { Route,Routes,BrowserRouter } from 'react-router-dom'
import Tes from './page/Tes'
import Tes2 from './page/Tes2'

function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/tes' element={
          <Tes/>
        }/>
        <Route path='/tes2' element={
          <Tes2/>
        }/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
