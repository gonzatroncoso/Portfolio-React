import './proyectos.css'

const cardsData = [
  {
    id: 1,
    imagen: './src/assets/img-events.png',
    titulo: 'A-Events',
    descripcion: 'Proyecto para bootcamp de MindHub. Se fue realizando a medida que pasaba la cursada, mediante retos diarios. Es una web sobre eventos en el cual se puede filtrar por categorias y tambien por un buscador cada uno de los eventos que se muestran en pantalla. Tambien tiene 2 secciones en las que se puede observar eventos pasados y futuros, ademas de un apartado de contacto y estadisticas. Se hizo hincapie en Javascript vanilla, para mostrar los conocimientos aprendidos durante el bootcamp.',
    lenguajes: ['HTML', 'CSS', 'Javascript'],
    demo: 'https://github.com/gonzatroncoso/ProyectoEvents',
    repo: 'https://gonzatroncoso.github.io/ProyectoEvents/',
  },
  {
    id: 2,
    imagen: './src/assets/generic.png',
    titulo: 'Generic',
    descripcion: '"Conversión de Diseño Figma a Página Web Estática y Responsive". Tiene como objetivo llevar un diseño creado en la plataforma de diseño Figma y convertirlo en una página web estática y totalmente responsive. Con el fin de brindar una experiencia visualmente atractiva y funcional para los usuarios.',
    lenguajes: ['HTML', 'CSS'],
    demo: 'https://gonzatroncoso.github.io/proyecto_Naiades/',
    repo: 'https://github.com/gonzatroncoso/proyecto_Naiades',
  },
  {
    id: 3,
    imagen: './src/assets/img-todoList.png',
    titulo: 'Todo List',
    descripcion: 'Aplicación web interactiva que permite a los usuarios crear, gestionar y dar seguimiento a sus tareas diarias de manera eficiente. Con un diseño limpio y fácil de usar, proporciona una plataforma intuitiva para organizar y mantener un registro de las actividades pendientes y completadas.',
    lenguajes: ['HTML', 'CSS', 'Javascript'],
    demo: 'https://gonzatroncoso.github.io/TodoList/',
    repo: 'https://github.com/gonzatroncoso/TodoList',
  },
  {
    id: 4,
    imagen: './src/assets/img-webShoes.png',
    titulo: 'Ecommerce Sneakers',
    descripcion: 'Aqui se muestra un proyecto hecho en modo de practica para mejorar lo aprendido. Es un desafio del conocido Frontend Mentor, utilice un diseño anteriormente maquetado y consta de lograr "imitar" una de sus creaciones.',
    lenguajes: ['HTML', 'CSS', 'Javascript','Sass'],
    demo: 'https://gonzatroncoso.github.io/E-commerce_zapatillas/',
    repo: 'https://github.com/gonzatroncoso/E-commerce_zapatillas',
  },
  {
    id: 5,
    imagen: './src/assets/web-fullgym.png',
    titulo: 'Full Gym',
    descripcion: 'Esta fue una de mis primeras páginas webs en mi primer curso. Es una web informativa sobre un gimnasio. Tiene 5 secciones en las cuales se ven imágenes, animaciones e información..',
    lenguajes: ['HTML', 'CSS', 'Sass'],
    demo: 'https://gonzatroncoso.github.io/Fullgym/',
    repo: 'https://github.com/gonzatroncoso/Fullgym',
  }
];

export const Proyectos = () => {
  return (
    <> 
      <h3 className='titulo-habilidades'>Proyectos</h3>
        {cardsData.map((card) => (
                  <div key={card.id} id='proyectos' className="container-proyecto">
                      <div className="containers">
                        <img className="hvr-float-shadow img-proyectos" src={card.imagen} alt="icono-html"/>
                      </div>
                    <div className="texto-proyecto">
                        <h2 className="h1-proyecto">{card.titulo}</h2>
                        <p className="explicacion-proyecto">                             
                            {card.descripcion}
                        </p>
                        <hr />
                        <h4 className='h4-tecnologias'> Tecnologías </h4>
                          <div className="icono-containerProyecto">
                            <div className="contenedor-tecnologias">
                            {card.lenguajes.map((lenguaje, index) => (
                                  <span key={index} className="tecnologias">
                                    {lenguaje}
                                  </span>
                                  ))}
                            </div>
                          </div>
                            <div className='h4-git-demo'>
                              <a className='link-demo-git' href={card.demo}>Demo</a>
                              <a className='link-demo-git' href={card.repo}>Repositorio</a>
                            </div>          
                    </div>
                  </div>
              ))}    
  </>
  );
}

