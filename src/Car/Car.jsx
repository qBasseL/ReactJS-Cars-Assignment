import React from 'react'
import img1 from '../assets/images/car1-C6me-wu0.png'
import img2 from '../assets/images/car2-DQa8FXRk.png'
import img3 from '../assets/images/car3-DtXN34w2.png'
import { Link } from 'react-router-dom'


const carImages = [img1, img2, img3]

export default function Car(props) {

    const { key, data } = props
    const { id, car, car_model, car_color, price, car_model_year, availability } = data

    const imageIndex = id % carImages.length
    const imageSrc = carImages[imageIndex]

    return (
        <div className='border border-gray-300 rounded-lg p-4'>
            <div className="w-auto h-40 overflow-hidden rounded-t-lg">
                <img src={imageSrc} alt={car} className="w-full h-full" />
            </div>
            <div className='flex flex-col'>
                <h2 className='text-2xl my-5 grow '>{car}</h2>
                <div className='flex items-center space-x-0.5 grow'>
                    <i className='fa-solid fa-star text-yellow-300 text-sm'></i>
                    <p className='text-xs'>(1345 reviews)</p>
                </div>

                <div className='flex space-x-4 mt-2'>
                    <div className='flex items-center'>
                        <i className='fa-solid fa-user'></i>
                        <p className='text-xs'>2 Passengers</p>
                    </div>
                    <div className='flex items-center space-x-0.5'>
                        <i className='fa-solid fa-snowflake'></i>
                        <p className='text-xs'>Air conditioning</p>
                    </div>
                </div>
                <div className='flex my-5 space-x-14'>
                    <div className='flex space-x-0.5'>
                        <i className='fa-solid fa-calendar-days'></i>
                        <p className='text-xs'>2021</p>
                    </div>
                    <div className='flex space-x-0.5'>
                        <i className='fa-solid fa-code-branch'></i>
                        <p className='text-xs'>Automatic</p>
                    </div>
                </div>
                <div className='flex justify-center mb-3'>
                    <hr className='w-3/4' />
                </div>
                <div className='flex space-x-20'>
                    <p>Price</p>
                    <p>{price}/day</p>
                </div>
                <div className='flex justify-center mt-5'>
                    <Link to='/details'><button className='bg-blue-500 px-8 py-2 text-white rounded-md cursor-pointer hover:bg-blue-600 transition'>Views Detailis</button></Link>
                </div>
            </div>
        </div>
    )
}
