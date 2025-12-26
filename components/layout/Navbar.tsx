"use client";
import { useState } from 'react'
import Logo from './Logo'
import Navigation from './Navigation'
import { DEFAULT_UNIVERSITY } from '@/lib/constants'

const Navbar = () => {
    const [university] = useState(DEFAULT_UNIVERSITY)
    
    return (
        <div className="mx-10 bg-white text-black font-bold flex items-center justify-between">
            <Logo university={university} />
            <Navigation />
        </div>
    )
}

export default Navbar
