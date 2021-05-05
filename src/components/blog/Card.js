import React from 'react'
import './Card.css'

function Card(props) {
    return (
        <>
            <div className="desc-contain">
                <h1 className='title'>{props.title}</h1>
                <h3 className='description'>{props.description}</h3>
                <div className="discover-container">
                    <h2 className="discover">Discover</h2>
                    <h2 className="arrow">&rarr;</h2>
                </div>
            </div>
        </>
    )
}
export default Card
