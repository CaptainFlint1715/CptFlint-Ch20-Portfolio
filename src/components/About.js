import React from 'react';
import profpic from '../assets/images/prof.png'

function About() {
    return (
        <div className="flex items-center">
            <img src={profpic} alt="Profile Picture" className="mr-4" />
            <div className="ml-14">
                <h1 className="text-3xl font-bold text-purple mb-4">About Me</h1>
                <p className="text-lg">
                    Hello there! My name is Chanse Shirley. I am a Full-Stack Developer at the beginning of my career in the tech industry. Welcome to my website, which provides a comprehensive showcase of my professional accomplishments and skillset. I invite you to explore the portfolio detailing my coding projects, to look over my resume and work history, and to contact me via my LinkedIn, email, or otherwise. Thank you for allowing me to share, and I hope to hear from you in the future!</p>
            </div>
        </div>
    )
}

export default About;