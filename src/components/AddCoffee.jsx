import React from "react";
import Swal from "sweetalert2";
import { FaArrowLeft } from "react-icons/fa6";
import { Link } from "react-router";

const AddCoffee = () => {
  const handleAddCoffee = (e) => {
    e.preventDefault();
    const form = e.target;
    const fromData = new FormData(form);
    const newCoffeeData = Object.fromEntries(fromData.entries());
    console.log(newCoffeeData);
    // add server data in client server
    fetch(`http://localhost:3000/coffees`, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(newCoffeeData),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          Swal.fire({
            title: "Coffee Added Successfully",
            icon: "success",
            draggable: true,
          });
          e.target.reset();
        }
      });
  };
  return (
    <div className="bg-[url('assets/images/more/11.jpg')] bg-center bg-cover">
      <div className="container">
        <div className="flex items-center gap-1 text-[#374151] text-[30px] mt-7">
          <FaArrowLeft size={32} />
          <Link to={"/"} className="">
            Back To home
          </Link>
        </div>
        {/* Add card body */}
        <div className="bg-[#F4F3F0] py-[70px] px-[112px] rounded-[5px] my-[50px]">
          <div className="flex flex-col items-center justify-center">
            <h2 className="text-[#374151] text-[45px] mb-[32px]">
              Add New Coffee
            </h2>
            <p className="text-center text-[rgba(27,26,26,0.7)] text-[18px] raleway mb-[32px]">
              It is a long established fact that a reader will be distraceted by
              the readable content of a page when looking at its layout. The
              point of using Lorem Ipsum is that it has a more-or-less normal
              distribution of letters, as opposed to using Content here.
            </p>
          </div>
          {/* From Sections */}
          <form onSubmit={handleAddCoffee} id="form" className="w-full">
            <div className="flex gap-[24px] justify-between">
              <div className="flex flex-col w-full">
                {/* Name */}
                <div className="flex flex-col space-y-2 raleway mb-3">
                  <label className="text-[20px] font-semibold">Name</label>
                  <input
                    className="bg-white w-full text-[16px] p-[11px] rounded-[5px] border-none outline-none"
                    type="text"
                    name="name"
                    id=""
                    placeholder="Enter Coffee name"
                  />
                </div>
                {/* Supplier */}
                <div className="flex flex-col space-y-2 raleway mb-3">
                  <label className="text-[20px] font-semibold">Supplier</label>
                  <input
                    className="bg-white w-full text-[16px] p-[11px] rounded-[5px] border-none outline-none"
                    type="text"
                    name="supplier"
                    id=""
                    placeholder="Enter Coffee Supplier"
                  />
                </div>
                {/* Category */}
                <div className="flex flex-col space-y-2 raleway mb-3">
                  <label className="text-[20px] font-semibold">Category</label>
                  <input
                    className="bg-white w-full text-[16px] p-[11px] rounded-[5px] border-none outline-none"
                    type="text"
                    name="category"
                    id=""
                    placeholder="Enter Coffee category"
                  />
                </div>
              </div>
              {/* 2 */}
              <div className=" flex flex-col w-full">
                {/*Chief Name */}
                <div className="flex flex-col space-y-2 raleway mb-3">
                  <label className="text-[20px] font-semibold">Chef</label>
                  <input
                    className="bg-white w-full text-[16px] p-[11px] rounded-[5px] border-none outline-none"
                    type="text"
                    name="chef"
                    id=""
                    placeholder="Enter Coffee chef"
                  />
                </div>
                {/* Taste */}
                <div className="flex flex-col space-y-2 raleway mb-3">
                  <label className="text-[20px] font-semibold">Price</label>
                  <input
                    className="bg-white w-full text-[16px] p-[11px] rounded-[5px] border-none outline-none"
                    type="text"
                    name="price"
                    id=""
                    placeholder="Cop of Coffee price"
                  />
                </div>
                {/* Category */}
                <div className="flex flex-col space-y-2 raleway mb-3">
                  <label className="text-[20px] font-semibold">Details</label>
                  <input
                    className="bg-white w-full text-[16px] p-[11px] rounded-[5px] border-none outline-none"
                    type="text"
                    name="details"
                    id=""
                    placeholder="Enter Coffee details"
                  />
                </div>
              </div>
            </div>
            {/* Photo input */}
            <div className="flex flex-col space-y-2 raleway mb-3">
              <label className="text-[20px] font-semibold">Photo</label>
              <input
                type="url"
                name="photo"
                id=""
                className="w-full bg-white text-[16px] p-[11px] rounded-[5px] border-none outline-none"
                placeholder="Enter photo URL"
              />
            </div>
            <input
              className="bg-[#D2B48C] border border-[#331A15] py-[13px] w-full mt-3 rounded-[5px]"
              type="submit"
              value="Add Coffee"
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddCoffee;
