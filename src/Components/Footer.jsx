import React from 'react'
import './footer.css'
import { Link, NavLink } from 'react-router-dom';
import logo from '../Images/logo.png';
import insta from '../Images/instagram.png'
import whatsapp from '../Images/whatsapp.png'
import gmail from '../Images/gmail.png'

export const Footer = () => {
  return (
    <div className='contenedor'>
        <div className='logo'>
            <img src={logo} alt="" />
            <p>Naricitas</p>
        </div>
        <nav>
        <NavLink className='navegacion' to="/">Inicio</NavLink>
        <NavLink className='navegacion' to="/doctores">Doctores</NavLink>
        <NavLink className='navegacion' to="/servicios">Servicios</NavLink>
        <NavLink className='navegacion' to="/tienda">Tienda</NavLink>
        <NavLink className='navegacion' to="/contacto">Contacto</NavLink>
        </nav>
        <div className='contact'>
            <img src={whatsapp} alt="" />
            <img src={insta} alt="" />
            <img src={gmail} alt="" />
        </div>

    </div>
  )
}
