import React, { useState } from "react";
import "./ShoppingCard.css";
import { AiOutlineStar } from "react-icons/ai";
import { BsArrowLeftRight } from "react-icons/bs";
import { FiSearch } from "react-icons/fi";
import { BiShoppingBag } from "react-icons/bi";
import { Modal, Tooltip } from "@mantine/core";
import { useDispatch } from "react-redux";
import { addProduct } from "../redux/Products";
import { useNavigate } from "react-router-dom";
import { Dialog, DialogBody } from "@material-tailwind/react";
import { BsPlusLg, BsFacebook } from "react-icons/bs";
import { BiMinus } from "react-icons/bi";
import { useDisclosure } from "@mantine/hooks";
import "./shoppingcard.css";
import { AiFillLinkedin } from "react-icons/ai";
import { BsPinterest, BsTwitter } from "react-icons/bs";
import { FaTelegramPlane } from "react-icons/fa";
const ShoppingCard = ({
  id,
  name,
  image,
  backdrop_image,
  description,
  category,
  tags,
  priceUp,
  priceTo,
  discountPrice,
  onsale,
  brand,
}) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleOpen = () => setOpen(!open);
  const [opened, { open, close }] = useDisclosure(false);
  return (
    <div className="card border-2 gap-y-1 hover:shadow-2xl shadow-lg  rounded-md flex flex-col items-center">
      <div className="img-hover relative">
        <span className="text-[13px] absolute top-[10px] rounded-[3px] left-[10px] z-[100] font-[600px] border-[3xp] bg-[#61CE70] px-[6px] text-white">
          {onsale}
        </span>
        <span className="text-[13px] absolute top-[35px] rounded-[3px] left-[10px] z-[100] font-[600px] border-[3xp] bg-[#b479d9] px-[6px] text-white">
          {brand}
        </span>
        <div
          onClick={() => navigate(`/detail/${id}`, { state: props })}
          className="first-img"
        >
          <img
            id="main-img"
            className="max-h-[350px] rounded first-img-hover"
            src={image}
            alt=""
          />
          <div className="second-img overflow-hidden">
            <img
              id="hover-img"
              className="max-h-[350px] rounded second-img-hover"
              src={backdrop_image}
              alt=""
            />
          </div>
        </div>
        <div className="icon-hover  z-[100]">
          <div className="p-1 absolute bottom-5 left-[17%]  flex justify-center items-start gap-x-3">
            <Tooltip
              label="Wish list"
              color="dark"
              withArrow
              arrowPosition="center"
            >
              <div className="flex border-[1px] text-black hover:text-white border-[#dadada] bg-white hover:bg-[#61CE70] hover:border-0 rounded-full justify-center items-center w-[30px] h-[30px]">
                <AiOutlineStar />
              </div>
            </Tooltip>
            <Tooltip
              label="Compare"
              color="dark"
              withArrow
              arrowPosition="center"
            >
              <div className="flex border-[1px] text-black hover:text-white border-[#dadada] bg-white hover:bg-[#61CE70] hover:border-0 rounded-full justify-center items-center w-[30px] h-[30px]">
                <BsArrowLeftRight />
              </div>
            </Tooltip>
            <Tooltip
              label="Select Options"
              color="dark"
              withArrow
              arrowPosition="center"
            >
              <div
                onClick={() =>
                  dispatch(
                    addProduct({
                      id,
                      name,
                      image,
                      backdrop_image,
                      description,
                      category,
                      tags,
                      priceUp,
                      priceTo,
                      discountPrice,
                      onsale,
                      brand,
                    })
                  )
                }
                className="flex border-[1px] text-black hover:text-white border-[#dadada] bg-white hover:bg-[#61CE70] hover:border-0 rounded-full justify-center items-center w-[30px] h-[30px]"
              >
                <BiShoppingBag />
              </div>
            </Tooltip>
            <Tooltip
              label="Quick view"
              color="dark"
              withArrow
              arrowPosition="center"
            >
              <div
                onClick={open}
                className="flex border-[1px] text-black hover:text-white border-[#dadada] bg-white hover:bg-[#61CE70] hover:border-0 rounded-full justify-center items-center w-[30px] h-[30px]"
              >
                <FiSearch />
              </div>
            </Tooltip>
          </div>
        </div>
      </div>
      <h2 className=" text-[16px] font-semibold">{name}</h2>
      <h2 className=" text-[16px]">${priceUp}</h2>
      <div className="p-2 flex justify-around items-center gap-2">
        <div className="w-[18px] h-[18px] rounded-full bg-red-600"></div>
        <div className="w-[18px] h-[18px] rounded-full bg-green-600"></div>
        <div className="w-[18px] h-[18px] rounded-full bg-blue-600"></div>
        <div className="w-[18px] h-[18px] rounded-full bg-black"></div>
        <div className="w-[18px] h-[18px] rounded-full bg-yellow-600"></div>
      </div>
      <Modal size="80%" opened={opened} onClose={close}>
        <div className="flex gap-x-5 ">
          <div className="">
            <img src={image} className="h-[500px] object-cover" alt="" />
          </div>
          <div className=" w-[500px]">
            <div className=" flex px-3  gap-y-2 flex-col">
              <h2 className=" text-2xl font-semibold">{name}</h2>
              <p className=" text-2xl font-semibold "> ${priceUp}</p>
              <p className=" text-sm leading-5 text-slate-500 font-light">
                {description}
              </p>
              <div className="flex items-center gap-x-5 py-3 ">
                <div className=" flex bg-[#EEEEEE] px-3 py-1 rounded-md justify-between items-center ">
                  <div className="">
                    <BsPlusLg className="text-lg  text-slate-500  hover:text-slate-800 " />
                  </div>
                  <div className="">
                    <span className="px-4">1</span>
                  </div>
                  <div className="">
                    <BiMinus className="text-lg  text-slate-500  hover:text-slate-800 " />
                  </div>
                </div>
                <button className="px-5 py-1 w-full rounded-md font-semibold text-white bg-[#2EBB77]">
                  Add to Cart
                </button>
              </div>

              <hr />
              <span className="flex gap-x-2  items-center">
                <h2 className="text-[20px] font-medium">Category</h2>
                <p className="text-[15px] text-slate-600">{category}</p>
              </span>
              <span className="flex gap-x-2 items-center">
                <h2 className="text-[20px] font-medium">Tags</h2>
                <p className="text-[15px] text-slate-600">{tags}</p>
              </span>
              <span className="flex gap-x-2 items-center">
                <h2 className="text-[20px] font-medium">Share</h2>
                <div className=" flex gap-x-2 items-center ">
                  <BsFacebook className="text-slate-500 hover:text-blue-500" />
                  <BsTwitter className="text-slate-500 hover:text-blue-500" />
                  <AiFillLinkedin className="text-slate-500 hover:text-blue-500" />
                  <BsPinterest className="text-slate-500 hover:text-blue-500" />
                  <FaTelegramPlane className="text-slate-500 hover:text-blue-500" />
                </div>
              </span>
            </div>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default ShoppingCard;
