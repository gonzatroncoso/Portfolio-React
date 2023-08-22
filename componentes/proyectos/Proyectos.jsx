import React from 'react'
import './proyectos.css'
import imgGeneric from '/src/assets/generic.png'

export const Proyectos = () => {
  return (
    <>
     <div className="container-proyecto">
        <div className="containers">
        <img className="hvr-float-shadow img-proyectos" src={imgGeneric} alt="icono-html"/>
            {/* <div className="middle borde-enlace">
              <a className="borde-enlace"  href="https://gonzatroncoso.github.io/proyecto_Naiades/" target="_blank">
                <div className="text txt-boton">Demo</div>
              </a>  
              <a href="https://github.com/gonzatroncoso/proyecto_Naiades" target="_blank">
                <div className="text txt-boton">Repo</div>
             </a>
            </div> */}
        </div>
        <div className="texto-proyecto">
            <h1 className="h1-proyecto">Generic</h1>
            <p className="explicacion-proyecto"> 
                "Conversión de Diseño Figma a Página Web Estática y Responsive"
                 Tiene como objetivo llevar un diseño creado en la plataforma de diseño Figma y convertirlo en una página web estática y totalmente responsive. Con el fin de brindar una experiencia visualmente atractiva y funcional para los usuarios.
            </p>
            <hr />

            <h4 className='h4-tecnologias'> Tecnologías </h4>
            <div className="icono-containerProyecto">
                <div className="iconoProyecto">
                    <p> Html </p> 
                </div>
                <div className="iconoProyecto">
                    {/* <img class="hvr-float-shadow" src="./imagenes/icons8-css3-38.png"   alt="icono-css3"> */}
                    <p> Css </p> 
                </div>
            </div>
            <div className='h4-git-demo'>
                <h5>GitHub</h5>
                <h5>Demo</h5>
            </div>
            
        </div>

    </div>    
    </>
  )
}
