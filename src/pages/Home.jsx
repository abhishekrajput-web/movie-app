import React from 'react';
import Movies from '../components/Movies';
import Navbar from '../components/Navbar';
import Error from '../components/Error';
const Home = () => {
  return (
    <>
     <Navbar/>
     <Error/>
    <Movies/>
    </>
  )
}

export default Home;
