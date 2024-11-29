import React from 'react';
import image1 from './image/image-animal1.jpg';
import image2 from './image/quote.png';
import image3 from './image/attendance.jpeg';
import image4 from './image/calculator.jpeg';
import image5 from './image/result.jpeg';
import image6 from './image/tic tac.jpeg';

export default function Mywork() {
  const projects = [
    {
      id: 1,
      title: 'Pet Snap API',
      description: `The "Pet Snap API" project is a dynamic web application that allows users to fetch and display images of various animals using an external API. Built with HTML, CSS, and JavaScript, this project focuses on making API calls to retrieve random animal pictures.`,
      technologies: [
        { name: '#React', className: 'aqua' },
        { name: '#JSX', className: 'green' },
        { name: '#API', className: 'red' },
        { name: '#javascript', className: 'aqua' },
      ],
      image: image1,
      liveLink: 'https://ritikb29.github.io/petSnapApis/',  // Add live link
      sourceLink: 'https://github.com/ritikb29/petSnapApis',  // Add source code link
    },
    {
      id: 2,
      title: 'Quote Generator',
      description: `The "Quote Generator" is a simple web app that fetches random quotes from an API and displays them. Built with HTML, CSS, and JavaScript, this project demonstrates API integration and responsive design.`,
      technologies: [
        { name: '#html', className: 'aqua' },
        { name: '#css', className: 'green' },
        { name: '#javascript', className: 'red' },
        { name: '#API', className: 'aqua' },
      ],
      image: image2,
      liveLink: 'https://ritikb29.github.io/Quote_Generater/',
      sourceLink: 'https://github.com/ritikb29/Quote_Generater',
    },
    {
      id: 3,
      title: 'Student Attendance Platform',
      description: `A platform built with PHP and MySQL to manage student attendance efficiently. It includes features for recording, tracking, and generating reports on student attendance.`,
      technologies: [
        { name: '#html', className: 'aqua' },
        { name: '#css', className: 'green' },
        { name: '#php', className: 'red' },
        { name: '#My-sql', className: 'aqua' },
      ],
      image: image3,
      liveLink: 'https://example.com/student-attendance-live',
      sourceLink: 'https://github.com/username/student-attendance-platform',
    },
    {
      id: 4,
      title: 'Calculator',
      description: `A basic calculator application built with HTML, CSS, and JavaScript. This project showcases fundamental programming concepts and user interface design.`,
      technologies: [
        { name: '#html', className: 'aqua' },
        { name: '#css', className: 'green' },
        { name: '#javascript', className: 'red' },
      ],
      image: image4,
      liveLink: 'https://ritikb29.github.io/calculator-codsoft/',
      sourceLink: 'https://github.com/ritikb29/calculator-codsoft',
    },
    {
      id: 5,
      title: 'Result Management System',
      description: `This system is designed to manage student results efficiently. Built with React, Node.js, and MongoDB, it provides a full-stack solution for result management.`,
      technologies: [
        { name: '#React', className: 'aqua' },
        { name: '#nodeJS', className: 'green' },
        { name: '#mongoDB', className: 'red' },
      ],
      image: image5,
      liveLink: 'https://example.com/result-management-live',
      sourceLink: 'https://github.com/username/result-management',
    },
    {
      id: 6,
      title: 'Tic-tac-toe',
      description: `A classic Tic-tac-toe game built using React and JavaScript. This project highlights interactive game logic and responsive design.`,
      technologies: [
        { name: '#React', className: 'aqua' },
        { name: '#JSX', className: 'green' },
        { name: '#API', className: 'red' },
        { name: '#javascript', className: 'aqua' },
      ],
      image: image6,
      liveLink: 'https://ritikb29.github.io/tic_toc_toy/',
      sourceLink: 'https://github.com/ritikb29/tic_toc_toy',
    },
  ];

  return (
    <>
      <div className='mywork-container'>
        <h1 className='text-white mt-5'>My Recent Work</h1>
        <div className="line mb-5"></div>
        <div className='my-work my-5'>
          {projects.map((project) => (
            <div className="mywork-boxes" data-aos="fade-up" key={project.id}>
              <div className='image-container-work'>
                <img className='image-work' src={project.image} alt={project.title} />
                <div className='box-image-para'>
                  <h4 className='text-center text-white project-name' data-aos="fade-up" data-aos-delay="3000">{project.title}</h4>
                  <p className='text-center mb-4'>
                    {project.technologies.map((tech, index) => (
                      <span key={index} className={tech.className}>{tech.name} </span>
                    ))}
                  </p>
                  <button className="btn text-center image-box-btn mt-5" data-bs-toggle="modal" data-bs-target={`#modal${project.id}`}><b>Learn more</b></button>
                </div>
              </div>

              {/* Modal */}
              <div className="modal fade" id={`modal${project.id}`} tabIndex="-1" aria-labelledby={`exampleModalLabel${project.id}`} aria-hidden="true">
                <div className="modal-dialog bg-dark">
                  <div className="modal-content bg-dark text-white">
                    <div className="modal-header">
                      <h1 className="modal-title fs-5" id={`exampleModalLabel${project.id}`}><b>{project.title}</b></h1>
                      <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                      <p>
                        {project.technologies.map((tech, index) => (
                          <span key={index} className={tech.className}>{tech.name} </span>
                        ))}
                      </p>
                      <p>{project.description}</p>
                      <div className='view-source-btn-container'>
                        <a href={project.sourceLink} target="_blank" rel="noopener noreferrer">
                          <button className="btn btn-primary my-5">View source</button>
                        </a>
                        <a href={project.liveLink} target="_blank" rel="noopener noreferrer">
                          <button className="btn btn-primary my-5">View live</button>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
