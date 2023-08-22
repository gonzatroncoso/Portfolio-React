
import React, { useState, useEffect } from 'react';
// import React, { Component } from 'react';
import './habilidades.css'


// const imageList = [
//     {img: "src/assets/icons8-html-5-70.png",
//     nombre:"HTML"
//     },
//     {img: "src/assets/icons8-css-70.png",
//     nombre:"HTML"
//     },
//     {img: "src/assets/icons8-javascript-70.png",
//     nombre:"HTML"
//     },
//     {img: "src/assets/icons8-react-70.png",
//     nombre:"HTML"
//     },
//     {img: "src/assets/icons8-github-70.png",
//     nombre:"HTML"
//     },
//     {img: "src/assets/icons8-git-70.png",
//     nombre:"HTML"
//     },
//     {img: "src/assets/icons8-sass-70.png",
//     nombre:"HTML"
//     },
//     {img: "src/assets/icons8-sql-server-5-70.png",
//     nombre:"HTML"
//     }
//   ];
  
//   function App() {
//     const [currentIndex, setCurrentIndex] = useState(0);
  
//     useEffect(() => {
//       // Configura un intervalo para cambiar tanto la imagen como el título cada 2 segundos (2000 ms)
//       const interval = setInterval(() => {
//         setCurrentIndex((prevIndex) => (prevIndex + 1) % imageList.length);
//       }, 2000);
  
//       // Limpia el intervalo cuando el componente se desmonta para evitar fugas de memoria
//       return () => {
//         clearInterval(interval);
//       };
//     }, []);
  
//     return (
//       <div className="carousel-container">
//         <div className="carousel-inner">
//           {imageList.map((image, index) => (
//             <div key={index} className={`carousel-item ${index === currentIndex ? 'active' : ''}`}>
//               <div className="carousel-image-container">
//                 <img
//                   className="carousel-image"
//                   src={image.src}
//                   alt={`Imagen ${index + 1}`}
//                 />
//               </div>
//               <div className="carousel-title">{image.title}</div>
//             </div>
//           ))}
//         </div>
//       </div>
//     );
//   }
  
//   export default App;
  
{/* <h3 className='titulo-habilidades'>Habilidades</h3> */}


const App = () => {
  const images = [
    {img: "src/assets/icons8-html-5-70.png",
    nombre:"HTML"
    },
    {img: "src/assets/icons8-css3-70.png",
    nombre:"CSS"
    },
    {img: "src/assets/icons8-javascript-70.png",
    nombre:"Javascript"
    },
    {img: "src/assets/icons8-react-70.png",
    nombre:"React"
    },
    {img: "src/assets/icons8-github-70.png",
    nombre:"Github"
    },
    {img: "src/assets/icons8-git-70.png",
    nombre:"Git"
    },
    {img: "src/assets/icons8-sass-70.png",
    nombre:"SASS"
    },
    {img: "src/assets/icons8-sql-server-70.png",
    nombre:"SQL Server"
    }
    // Agrega más imágenes y títulos según sea necesario.
  ];

  const [currentGroupIndex, setCurrentGroupIndex] = useState(0);
  const groupSize = 4;

  useEffect(() => {
    // Función para cambiar automáticamente las imágenes cada 3 segundos.
    const interval = setInterval(() => {
      setCurrentGroupIndex((prevIndex) =>
        prevIndex === Math.floor(images.length / groupSize) - 1 ? 0 : prevIndex + 1
      );
    }, 3000);

    return () => {
      // Limpia el intervalo cuando el componente se desmonta.
      clearInterval(interval);
    };
  }, [images.length]);

  const renderImages = () => {
    const startIndex = currentGroupIndex * groupSize;
    const endIndex = startIndex + groupSize;
    const groupImages = images.slice(startIndex, endIndex);

    return groupImages.map((image, index) => (
      <div key={index} className="carousel-item">
        <img src={image.img} alt="imagen" />
        <p className='nombre-habilidades'>{image.nombre}</p>
      </div>
    ));
  };

  return (
    <>
      <h3 className='titulo-habilidades'>Habilidades</h3>
      <div className="carousel">
        {renderImages()}
      </div>
    </>
  );
};

export default App;