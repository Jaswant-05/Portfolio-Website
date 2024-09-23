import React from 'react'
import Typical from 'react-typical'
import linkedIn from '../assets/linkedin.png'
import instagram from '../assets/instagram.png'
import github from '../assets/github.png'

function Home() {
    return(
        <main className="home-container">
            <div className="title-container">
                <h1 className="home-title">
                    Hi, I am Jaswant
                </h1>
                <h1>
                    <Typical
                        steps={['Full Stack Developer', 2000, 'Tech Enthusiast', 2000]}
                        loop={Infinity}
                        wrapper='p'
                    />
                </h1>
            </div>
            <p className = "home-p">
            I am a Full-Stack Developer. I am currently Studying at Toronto Metropolitan University as a BSc Computer Science Student.
            </p>
            <div className='home-img-container'>
                <a href="https://www.linkedin.com/in/jaswant-sandhu-22a79a300" target='_blank'>
                    <img src={linkedIn}/>
                </a>    
                <a href="https://www.instagram.com/jaswant5ingh?igsh=MTBsbGZtZjRxM3prcw%3D%3D&utm_source=qr" target='_blank'>
                    <img src={instagram}/>  
                </a>
                <a href="" target='_blank'>
                    <img src={github}/>
                </a>
            
            </div>
            <button className='home-btn'>Resume</button>
        </main>
    )


}

export default Home;