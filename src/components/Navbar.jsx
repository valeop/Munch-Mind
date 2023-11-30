import React from 'react'
import { Link, Outlet } from 'react-router-dom'

export const Navbar = () => {

  return (
    <div>
      <header>
        <div className='App-navbar'>
          <span className='App-logo'>
            <img className='Image-logo' src='./Images/Munch&Mind-noBackground.png' alt='Logo de la App' />
          </span>
          <span className='Navbar-buttons'>
            <Link to="/"><button>Inicio</button></Link>
            <Link to="/ciclosuenio"><button>Ciclo del Sueño</button></Link>
            <Link to="/planaccion"><button>Plan de Acción</button></Link>
            <Link to="/estadofisico"><button>Estado Físico</button> </Link>
          </span>
        </div>
        <span className='Buttons-block'>
          <Link to="/registrar"><button className='SignUp'>Registrarse</button></Link>
          <Link to="/ingresar"><button className='LogIn'>Iniciar sesión</button></Link>
        </span>
      </header>

      <div className='Icon-block'>
        <img className='Icon' src='./Images/Happy-icon.png' alt='Icono feliz' />
      </div>
      <Outlet />
    </div>
  )
}
