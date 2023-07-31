import React from 'react';

function Resume() {
    return (
        <div className="flex flex-col mt-10 items-center h-screen">
            <h1 className="text-5xl text-purple mb-6">Skills</h1>
            <ul className="text-gold text-2xl">
                <li>HTML</li>
                <li>CSS</li>
                <li>Javascript</li>
                <li>Node.js</li>
                <li>Express.js</li>
                <li>SQL</li>
                <li>NoSQL</li>
                <li>React</li>
            </ul>
            <a
                className="mt-14 underline text-purple text-3xl"
                href={`${process.env.PUBLIC_URL}/${'resume.pdf'}`}
                download='resume.pdf'
            >
                RESUME
            </a>
        </div>
    )
}

export default Resume;