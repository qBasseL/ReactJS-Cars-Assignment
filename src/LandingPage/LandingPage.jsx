import React, { useState, useEffect } from 'react'
import car1 from '../assets/images/car 2 1-DriDdkj5.png'
import LandingCSS from './LandingPage.module.css'
import { Link } from 'react-router-dom'
import axios from 'axios'
import Car from '../Car/Car'
import img1 from '../assets/images/image (4).png'
import img2 from '../assets/images/download (1).png'
import img3 from '../assets/images/image (5).png'
import img4 from '../assets/images/image (6).png'
import img5 from '../assets/images/image (7).png'
import img6 from '../assets/images/download.png'



export default function LandingPage() {

    const [cars, setCars] = useState([])

    const getCars = async () => {
        let response = await axios.get(`https://myfakeapi.com/api/cars/`)
        console.log(response.data.cars);
        setCars(response.data.cars.slice(0, 4))
    }

    useEffect(() => {

        getCars();

        return () => {

        }
    }, [])


    return (
        <>
            <div className='grid md:grid-cols-2 mt-15 gap-x-85'>
                <div className='flex justify-center items-center'>
                    <div className=''>
                        <h2 className='text-5xl font-bold text-center'>Find, book and rent <br />a car <span className='text-blue-600'>Easily</span></h2>
                        <p className='text-gray-500 mt-5 text-center'>Get a car wherever and whenever you need it with your IOS <br />and Android device.</p>
                    </div>
                </div>
                <div>
                    <div className={`${LandingCSS['car-wrapper']}`}>
                        <img src={car1} alt="" className={`${LandingCSS.car}`} />
                    </div>
                </div>
            </div>
            <div className='flex justify-center mt-20 '>
                <div className='border border-gray-300 flex justify-center items-center px-2 bg-gray-100 rounded-l-md'>
                    <i className='fa-solid fa-location-dot'></i>
                </div>
                <input type="text" className='border border-gray-300 w-1/2 py-2 focus:outline-4 focus:outline-blue-300 focus:transition-all transition-all' />
                <button className='py-2 bg-blue-700 rounded-r-md p-2 text-white'>Search</button>
            </div>
            <div className='mt-10 flex flex-col justify-center items-center text-2xl'>
                <h2 className='border border-gray-200 px-6 py-2 text-blue-600 bg-blue-50 rounded-md'>
                    POPULAR RENTAL DEALS
                </h2>
                <h2 className='mt-10 text-4xl font-semibold'>
                    Most Popular Cars Rental Deals
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 my-10">
                    {cars.map((car) => (
                        <Car key={car.id} data={car} />
                    ))}
                </div>
                <Link to='/cars'><button className='mt-5 border border-gray-300 px-10 py-2 rounded-md text-gray-500 hover:bg-gray-700 hover:text-white transition cursor-pointer'>Show all vehicles</button></Link>
            </div>
            <div className='flex flex-col items-center'>
                <button className='mt-8 text-blue-600 border border-gray-300 bg-blue-100 p-2 rounded-md'>
                    HOW IT WORKS
                </button>
                <h2 className='mt-5 text-4xl font-semibold'>
                    Rent with following 3 working steps
                </h2>
                <div className='grid grid-cols-3 gap-65 mt-10 text-center w-1/2'>
                    <div className='flex flex-col space-y-2'>
                        <img src={img1} alt="" />
                        <h2 className='text-xl font-semibold'>Choose location</h2>
                        <p className='text-xs'>Choose your and find your best car</p>
                    </div>
                    <div className='flex flex-col space-y-2'>
                        <img src={img2} alt="" />
                        <h2 className='text-xl font-semibold'>Pick-up date</h2>
                        <p className='text-xs'>Select your pick up date and time to book your car</p>
                    </div>
                    <div className='flex flex-col space-y-2'>
                        <img src={img1} alt="" />
                        <h2 className='text-xl font-semibold'>Book your car</h2>
                        <p className='text-xs'>Book your car and we will deliver it directly to you</p>
                    </div>
                </div>

                <div className={`flex gap-x-50 mt-5`}>
                    <img src={img3} alt="" />
                    <img src={img4} alt="" />
                    <img src={img5} alt="" />
                    <img src={img6} alt="" />
                </div>

            </div>
        </>
    )
}
