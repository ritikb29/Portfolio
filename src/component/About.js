import React from 'react'
import tailwind from './image/tail-wind.png'
// import angular from './image/angular.png'
import node from './image/node js.png'


export default function About() {
    return (
        <>
            <div className='about-Container'>
                <h1 className='text-white mt-5' data-aos="fade-down">About Me</h1>
                <div className='line'></div>
                <div className='paragraph-box mt-5'>
                    <p className='text-justify'>
                       <span data-aos="zoom-in" data-aos-delay="500"> Hey there! I'm <span><a href="www.linkedin.com/in/ritikbhat29">Ritik Bhat</a> </span> a passionate software engineer specializing in <span> React</span> and Web Development. I thrive on delivering state-of-the-art software solutions. When I'm not coding, you'll find me exploring the fascinating worlds of Math, Movies, and Music.</span> <br />

                       <span data-aos="zoom-in" data-aos-delay="600"> My journey into software development was anything but ordinary. As a former Last year student at DMIHER University, I made a bold decision to drop out and pursue my true passion. That led me to Microverse, a remote software development school,</span><span data-aos="zoom-in" data-aos-delay="700"> where I honed my skills through pair programming and real-world projects. I completed the boot camp with unwavering dedication, amassing over <span> <a href="https://github.com/ritikb29"> 2500+ contributions on GitHub </a></span>in just one year. My experience in the Students' Union further sharpened my problem-solving and communication abilities. <br />

                        Ready to bring your project to life? Reach out—I'm excited to collaborate! Check out my <span><a href="/"> resume</a> </span>for more insights into my journey and qualifications.</span>
                    </p>
                </div>
                <div className='about-cont-2'>
                    <p className='text-light mt-5 text-center'>Here are a few technologies I`ve been working with recently:</p>
                    <div className='btn-container'>
                        <div className='buttons mt-2' data-aos="zoom-in">
                            <button className='btn btn-primary about-buttons mx-1'><strong> All</strong></button>
                            <button className='btn btn-primary about-buttons mx-1'><strong>Language</strong></button>
                            <button className='btn btn-primary about-buttons mx-1'><strong> Framework</strong></button>
                            <button className='btn btn-primary about-buttons mx-1'><strong>Tool</strong></button>
                        </div>
                    </div>
                    <div className='image-container my-5 text-cen'>
        
                        <div class="hexagon text-center mx-2"
                            data-aos="fade-up"
                            data-aos-delay="100"
                            data-bs-toggle="popover"
                            data-bs-trigger="hover"
                            data-bs-placement="top"
                            title="HTML 5"
                            data-bs-content="HTML5 is the latest evolution of the standard that defines HTML.">

                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128">
                                <path fill="#030b25" d="M9.032 2l10.005 112.093 44.896 12.401 45.02-12.387L118.968 2H9.032zm89.126 26.539l-.627 7.172L97.255 39H44.59l1.257 14h50.156l-.336 3.471-3.233 36.119-.238 2.27L64 102.609v.002l-.034.018-28.177-7.423L33.876 74h13.815l.979 10.919L63.957 89H64v-.546l15.355-3.875L80.959 67H33.261l-3.383-38.117L29.549 25h68.939l-.33 3.539z" />
                            </svg>
                        </div>

                        <div class="hexagon text-center mx-2"
                            data-aos="fade-up"
                            data-aos-delay="200"
                            data-bs-toggle="popover"
                            data-bs-trigger="hover"
                            data-bs-placement="top"
                            title="CSS 3"
                            data-bs-content="HTML5 is the latest evolution of the standard that defines HTML.">

                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128"><path fill="#030b25" d="M8.76 1l10.055 112.883 45.118 12.58 45.244-12.626L119.24 1H8.76zm89.591 25.862l-3.347 37.605.01.203-.014.467v-.004l-2.378 26.294-.262 2.336L64 101.607v.001l-.022.019-28.311-7.888L33.75 72h13.883l.985 11.054 15.386 4.17-.004.008v-.002l15.443-4.229L81.075 65H48.792l-.277-3.043-.631-7.129L47.553 51h34.749l1.264-14H30.64l-.277-3.041-.63-7.131L29.401 23h69.281l-.331 3.862z" /></svg>
                        </div>
                        <div class="hexagon text-center mx-2"
                            data-aos="fade-up"
                            data-aos-delay="300"
                            data-bs-toggle="popover"
                            data-bs-trigger="hover"
                            data-bs-placement="top"
                            title="javascript"
                            data-bs-content="HTML5 is the latest evolution of the standard that defines HTML.">

                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128"><path fill="#030b25" d="M2 1v125h125V1H2zm66.119 106.513c-1.845 3.749-5.367 6.212-9.448 7.401-6.271 1.44-12.269.619-16.731-2.059-2.986-1.832-5.318-4.652-6.901-7.901l9.52-5.83c.083.035.333.487.667 1.071 1.214 2.034 2.261 3.474 4.319 4.485 2.022.69 6.461 1.131 8.175-2.427 1.047-1.81.714-7.628.714-14.065C58.433 78.073 58.48 68 58.48 58h11.709c0 11 .06 21.418 0 32.152.025 6.58.596 12.446-2.07 17.361zm48.574-3.308c-4.07 13.922-26.762 14.374-35.83 5.176-1.916-2.165-3.117-3.296-4.26-5.795 4.819-2.772 4.819-2.772 9.508-5.485 2.547 3.915 4.902 6.068 9.139 6.949 5.748.702 11.531-1.273 10.234-7.378-1.333-4.986-11.77-6.199-18.873-11.531-7.211-4.843-8.901-16.611-2.975-23.335 1.975-2.487 5.343-4.343 8.877-5.235l3.688-.477c7.081-.143 11.507 1.727 14.756 5.355.904.916 1.642 1.904 3.022 4.045-3.772 2.404-3.76 2.381-9.163 5.879-1.154-2.486-3.069-4.046-5.093-4.724-3.142-.952-7.104.083-7.926 3.403-.285 1.023-.226 1.975.227 3.665 1.273 2.903 5.545 4.165 9.377 5.926 11.031 4.474 14.756 9.271 15.672 14.981.882 4.916-.213 8.105-.38 8.581z" /></svg>
                        </div>
                        <div class="hexagon text-center mx-2"
                            data-aos="fade-up"
                            data-aos-delay="400"
                            data-bs-toggle="popover"
                            data-bs-trigger="hover"
                            data-bs-placement="top"
                            title="HTML 5"
                            data-bs-content="HTML5 is the latest evolution of the standard that defines HTML.">

                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128"><path fill="#030b25" d="m35.971 111.33 81.958 11.188c-9.374-15.606-18.507-30.813-27.713-46.144Zm89.71-86.383L93.513 73.339c-.462.696-1.061 1.248-.41 2.321 8.016 13.237 15.969 26.513 23.942 39.777 1.258 2.095 2.53 4.182 4.157 6.192l4.834-96.58zM16.252 66.22c.375.355 1.311.562 1.747.347 7.689-3.779 15.427-7.474 22.948-11.564 2.453-1.333 4.339-3.723 6.452-5.661 6.997-6.417 13.983-12.847 20.966-19.278.427-.395.933-.777 1.188-1.275 2.508-4.902 4.973-9.829 7.525-14.898-3.043-1.144-5.928-2.263-8.849-3.281-.396-.138-1.02.136-1.449.375-6.761 3.777-13.649 7.353-20.195 11.472-3.275 2.061-5.943 5.098-8.843 7.743-4.674 4.266-9.342 8.542-13.948 12.882a24.011 24.011 0 0 0-3.288 3.854c-3.15 4.587-6.206 9.24-9.402 14.025 1.786 1.847 3.41 3.613 5.148 5.259zm28.102-6.271-11.556 48.823 54.3-34.987zm76.631-34.846-46.15 7.71 15.662 38.096zM44.996 56.644l41.892 13.6c-5.25-12.79-10.32-25.133-15.495-37.737ZM16.831 75.643 2.169 110.691l27.925-.825Zm13.593 26.096.346-.076c3.353-13.941 6.754-27.786 10.177-42.272L18.544 71.035c3.819 9.926 7.891 20.397 11.88 30.704zm84.927-78.897c-4.459-1.181-8.918-2.366-13.379-3.539-6.412-1.686-12.829-3.351-19.237-5.052-.801-.213-1.38-.352-1.851.613-2.265 4.64-4.6 9.245-6.901 13.868-.071.143-.056.328-.111.687l41.47-6.285zM89.482 12.288l36.343 10.054-6.005-17.11-30.285 6.715ZM33.505 114.007c-4.501-.519-9.122-.042-13.687.037-3.75.063-7.5.206-11.25.323-.386.012-.771.09-1.156.506 31.003 2.866 62.005 5.732 93.007 8.6l.063-.414-29.815-4.07c-12.384-1.691-24.747-3.551-37.162-4.982ZM2.782 99.994c3.995-9.27 7.973-18.546 11.984-27.809.401-.929.37-1.56-.415-2.308-1.678-1.597-3.237-3.318-5.071-5.226-2.479 12.24-4.897 24.177-7.317 36.113l.271.127c.185-.297.411-.578.548-.897zm78.74-90.153c6.737-1.738 13.572-3.097 20.367-4.613.44-.099.87-.244 1.303-.368l-.067-.332-29.194 3.928c2.741 1.197 4.853 2.091 7.591 1.385z" /></svg>
                        </div>
                        <div class="hexagon text-center mx-2"
                            data-aos="fade-up"
                            data-aos-delay="500"
                            data-bs-toggle="popover"
                            data-bs-trigger="hover"
                            data-bs-placement="top"
                            title="python"
                            data-bs-content="HTML5 is the latest evolution of the standard that defines HTML.">

                            <img src="E:\personal portfolio\portfolio\src\image\download.png" alt="" />
                        </div>
                        
                        <div class="hexagon text-center mx-2"
                            data-aos="fade-up"
                            data-aos-delay="600"
                            data-bs-toggle="popover"
                            data-bs-trigger="hover"
                            data-bs-placement="top"
                            title="react"
                            data-bs-content="HTML5 is the latest evolution of the standard that defines HTML.">

                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128"><g fill="#030b25"><circle cx="64" cy="64" r="11.4" /><path d="M107.3 45.2c-2.2-.8-4.5-1.6-6.9-2.3.6-2.4 1.1-4.8 1.5-7.1 2.1-13.2-.2-22.5-6.6-26.1-1.9-1.1-4-1.6-6.4-1.6-7 0-15.9 5.2-24.9 13.9-9-8.7-17.9-13.9-24.9-13.9-2.4 0-4.5.5-6.4 1.6-6.4 3.7-8.7 13-6.6 26.1.4 2.3.9 4.7 1.5 7.1-2.4.7-4.7 1.4-6.9 2.3C8.2 50 1.4 56.6 1.4 64s6.9 14 19.3 18.8c2.2.8 4.5 1.6 6.9 2.3-.6 2.4-1.1 4.8-1.5 7.1-2.1 13.2.2 22.5 6.6 26.1 1.9 1.1 4 1.6 6.4 1.6 7.1 0 16-5.2 24.9-13.9 9 8.7 17.9 13.9 24.9 13.9 2.4 0 4.5-.5 6.4-1.6 6.4-3.7 8.7-13 6.6-26.1-.4-2.3-.9-4.7-1.5-7.1 2.4-.7 4.7-1.4 6.9-2.3 12.5-4.8 19.3-11.4 19.3-18.8s-6.8-14-19.3-18.8zM92.5 14.7c4.1 2.4 5.5 9.8 3.8 20.3-.3 2.1-.8 4.3-1.4 6.6-5.2-1.2-10.7-2-16.5-2.5-3.4-4.8-6.9-9.1-10.4-13 7.4-7.3 14.9-12.3 21-12.3 1.3 0 2.5.3 3.5.9zM81.3 74c-1.8 3.2-3.9 6.4-6.1 9.6-3.7.3-7.4.4-11.2.4-3.9 0-7.6-.1-11.2-.4-2.2-3.2-4.2-6.4-6-9.6-1.9-3.3-3.7-6.7-5.3-10 1.6-3.3 3.4-6.7 5.3-10 1.8-3.2 3.9-6.4 6.1-9.6 3.7-.3 7.4-.4 11.2-.4 3.9 0 7.6.1 11.2.4 2.2 3.2 4.2 6.4 6 9.6 1.9 3.3 3.7 6.7 5.3 10-1.7 3.3-3.4 6.6-5.3 10zm8.3-3.3c1.5 3.5 2.7 6.9 3.8 10.3-3.4.8-7 1.4-10.8 1.9 1.2-1.9 2.5-3.9 3.6-6 1.2-2.1 2.3-4.2 3.4-6.2zM64 97.8c-2.4-2.6-4.7-5.4-6.9-8.3 2.3.1 4.6.2 6.9.2 2.3 0 4.6-.1 6.9-.2-2.2 2.9-4.5 5.7-6.9 8.3zm-18.6-15c-3.8-.5-7.4-1.1-10.8-1.9 1.1-3.3 2.3-6.8 3.8-10.3 1.1 2 2.2 4.1 3.4 6.1 1.2 2.2 2.4 4.1 3.6 6.1zm-7-25.5c-1.5-3.5-2.7-6.9-3.8-10.3 3.4-.8 7-1.4 10.8-1.9-1.2 1.9-2.5 3.9-3.6 6-1.2 2.1-2.3 4.2-3.4 6.2zM64 30.2c2.4 2.6 4.7 5.4 6.9 8.3-2.3-.1-4.6-.2-6.9-.2-2.3 0-4.6.1-6.9.2 2.2-2.9 4.5-5.7 6.9-8.3zm22.2 21l-3.6-6c3.8.5 7.4 1.1 10.8 1.9-1.1 3.3-2.3 6.8-3.8 10.3-1.1-2.1-2.2-4.2-3.4-6.2zM31.7 35c-1.7-10.5-.3-17.9 3.8-20.3 1-.6 2.2-.9 3.5-.9 6 0 13.5 4.9 21 12.3-3.5 3.8-7 8.2-10.4 13-5.8.5-11.3 1.4-16.5 2.5-.6-2.3-1-4.5-1.4-6.6zM7 64c0-4.7 5.7-9.7 15.7-13.4 2-.8 4.2-1.5 6.4-2.1 1.6 5 3.6 10.3 6 15.6-2.4 5.3-4.5 10.5-6 15.5C15.3 75.6 7 69.6 7 64zm28.5 49.3c-4.1-2.4-5.5-9.8-3.8-20.3.3-2.1.8-4.3 1.4-6.6 5.2 1.2 10.7 2 16.5 2.5 3.4 4.8 6.9 9.1 10.4 13-7.4 7.3-14.9 12.3-21 12.3-1.3 0-2.5-.3-3.5-.9zM96.3 93c1.7 10.5.3 17.9-3.8 20.3-1 .6-2.2.9-3.5.9-6 0-13.5-4.9-21-12.3 3.5-3.8 7-8.2 10.4-13 5.8-.5 11.3-1.4 16.5-2.5.6 2.3 1 4.5 1.4 6.6zm9-15.6c-2 .8-4.2 1.5-6.4 2.1-1.6-5-3.6-10.3-6-15.6 2.4-5.3 4.5-10.5 6-15.5 13.8 4 22.1 10 22.1 15.6 0 4.7-5.8 9.7-15.7 13.4z" /></g></svg>
                        </div>
                        <div class="hexagon text-center mx-2"
                            data-aos="fade-up"
                            data-aos-delay="700"
                            data-bs-toggle="popover"
                            data-bs-trigger="hover"
                            data-bs-placement="top"
                            title="ruby on rail"
                            data-bs-content="HTML5 is the latest evolution of the standard that defines HTML.">

                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128"><path fill-rule="evenodd" clip-rule="evenodd" fill="#030b25" d="M109.682 14.737c-12.206-6.023-24.708-6.636-37.508-2.111-11.779 4.164-21.175 11.615-28.16 21.763C32.195 51.561 23.61 70.298 18.799 90.652c-2.464 10.417-4.06 21.466-3.631 32.224.035.873.165 1.124.251 3.124h60.366c-.173-2-.287-1.416-.437-1.797a153.86 153.86 0 01-7.428-25.198c-2.498-12.251-3.806-24.729-1.226-37.093 3.611-17.313 13.48-29.805 30.117-36.283 9.424-3.667 18.369-2.624 26.214 4.262.072.063.22.025.412.056l2.565-3.883c-4.94-4.703-10.368-8.389-16.32-11.327zM3.336 94.394c-.46 3.923-.89 7.596-1.34 11.451l11.132 1.336 2.039-11.893-11.831-.894zm21.85-34.186l-10.471-4.097-3.384 9.607 10.671 3.42c1.08-3.031 2.096-5.882 3.184-8.93zm49.419 53.659c3.575.266 7.157.449 11.103.679-1.433-2.979-2.706-5.673-4.039-8.335-.146-.289-.639-.568-.974-.573-3.033-.044-6.068-.025-9.291-.025.726 2.628 1.357 5.053 2.096 7.443.111.361.707.782 1.105.811zM42.933 31.103l-7.955-5.268-6.359 7.105 8.178 5.496 6.136-7.333zm25.334 53.369c-.013.321.276.832.558.959 2.865 1.288 5.76 2.515 8.912 3.873-.131-2.492-.219-4.575-.368-6.654-.027-.374-.203-.912-.48-1.066-2.631-1.456-5.299-2.847-8.216-4.395-.159 2.665-.321 4.972-.406 7.283zM65.91 12.3l-5.446-6.181-7.499 3.898 5.455 6.644 7.49-4.361zm3.415 49.176c-.163.374.052 1.167.373 1.456 2.175 1.962 4.424 3.84 6.926 5.981.573-2.4 1.113-4.539 1.571-6.693.081-.383-.032-1.016-.298-1.23-1.946-1.569-3.955-3.063-6.037-4.651-.915 1.815-1.802 3.443-2.535 5.137zm12.45-52.424c2.78.075 5.563.042 8.499.042-.293-2.044-.433-3.593-.782-5.092-.104-.446-.775-1.04-1.228-1.078-2.787-.226-5.585-.313-8.651-.459.409 2.063.721 3.881 1.162 5.668.093.379.647.909 1 .919zm3.385 35.675c.142-.266.178-.749.029-.981-1.366-2.137-2.785-4.241-4.254-6.455l-4.76 4.372 6.582 7.294c.884-1.539 1.675-2.868 2.403-4.23zM90.295 30.2l2.843 5.281c4.449-2.438 4.875-3.32 3.3-6.834L90.295 30.2zm21.287-16.273c1.851 1.142 3.806 2.115 5.792 3.185l1.33-2.07c-2.422-1.771-4.76-3.484-7.413-5.426-.104 1.104-.259 1.875-.219 2.637.032.581.129 1.44.51 1.674zM109 30.646c2 .217 5 .424 7 .643v-2.718c-2-.438-5-.872-7-1.323v3.398z" /></svg>
                        </div>
                        <div class="hexagon text-center mx-2"
                            data-aos="fade-up"
                            data-aos-delay="800"
                            data-bs-toggle="popover"
                            data-bs-trigger="hover"
                            data-bs-placement="top"
                            title="Redux"
                            data-bs-content="HTML5 is the latest evolution of the standard that defines HTML.">

                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128"><path fill="#030b25" d="M88.69 88.11c-9 18.4-24.76 30.78-45.61 34.85a39.73 39.73 0 0 1-9.77 1.14c-12 0-23-5-28.34-13.19C-2.2 100-4.64 76.87 19 59.76c.48 2.61 1.46 6.19 2.11 8.31A38.24 38.24 0 0 0 10 81.1c-4.4 8.64-3.91 17.27 1.3 25.25 3.6 5.38 9.3 8.65 16.63 9.65a44 44 0 0 0 26.55-5c12.71-6.68 21.18-14.66 26.72-25.57a9.32 9.32 0 0 1-2.61-6A9.12 9.12 0 0 1 87.37 70h.34a9.15 9.15 0 0 1 1 18.25zm28.67-20.2c12.21 13.84 12.54 30.13 7.82 39.58-4.4 8.63-16 17.27-31.6 17.27a50.48 50.48 0 0 1-21-5.05c2.29-1.63 5.54-4.24 7.33-5.87a41.54 41.54 0 0 0 16 3.42c10.1 0 17.75-4.72 22.31-13.35 2.93-5.7 3.1-12.38.33-19.22a43.61 43.61 0 0 0-17.27-20.85 62 62 0 0 0-34.74-10.59h-2.93a9.21 9.21 0 0 1-8 5.54h-.31a9.13 9.13 0 0 1-.3-18.25h.33a9 9 0 0 1 8 4.89h2.61c20.8 0 39.06 7.98 51.42 22.48zm-82.75 23a7.31 7.31 0 0 1 1.14-4.73c-9.12-15.8-14-35.83-6.51-56.68C34.61 13.83 48.13 3.24 62.79 3.24c15.64 0 31.93 13.69 33.88 40.07-2.44-.81-6-2-8.14-2.44-.53-8.63-7.82-30.13-25.09-29.81-6.19.17-15.31 3.1-20 9.12a43.69 43.69 0 0 0-9.64 25.25 59.61 59.61 0 0 0 8.47 36.16 2.75 2.75 0 0 1 1.14-.16h.32a9.121 9.121 0 0 1 .33 18.24h-.33a9.16 9.16 0 0 1-9.12-8.79z" /></svg>
                        </div>
                        <div class="hexagon text-center mx-2"
                            data-aos="fade-up"
                            data-aos-delay="900"
                            data-bs-toggle="popover"
                            data-bs-trigger="hover"
                            data-bs-placement="top"
                            title="Bootstrap"
                            data-bs-content="HTML5 is the latest evolution of the standard that defines HTML.">

                            <svg viewBox="0 0 128 128" xmlns="http://www.w3.org/2000/svg"><path fill="#030b25" d="M27.235 13.885c-7.177 0-12.486 6.284-12.249 13.099.228 6.546-.068 15.026-2.203 21.94-2.14 6.936-5.76 11.319-11.673 11.883v6.387c5.913.563 9.533 4.947 11.673 11.883 2.135 6.914 2.43 15.394 2.203 21.94-.238 6.815 5.072 13.098 12.249 13.098h73.54c7.177 0 12.486-6.284 12.249-13.098-.228-6.546.068-15.026 2.202-21.94 2.14-6.935 5.751-11.319 11.664-11.883v-6.387c-5.913-.563-9.523-4.947-11.664-11.883-2.134-6.914-2.43-15.394-2.202-21.94.237-6.815-5.072-13.099-12.25-13.099zm58.114 61.686c0 9.384-7.002 15.073-18.621 15.073H45.306a.491.491 0 01-.491-.491V37.827a.491.491 0 01.491-.492h21.309c9.689 0 16.047 5.246 16.047 13.3 0 5.653-4.277 10.713-9.727 11.6v.296c7.418.813 12.414 5.948 12.414 13.04zM64.571 44.096H53.293v15.922h9.5c7.342 0 11.391-2.955 11.391-8.238 0-4.95-3.481-7.684-9.613-7.684zm-11.278 22.24v17.548h11.695c7.645 0 11.695-3.066 11.695-8.83 0-5.763-4.163-8.718-12.187-8.718z" /></svg>
                        </div><br />
                        <div class="hexagon text-center mx-2"
                            data-aos="fade-up"
                            data-aos-delay="1000"
                            data-bs-toggle="popover"
                            data-bs-trigger="hover"
                            data-bs-placement="top"
                            title="Tail-wind"
                            data-bs-content="HTML5 is the latest evolution of the standard that defines HTML.">

                            <img className='about-img-inside-hexagon' src={tailwind} alt="" />
                        </div><br />
                        <div class="hexagon text-center mx-2"
                            data-aos="fade-up"
                            data-aos-delay="1100"
                            data-bs-toggle="popover"
                            data-bs-trigger="hover"
                            data-bs-placement="top"
                            title="Angular"
                            data-bs-content="HTML5 is the latest evolution of the standard that defines HTML.">

                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128">
                                <rect width="128" height="128" fill="#030b25" />
                                <text x="50%" y="50%" font-size="100" fill="#22abfa" text-anchor="middle" alignment-baseline="middle" font-family="Arial">A</text>
                            </svg>
                        </div><br />
                        <div class="hexagon text-center mx-2"
                            data-aos="fade-up"
                            data-aos-delay="1200"
                            data-bs-toggle="popover"
                            data-bs-trigger="hover"
                            data-bs-placement="top"
                            title="node js"
                            data-bs-content="HTML5 is the latest evolution of the standard that defines HTML.">

                            <img className='about-img-inside-hexagon' src={node} alt="" />
                        </div><br />
                        <div class="hexagon text-center mx-2"
                            data-aos="fade-up"
                            data-aos-delay="1300"
                            data-bs-toggle="popover"
                            data-bs-trigger="hover"
                            data-bs-placement="top"
                            title="Git"
                            data-bs-content="HTML5 is the latest evolution of the standard that defines HTML.">

                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128"><path fill="#F34F29" d="M124.742 58.378L69.625 3.264c-3.172-3.174-8.32-3.174-11.497 0L46.685 14.71l14.518 14.518c3.375-1.139 7.243-.375 9.932 2.314a9.66 9.66 0 012.293 9.993L87.42 55.529c3.385-1.167 7.292-.413 9.994 2.295 3.78 3.777 3.78 9.9 0 13.679a9.673 9.673 0 01-13.683 0 9.677 9.677 0 01-2.105-10.521L68.578 47.933l-.002 34.341a9.708 9.708 0 012.559 1.828c3.779 3.777 3.779 9.898 0 13.683-3.779 3.777-9.904 3.777-13.679 0-3.778-3.784-4.088-9.905-.311-13.683.934-.933 1.855-1.638 2.855-2.11V47.333c-1-.472-1.92-1.172-2.856-2.111-2.861-2.86-3.396-7.06-1.928-10.576L40.983 20.333 3.229 58.123c-3.175 3.177-3.155 8.325.02 11.5l55.126 55.114c3.173 3.174 8.325 3.174 11.503 0l54.86-54.858c3.175-3.176 3.178-8.327.004-11.501z" /></svg>
                        </div>
                        <div class="hexagon text-center mx-2"
                            data-aos="fade-up"
                            data-aos-delay="1400"
                            data-bs-toggle="popover"
                            data-bs-trigger="hover"
                            data-bs-placement="top"
                            title="Git-hub"
                            data-bs-content="HTML5 is the latest evolution of the standard that defines HTML.">

                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128"><g fill="#181616"><path fill-rule="evenodd" clip-rule="evenodd" d="M64 5.103c-33.347 0-60.388 27.035-60.388 60.388 0 26.682 17.303 49.317 41.297 57.303 3.017.56 4.125-1.31 4.125-2.905 0-1.44-.056-6.197-.082-11.243-16.8 3.653-20.345-7.125-20.345-7.125-2.747-6.98-6.705-8.836-6.705-8.836-5.48-3.748.413-3.67.413-3.67 6.063.425 9.257 6.223 9.257 6.223 5.386 9.23 14.127 6.562 17.573 5.02.542-3.903 2.107-6.568 3.834-8.076-13.413-1.525-27.514-6.704-27.514-29.843 0-6.593 2.36-11.98 6.223-16.21-.628-1.52-2.695-7.662.584-15.98 0 0 5.07-1.623 16.61 6.19C53.7 35 58.867 34.327 64 34.304c5.13.023 10.3.694 15.127 2.033 11.526-7.813 16.59-6.19 16.59-6.19 3.287 8.317 1.22 14.46.593 15.98 3.872 4.23 6.215 9.617 6.215 16.21 0 23.194-14.127 28.3-27.574 29.796 2.167 1.874 4.097 5.55 4.097 11.183 0 8.08-.07 14.583-.07 16.572 0 1.607 1.088 3.49 4.148 2.897 23.98-7.994 41.263-30.622 41.263-57.294C124.388 32.14 97.35 5.104 64 5.104z" /><path d="M26.484 91.806c-.133.3-.605.39-1.035.185-.44-.196-.685-.605-.543-.906.13-.31.603-.395 1.04-.188.44.197.69.61.537.91zm2.446 2.729c-.287.267-.85.143-1.232-.28-.396-.42-.47-.983-.177-1.254.298-.266.844-.14 1.24.28.394.426.472.984.17 1.255zM31.312 98.012c-.37.258-.976.017-1.35-.52-.37-.538-.37-1.183.01-1.44.373-.258.97-.025 1.35.507.368.545.368 1.19-.01 1.452zm3.261 3.361c-.33.365-1.036.267-1.552-.23-.527-.487-.674-1.18-.343-1.544.336-.366 1.045-.264 1.564.23.527.486.686 1.18.333 1.543zm4.5 1.951c-.147.473-.825.688-1.51.486-.683-.207-1.13-.76-.99-1.238.14-.477.823-.7 1.512-.485.683.206 1.13.756.988 1.237zm4.943.361c.017.498-.563.91-1.28.92-.723.017-1.308-.387-1.315-.877 0-.503.568-.91 1.29-.924.717-.013 1.306.387 1.306.88zm4.598-.782c.086.485-.413.984-1.126 1.117-.7.13-1.35-.172-1.44-.653-.086-.498.422-.997 1.122-1.126.714-.123 1.354.17 1.444.663zm0 0" /></g></svg>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
