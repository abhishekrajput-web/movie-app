import React from 'react'
import {BrowserRouter,Routes,Route} from "react-router-dom";
import Home from './pages/Home';
import SingleMoviePage from './pages/SingleMoviePage';
import Footer from './components/Footer';
import ErrorPage from './components/ErrorPage';
import ScrollButton from './components/TopBtn';
const App = () => {

  return (
 <BrowserRouter>
<ScrollButton/>
 <Routes>
  <Route path='/' element={<Home/>}/>
  <Route path='/movies/:id' element={<SingleMoviePage/>}/>
  <Route path='*' element={<ErrorPage/>}/>
 </Routes>
 <Footer/>
 </BrowserRouter>
  )

}

export default App;
