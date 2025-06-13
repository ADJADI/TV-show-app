import React from 'react'
import Navbar from '../components/header/Navbar'
import { Outlet } from 'react-router'

export default function AppLayout() {
    return (
        <div className='relative'>
            <Navbar />
            <Outlet />
        </div>
    )
}
