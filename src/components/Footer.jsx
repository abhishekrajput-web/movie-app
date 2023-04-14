import React from 'react';
import { Link } from 'react-router-dom';
const Footer = () => {
  return (
    <div className="container">

    <div className="footer-container">
    <div className="about-container">
      <h4 className='about-heading'>About Us</h4>
      <p className='about-text'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nostrum, sit Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, eos!!</p>
    </div>

    <div className="email-container">
      <form className='footer-form' action="#">
      <h4 className='email-heading'>Subscribe To Our News</h4>
      <input type="email" placeholder='@Email' name='email' autoComplete='off' minLength={7} />
      <input type="submit" value="Submit" />
      </form>
    </div>

    <div className="social-container">
      <Link to="#">Twitter</Link>
      <Link to="#">Facebook</Link>
      <Link to="#">Instagram</Link>
      <Link to="#">LinkedIn</Link>
      <Link to="#">Github</Link>
    </div>

    <div className="sponsor-img-container">
      <img className='sponsor-img' src="./sponsor1.png" alt="sponsor-img" />
      <img className='sponsor-img' src="./sponsor2.png" alt="sponsor-img" />
      <img className='sponsor-img' src="./sponsor3.png" alt="sponsor-img" />
      <img className='sponsor-img' src="./sponsor4.png" alt="sponsor-img" />
    </div>
  </div>
  </div>

  )
}

export default Footer;
