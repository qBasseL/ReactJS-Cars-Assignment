import React, { useState, useEffect } from 'react'
import Car from '../Car/Car.jsx'
import axios from 'axios'

export default function Cars() {
  const [cars, setCars] = useState([])
  const [currentPage, setCurrentPage] = useState(1)
  const carsPerPage = 16
  const maxButtons = 10 // maximum page buttons to display

  useEffect(() => {
    const getCars = async () => {
        const response = await axios.get('https://myfakeapi.com/api/cars/')
        setCars(response.data.cars || [])
    }
    getCars()
  }, [])

 
  const totalPages = Math.ceil(cars.length / carsPerPage)
  const indexOfLastCar = currentPage * carsPerPage
  const indexOfFirstCar = indexOfLastCar - carsPerPage
  const currentCars = cars.slice(indexOfFirstCar, indexOfLastCar)

  const startPage = Math.floor((currentPage - 1) / maxButtons) * maxButtons + 1
  const endPage = Math.min(startPage + maxButtons - 1, totalPages)
  const pagesToShow = []
  for (let i = startPage; i <= endPage; i++) {
    pagesToShow.push(i)
  }

  const handlePageChange = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page)
    }
  }

  return (
    <div className="flex flex-col justify-center items-center mt-10">

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 2-2/3 ">
        {currentCars.map((car) => (
          <Car key={car.id} data={car} />
        ))}
      </div>

      <div className="flex justify-center mt-6 space-x-2 flex-wrap">
        <button
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
          className="px-3 py-1 bg-gray-200 rounded disabled:opacity-50"
        >
          Prev
        </button>

        {/* Page numbers */}
        {pagesToShow.map((page) => (
          <button
            key={page}
            onClick={() => handlePageChange(page)}
            className={`px-3 py-1 rounded ${
              currentPage === page ? 'bg-blue-500 text-white' : 'bg-gray-200'
            }`}
          >
            {page}
          </button>
        ))}

        {/* "+" button if there are more pages */}
        {endPage < totalPages && (
          <button
            onClick={() => handlePageChange(endPage + 1)}
            className="px-3 py-1 bg-gray-200 rounded"
          >
            +
          </button>
        )}

        <button
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
          className="px-3 py-1 bg-gray-200 rounded disabled:opacity-50"
        >
          Next
        </button>
      </div>
    </div>
  )
}
