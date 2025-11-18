import React from 'react'
import audi from '../assets/images/audi1-BAmM3xEd.png'
import DetailsCSS from './Details.module.css'
import { Link } from 'react-router-dom'

export default function Details() {
    return (
        <>
            <div className='flex space-x-4'>
                <Link to='/'><button className='my-20 ml-10 text-blue-400 cursor-pointer border-b active:border-b-0'>Home</button></Link>
                <div className='my-20 ml-10'>/</div>
                <Link to='/cars'><button className='my-20 ml-10 text-blue-400 cursor-pointer border-b active:border-b-0'>Cars</button></Link>

            </div>
            <div className='flex w-screen items-center'>
                <div className='grid grid-cols-2 w-full'>
                    <div className={`${DetailsCSS['img-fram']} w-1/2`}>

                        <img src={audi} alt="" className='' />
                    </div>
                    <div className='flex flex-col space-y-8'>
                        <div className='border border-blue-200 w-fit px-6 py-4 bg-blue-100 text-blue-400 rounded-md'>
                            WHY CHOOSE US
                        </div>
                        <h2 className='mt-5 text-3xl font-semibold'>
                            We Offer The Best Experience With Our Rental Deals
                        </h2>
                        <div className='flex items-center space-x-0.5'>
                            <i className='fa-solid fa-snowflake'></i>
                            <p className='text-xs'>Air conditioning</p>
                        </div>
                        <div className='flex items-center'>
                            <i className='fa-solid fa-user'></i>
                            <p className='text-xs'>2 Passengers</p>
                        </div>
                        <div className='flex space-x-0.5'>
                            <i className='fa-solid fa-code-branch'></i>
                            <p className='text-xs'>Automatic</p>
                        </div>
                        <div className='flex space-x-0.5'>
                            <i className='fa-solid fa-car'></i>
                            <p className='text-xs'>Doors</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
