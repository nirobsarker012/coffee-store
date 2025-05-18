import React from "react";

const Home = () => {
  return (
    <div className="bg-[url('./assets/images/more/6.jpeg')] bg-cover bg-centertransform object-cover py-48 scale-x-[-1]">
      <div className="container transform scale-x-[-1]">
        <div className="grid justify-center grid-cols-14 w-full">
          <div className="col-span-6"></div>
          <div className="col-span-8">
            <h2 className="text-white text-[48px] mb-3">
              Would you like a Cup of Delicious Coffee?
            </h2>
            <p className="raleway text-[14px] text-white mb-4">
              It's coffee time - Sip & Savor - Relaxation in every sip! Get the
              nostalgia back!! Your companion of every moment!!! Enjoy the
              beautiful moments and make them memorable.
            </p>
            <button className="text-[#242222] bg-[#E3B577] py-[9px] px-[22px] text-2xl cursor-pointer">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
