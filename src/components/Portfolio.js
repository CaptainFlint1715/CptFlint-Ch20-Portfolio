import React from 'react';
import jollyrogerImg from '../assets/images/jollyroger.png';
import npsImg from '../assets/images/nps.png';
import socImg from '../assets/images/soc.png';
import weatherImg from '../assets/images/weather.png';
import quizImg from '../assets/images/quiz.png';
import dreamImg from '../assets/images/dreamscape.png'

const projects = [
    {
        id: 1,
        title: 'A Golden Fortune',
        imageUrl: jollyrogerImg,
        link: 'https://cptflint-a-golden-fortune-87d0447144e5.herokuapp.com/',
        gitLink: 'https://github.com/CaptainFlint1715/Project2-A-Golden-Fortune',
    },
    {
        id: 2,
        title: 'Dreamscape',
        imageUrl: dreamImg,
        link: 'https://whispering-crag-58704-755d34513186.herokuapp.com/',
        gitLink: 'https://github.com/CaptainFlint1715/CptFlint-Ch20-Portfolio',
    },
    {
        id: 3,
        title: 'Perusing the Parks',
        imageUrl: npsImg,
        link: 'https://captainflint1715.github.io/Perusing-the-Parks/',
        gitLink: 'https://github.com/CaptainFlint1715/Perusing-the-Parks',
    },
    {
        id: 4,
        title: 'Social Network API',
        imageUrl: socImg,
        link: 'https://app.screencastify.com/manage/videos/Bid5TKMmcg8ffzFJnQHL',
        gitLink: 'https://github.com/CaptainFlint1715/CptFlint-Ch118-SocNetAPI',
    },
    {
        id: 5,
        title: 'Weather Dashboard',
        imageUrl: weatherImg,
        link: 'https://captainflint1715.github.io/Cptn.FlintChallenge-6-WeatherDashboard/',
        gitLink: 'https://github.com/CaptainFlint1715/Cptn.FlintChallenge-6-WeatherDashboard',
    },
    {
        id: 6,
        title: 'JavaScript Quizgame',
        imageUrl: quizImg,
        link: 'https://captainflint1715.github.io/CaptainFlint-javascript-quizgame/',
        gitLink: 'https://github.com/CaptainFlint1715/CaptainFlint-javascript-quizgame',
    },

]

function Portfolio() {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {projects.map((project) => (
                <div key={project.id} className="border rounded p-4 ">
                    <h3 className="text-xl font-semibold my-2">{project.title}</h3>
                    <div className="h-80">
                        <img src={project.imageUrl} alt={project.title} className="object-cover w-full h-full rounded" />
                    </div>
                    <div className="flex justify-between mt-4">
                        <a href={project.link} className="bg-red hover:bg-purple text-gold font-bold py-2 px-4 rounded" target="_blank" rel="noopener noreferrer">
                            Deployment
                        </a>
                        <a href={project.gitLink} className="bg-red hover:bg-purple text-gold font-bold py-2 px-4 rounded" target="_blank" rel="noopener noreferrer">
                            GitHub
                        </a>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default Portfolio;