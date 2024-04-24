import React from 'react'
import Home from '../Home'
import { Routes, Route } from 'react-router-dom';


const AllRoutes = () => {
  return (
    <Routes>
        <Route exact path="/" element={<Home />} />
      
    </Routes>
  )
}

export default AllRoutes
