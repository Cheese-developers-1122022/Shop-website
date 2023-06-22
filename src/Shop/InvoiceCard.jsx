import React from "react";
import { RxCross1 } from "react-icons/rx";
import { useDispatch } from "react-redux";
import { removeProduct } from "../redux/Products";
const InvoiceCard = (props) => {
  const { priceTo, id, name, image } = props;
  const dispatch = useDispatch();
  return (
    <div className="flex lg:mx-2 mx-0">
      <div className="">
        <img
          src={image}
          className="h-[120px] md:w-[150px] w-[120px] object-cover"
          alt=""
        />
      </div>
      <div className="w-[100%]">
        <div className="flex  justify-between">
          <h2 className="md:text-lg text-[13px] ps-2 truncate ">{name}</h2>
          <div onClick={() => dispatch(removeProduct(id))} className="">
            <RxCross1 />
          </div>
        </div>
        <h2 className="mx-2 md:text-lg text-[13px] ps-2 truncate">
          ${priceTo}
        </h2>
      </div>
    </div>
  );
};

export default InvoiceCard;
