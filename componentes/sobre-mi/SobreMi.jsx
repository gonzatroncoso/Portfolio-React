import './SobreMi.css'

export const SobreMi = () => {
 
  return (
    <> 
    <section id='Sobre-mi' className='titulo'>
      <h2 className='titulo-h2'>Hola, soy</h2>
      <h2 className='titulo-h2 titulo-nombre'>Gonzalo Troncoso</h2>
      <h3 className='titulo-h3'>Desarrollador Fullstack</h3>
      <h4 className='sobre-mi'>Soy desarrollador de software, me considero una persona proactiva y con muchas ganas de crear productos útiles para los usuarios. Actualmente estoy realizando una tecnicatura en desarrollo de software y buscando mi primer trabajo en IT.</h4>
    </section>
    <div className='contenedor-btn'>
        <a href="src/assets/CV_Gonzalo_Troncoso_Frontend.pdf" className='btn-cv'>Descargar CV</a>
    </div>

    </>
  )
}
