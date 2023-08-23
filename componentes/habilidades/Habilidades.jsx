
import React, { useState, useEffect } from 'react';
import './habilidades.css'


const App = () => {
  const images = [
    {img: "https://i.ibb.co/s3WVtdb/icons8-git-70.png",
    nombre:"HTML"
    },
    {img: "https://i.ibb.co/DY4bzRL/icons8-css3-70.png",
    nombre:"CSS"
    },
    {img: "https://i.ibb.co/X44H8Lw/icons8-javascript-70.png",
    nombre:"Javascript"
    },
    {img: "https://i.ibb.co/n7phSKs/icons8-react-70.png",
    nombre:"React"
    },
    {img: "https://i.ibb.co/kMMsT1d/icons8-github-70.png",
    nombre:"Github"
    },
    {img: "https://i.ibb.co/s3WVtdb/icons8-git-70.png",
    nombre:"Git"
    },
    {img: "https://i.ibb.co/DfxF7hS/icons8-sass-70.png",
    nombre:"SASS"
    },
    {img: "https://i.ibb.co/nfhvpJj/icons8-sql-server-70.png",
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