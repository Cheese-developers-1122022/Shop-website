import React, { useState } from "react";
import { CiSliderHorizontal } from "react-icons/ci";
import { FiGrid } from "react-icons/fi";
import { BsListUl } from "react-icons/bs";
import ShoppingCard from "./ShoppingCard";
import { shopCardData } from "../exportData/exportData";
import { BsChevronDoubleLeft, BsChevronDoubleRight } from "react-icons/bs";
import { useSelector } from "react-redux";
const ShoppingList = () => {
  const data1 = shopCardData?.shopItems.slice(0, 8);
  const data2 = shopCardData?.shopItems.slice(8, 16);
  const data3 = shopCardData?.shopItems.slice(16, 24);
  console.log(data1, data2, data3);
  const [count, setCount] = useState(1);

  const left = () => {
    if (count > 1) {
      return setCount(count - 1);
    }
  };
  const right = () => {
    if (count < 3) {
      return setCount(count + 1);
    }
  };
  const userData = [data1, data2, data3][count - 1];

  console.log(count);

  const data = useSelector((state) => console.log(state));
  
  return (
    <div>
      <div className="flex justify-between items-center py-5 px-10">
        <div className="">
          <h2 className="text-[15px] font-medium">
            Showing 13–24 of 48 results
          </h2>
        </div>
        <div className="flex gap-x-5 justify-around items-center">
          <button className=" px-4 items-center gap-x-2 text-[15px] font-medium flex border-[1px] rounded-md border-[#c6c0c0] py-1">
            <CiSliderHorizontal />
            filter
          </button>
          <h2 className="text-[15px] font-medium">see</h2>
          <div className="">
            <FiGrid />
          </div>
          <div className="">
            <BsListUl />
          </div>
        </div>
      </div>
      <div className="flex flex-wrap min-h-screen gap-10 justify-evenly items-center">
        {userData?.map((item) => (
          <ShoppingCard key={item?.id} {...item} />
        ))}
      </div>
      <div className=" py-4 flex justify-center items-center gap-5">
        <BsChevronDoubleLeft onClick={left} />
        <div
          onClick={() => setCount(1)}
          className={`w-[60] h-[60] rounded-full border  border-[#989898] ${
            count === 1 ? "bg-gray-500" : ""
          }`}
        >
          <h2 className="px-2  text-black">1</h2>
        </div>
        <div
          onClick={() => setCount(2)}
          className={`w-[60] h-[60] rounded-full border border-[#989898] ${
            count === 2 ? "bg-gray-500" : ""
          }`}
        >
          <h2 className="px-2 ">2</h2>
        </div>
        <div
          onClick={() => setCount(3)}
          className={`w-[60] h-[60] rounded-full border border-[#989898] ${
            count === 3 ? "bg-gray-500" : ""
          }`}
        >
          <h2 className="px-2 ">3</h2>
        </div>
        <BsChevronDoubleRight onClick={right} />
      </div>
    </div>
  );
};

export default ShoppingList;
