import React from 'react'
import logo from '../assets/images/image.png'
import { Link } from 'react-router-dom'

export default function Navbar() {
    return (
        <>
            <nav className='flex justify-around items-center h-1/6 mt-10'>
                <div>
                    <Link to='/' className='cursor-pointer'><img src={logo} alt="" /></Link>
                </div>
                <div>
                    <ul className='flex space-x-10 text-xl text-gray-600 '>
                        <li>
                            <Link to='/' className='hover:text-gray-800'>Become a rintal</Link>
                        </li>

                        <li>
                            <Link to='/' className='hover:text-gray-800'>Rintal deals</Link>
                        </li>
                        <li>
                            <Link to='/' className='hover:text-gray-800'>How it works</Link>
                        </li>
                        <li>
                            <Link to='/' className='hover:text-gray-800'>Why choose us</Link>
                        </li>
                    </ul>
                </div>
                <div className='flex space-x-2'>
                    <button className='p-2 cursor-pointer text-xl'>Sign in</button>
                    <button className='p-2 bg-blue-500 rounded-md cursor-pointer hover:bg-blue-700 transition text-white text-xl'>Sign up</button>
                </div>
            </nav>
        </>
    )
}
