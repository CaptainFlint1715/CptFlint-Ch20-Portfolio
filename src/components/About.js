import React from 'react';
import profpic from '../assets/images/prof.png'

function About() {
    return (
        <div className="flex items-center">
            <img src={profpic} alt="Profile Picture" className="mr-4" />
            <div className="ml-14">
                <h1 className="text-3xl font-bold text-purple mb-4">About Me</h1>
                <p className="text-lg">Hello! I am a young professional possessing a diverse skillset and aspiring to grow my career as a programmer. Having recently graduated from the University of Minnesota's rigorous Programming Bootcamp, I have under my belt a robust portfolio of projects demonstrating my skills. Please utilize the navigation bar at the top of the page on the way to giving my work a look. Thank you and I hope to be in contact soon!</p>
            </div>
        </div>
    )
}

export default About;