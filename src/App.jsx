import Ai from './Ai'
import './App.css'
import { BrowserRouter,Routes ,Route } from 'react-router-dom'

import DigitalCloac from './DigitalCoalck'
function App(){
  return(
    <>
    <BrowserRouter>
    <Routes>
    <Route path='/' element={<DigitalCloac/>}/>
    <Route path='/ask' element={<Ai/>}/>
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
