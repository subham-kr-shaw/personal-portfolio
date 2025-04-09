import React from "react";
import avatarImg from "../../assets/7358602-removebg-preview.png";
import TextChange from "../TextChange";

const Home = () => {
  return (
    <div className="text-white flex w-full justify-between items-start p-10 md:p-20">
      <div className="md:w-2/4 md:pt-10 ">
        <h1 className="text-xl md:text-5xl font-bold flex leading-normal tracking-tighter">
          <TextChange />
        </h1>
        <p className="text-sm md:text-2xl tracking-tight ">
          FULL STACK DEVELOPER AND PROBLEM SOLVER.....
        </p>
        <a href="#Footer">
        <button className="mt-5 md:md-10 text-white py02 px-3 text-sm md:text-lg md:py-2 md:px-4 hover:opacity-85 duration-300 hover:scale-105 font-semibold rounded-3xl bg-[#465697]">
          Contact Me
        </button></a>
        <a href="SUBHAM KR SHAW.pdf" target="_blank">
        <button className="mx-1.5 mt-5 md:md-10 text-white py02 px-3 text-sm md:text-lg md:py-2 md:px-4 hover:opacity-85 duration-300 hover:scale-105 font-semibold rounded-3xl bg-[#465697]">
          Download cv
        </button></a>
      </div>
      {/* <div>
        //avatarImg
        <img className=" w-[40%] h-[20%] ml-24" src="ghibli.jpg" alt="" />
      </div> */}
      <div className="flex flex-col sm:flex-row justify-between items-center">
  {/* Left: Text */}
  <div className="text-white sm:w-[60%]">
    {/* your intro text here */}
  </div>

  {/* Right: Image */}
  <img 
    className="hidden sm:block w-[40%] h-auto ml-24" 
    src="ghibli.jpg" 
    alt="Subham's Avatar" 
  />
</div>
    </div>
  );
};

export default Home;