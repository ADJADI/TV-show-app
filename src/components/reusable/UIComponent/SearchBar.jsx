import React from 'react'

export default function SearchBar({ logo, placeholder }) {
    return (
        <div className='flex items-center rounded-lg px-2 py-1'>
            {logo && (
                <div>
                    <img src={logo} alt="" />
                </div>
            )}
            <input type="text" placeholder={placeholder} />
        </div>
    )
}
