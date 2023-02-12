import React from 'react'
import './portfolio.css';
import IMG1 from './images/portfolio1.jpg';
import IMG2 from './images/portfolio2.png';
import IMG3 from './images/portfolio3.jpg';
import IMG4 from './images/portfolio4.jpg';
import IMG5 from './images/portfolio5.jpg';
import IMG6 from './images/portfolio6.png';


// DO NOT USE THE IMAGES IN PORDUCTION
const data = [
  {
    id: 1,
    image: IMG1, 
    title: 'Crypto Currency Dashboard & Financial Visualizayion'
  },
  {
    id: 2,
    image: IMG2, 
    title: 'Charts templates & inforgraphics in Figma'
    
  },
  {
    id: 3,
    image: IMG3, 
    title: 'Figma Dashboard UI kit for data design web apps'
  },
  {
    id: 4,
    image: IMG4, 
    title: 'Crypto Currency Dashboard & Financial Visualizayion'
  },
  {
    id: 5,
    image: IMG5, 
    title: 'Maintaining tasks and tracking progress ',
    github: ""
  }, 
  {
    id: 6,
    image: IMG6, 
    title: 'Charts templates & inforgraphics in Figma'
  },
  
]



const Portfolio = () => {
  return (
    <section id='portfolio'>
       <h5> My Recent Work</h5>
       <h2>portfolio</h2>
       <div className='container portfolio__container'>
       {
        data.map(({id, image, title, github, demo  })=> {
          return(
            <article key={id} className='portfolio__item'>
       <div className='portfoli__itme-image'>
       <img src={image} alt={title}>
       </img>
       </div>
       <p>{title}</p>
       <div className='portfolio__item-cta'>
       <a href={github} className='btn' target='_blank'>Github</a>
       <a href={demo} className='btn btn-primary' target='_blank'>Live Demo</a>
</div>    
</article>
 )
})
       }
       </div>
       </section>
  )
      }
export default Portfolio;