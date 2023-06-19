import React from "react";
import NavSlide from "../../Shop/NavSlide";
import MainShop from "../../Shop/MainShop";
import { Route, Routes } from "react-router-dom";
import Detail from "../../Shop/Detail";

const Path = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<MainShop />} />
        <Route path="/detail/:id" element={<Detail />} />
      </Routes>
    </div>
  );
};

export default Path;
