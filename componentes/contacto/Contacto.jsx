import './contacto.css';

import React from 'react'

export const Contacto = () => {
  return (
    <>
        <div className="contact-card">
            <h2 className='titulo-contacto'>Contacto</h2>
            <div className='contenedor-redes'>
                <h5>Email:</h5>
                <i className="fas fa-envelope icon"></i>
                <a className='redes' href="mailto:gonzalo.troncoso10@hotmail.com">gonzalo.troncoso10@hotmail.com</a>
            </div>
            <div className='contenedor-redes'>
                <h5>GitHub:</h5>
                <i className="fab fa-github icon"></i>
                <a className='redes' href="https://github.com/gonzatroncoso?tab=repositories" target="_blank">github.com/gonzatroncoso</a>
            </div>
            <div className='contenedor-redes'>
                <h5>LinkedIn:</h5>
                <i className="fab fa-linkedin icon"></i>
                <a className='redes' href="https://www.linkedin.com/in/gonzalo-troncoso-840b4a1b2/" target="_blank">linkedin.com/in/gonzalo-troncoso</a>
            </div>
        </div>
    </>
  )
}
