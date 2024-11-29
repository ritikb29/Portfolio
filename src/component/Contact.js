import React from 'react'
import contactImg from './image/contact2.jpeg'
// import contactIm from './image/contact-bg.png'

export default function Contact() {
  return (
    <>
        <div className='contact'>
        <h1 className='text-white my-5'>Get in touch</h1>
        <div className='contant-container'>
            <div className='contact-form'>
                <div className=''><p className='contact-color mx-3 my-4'>contact me</p></div>
                <hr className='text-white' />
                <div className='mx-5 my-'>
                <form action="">
                    <label htmlFor="name">name</label><br />
                    <input type="text" placeholder='name'/><br />
                    <label htmlFor="email">email</label><br />
                    <input type="email" placeholder='email'/><br />
                    <label htmlFor="contact">contact number</label><br />
                    <input type="tel" placeholder='contact number'/><br /><br />
                    <textarea name="" id="" placeholder='massage'>massage</textarea><br /><br />
                    <button className='btn btn-primary submit mx-3'><b> Submit</b></button>
                </form>
                </div>
            </div>
            <div className='imgageb'>
                <img className='contact-img my-5' src={contactImg} alt="" />
            </div>
            </div>
        </div>
    </>
  )
}
