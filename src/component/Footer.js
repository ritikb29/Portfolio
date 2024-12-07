import React from 'react'
import linkind from './image/linkedin logo.png'
import github from './image/github logo.png'
import facebook from './image/facebook logo.png'
import instagram from './image/instagram logo.png'

export default function Footer() {
  return (
    <footer>
        <div className='footer'>
        <div class="name-container">
  <span class="name text-white">Ritik Bhat</span>
</div>
<div className='footer-logo-container'>
<a href="https://www.linkedin.com/in/ritikbhat29/" target="_blank" rel="noopener noreferrer">
  <img src={linkind} alt="LinkedIn" />
</a>
<a href="https://github.com/ritikb29" target="_blank" rel="noopener noreferrer">
  <img src={github} alt="GitHub" />
</a>
<a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
  <img src={facebook} alt="Facebook" />
</a>
<a href="https://www.instagram.com/ritikbhat29/?next=%2F&hl=en" target="_blank" rel="noopener noreferrer">
  <img src={instagram} alt="Instagram" />
</a>

</div>
<p className='text-light mt-3'>copyright by @ritikbhat29 </p>

        </div>
    </footer>
  )
}
