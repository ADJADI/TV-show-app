import React from 'react'

export default function Button({ color, size, logo, justify, info }) {

    return (
        <button style={{ justifyContent: justify, width: size, height: size, backgroundColor: color }} className='flex items-center' >
            <div><img src={logo} alt="" /></div>
            <span>{info}</span>
        </button >
    )
}
