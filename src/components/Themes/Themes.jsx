import React from 'react'
import { Features } from '../../container'
import "./Themes.css"


export default function Themes() {
    return (
        <div name="Themes" className="gpt3__whatgpt3 section__margin" id="wgpt3">
            <div className="gpt3__whatgpt3-heading">
                <h1 className="gradient__text">Themes that you'll eager to Participate</h1>
            </div>
            <div className="gpt3__whatgpt3-container">
                <Features title="DEFI" text="The Decentralization of Finance is really good for humanity and it's ultimately a win for each and every one of us" />
                <Features title="DAOs" text=" Governance like never before" />
                <Features title="NFTs" text="If your adding value and helping other people in some way, then money should be flowing into your life with ease" />
                <Features title="Metaverse" text=" a virtual world where people can socialize, work, and play " />
                <Features title="L1 and L2 bridges" text="Different layers and Different protocol" />
                <Features title="Gaming" text="Don't only play build something which can payable" />
            </div>

        </div>
    )
}
