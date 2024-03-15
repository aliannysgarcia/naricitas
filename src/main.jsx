import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import Navbar from './Components/Navbar'
import Rutas from './Routes/Rutas'
import * as bootstrap from 'bootstrap'
import { Footer } from './Components/Footer'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Navbar />
      <div className='container mt-3'>
        <Rutas />
      </div>
      <Footer />
  </BrowserRouter>,
)
