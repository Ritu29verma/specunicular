import React from 'react';
import logo from '../assets/logo.jpg';

export default function Navbar({showLogin , showLogout, showOther}) {
  return (
    <div>
    <nav className="bg-docsoGreen p-4 shadow-lg">
      <div className="container mx-auto flex justify-between items-center">
      <div className="flex items-center space-x-3">
            <img src={logo} alt="Docso Logo" className="h-12 w-12 rounded-full border-2 border-white" />
          </div>

       {
        showOther && (
          <ul className="hidden md:flex space-x-6 text-white">
          <li className="hover:text-lightGreen"><a href="#">Home</a></li>
          <li className="hover:text-lightGreen"><a href="#">About</a></li>
          <li className="hover:text-lightGreen"><a href="#">Contact</a></li>
        </ul>
        )
       }

        <div className="hidden md:flex space-x-4">
         {
          showLogin && (
            <button className="text-docsoGreen bg-white px-4 py-2 rounded-md hover:bg-docsoGreen hover:text-white transition duration-300">Login</button>)
         }
          {
            showLogout && (
              <button className="text-white border-2 border-white px-4 py-2 rounded-md hover:bg-white hover:text-docsoGreen transition duration-300">Logout</button>
            )
          }
        </div>

      </div>
    </nav>
      <div className='h-5 bg-lightGreen'></div>
      </div>
  );
}
