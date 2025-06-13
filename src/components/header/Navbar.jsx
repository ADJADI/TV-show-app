import React from 'react'
import logo from '../../assets/logo.png'

export default function Navbar() {
    return (
        <nav className='h-20 flex items-center justify-between px-5 rounded-sm text-neutral-300'>
            <div className='flex items-center gap-x-3'>
                <div><img src={logo} alt="" /></div>
                <div className=''>
                    <h2 className='text-2xl font-semibold '>Watowatch</h2>
                    <p>Find a show you may like</p>
                </div>
            </div>
        </nav>
    )
}
