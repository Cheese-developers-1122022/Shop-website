import React from "react";
import Swiper from "swiper/bundle";
import "swiper/css/bundle";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

const Slider = () => {
  const swiper = new Swiper(".swiper", {
    // Specify the desired options for the swiper instance
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      prevEl: ".swiper-button-prev",
      nextEl: ".swiper-button-next",
    },
    scrollbar: {
      el: ".swiper-scrollbar",
    },
  });

  return (
    <div className="swiper">
      <div className="swiper-wrapper">
        <div className="swiper-slide">
          <div className="flex flex-col items-center gap-3 mt-5">
            <img
              src="https://teespace.harutheme.com/studio/wp-content/uploads/sites/3/2021/05/blog-1.jpg"
              alt=""
              className="w-[200px] md:w-[400px] rounded-lg"
            />
            <div className=" flex flex-col items-center gap-3 mt-5">
              <div className=" flex items-center gap-2">
                <div className=" px-4 py-1 w-[150px] rounded-[3rem] flex items-center  bg-gray-100 hover:bg-green-500 text-green-500 hover:text-white transition-all">
                  <a href="#" className="  font-semibold text-lg">Design Services</a>
                </div>
                <div className=" px-4 py-1 w-[120px] rounded-[3rem] flex items-center  bg-gray-100 hover:bg-green-500 text-green-500 hover:text-white transition-all">
                  <a href="#" className="  font-semibold text-lg">HaruTheme</a>
                </div>
              </div>
              <h2 className=" text-2xl font-semibold text-center hover:text-green-500">
                10 Steps to Writing the Perfect Prospectus
              </h2>
            </div>
          </div>
        </div>
        <div className="swiper-slide">
          <div className="flex flex-col items-center gap-3 mt-5">
            <img
              src="https://teespace.harutheme.com/studio/wp-content/uploads/sites/3/2021/05/blog-17.jpg"
              alt=""
              className=" w-[200px] md:w-[400px] rounded-lg"
            />
            <div className=" flex flex-col items-center gap-3 mt-5">
              <div className=" px-4 py-1 w-[150px] rounded-[3rem] flex items-center  bg-gray-100 hover:bg-green-500 text-green-500 hover:text-white transition-all">
                <a href="#" className="  font-semibold text-lg">Design Services</a>
              </div>
              <h2 className=" text-2xl text-center font-semibold hover:text-green-500">
                Watch the Sony a9 Livestream Event Online
              </h2>
            </div>
          </div>
        </div>
        <div className="swiper-slide">
          <div className="flex flex-col items-center gap-3 mt-5">
            <img
              src="https://teespace.harutheme.com/studio/wp-content/uploads/sites/3/2021/05/blog-15.jpg"
              alt=""
              className=" w-[200px] md:w-[400px] rounded-lg"
            />
            <div className=" flex flex-col items-center gap-3 mt-5">
              <div className=" px-4 py-1 w-[150px] rounded-[3rem] flex  items-center  bg-gray-100 hover:bg-green-500 text-green-500 hover:text-white transition-all">
                <a href="#" className="  font-semibold text-lg">Design Services</a>
              </div>
              <h2 className=" text-2xl text-center font-semibold hover:text-green-500">
                What make you beautiful with us
              </h2>
            </div>
          </div>
        </div>
        <div className="swiper-slide">
          <div className="flex flex-col items-center gap-3 mt-5">
            <img
              src="https://teespace.harutheme.com/studio/wp-content/uploads/sites/3/2021/05/blog-1.jpg"
              alt=""
              className=" w-[200px] md:w-[400px] rounded-lg"
            />
            <div className=" flex flex-col gap-3 mt-5 items-center">
              <div className=" flex items-center gap-2">
                <div className=" px-4 py-1 w-[150px] rounded-[3rem] flex items-center  bg-gray-100 hover:bg-green-500 text-green-500 hover:text-white transition-all">
                  <a href="#" className="  font-semibold text-lg">Design Services</a>
                </div>
                <div className=" px-4 py-1 w-[120px] rounded-[3rem] flex items-center  bg-gray-100 hover:bg-green-500 text-green-500 hover:text-white transition-all">
                  <a href="#" className="  font-semibold text-lg">HaruTheme</a>
                </div>
              </div>
              <a href="#" className=" text-2xl font-semibold text-center hover:text-green-500">
                Mirum est notare quam littera gothica
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="swiper-pagination"></div>

      <div className="swiper-button-prev">
        <IoIosArrowBack />
      </div>
      <div className="swiper-button-next">
        <IoIosArrowForward />
      </div>

      <div className="swiper-scrollbar"></div>
    </div>
  );
};

export default Slider;
