import React, { useContext } from "react";
import { BsCupHotFill } from "react-icons/bs";
import { CoffeeContext } from "../contexts/ContextProvider";
import CoffeeCard from "../components/CoffeeCard";
import cup_img from "../assets/images/icons/1.png";
import award_img from "../assets/images/icons/2.png";
import grades_img from "../assets/images/icons/3.png";
import rosting_img from "../assets/images/icons/4.png";
import { Link } from "react-router";

const Home = () => {
  const { initialCoffee } = useContext(CoffeeContext);
  // console.log(initialCoffee);
  return (
    <div className="">
      <div className="bg-[url('./assets/images/more/6.jpeg')] bg-cover bg-centertransform object-cover py-48 scale-x-[-1]">
        <div className="container transform scale-x-[-1]">
          <div className="grid justify-center grid-cols-14 w-full">
            <div className="col-span-6"></div>
            <div className="col-span-8">
              <h2 className="text-white text-[48px] mb-3">
                Would you like a Cup of Delicious Coffee?
              </h2>
              <p className="raleway text-[14px] text-white mb-4">
                It's coffee time - Sip & Savor - Relaxation in every sip! Get
                the nostalgia back!! Your companion of every moment!!! Enjoy the
                beautiful moments and make them memorable.
              </p>
              <button className="text-[#242222] bg-[#E3B577] py-[9px] px-[22px] text-2xl cursor-pointer">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* Card Details Section */}
      <div className="bg-[#ECEAE3]">
        <div className="container grid justify-around grid-cols-4 place-items-center gap-10 py-[52px]">
          {/* 1 */}
          <div className="flex flex-col space-y-2.5">
            <img className="w-[70px] h-[70px]" src={cup_img} alt="" />
            <h3 className="">Awesome Aroma</h3>
            <span className="">
              You will definitely be a fan of the design & aroma of your coffee
            </span>
          </div>
          {/* 2 */}
          <div className="flex flex-col space-y-2.5">
            <img className="w-[70px] h-[70px]" src={award_img} alt="" />
            <h3 className="">High Quality</h3>
            <span className="">
              We served the coffee to you maintaining the best quality
            </span>
          </div>
          {/* 3 */}
          <div className="flex flex-col space-y-2.5">
            <img className="w-[70px] h-[70px]" src={grades_img} alt="" />
            <h3 className="">Pure Grades</h3>
            <span className="">
              The coffee is made of the green coffee beans which you will love
            </span>
          </div>
          {/* 4 */}
          <div className="flex flex-col space-y-2.5">
            <img className="w-[70px] h-[70px]" src={rosting_img} alt="" />
            <h3 className="">Proper Roasting</h3>
            <span className="">
              Your coffee is brewed by first roasting the green coffee beans
            </span>
          </div>
        </div>
      </div>
      {/*  */}
      <div className="mt-[112px]">
        <div className="flex text-center justify-center">
          {/* Card title */}
          <div>
            <h4 className="mb-2 text-[#1B1A1A] text-[20px] raleway">
              ---Slip & Savor ---
            </h4>
            <h2 className="text-[#331A15] text-[55px]">Our Popular Products</h2>
            <Link
              to={"/addCoffe"}
              className="inline-flex gap-1 items-center bg-[#E3B577] border border-[#331A15] rounded-[5px] mt-[25px] text-[24px] py-[9px] px-[22px]"
            >
              Add Coffee <BsCupHotFill />
            </Link>
          </div>
        </div>
        <div className="container mt-[48px] grid grid-cols-2 justify-around gap-6 max-w-[648px]">
          {initialCoffee.map((singleCoff) => (
            <CoffeeCard key={Math.random()} singleCoff={singleCoff} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
