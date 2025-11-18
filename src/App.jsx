import { useState } from 'react'
import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import MasterLayout from './MasterLayout/MasterLayout'
import LandingPage from './LandingPage/LandingPage'
import Cars from './Cars/Cars.jsx'
import Details from './Details/Details.jsx'

function App() {

  let routes = createBrowserRouter([{
    path: '/',
    element: <MasterLayout />,
    children: [
      { index: true, element: <LandingPage /> },
      { path: 'home', element: <LandingPage /> },
      { path: 'cars', element: <Cars /> },
    ]
  },
  { path: 'details', element: <Details /> },
  ])

  return (
    <>
      <RouterProvider router={routes}></RouterProvider>
    </>
  )
}

export default App
