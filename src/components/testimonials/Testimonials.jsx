import React from 'react'
import './testimonials.css';





const Testimonials = () => {
  return (
    <section id='testimonials'>
    <h5>Review from clients</h5>
    <h2>Testimonials</h2>
    <div className='container testimonials__container'>
      <article className='testimonials'>
        <div className='client__avatar'>
        
      
          
          <h5 className='client__name'>Ernest Achiever</h5>
          <small className='client__review'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. 
        Aspernatur pariatur cupiditate nisi beatae accusamus, 
        unde veniam nam iure perferendis soluta neque praesentium temporibus a,
        eaque culpa reiciendis, enim recusandae voluptatum?
          </small>

          
        </div>
      </article>
    </div>
    </section>
  )
}

export default Testimonials