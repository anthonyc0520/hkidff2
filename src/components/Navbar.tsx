import React, { useState } from 'react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-gray-800 p-4 flex items-center justify-between bg-gray-800 p-4 flex items-center justify-between font-noto">
      <img src="/images/logo.svg" alt="香港國際聾人電影節 Logo" className="h-10 w-auto" />
        <div className="hidden md:flex space-x-4">
         <ul className="Navbar">
            <li>
              <a className="text-white" href="#home">主頁</a>
            </li>
            <li>
              <a className="text-white" href="#about">關於我們</a>
            </li>
            <li>
              <a className="text-white" href="#past-festivals">歷屆電影節</a>
            </li>
            <li>
              <a className="text-white" href="#events">活動</a>
            </li>
            <li>
              <a className="text-white" href="#contact">聯絡我們</a>
            </li>
          </ul>
        </div>
      <button className="md:hidden text-white" onClick={toggleMenu}>
        {isOpen ? '✖' : '☰'}
      </button>
      {isOpen && (
        <div className="md:hidden absolute top-16 left-0 w-full bg-gray-800 p-4 flex items-center justify-between font-noto">
          <div className="hidden md:flex space-x-4">
          <ul className="Navbar">
            <li>
              <a className="text-white" href="#home">主頁</a>
            </li>
            <li>
              <a className="text-white" href="#about">關於我們</a>
            </li>
            <li>
              <a className="text-white" href="#past-festivals">歷屆電影節</a>
            </li>
            <li>
              <a className="text-white" href="#events">活動</a>
            </li>
            <li>
              <a className="text-white" href="#contact">聯絡我們</a>
            </li>
          </ul>
         </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;