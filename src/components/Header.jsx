import { useState, useEffect, useRef } from "react";   
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faCartShopping } from '@fortawesome/free-solid-svg-icons'
import Search from './Search';
import CartProducts from "./CartProducts";  


function Header() {
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef(null);

  const toggleDropdown = () => {
    setIsOpen(prev => !prev);
  };

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    window.addEventListener('click', handleClickOutside);
    return () => {
      window.removeEventListener('click', handleClickOutside);
    };
  }, []);
    return (
        <>
        <header>
            <div className='bg-yellow-400 p-4 '>
                <div className='flex justify-between mb-[20px]'>

            <Link to="/"><h1 className="text-xl font-bold">Click Market</h1></Link>
        <div className=''>

      
            <ul className='flex gap-4 '>
   
                <li>
                    <Link className='text-xl' to="/myaccount"><FontAwesomeIcon icon={faUser} /></Link>
                </li>
                <li>
                    <div className='relative'>
                    <a className='text-xl' to="/cart"  onClick={toggleDropdown}><FontAwesomeIcon icon={faCartShopping} /></a>
                    <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-4 w-4 flex items-center justify-center">0</span>
                   </div>
                </li>
                 
            </ul>
           
        </div>
         {isOpen && (
          <div className="absolute mt-[30px] w-[335px] bg-gray-100 rounded shadow-lg z-10 rounded-2xl rounded-tr-none">
            <CartProducts />
            <div className="flex justify-between p-4">
            <Link to="/cart"><button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Carrito</button></Link>
            <Link to="/checkout"><button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Continuar pago</button></Link>
            </div>
            
           
          </div>
         
        )} 
                </div>
               < Search />
            </div>

        </header>
        
        </>
    )
    
}

export default Header;