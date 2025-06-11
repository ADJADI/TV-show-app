import React from 'react'
import StarRatingGenerator from './StarRatingGenerator'

export default function BlockDescription({ title, rating, description }) {
    return (
        <div>
            <h2>{title}</h2>
            <div>
                <StarRatingGenerator rating={rating} />
            </div>
            <p>{description}</p>
        </div>
    )
}
