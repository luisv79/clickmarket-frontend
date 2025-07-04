import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faList, faMagnifyingGlass, faCartShopping } from '@fortawesome/free-solid-svg-icons'
import Search from './Search';
import CartProducts from './CartProducts';


function Navbar() {

    const [isOpen, setIsOpen] = useState(false);
    const [isOpenTwo, setIsOpenTwo] = useState(false);
    const [isOpenSearh, setIsOpenSearh] = useState(false);
    const [isOpenCart, setIsOpenCart] = useState(false);

    const openNavbar = () => setIsOpen(true);
    const closeNavbar = () => setIsOpen(false);

    const openCategori = () => setIsOpenTwo(true);
    const closenCategori = () => setIsOpenTwo(false);

    const openSearch = () => setIsOpenSearh(true);
    const closenSearch = () => setIsOpenSearh(false);

    const openCart= () => setIsOpenCart(true);
    const closenCart = () => setIsOpenCart(false);

    return (
        <>
         <div className="font-sans">
      {/* Panel lateral menu */}
      <div
        className={`fixed top-0 left-0 h-[250px] bg-[#111] overflow-x-hidden pt-16 transition-all duration-500 z-50 ${
          isOpen ? 'w-[250px]' : 'w-0'
        }`}
      >
        <button
          className="absolute top-0 right-6 text-4xl text-white"
          onClick={closeNavbar}
        >
          ×
        </button>
        <a href="#" className="block text-[#818181] hover:text-white text-2xl px-8 py-2 transition-colors duration-300">
          About
        </a>
        <a href="#" className="block text-[#818181] hover:text-white text-2xl px-8 py-2 transition-colors duration-300">
          Services
        </a>
        <a href="#" className="block text-[#818181] hover:text-white text-2xl px-8 py-2 transition-colors duration-300">
          Clients
        </a>
        <a href="#" className="block text-[#818181] hover:text-white text-2xl px-8 py-2 transition-colors duration-300">
          Contact
        </a>
      </div>
{/* Panel lateral categoria */}
       <div
        className={`fixed top-0 left-0 h-[250px] bg-[#111] overflow-x-hidden pt-16 transition-all duration-500 z-50 ${
          isOpenTwo ? 'w-[250px]' : 'w-0'
        }`}
      >
        <button
          className="absolute top-0 right-6 text-4xl text-white"
          onClick={closenCategori}
        >
          ×
        </button>
        <a href="#" className="block text-[#818181] hover:text-white text-2xl px-8 py-2 transition-colors duration-300">
          Closes
        </a>
        <a href="#" className="block text-[#818181] hover:text-white text-2xl px-8 py-2 transition-colors duration-300">
          Shoes
        </a>
        <a href="#" className="block text-[#818181] hover:text-white text-2xl px-8 py-2 transition-colors duration-300">
          Pets
        </a>
        <a href="#" className="block text-[#818181] hover:text-white text-2xl px-8 py-2 transition-colors duration-300">
          kitchen
        </a>
      </div>

      {/* Panel lateral buscar */}
       <div
        className={`fixed top-0 left-0 h-[250px] bg-[#111] overflow-x-hidden pt-16 transition-all duration-500 z-50 ${
          isOpenSearh ? 'w-[250px]' : 'w-0'
        }`}
      >
        <button
          className="absolute top-0 right-6 text-4xl text-white"
          onClick={closenSearch}
        >
          ×
        </button>
        <Search />
      </div>

      {/* Panel lateral Carrito */}
       <div
        className={`fixed top-0 left-0 h-auto bg-[#fff] overflow-x-hidden pt-16 transition-all duration-500 z-50 ${
          isOpenCart ? 'w-[365px]' : 'w-0'
        }`}
      >
        <button
          className="absolute top-0 right-6 text-4xl"
          onClick={closenCart}
        >
          ×
        </button>
        <div className='p-4'>
       <CartProducts />

        </div>
       <div className="flex justify-between p-4">
            <Link to="/cart"><button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded">Carrito</button></Link>
            <Link to="/checkout"><button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded">Continuar pago</button></Link>
            </div>
      </div>

      {/* Botón para abrir */}
    

      {/* Contenido */}
      <div className="ml-4 mt-4">
        <h2 className="text-2xl font-semibold">Collapsed Sidepanel</h2>
        <p className="mt-2">Click on the hamburger menu/bar icon to open the sidepanel.</p>
      </div>
    </div>
    
        <nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 py-2 z-40 w-[375px] m-auto">
            <ul className="flex justify-around text-center text-gray-600">
                <li onClick={openNavbar}>
                   <FontAwesomeIcon icon={faBars} />
                        <h2>Menu</h2>
                </li>
                <li onClick={openCategori}>
                    <div>
                        <FontAwesomeIcon icon={faList} />
                        <h2>Categorias</h2>
                    </div>
                    
                </li>
                <li onClick={openSearch}>
                   <div>
                        <FontAwesomeIcon icon={faMagnifyingGlass} />
                        <h2>Buscar</h2>
                    </div>
                </li>
                <li onClick={openCart}>
                     <div>
                        <FontAwesomeIcon icon={faCartShopping} />
                        <h2>Carrito</h2>
                    </div>
                </li>
            </ul>
        </nav>
        </>
    )
    
}

export default Navbar;