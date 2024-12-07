import React from 'react';
var FontAwesomeIcon = require('react-fontawesome');

export default function Firstcontener({ scrollToMyWork }) {
  return (
    
    <header>
      <div>
        <div className="blackbackground">
          <div className="container Heading-box">
            <p className="text-center Heading">
              HELLO, I'M <span data-aos="fade-left">RITIK BHAT</span> ALSO KNOWN AS{' '}
              <span data-aos="fade-left">DEVELOPER</span>
            </p>
            <p className="h5 text-white text-center">I am a full stack web developer</p>
          </div>
          <button className="btn btn-primary my-3" onClick={scrollToMyWork}>
            <strong>Check Out My works</strong> <FontAwesomeIcon icon="fas fa-less-than" />
          </button>
        </div>
      </div>
      </header>
   
  );
}
