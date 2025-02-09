import React from 'react'
import { Link } from 'react-router'

export default function Footer() {
    return (
        <div className='flex flex-row items-center justify-center gap-5 bg-black text-white text-2xl h-48'>
            <Link to='/'>
                home
            </Link>

            <Link to='/service'>
                service
            </Link>

            <Link to='/contact'>
                contact
            </Link>
        </div>
    )
}
