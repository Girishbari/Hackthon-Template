import React from 'react'
import "./Cta.css"

export default function Cta() {
    return (
        <>
            <div className="gpt3__cta">
                <div className="gpt3__cta-content">
                    <h3>Register with Standard plan for just 500 </h3>
                </div>
                <div className="gpt3__cta-btn">
                    <button type="button">Buy Now</button>
                </div>
            </div>
            <div className="gpt3__cta">
                <div className="gpt3__cta-content">
                    <h3>Register with High Standard plan for just 700 </h3>
                </div>
                <div className="gpt3__cta-btn">
                    <button type="button">Buy Now</button>
                </div>
            </div>
            <div className="gpt3__cta">
                <div className="gpt3__cta-content">
                    <h3>Register with Ultra plan for just 900 </h3>
                </div>
                <div className="gpt3__cta-btn">
                    <button type="button">Buy Now</button>
                </div>
            </div>
        </>

    )
}
