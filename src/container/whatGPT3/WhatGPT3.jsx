import React from 'react'
import Features from '../features/Features'
import "./WhatGPT3.css"


export default function WhatGPT3() {



    return (

        <div name="Surprises" className="gpt3__whatgpt3 section__margin" id="wgpt3">
            <div className="gpt3__whatgpt3-feature">
                <Features title='Why DEFI Hackthon?' text="YOU'LL HAVE THE ASSISTANCE OF A
                LARGE COMMUNITY OF EXPERTS,
                MENTORS, SPONSORS, DEVELOPER
                ADVOCATES, AND OTHER COMMUNITY
                MEMBERS, ALL OF WHOM WANT TO
                HELP YOU BUILD SOMETHING
                FANTASTIC." />
            </div>
            <div className="gpt3__whatgpt3-heading">
                <h1 className="gradient__text">The possibilities are beyond your imagination</h1>
                <p>Explore the Themes</p>
            </div>
            <div className="gpt3__whatgpt3-container">
                <Features title="Working with Sponsors" text="Industry Experts that will not only provide you opportutnites but also Guide and assistance" />
                <Features title="Prizes" text=" An amazing collection of Prizes and Goodies, that will make you to work hard " />
                <Features title="Challenges" text="These are the opportunities that a good learner is always seeks for " />
                <Features title="DEFI Innovation" text="Innovation comes from people who takes joy in their work" />
                <Features title="Working with Developers" text="What more Interesting than working with Mindlike people" />
            </div>
        </div>

    )
}
