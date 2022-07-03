import React from 'react'
import "./Hackthon.css"
import { Features } from '../../container';

export default function Hackthon() {

    const HackthonData = [
        {
            title: 'BANGALORE 2019 ',
            text: '91 SPRINGBOARD, India',
        },
        {
            title: 'SINGAPORE 2018',
            text: ' ETH SINGAPORE, Singapore',
        },
        {
            title: 'MUMBAI 2017',
            text: ' IIT MUMBAI, India',
        },
        {
            title: 'MUMBAI 2017',
            text: 'L&T TECH, POWAI, India',
        },
        {
            title: 'NEW DELHI 2015',
            text: '91 SPRINGBOARD, India'
        }
    ];
    return (
        <div name="Previous_Hackthon" className="gpt3__features section__padding" id="features">

            <div className="gpt3__features-heading">
                <h1 className="gradient__text">Our past Hackthons, we had an Awesome time with people like you</h1>
                <p>Grab Early Bird Discount Now!</p>
            </div>
            <div className="gpt3__features-container">

                {HackthonData.map((item, index) => (
                    <Features key={item.title + index} title={item.title} text={item.text} />
                ))}
            </div>
        </div>
    )
}
