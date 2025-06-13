import React from 'react'

export default function Button({ style, info, logo }) {

    return (
        <button className={`flex items-center ${style}`} >
            <div><img src={logo} alt="" /></div>
            <span>{info}</span>
        </button >
    )
}
