import React from 'react'
import "./Sponsorship.css"

export default function Sponsorship() {
    return (
        <>

            <div name="Sponsorship_Us" className='sponsorship_box section__padding'>
                <div className='sponsorship-container__feature-title'>
                    <h2 className='gradient__text'>Sponsorship Packages</h2>
                    <p className='paragraph'>The web3 world is growing every day, and a DeFi
                        hackathon is the best way to reach out to the audience.
                        Through this hackathon, you can reach out to al l the
                        buzzing web3 developers and enthusiasts in this space.
                        Sponsorship can include branding, app signups, product
                        launch, etc. You don't want to miss out on this
                        opportunity!</p>

                </div>

                {/* Left */}
                <div className='price-container_Group_1'>
                    <h4>Gold</h4>
                    <h2>3ETH</h2>
                    <p>per Sponsor, package</p>
                    <button>contact us</button>
                    <div />
                    <p>10 Social Profiles</p>
                    <p>25 Scheduled Posts Per Profile</p>
                    <p>24/7 Support</p>
                </div>
                {/* Center */}
                <div className='price-container_Group_2'>
                    <h4>Diamond</h4>
                    <h2>5ETH</h2>
                    <p>per Sponsor, package</p>
                    <button>contact us</button>
                    <div />
                    <p>20 Social Profiles</p>
                    <p>35 Scheduled Posts Per Profile</p>
                    <p>24/7 Support</p>
                </div>
                {/* Right */}
                <div className='price-container_Group_3'>
                    <h4>Silver</h4>
                    <h2>1 ETH</h2>
                    <p>per Sponsor, package</p>
                    <button>contact us</button>
                    <div />
                    <p>5 Social Profiles</p>
                    <p>15 Scheduled Posts Per Profile</p>
                    <p>24/7 Support</p>
                </div>

            </div>

        </>
    )
}
