import React from 'react'
import B1 from "../../assets/B1.jpg"
import B2 from "../../assets/B2.jpg"
import B3 from "../../assets/B3.jpg"
import "./Venue.css"

export default function Venue({ close }) {
    return (
        <div className='content-center scale-up-center'>

            <div className='Venue__container section__margin'>
                <button onClick={() => close(false)}>X</button>
                <div className='Venue__container-features'>
                    <div className='Venue__container-heading'>


                        <div className='Venue__container-text'>
                            <h1 className='gradient__text'> Bangalore</h1>
                            <p>WHERE STARTUP MAGIC HAPPENS</p>
                        </div>

                    </div>
                    <img src={B1} />
                    <img src={B2} />
                    <img src={B3} />
                </div>
            </div>

        </div>

    )
}
