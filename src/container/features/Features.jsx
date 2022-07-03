import React from 'react'
import "./Features.css"

export default function Features({ title, text }) {
    return (
        <div className='gpt3__features-container__feature'>
            <div className='gpt3__features-container__feature-title'>

                <h1>{title}</h1>
            </div>
            <div className='gpt3__features-container__feature-text'>
                <p>{text}</p>

            </div>
        </div>
    )
}