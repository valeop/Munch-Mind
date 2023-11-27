import './Inicio.css';
import React from "react";


export const Inicio = () => {
  return (
    <>
      <div className='App-inicio'>
        <div className="Image-block">
          <img className='Image' src='./Images/intro-noBackground.png' alt='Icono del logo' />
        </div>
        <div className="Text-block">
          <p className='text'>
            Munch&Mind te ayudará a mejorar tu vida física y mental a través
            de diversos servicios que te brindarán un plan de acción y una recomendación
            para tu ciclo del sueño. Adicionalmente, tendrás herramientas que te permiten
            calcular tus índices de masa y grasa corporal.
          </p>
        </div>
      </div>
    </>
  )
}