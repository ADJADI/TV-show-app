import React from 'react'
import BlockDescription from '../reusable/BlockDescription'

export default function FavoriteTvShowScreen({ imageUrl, imagePath, vote, resume, title }) {
    return (
        <div className=''>
            <div className="inset-0 absolute w-full grid-rows-[1/-1]  -z-1">
                <span className='from-black to-transparent bg-gradient-to-b absolute inset-0 rounded-b-md'></span>
                <img src={`${imageUrl}${imagePath}`} alt="" className="size-full object-cover" />
                <span className='from-black to-transparent bg-gradient-to-t absolute inset-0 rounded-b-md'></span>
            </div>
            <div className='mt-20'>
                <BlockDescription title={title} rating={vote} description={resume} />
            </div>
        </div>
    )
}
