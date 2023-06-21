
import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Blog from '../Blog/Blog'
import NavSlide from "../../Shop/NavSlide";
import MainShop from "../../Shop/MainShop";
import Detail from "../../Shop/Detail";


const Path = () => {
  return (
    <div>
      <Routes>
 <Route path='/blog' element={<Blog/>}/>
        <Route path="/" element={<MainShop />} />
        <Route path="/detail/:id" element={<Detail />} />
      </Routes>
    </div>
  );
};

export default Path;
