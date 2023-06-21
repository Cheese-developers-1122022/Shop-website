import React, { useState } from "react";
import { CiSliderHorizontal } from "react-icons/ci";
import { FiGrid } from "react-icons/fi";
import { BsListUl } from "react-icons/bs";
import ShoppingCard from "./ShoppingCard";
import { shopCardData } from "../exportData/exportData";
import { BsChevronDoubleLeft, BsChevronDoubleRight } from "react-icons/bs";
import { useSelector } from "react-redux";
import { useDisclosure } from "@mantine/hooks";
import { Drawer, Button, Group } from "@mantine/core";
import InvoiceCard from "./InvoiceCard";
import "./shoppingcard.css";
const ShoppingList = () => {
  const [opened, { open, close }] = useDisclosure(false);
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

  const { products } = useSelector((state) => state?.products);
  console.log(products);
  const total = products?.reduce((pv, cv) => pv + cv?.priceUp, 0);
  return (
    <div>
      <Drawer
        title="Shopping Cart"
        position="right"
        size="50%"
        opened={opened}
        onClose={close}
        className="py-2"
      >
        <div className=" flex min-h-[85vh] flex-col gap-3">
          {products.length === 0 ? (
            <div className="min-h-[90vh] flex justify-center items-center">
              <h2 className="text-lg font-semibold ">Empty cart</h2>
            </div>
          ) : (
            <div>
              {products?.map((item) => (
                <InvoiceCard key={item.id} {...item} />
              ))}
            </div>
          )}
        </div>
        <div className="lg:mx-2 flex gap-x-2">
          <h2 className="">Total :</h2>
          <h2 className="">{total}</h2>
        </div>
      </Drawer>
      ;
      <div className="flex justify-between flex-wrap-reverse gap-y-5  items-center py-5 px-10">
        <div className="">
          <h2 className="text-[15px]  font-medium">
            Showing 13–24 of 48 results
          </h2>
        </div>
        <div className="flex  md:gap-x-4 gap-x-10 lg:gap-x-5 justify-around items-center">
          <button className=" px-4 items-center gap-x-2 text-[15px] font-medium flex border-[1px] rounded-md border-[#c6c0c0] py-1">
            <CiSliderHorizontal />
            filter
          </button>
          <h2 className="text-[15px] font-medium">see</h2>
          <div className="">
            <FiGrid />
          </div>
          <div onClick={open} className="">
            <BsListUl />
          </div>
        </div>
      </div>
      <div className="flex flex-wrap min-h-screen gap-y-3 md:gap-3 lg:gap-10 justify-evenly items-center">
        {userData?.map((item) => (
          <ShoppingCard key={item?.id} {...item} />
        ))}
      </div>
      <div className=" py-4 flex justify-center items-center gap-5">
        {count !== 1 && <BsChevronDoubleLeft onClick={left} />}
        <div
          onClick={() => setCount(1)}
          className={`w-[40px] h-[40px] flex items-center justify-center font-semibold rounded-full border  border-[#989898] ${
            count === 1 ? "bg-black text-white" : ""
          }`}
        >
          <h2 className="px-2">1</h2>
        </div>
        <div
          onClick={() => setCount(2)}
          className={`w-[40px] h-[40px] flex items-center justify-center font-semibold rounded-full border border-[#989898] ${
            count === 2 ? "bg-black text-white" : ""
          }`}
        >
          <h2 className="px-2 ">2</h2>
        </div>
        <div
          onClick={() => setCount(3)}
          className={`w-[40px] h-[40px] flex items-center justify-center font-semibold rounded-full border border-[#989898] ${
            count === 3 ? "bg-black text-white" : ""
          }`}
        >
          <h2 className="px-2 ">3</h2>
        </div>
        {count !== 3 && <BsChevronDoubleRight onClick={right} />}
      </div>
    </div>
  );
};

export default ShoppingList;
