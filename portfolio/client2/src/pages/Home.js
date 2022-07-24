import React, { useState } from "react";
import "../App.css";
const Home = () => {
  const [images, setImages] = useState([
    {
      name: "Gym Ecommerce",
      url: "https://vimeo.com/732693639",
      image: "../project-images/gym-ecommerce.png",
    },
    {
      name: "Portfolio",
      url: "https://github.com/JonelBriones/Group_Project_Employee_Tracker",
      image: "../project-images/employee-tracker.png",
    },
  ]);
  const [currentImg, setCurrentImg] = useState(0);
  const [previousImg, setPreviousImg] = useState(0);
  console.log(previousImg);
  const previous = () => {
    if (images[currentImg - 1] === undefined) {
      setCurrentImg(images.length - 1);
      setPreviousImg(images.length + 1);
    } else setCurrentImg(currentImg - 1);
    setPreviousImg(currentImg + 1);
  };
  const next = () => {
    if (images[currentImg + 1] === undefined) {
      setCurrentImg(0);
      setPreviousImg(images.length - 1);
    } else setCurrentImg(currentImg + 1);
    setPreviousImg(currentImg - 1);
  };
  const details = (project) => {
    console.log(project.name);
  };
  return (
    <>
      <nav>
        <ul>
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
          {/* <li><a href="#skills">Skills</a></li> */}
          <li>
            <a href="#projects">Projects</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </nav>
      <main>
        <section className="section-1" id="home">
          <div className="content">
            <div className="hero">
              <span>
                Hi, I am <br />
              </span>
              <div className="transition">
                <span className="first">Jonel</span>
                <span className="slide">
                  <span className="second">Briones</span>
                </span>
                <br />
              </div>
              <div className="transition2">
                <span className="third">Full Stack</span>
                <span className="slide">
                  <span className="fourth">Developer</span>
                </span>
              </div>
            </div>
            <div className="hero-icons">
              <a href="https://github.com/JonelBriones" target="_blank">
                <img src="../github.png" alt="html"></img>
              </a>
              <a
                href="https://www.linkedin.com/in/jonel-briones-64bb8521b/"
                target="_blank">
                <img src="../linkedin.png" alt="html"></img>
              </a>
            </div>
            <div>
              {/* <a href="#resume" download="Jonel's Resume">
                Download Resume
              </a> */}
            </div>
          </div>
        </section>
        <section id="about">
          <div className="content">
            <h1>Fun Facts</h1>
            <ul>
              <li>
                I am a recent graduate from{" "}
                <a href="https://www.codingdojo.com/b" target="_blank">
                  Coding Dojo
                </a>
                .
              </li>
              <li>
                I enjoy working out, particularly in the sport of powerlifting.
              </li>
              {/* <li>
                I love making videos on{" "}
                <a
                  href="https://www.tiktok.com/@ijonel906?lang=en"
                  target="_blank">
                  TikTok
                </a>
              </li> */}
            </ul>
          </div>
        </section>
        <section id="skills">
          <div className="content">
            <h1>Skills</h1>
            <div className="tech-icons">
              <img src="../tech-icons/html-5 (2).png" alt="html"></img>
              <img src="../tech-icons/css-3.png" alt="css"></img>
              <img src="../tech-icons/java-script.png" alt="js"></img>
              <img src="../tech-icons/node-js-2.png" alt="nodejs"></img>
              <img src="../tech-icons/physics.png" alt="react"></img>
              <img
                src="../tech-icons/mongodb.png"
                alt="mongodb"
                style={{ borderRadius: "50%" }}></img>
            </div>
          </div>
        </section>
        <section id="projects">
          <div className="content">
            <h1>Projects</h1>
            <div className="project-carousel">
              <button className="carousel-btn prev" onClick={previous}>
                &#8656;
              </button>
              <button className="carousel-btn next" onClick={next}>
                &#8658;
              </button>
              <ul>
                {/* {
                        images.map((project,index)=>(
                            <>
                        <li className='carousel-slide' data-active key={index}><img src={project}></img></li>
                        <button className='carousel-btn prev'>&#8656;</button>
                        <button className='carousel-btn next'>&#8658;</button>
                            </>
                        ))
                    } */}
                {/* {
                        previousImg===currentImg? <li className='carousel-slide'><img src={images[currentImg]}></img></li>: <li className='carousel-slide' data-active><img src={images[currentImg]}></img></li>
                    } */}
                <a href={images[currentImg].url} target="_blank">
                  <li className="carousel-slide" data-active>
                    <img src={images[currentImg].image}></img>
                  </li>
                </a>
              </ul>
              {/* <span>{images[currentImg].name}</span> */}
            </div>
          </div>
        </section>
        {/* <section id="blog">
            <div className='content'>
            <h1>Blog Section</h1>
            </div>
        </section> */}
        <section id="contact">
          <div className="content">
            <h1>
              <a href="mailto:jonel.c.briones@gmail.com">Contact Me</a>
            </h1>
          </div>
        </section>
      </main>
      {/* <footer>
        <p>Created by Jonel Briones</p>
    </footer> */}
    </>
  );
};

export default Home;
