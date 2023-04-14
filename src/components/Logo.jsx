import React from 'react';
import { Link } from 'react-router-dom';
const Logo = () => {
  return (
    <Link to="/">
    <img className='logo' src="./Movie mania (1).png" alt="logo" />
    </Link>
  )
}

export default Logo;