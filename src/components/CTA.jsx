import React from 'react'
import cv from './images/cv.pdf.pdf';

const CTA  = () => {
  return (
    <div className='cta'>
    <a href={cv} download className='btn'>Download CV</a>
    <a href='#contact' className='btn btn-primary'>let's Talk</a>
    </div>
  )
}

export default CTA