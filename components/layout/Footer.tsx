"use client";
import { useState } from 'react'
import Logo from './Logo'
import Navigation from './Navigation'
import SocialLinks from './SocialLinks'
import { DEFAULT_UNIVERSITY } from '@/lib/constants'

const Footer = () => {
    const [university] = useState(DEFAULT_UNIVERSITY)

    return (
        <div className="mx-10 bg-white text-black flex flex-col items-center">
            <Logo university={university} />
            <Navigation />
            <SocialLinks />
            <div className="text-sm">&copy; 2025 ColorStack Georgia Institute of Technology. All Rights Reserved.</div>
        </div>
    )
}

export default Footer
