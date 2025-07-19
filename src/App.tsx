
import './App.css'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Home } from './pages/Home/Home'

function App() {


  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={ <Home />}></Route>
    </Routes>
    </BrowserRouter>
     
    </>
  )
}

export default App
