
import React, { useState, useEffect } from 'react';
import './habilidades.css'


const imageList = [
    {img: "src/assets/icons8-html-5-70.png",
    nombre:"HTML"
    },
    {img: "src/assets/icons8-css-70.png",
    nombre:"HTML"
    },
    {img: "src/assets/icons8-javascript-70.png",
    nombre:"HTML"
    },
    {img: "src/assets/icons8-react-70.png",
    nombre:"HTML"
    },
    {img: "src/assets/icons8-github-70.png",
    nombre:"HTML"
    },
    {img: "src/assets/icons8-git-70.png",
    nombre:"HTML"
    },
    {img: "src/assets/icons8-sass-70.png",
    nombre:"HTML"
    },
    {img: "src/assets/icons8-sql-server-5-70.png",
    nombre:"HTML"
    }
  ];
  
  function App() {
    const [currentIndex, setCurrentIndex] = useState(0);
  
    useEffect(() => {
      // Configura un intervalo para cambiar tanto la imagen como el título cada 2 segundos (2000 ms)
      const interval = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % imageList.length);
      }, 2000);
  
      // Limpia el intervalo cuando el componente se desmonta para evitar fugas de memoria
      return () => {
        clearInterval(interval);
      };
    }, []);
  
    return (
      <div className="carousel-container">
        <div className="carousel-inner">
          {imageList.map((image, index) => (
            <div key={index} className={`carousel-item ${index === currentIndex ? 'active' : ''}`}>
              <div className="carousel-image-container">
                <img
                  className="carousel-image"
                  src={image.src}
                  alt={`Imagen ${index + 1}`}
                />
              </div>
              <div className="carousel-title">{image.title}</div>
            </div>
          ))}
        </div>
      </div>
    );
  }
  
  export default App;
  
{/* <h3 className='titulo-habilidades'>Habilidades</h3> */}