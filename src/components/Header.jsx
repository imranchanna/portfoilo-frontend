import React from 'react';
import './header.css';
import CTA from './CTA'
import Me from './images/me2.avif';
import Headersocial from "./Headersocials";

const Header = () => {
  return (
    <header>
        <div className='container header__container'>
       <h5>Hello I'm</h5>
       <h1>Imran Channa</h1>
       <h5 className='text-light'>Fullstack Developer</h5>
       <CTA />
       <Headersocial />
       <div className='me'>
       
        <img src={Me} alt='' />
        
       </div>
       <a href="#contact" className='Scroll__down'>Scroll down</a>
        </div>
    </header>
  )
}

export default Header;