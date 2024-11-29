import React from 'react';

export default function Navbar({ scrollToAbout, scrollToMyService, scrollToMyWork, scrollToTestimonial, scrollToContact }) {

  const handleNavItemClick = (scrollToSection) => {
    scrollToSection();
    
    // Programmatically toggle the collapse of the navbar
    const navbarToggler = document.getElementById('navbarSupportedContent');
    const bsCollapse = new window.bootstrap.Collapse(navbarToggler, {
      toggle: false,
    });
    bsCollapse.hide();
  };

  return (
    <nav className="navbar navbar-expand-lg navbar2 px-3 sticky-top">
      <a className="navbar-brand text-white" href="/"><strong>Ritik</strong></a>
      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav ms-auto">
          <li className="nav-item">
            <button className="nav-link mx-2 btn" onClick={() => handleNavItemClick(scrollToAbout)}>
              About
            </button>
          </li>
          <li className="nav-item">
            <button className="nav-link mx-2 btn" onClick={() => handleNavItemClick(scrollToMyService)}>
              Service
            </button>
          </li>
          <li className="nav-item">
            <button className="nav-link mx-2 btn" onClick={() => handleNavItemClick(scrollToMyWork)}>
              Work
            </button>
          </li>
          <li className="nav-item">
            <button className="nav-link mx-2 btn" onClick={() => handleNavItemClick(scrollToTestimonial)}>
              Testimonial
            </button>
          </li>
          <li className="nav-item">
            <button className="nav-link mx-2 btn" onClick={() => handleNavItemClick(scrollToContact)}>
              Contact
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
}
