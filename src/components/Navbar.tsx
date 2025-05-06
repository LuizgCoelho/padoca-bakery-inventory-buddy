
import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-white shadow-sm border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0 flex items-center">
              <span className="text-bakery-700 text-xl font-bold">Padoca</span>
              <span className="ml-1 text-bakery-500 text-sm italic">Bakery</span>
            </Link>
          </div>
          <div className="flex items-center">
            <Link to="/" className="px-3 py-2 text-sm font-medium text-bakery-700 hover:text-bakery-900 hover:bg-bakery-50 rounded-md">
              Início
            </Link>
            <Link to="/inventory" className="px-3 py-2 text-sm font-medium text-bakery-700 hover:text-bakery-900 hover:bg-bakery-50 rounded-md ml-4">
              Estoque
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
