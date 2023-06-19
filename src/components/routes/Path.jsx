import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Blog from '../Blog/Blog'

const Path = () => {
  return (
    <div>
      <Routes>
        <Route path='/blog' element={<Blog/>}/>
      </Routes>
    </div>
  )
}

export default Path