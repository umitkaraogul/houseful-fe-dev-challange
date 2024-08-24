import React from 'react';
import { Link } from 'react-router-dom';

const Navbar: React.FC = () => {
  return (
    <nav className='bg-slate-500 p-4'>
      <div className='container mx-auto'>
        <Link to='/' className='text-white text-lg'>
          Home
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
