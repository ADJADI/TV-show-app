import React from 'react'
import StarRatingGenerator from './StarRatingGenerator'

export default function BlockDescription({ title, rating, description }) {

    return (
        <div className='text-neutral-300 p-5'>
            <h2 className='text-[14cqh] max-w-[20ch] leading-none font-black'>{title}</h2>
            <div className='mb-15 mt-8'>
                <StarRatingGenerator rating={rating} />
            </div>
            <p className='text-xl max-w-[150ch]'>{description}</p>
        </div>
    )
}
