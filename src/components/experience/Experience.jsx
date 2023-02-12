import React from 'react';
import "./experience.css";
import {AiFillCheckCircle} from 'react-icons/ai';
const Experience = () => {
  return (
    <section id='experience'>
     <h5>what skills I have</h5>
    <div className='experience'>
    
     <h2>My Experience</h2>
     </div>
     <div className='container experience-container '>
     <div className='experience__frontend'>
     
     <h3>Frontend Development</h3>
     <div className='experience__content'>
     <article className='experience__details'>
     <AiFillCheckCircle className='experience__details-icon' />
     <div>
     <h5>html</h5>
     <small className='text-light'>Experienced</small>

     </div>
     </article>
     <article className='experience__details'>
     <AiFillCheckCircle className='experience__details-icon' />
     <div>
     <h5>css</h5>
     <small className='text-light'>Intermediate</small>
     </div>
     </article>
     <article className='experience__details'>
     <AiFillCheckCircle className='experience__details-icon' />
     <div>
     <h5>javascript</h5>
     <small className='text-light'>Experienced</small>
     </div>
     </article>
     <article className='experience__details'>
     <AiFillCheckCircle className='experience__details-icon' />
     <div>
     <h5>bootstrap</h5>
     <small className='text-light'>Experienced</small>
     </div>
     </article>
     
     </div>
     </div>

     
     {/* END of FrontEND */}
     <div className='experience__backend'>
  
     <h3>Backend Development</h3>
     <div className='experience__content'>
     <article className='experience__details'>
     <AiFillCheckCircle className='experience__details-icon'/>
     <div>
     <h5>Node js</h5>
     <small className='text-light'>Experienced</small>
     </div>
     </article>
     <article className='experience__details'>
     <AiFillCheckCircle className='experience__details-icon' />
     <div>
     <h5>MongoDB</h5>
     <small className='text-light'>Intermediate</small>
     </div>
     </article>
     <article className='experience__details'>
     <AiFillCheckCircle  className='experience__details-icon' />
     <div>
     <h5>My sql</h5>
     <small className='text-light'>Experienced</small>
     </div>
     </article>
     <article className='experience__details'>
     <AiFillCheckCircle className='experience__details-icon' />
     <div>
     <h5>PHP</h5>
     <small className='text-light'>Experienced</small>
     </div>
     </article>
     

     </div>
     </div>

     </div>
     
    </section>
  )
}

export default Experience