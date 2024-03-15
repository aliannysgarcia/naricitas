import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import './navbar.css';
import logo from '../Images/logo.png';

   const Navbar = () => {

    const linkActivo = ({ isActive }) => 
        isActive ? 
        { color: 'black', borderBottom: '2px solid black', fontWeight: 'bold' } 
        : 
        { color: 'black' }

     return (
      <nav className="navbar navbar-expand-lg nav" >
            <div className="container-fluid">
            <img src={logo} alt="Logo" width="40" height="34" className="d-inline-block align-text-top"/>
                <Link className="navbar-brand" to="/">Naricitas</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/" style={linkActivo}>Inicio</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/doctores" style={linkActivo}>Doctores</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/servicios" style={linkActivo}>Servicios</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/tienda" style={linkActivo}>Tienda</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/contacto" style={linkActivo}>Contacto</NavLink>
                        </li>
                        
                    </ul>
                </div>
            </div>
        </nav>
     );
   }

   export default Navbar;