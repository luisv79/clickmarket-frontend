import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronRight, faChevronLeft } from '@fortawesome/free-solid-svg-icons'

// Array de imágenes para el slideshow. Puedes reemplazar estas URLs con tus propias imágenes.
const images = [
  'https://placehold.co/800x400/FF5733/FFFFFF?text=Imagen+1', // Imagen de ejemplo 1
  'https://placehold.co/800x400/33FF57/FFFFFF?text=Imagen+2', // Imagen de ejemplo 2
  'https://placehold.co/800x400/3357FF/FFFFFF?text=Imagen+3', // Imagen de ejemplo 3
  'https://placehold.co/800x400/FFFF33/000000?text=Imagen+4', // Imagen de ejemplo 4
];

/**
 * Componente Slideshow para mostrar una galería de imágenes.
 * @param {boolean} autoPlay - Si el slideshow debe reproducirse automáticamente. Por defecto es true.
 * @param {number} interval - Intervalo en milisegundos para el cambio automático de diapositivas. Por defecto es 3000ms.
 */
const Slideshow = ({ autoPlay = true, interval = 3000 }) => {
  // Estado para controlar el índice de la imagen actual que se muestra.
  const [currentIndex, setCurrentIndex] = useState(0);

  // Función para avanzar a la siguiente imagen.
  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  // Función para retroceder a la imagen anterior.
  const goToPrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  // Función para ir a una imagen específica por su índice.
  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  // Efecto para la reproducción automática del slideshow.
  useEffect(() => {
    let slideshowInterval;
    if (autoPlay) {
      // Configura el intervalo para llamar a goToNext periódicamente.
      slideshowInterval = setInterval(goToNext, interval);
    }
    // Función de limpieza: Se ejecuta cuando el componente se desmonta o cuando
    // autoPlay/interval/currentIndex cambian para limpiar el intervalo.
    return () => clearInterval(slideshowInterval);
  }, [currentIndex, autoPlay, interval]); // Dependencias del efecto

  return (
    <div className="relative w-full max-w-4xl mx-auto overflow-hidden rounded-lg shadow-xl bg-gray-900">
      {/* Contenedor de las diapositivas. Usa flexbox para alinear las imágenes horizontalmente
          y transform para desplazar el contenedor y mostrar la imagen actual. */}
      <div
        className="flex transition-transform duration-700 ease-in-out"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {images.map((image, index) => (
          // Cada div representa una diapositiva individual.
          <div key={index} className="w-full flex-shrink-0">
            <img
              src={image}
              alt={`Diapositiva ${index + 1}`}
              className="w-full h-auto object-cover rounded-lg"
              // Manejo de error para imágenes no cargadas (opcional)
              onError={(e) => {
                e.target.onerror = null; // Evita bucles infinitos
                e.target.src = `https://placehold.co/800x400/CCCCCC/000000?text=Imagen+no+disponible`;
              }}
            />
          </div>
        ))}
      </div>

      {/* Botón de navegación "Anterior" */}
      <button
        onClick={goToPrevious}
        className="absolute top-1/2 left-4 transform -translate-y-1/2
                   p-3 rounded-full
                   flex items-center justify-center focus:outline-none
                   hover:bg-opacity-75 transition-all duration-300
                   text-2xl font-bold"
        aria-label="Diapositiva anterior"
      >
        <FontAwesomeIcon icon={faChevronLeft} /> {/* Carácter Unicode para flecha izquierda */}
      </button>

      {/* Botón de navegación "Siguiente" */}
      <button
        onClick={goToNext}
        className="absolute top-1/2 right-4 transform -translate-y-1/2
                   p-3 rounded-full
                   flex items-center justify-center focus:outline-none
                   hover:bg-opacity-75 transition-all duration-300
                   text-2xl font-bold"
        aria-label="Siguiente diapositiva"
      >
        <FontAwesomeIcon icon={faChevronRight} /> {/* Carácter Unicode para flecha derecha */}
      </button>

      {/* Puntos indicadores para cada diapositiva */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full ${
              currentIndex === index ? 'bg-white scale-125' : 'bg-gray-400'
            } transition-all duration-300 ease-in-out cursor-pointer`}
            aria-label={`Ir a la diapositiva ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default Slideshow;