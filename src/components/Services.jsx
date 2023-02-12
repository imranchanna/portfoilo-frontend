import React from 'react';
import "./Services.css";
import {BsCheck} from 'react-icons/bs';

const Services = () => {
  return (
   
    <section id='service'>
     <h5> What I Offer</h5>
     <h2>Services</h2>
     <div className='container service__container'>
      <article className='service'>
      <div className='service__head'>
        <h3>UI/UX Design</h3>
      </div>
     <ul className='service_list'>
     <li>
      <BsCheck className='service__list-icon' />
      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
     </li>
       
     </ul>
     <ul className='service_list'>
     <li>
      <BsCheck className='service__list-icon' />
      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
     </li>
       
     </ul>
     <ul className='service_list'>
     <li>
      <BsCheck className='service__list-icon' />
      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
     </li>
       
     </ul>
     <ul className='service_list'>
     <li>
      <BsCheck className='service__list-icon' />
      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
     </li>
       
     </ul>
     <ul className='service_list'>
     <li>
      <BsCheck className='service__list-icon' />
      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
     </li>
       
     </ul>
     
    
      </article>
      
      {/* END OF UI/UX*/}
      <article className='service'>
      <div className='service__head'>
        <h3>WEB DEVELOPMENT</h3>
      </div>
     <ul className='service_list'>
     <li>
      <BsCheck className='service__list-icon' />
      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
     </li>
       
     </ul>
     <ul className='service_list'>
     <li>
      <BsCheck className='service__list-icon' />
      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
     </li>
       
     </ul>
     <ul className='service_list'>
     <li>
      <BsCheck className='service__list-icon' />
      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
     </li>
       
     </ul>
     <ul className='service_list'>
     <li>
      <BsCheck className='service__list-icon' />
      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
     </li>
       
     </ul>
     <ul className='service_list'>
     <li>
      <BsCheck className='service__list-icon' />
      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
     </li>
       
     </ul>
     
     
     
    
      </article>
      {/* END OF WEB DEVELOPMETN*/}
      <article className='service'>
      <div className='service__head'>
        <h3>CONTENT CREATION</h3>
      </div>
     <ul className='service_list'>
     <li>
      <BsCheck className='service__list-icon' />
      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
     </li>
       
     </ul>
     <ul className='service_list'>
     <li>
      <BsCheck className='service__list-icon' />
      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
     </li>
       
     </ul>
     <ul className='service_list'>
     <li>
      <BsCheck className='service__list-icon' />
      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
     </li>
       
     </ul>
     <ul className='service_list'>
     <li>
      <BsCheck className='service__list-icon' />
      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
     </li>
       
     </ul>
     <ul className='service_list'>
     <li>
      <BsCheck className='service__list-icon' />
      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
     </li>
       
     </ul>
     
     
      </article>
      </div>
      {/* END OF CONTENT CTEATION*/}
      
     </section>
     
   
    
  )
}

export default Services;