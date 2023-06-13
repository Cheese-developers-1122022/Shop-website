import React from "react";
import Path from "./components/routes/Path";
import { shopCardData } from "./exportData/exportData";

const App = () => {
  console.log(shopCardData);
  return (
    <div>
      <Path />
      {shopCardData.shopItems?.map((item) => (
        <div className="">
        <h4>{item.name}</h4>
        <img src={item.image} alt="" />
        </div>
        
      ))}
    </div>
  );
};

export default App;
