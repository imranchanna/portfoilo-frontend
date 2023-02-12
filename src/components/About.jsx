import React from 'react';
import "./about.css";
import Me from "./images/about.jpeg";
import {FaAward} from 'react-icons/fa';
import {FiUsers} from 'react-icons/fi';
import {ImFolderPlus} from 'react-icons/im';
const about = () => {
  return (
    <section id='about'>
   <h5> Get to know</h5>
   <h2>About me</h2>
   <div className='container about__container'>
   <div className='about__me'>
   <div className='about_me-image'>
   <img src={Me}alt='About image'></img>
</div>
   </div>
    <div className='about__content'>
      <div className='about__cards'>
      <article className='about-card'>
      <FaAward className='about-icon' />
       <h5>Experience</h5>
       <small>1+ years working</small>
       
      </article>
      <article className='about-card'>
      <FiUsers className='about-icon' />
       <h5>Clients</h5>
       <small>50+ worldwide </small>
       
      </article>
      <article className='about-card'>
      <ImFolderPlus className='about-icon' />
       <h5>Project</h5>
       <small>20+ completed</small>
       
      </article>

      
    </div>
    <div className='center'>
    <p>
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo, repudiandae assumenda! Blanditiis
    ducimus quis veniam quae? Provident tenetur ullam voluptas reprehenderit fugit! Laudantium ab ea
    aliquam nesciunt iusto totam id. 
    
    </p>
    </div>
    
   </div>

   </div>
    </section>
  )
}

export default about
