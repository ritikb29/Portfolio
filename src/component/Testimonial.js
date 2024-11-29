import React from 'react'
// import image10 from './image/double-quotes.png'

export default function Testimonial() {
  return (
    <>
<div className='mywork-container text-center'>
  <div className='text-center'>
    <h1 className='text-white text-center'>Testimonials</h1>
    {/* <div className="text-center line mb-3"></div> */}
    <p className='text-white mb-5'> What my coding partners say about me - </p>
  </div>
  <div className="container testimonials-box-container" data-aos="zoom-out">
    <div className="testimonials-boxes"><p className='text-primary'>I really am comfortable with collaborating and coding with Barry. His ingenious ideas give me a lot of ideas solving a problem multiple ways.</p>

</div>
    <div className="testimonials-boxes mx-5">
    {/* <img className='double-qoute-image' src={image10} alt="" /> */}
    <p className='text-primary'> Throughout our collaboration, I was consistently impressed by Barry's professionalism, attention to detail, and ability to adapt to changing requirements.</p></div>
    
    <div className="testimonials-boxes"><p className='text-primary'>He possesses a deep understanding of the latest technologies and trends in his field, allowing him to tackle complex challenges with ease.</p></div>
    
  </div>
</div>
    </>
  )
}
