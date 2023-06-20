import React from "react";
import Path from "./components/routes/Path";
import { shopCardData } from "./exportData/exportData";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";

const App = () => {
  console.log(shopCardData);
  return (
    <div>
      <Navbar />
      <Path />
      <div className=" flex justify-center items-center flex-wrap">
        {shopCardData.shopItems?.map((item) => (
          <div key={item?.id}>
            <h4>{item.name}</h4>
            <img src={item.image} alt="" />
          </div>
        ))}
      </div>
      <Footer />
    </div>
  );
};

export default App;
