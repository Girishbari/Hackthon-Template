import React, { useState } from 'react'
import "./App.css"
import { Footer, Blog, Sponsorship, WhatGPT3, Header, Features, Venue } from './container';
import { Cta, Brand, Navbar, Hackthon, Themes } from './components';


export default function App() {

    const [venue, setVenue] = useState(false);
    const styles = {
        backgroundColor: venue ? "#040C18" : "none",

    }

    return (
        <div style={styles} className="App">


            {venue && <Venue close={setVenue} />}
            {
                !venue && (
                    <>
                        <div className="gradient__bg ">
                            <Navbar open={setVenue} />
                            <Header />

                        </div>

                        {/* <Brand /> */}
                        <WhatGPT3 />
                        <Features />
                        <Hackthon />
                        <Sponsorship />
                        <Themes />
                        <Cta />
                        <Blog />
                        <Footer />

                    </>
                )
            }






        </div>
    )
}

