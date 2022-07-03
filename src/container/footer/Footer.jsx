import React from 'react'
import "./Footer.css"
import handEth from '../../assets/handEth.png';


export default function Footer() {
    return (
        <div className='gtp3__footer section__padding'>
            <div className='gpt3__footer-heading'>
                <h1 className="gradient__text">
                    This summer, all roads leads to
                    Bangalore! <br />


                </h1>
                <h3> 23-24 July, 2022</h3>

            </div>

            <div className="gpt3__footer-links">
                <div className="gpt3__footer-links_logo">
                    <img src={handEth} alt="/" />
                    <p>T&C Applied</p>
                </div>
                <div className="gpt3__footer-links_div">
                    <h4>Links</h4>
                    <p>Social Media</p>
                    <p>Counters</p>
                    <p>Contact</p>
                </div>
                <div className="gpt3__footer-links_div">
                    <h4>Company</h4>
                    <p>Terms & Conditions </p>
                    <p>Privacy Policy</p>
                    <p>Contact</p>
                </div>
                <div className="gpt3__footer-links_div">
                    <h4>Get in touch</h4>
                    <p>Crechterwoord K12 182 DK Alknjkcb</p>
                    <p>085-132567</p>
                    <p>info@payme.net</p>
                </div>

            </div>

            <div className="gpt3__footer-copyright">
                <p>@2022 ETHBangalore. All rights reserved.</p>
            </div>

        </div>
    )
}
