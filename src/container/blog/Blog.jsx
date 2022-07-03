import React from 'react'
import "./Blog.css"
import { Article } from "../../components"
import data from './import.js';



export default function Blog() {

    const DataElements = data.map(info => {
        return <Article imgUrl={info.Image} name={info.Name} title={info.Title} />

    })

    return (

        <>
            <div className="gpt3__blog-heading  section__padding">
                <h1 className="gradient__text">A lot is happening, <br /> So better join us Soon!</h1>
            </div>
            <div className='card-list section__padding'>
                {DataElements}
            </div>
        </>


    )



}
