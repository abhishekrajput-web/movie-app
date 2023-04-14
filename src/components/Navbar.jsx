import React from 'react';
import Search from './Search';
import Logo from './Logo';

const Navbar = () => {
  return (
    <div className="navbar-bg">
    <div className="container">
    <div className='navbar-container'>
     <Logo/>
    <Search/>
    </div>
    </div>
    </div>
  )
}


export default Navbar;
