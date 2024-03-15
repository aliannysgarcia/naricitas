import { useRoutes } from 'react-router'
import React from 'react'
import Inicio from '../Pages/Inicio'
import Doctores from '../Pages/Doctores'
import Servicios from '../Pages/Servicios'
import Tienda from '../Pages/Tienda'
import Contacto from '../Pages/Contacto'

const Rutas = () => {

    const rutas = useRoutes(
        [
            {
                path: '/',
                element: <Inicio />
            },
            {
                path: '/doctores',
                element: <Doctores />
            },
            {
                path: '/servicios',
                element: <Servicios />
            },
            {
                path: '/tienda',
                element: <Tienda />
            },
            {
                path: '/contacto',
                element: <Contacto />
            },

        ]
    )

  return rutas
}

export default Rutas