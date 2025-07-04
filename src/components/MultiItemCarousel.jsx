import React, { useRef, useEffect } from "react";

const items = [
  { id: 1, title: "Item 1", image: "https://via.placeholder.com/200?text=1" },
  { id: 2, title: "Item 2", image: "https://via.placeholder.com/200?text=2" },
  { id: 3, title: "Item 3", image: "https://via.placeholder.com/200?text=3" },
  { id: 4, title: "Item 4", image: "https://via.placeholder.com/200?text=4" },
  { id: 5, title: "Item 5", image: "https://via.placeholder.com/200?text=5" },
  { id: 6, title: "Item 6", image: "https://via.placeholder.com/200?text=6" },
  { id: 7, title: "Item 7", image: "https://via.placeholder.com/200?text=7" },
  { id: 8, title: "Item 8", image: "https://via.placeholder.com/200?text=8" },
];

export default function MultiItemCarousel() {
  const carouselRef = useRef(null);

  const scrollByAmount = (amount) => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: amount, behavior: "smooth" });
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      if (!carouselRef.current) return;

      // Si estamos cerca del final, volvemos al principio
      const { scrollLeft, scrollWidth, clientWidth } = carouselRef.current;
      const isAtEnd = scrollLeft + clientWidth >= scrollWidth - 5;

      if (isAtEnd) {
        // Vuelve al principio
        carouselRef.current.scrollTo({ left: 0, behavior: "smooth" });
      } else {
        scrollByAmount(220); // Avanza automáticamente 220px
      }
    }, 3000); // Cada 3 segundos

    return () => clearInterval(interval); // Limpiamos el interval cuando el componente se desmonte
  }, []);

  return (
    <div className="relative w-full p-4">
      {/* Botón izquierda */}
      <button
        onClick={() => scrollByAmount(-220)}
        className="absolute left-2 top-1/2 -translate-y-1/2 bg-white p-2 rounded-full shadow z-10 hover:bg-gray-200"
      >
        ⬅️
      </button>

      {/* Carrusel */}
      <div
        ref={carouselRef}
        className="flex gap-4 overflow-x-auto scrollbar-hide scroll-smooth"
      >
        {items.map((item) => (
          <div
            key={item.id}
            className="min-w-[200px] bg-white shadow-md rounded-xl p-2 flex flex-col items-center"
          >
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-40 object-cover rounded-lg mb-2"
            />
            <h2 className="text-center font-semibold">{item.title}</h2>
          </div>
        ))}
      </div>

      {/* Botón derecha */}
      <button
        onClick={() => scrollByAmount(220)}
        className="absolute right-2 top-1/2 -translate-y-1/2 bg-white p-2 rounded-full shadow z-10 hover:bg-gray-200"
      >
        ➡️
      </button>
    </div>
  );
}
