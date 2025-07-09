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

    const [dropdownOpen, setDropdownOpen] = useState(false);

    const toggleDropdown = () => {
      setDropdownOpen(!dropdownOpen);
    };

    return (
        <>
         <div className="font-sans m-auto w-[375px]">
      {/* Panel lateral menu */}
      <div
        className={` fixed top-0 h-[250px] bg-[#fff] overflow-x-hidden pt-16 transition-all duration-500 z-50 ${
          isOpen ? 'w-[365px]' : 'w-0'
        }`}
      >
        <button
          className="absolute top-0 right-6 text-4xl"
          onClick={closeNavbar}
        >
          ×
        </button>
        <a href="#" className="block  hover:bg-gray-100 px-8 py-2 transition-colors duration-300">
          Inicio
        </a>
        <a href="#" className="block  hover:bg-gray-100 px-8 py-2 transition-colors duration-300">
          Notificaciones
        </a>
        <a href="#" className="block  hover:bg-gray-100 px-8 py-2 transition-colors duration-300">
          Clients
        </a>
        <a href="#" className={`dropdown-btn block  hover:bg-gray-100 px-8 py-2 transition-colors duration-300 ${dropdownOpen ? 'active' : ''}`} onClick={toggleDropdown}>
          Dropdown
        </a>
      <div
        className=""
        style={{ display: dropdownOpen ? 'grid' : 'none' }}
      >
        <a href="#" className="block  hover:bg-gray-100 px-8 py-2 transition-colors duration-300">Link 1</a>
        <a href="#" className="block  hover:bg-gray-100 px-8 py-2 transition-colors duration-300">Link 2</a>
        <a href="#" className="block  hover:bg-gray-100 px-8 py-2 transition-colors duration-300">Link 3</a>
      </div>
        <a href="#" className="block hover:hover:bg-gray-100 px-8 py-2 transition-colors duration-300">
          Contact
        </a>
      </div>
{/* Panel lateral categoria */}
       <div
        className={`fixed top-0 h-[250px] bg-[#fff] overflow-x-hidden pt-16 transition-all duration-500 z-50 ${
          isOpenTwo ? 'w-[365px]' : 'w-0'
        }`}
      >
        <button
          className="absolute top-0 right-6 text-4xl"
          onClick={closenCategori}
        >
          ×
        </button>
        <a href="#" className="block  hover:bg-gray-100 text-2xl px-8 py-2 transition-colors duration-300">
          Tecnologia
        </a>
        <a href="#" className="block  hover:bg-gray-100 text-2xl px-8 py-2 transition-colors duration-300">
          Electrodomesticos
        </a>
        <a href="#" className="block  hover:bg-gray-100 text-2xl px-8 py-2 transition-colors duration-300">
          Hogar y muebles
        </a>
        <a href="#" className="block  hover:bg-gray-100 text-2xl px-8 py-2 transition-colors duration-300">
          Belleza y cuidado personal
        </a>
      </div>

      {/* Panel lateral buscar */}
       <div
        className={`fixed top-0 h-[250px] bg-[#111] overflow-x-hidden pt-16 transition-all duration-500 z-50 ${
          isOpenSearh ? 'w-[365px]' : 'w-0'
        }`}
      >
        <button
          className="absolute top-0 right-6 text-4xl"
          onClick={closenSearch}
        >
          ×
        </button>
        <Search />
      </div>

      {/* Panel lateral Carrito */}
       <div
        className={`fixed top-0 h-auto bg-[#fff] overflow-x-hidden pt-16 transition-all duration-500 z-50 ${
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
            <Link to="/cart"><button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded">Carrito</button></Link>
            <Link to="/checkout"><button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded">Continuar pago</button></Link>
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