import React from 'react'
import "./Header.css"
import people from "../../assets/people.png"
export default function Header() {
    return (
        <div className="gpt3__header section__padding" id="home">
            <div className="gpt3__header-content">
                <h1 className="gradient__text">ETH Bangalore</h1>
                <p>A one of a kind hackathon for all the DeFi
                    developers from the organizers of <br /> India's first
                    Ethereum blockchain Hackathon
                </p>
                <h3> 23-24 July, 2022</h3>


                <div className="gpt3__header-content__input">
                    <input type="email" placeholder="Your Email Address" />
                    <button type="button">Get Started</button>
                </div>

                <div className="gpt3__header-content__people">
                    <img src={people} alt="/" />
                    <p>1,600 people requested access a visit in last 24 hours</p>

                </div>
            </div>


        </div>
    );
}
