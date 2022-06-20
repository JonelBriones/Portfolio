import React from 'react'
// import icons from "../images"
const Home = () => {
  return (
    <>
    <nav>
        <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#skills">Skills</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#contact">Contact</a></li>
        </ul>
    </nav>
    <main>

        <section className='section-1' id="home">
            <div className='content'>
                <div className='transition'>
                    <h1>
                        Hi, I am <br/> <span className='first'>Jonel </span> 
                        <span className='slide'>
                            <span className='second'>Briones</span>
                        </span>
                        <br/>
                        <span className='dynamic-text'>Full Stack Developer</span>
                    </h1>
                </div>
                <div>
                    <a href="https://github.com/JonelBriones" target="_blank">
                        <img src="../github.png" alt="html"></img>
                    </a>
                    <a href="https://www.linkedin.com/in/jonel-briones-64bb8521b/" target="_blank">
                        <img src="../linkedin.png" alt="html"></img>
                    </a>
                </div>
            <div>Download Resume</div>
            </div>
        </section>
        <section id="about">
            <div className='content'>
            <h1>Fun Facts About me</h1>
            <ul>
                <li>
                    I am a recent graduate from <a href="https://www.codingdojo.com/b" target="_blank">Coding Dojo</a>.
                </li>
                <li>I enjoy working out, particularly in the sport of powerlifting.</li>
                <li>I love making cringy videos on <a href="https://www.tiktok.com/@ijonel906?lang=en" target="_blank">TikTok</a></li>
            </ul>
            </div>
        </section>
        <section id="skills">
            <div className='content'>
            <h1>Skills Section</h1>
            <div className='tech-icons'>
                <img src="../tech-icons/html-5.png" alt="html"></img>
                <img src="../tech-icons/css.png" alt="css"></img>
                <img src="../tech-icons/java-script.png" alt="js"></img>
                <img src="../tech-icons/nodejs.png" alt="nodejs"></img>
                <img src="../tech-icons/react.png" alt="react"></img>
                <img src="../tech-icons/mongodb-logo.jpg" alt="mongodb" style={{borderRadius: "50%"}}></img>
            </div>
            </div>
        </section>
        <section id="projects">
            <div className='content'>
            <h1>Projects Section</h1>
            </div>
        </section>
        <section id="blog">
            <div className='content'>
            <h1>Blog Section</h1>
            </div>
        </section>
        <section id="contact">
            <div className='content'>
                <h1>Contact Me Form Section</h1>
            </div>
            </section>
    </main>
    <footer>
        <p>Created by Jonel Briones</p>
    </footer>
    </>

  )
}

export default Home