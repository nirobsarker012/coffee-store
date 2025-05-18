import React from "react";
import { IoMdEye } from "react-icons/io";
import { MdEdit } from "react-icons/md";
import { MdDelete } from "react-icons/md";

const CoffeeCard = ({ singleCoff }) => {
  console.log(singleCoff);
  return (
    <div className="flex flex-col gap-1">
      <div className="bg-[#F5F4F1] flex justify-between items-center p-[30px] rounded-[10px]">
        <img src={singleCoff.photo} alt="" />
        <div className="flex raleway gap-3 flex-col">
          <p className="text-[rgba(27,26,26,0.7)]">
            <span className="font-semibold">Name: </span>
            {singleCoff.name}
          </p>
          <p className="text-[rgba(27,26,26,0.7)]">
            <span className="font-semibold">Chef: </span>
            {singleCoff.chef}
          </p>
          <p className="text-[rgba(27,26,26,0.7)]">
            <span className="font-semibold">Price: </span>
            {singleCoff.price} tk
          </p>
        </div>
        <div className=" flex flex-col gap-1.5">
          <div className="text-white bg-[#D2B48C] p-[10px] rounded-[5px]">
            <IoMdEye />
          </div>
          <div className="text-white bg-[#3C393B] p-[10px] rounded-[5px]">
            <MdEdit />
          </div>
          <div className="text-white bg-[#EA4744] p-[10px] rounded-[5px]">
            <MdDelete />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoffeeCard;
