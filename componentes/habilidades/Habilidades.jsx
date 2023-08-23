
import React, { useState, useEffect } from 'react';
import './habilidades.css'


const App = () => {
  const images = [
    {img: "./src/assets/icons8-html-5-70.png",
    nombre:"HTML"
    },
    {img: "./src/assets/icons8-css3-70.png",
    nombre:"CSS"
    },
    {img: "./src/assets/icons8-javascript-70.png",
    nombre:"Javascript"
    },
    {img: "./src/assets/icons8-react-70.png",
    nombre:"React"
    },
    {img: "./src/assets/icons8-github-70.png",
    nombre:"Github"
    },
    {img: "./src/assets/icons8-git-70.png",
    nombre:"Git"
    },
    {img: "./src/assets/icons8-sass-70.png",
    nombre:"SASS"
    },
    {img: "./src/assets/icons8-sql-server-70.png",
    nombre:"SQL Server"
    }

  ];

  const [currentGroupIndex, setCurrentGroupIndex] = useState(0);
  const groupSize = 4;

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentGroupIndex((prevIndex) =>
        prevIndex === Math.floor(images.length / groupSize) - 1 ? 0 : prevIndex + 1
      );
    }, 3000);

    return () => {
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
      <h3 id='habilidades' className='titulo-habilidades'>Habilidades</h3>
      <div className="carousel">
        {renderImages()}
      </div>
    </>
  );
};
export default App;