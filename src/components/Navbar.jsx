"use client"
import React from 'react'
import "@styles/navbar.css"
import Image from 'next/image'

const Navbar = () => {
    return (
        <nav id='nav'>
            <Image className='menu' src='/svg/menu.svg' alt='open menu button' width={30} height={30}/>
            <div className='routes'>
                <ul>
                    <li>About</li>
                    <li>Tech Stack</li>
                    <li>Projects</li>
                    <li>Contact</li>
                </ul>
                <Image className={'close'} src='/svg/close.svg' alt='close menu button' width={30} height={30}/>
            </div>
        </nav>
    )
}

export default Navbar