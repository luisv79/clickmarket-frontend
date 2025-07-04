import { useState, useEffect, useRef } from "react";   


function CartDown() {

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
        <div className="bg-white min-h-screen p-6">
      <h2 className="text-2xl font-bold mb-2">Clickable Dropdown</h2>
      <p className="mb-4">Click on the button to open the dropdown menu.</p>

      <div className="relative inline-block" ref={dropdownRef}>
        <button
          onClick={toggleDropdown}
          className="bg-blue-500 text-white px-6 py-3 text-base rounded hover:bg-blue-600 focus:outline-none"
        >
          Dropdown
        </button>

        {isOpen && (
          <div className="absolute mt-2 w-40 bg-gray-100 rounded shadow-lg z-10">
            <a
              href="#home"
              className="block px-4 py-2 text-black hover:bg-gray-200"
            >
              Home
            </a>
            <a
              href="#about"
              className="block px-4 py-2 text-black hover:bg-gray-200"
            >
              About
            </a>
            <a
              href="#contact"
              className="block px-4 py-2 text-black hover:bg-gray-200"
            >
              Contact
            </a>
          </div>
        )}
      </div>
    </div>
        
        </>
    )
    
}
export default CartDown;