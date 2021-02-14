import React from 'react'
import { Link } from 'react-router-dom'

export default function Header() {
    return (
        <nav className="text-white font-bold tracking-wider py-5 bg-gray-800">
            <ul className="flex justify-between px-10">
                <span className="flex">
                    <li className="mr-5">
                        <Link to="/">Home</Link>
                    </li>
                    <li className="mr-5">
                        <Link to="/gallery">Gallery</Link>
                    </li>
                </span>
                    <li>
                        <Link to="/login">Login</Link>
                    </li>
                
            </ul>
          </nav>
    )
}
