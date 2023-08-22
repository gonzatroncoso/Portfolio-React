import './educacion.css'
// import coder from './src/assets/coder.png'

export const Educacion = () => {

    const generateCards = () => {
        const cardData = [
          {
            
            imagen: "src/assets/coder.png",
            titulo: 'Desarrollo web frontend',
            instituto: 'CoderHouse',
            descripcion: 'Ruta frontend con Javascript - React',
          },
          {
            imagen: "src/assets/ifts.jpg",
            titulo: 'Desarrollador de software',
            instituto: 'I.F.T.S 11',
            descripcion: 'Tecnicatura Superior en Desarrollo de Software (en curso)',
          },
          {
            imagen: 'src/assets/mindhub1.png',
            titulo: 'Bootcamp Mindhub',
            instituto: 'Mindhub',
            descripcion: 'Intensivo desarrollo frontend Javascript',
          },
        ];
        return cardData.map((card, index) => (
            <div className='contenedor-cards'>
                <div key={index} className="card">
                    <img className="card-imagen " src={card.imagen} alt={`Imagen ${index + 1}`} />
                    <h4 className="card-titulo ">{card.titulo}</h4>
                    <h5 className="card-instituto ">{card.instituto}</h5>
                    <p className="card-descripcion ">{card.descripcion}</p>
                    <button className="card-btn ">Certificado</button>
                </div>
            </div>
          ));
        };

  return (
    <>
        <section className='contenedor-educacion'>
            <h3 className='titulo-educacion'>Educacion</h3>
                <div className='contenedor-cards'>{generateCards()}</div>
        </section>
    </>
  )
}
