import React from 'react'
import "./Article.css"
import { AiFillTwitterSquare, AiFillLinkedin } from 'react-icons/ai';


export default function Article({ imgUrl, name, title }) {
    return (

        <div className="gpt3__blog-container_article">
            <img src={`../images/${imgUrl}`} />

            <div className='info-group'>
                <h3>{name}</h3>
                <p>{title}</p>
            </div>
        </div>


        // <div className="gpt3__blog-container_article">
        //     <div className="gpt3__blog-container_article-image">
        //         <img src={imgUrl} alt="blog_image" />
        //     </div>
        //     <div className="gpt3__blog-container_article-content">
        //         <div>
        //             <p>{title}</p>
        //             <h3>{Name}</h3>
        //         </div>
        //     </div>
        // </div>




    )
}
