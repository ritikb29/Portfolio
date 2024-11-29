import React from 'react'
import responsive from './image/responsive-35cb8557.gif'
import frontend from './image/react-23c4d31a.gif'
import fullstack from './image/fullstack-36c09759.gif'


export default function Myservice() {
  return (
    <>
    <div className='myservice-container'>
    <h1 className='text-white text-center mt-5'>My service</h1>
    <div className='line text-center'></div>
    <p className='text-white h6 mt-4'>what can I do</p>
        <div className='container box-of-boxes my-5'>
            <div className="service-box " data-aos="fade-right"><img className='box-image' src={responsive} alt="" />
            <h5 className='head mt-3'>Responsive design</h5>
            <p className='box-paragraph text-center'> I've implemented a responsive design that adapts seamlessly to all screen sizes, ensuring a consistent user experience across devices. The layout adjusts dynamically, maintaining visual appeal and functionality on desktops, tablets, and smartphones. This approach enhances accessibility and user satisfaction across different platforms.</p>
            </div>
            <div className="service-box mx-4" data-aos="fade-up"data-aos-delay="1000"><img className='box-image' src={frontend} alt="" />
            <h5 className='head mt-3'>Front-end</h5>
            <p className='box-paragraph text-center'>I’ve crafted a responsive layout that adapts smoothly to various screen sizes, ensuring an optimal user experience on all devices. The interface remains intuitive and visually consistent, whether viewed on a desktop, tablet, or smartphone. This approach ensures that the design is both user-friendly and accessible across different platforms.</p>

            </div>
            <div className="service-box" data-aos="fade-left"data-aos-delay="1500"><img className='box-image' src={fullstack} alt="" />
            <h5 className='head mt-3'>Full stack</h5>
            <p className='box-paragraph text-center'>I’ve built a robust and scalable architecture that manages varying loads and ensures smooth performance across all devices. The system is adaptable, enabling seamless data management and quick user interactions. This approach enhances reliability, security, and efficiency, laying a solid foundation for current and future needs.</p>

            </div>
        </div>
    </div>
    </>
  )
}
