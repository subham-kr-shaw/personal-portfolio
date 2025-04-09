import React from "react";
import { FaCss3, FaFigma, FaGithub, FaHtml5, FaJs, FaReact } from "react-icons/fa";
import { SiLeetcode, SiRedis } from "react-icons/si";
import { FaGoogle } from "react-icons/fa";
import { SiMongodb } from "react-icons/si";
import { RiNetflixFill } from "react-icons/ri";
import { FaAmazon } from "react-icons/fa";
import { MdDeveloperBoard } from "react-icons/md";
const Experience = () => {
  return (
    <div id="Experience" className="p-10 md:p-24">
      <h1 className="text-2xl md:text-4xl text-white font-bold">Experience</h1>
      <div className="flex flex-wrap items-center justify-around">
        <div className="flex flex-wrap md:w-2/5 gap-8 md:p-12 py-10">
          <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
            <FaHtml5 color="#E34F26" size={50} />
          </span>
          <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
            <FaCss3 color="#1572B6" size={50} />
          </span>
          <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
            <FaReact color="#61DAFB" size={50} />
          </span>
          <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
            <FaJs color="#F7DF1E" size={50} />
          </span>
          <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
            <FaFigma color="#F24E1E" size={50} />
          </span>
          <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
            <SiMongodb color="#47A248" size={50} />
          </span>
          <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
            <SiRedis color="#FF4438" size={50} />
          </span>
        </div>
        <div>
          <div className="flex gap-10 bg-slate-950 bg-opacity-45 mt-4 rounded-lg p-4 items-center">
             <a href="https://leetcode.com/u/Subham_kr_shaw/"><SiLeetcode color="#4285F4" size={50} /></a>
            <span className="text-white">
              <h2 className="leading-tight">problem solver , Leetcode</h2>
              {/* <p className="text-sm leading-tight font-thin">
                Sept 2023 - Present
              </p> */}
              <ul className="text-sm p-2">
                <li>- solving leetcode problems</li>
                <li>- question solve more than 150+</li>
              </ul>
            </span>
          </div>
          <div className="flex gap-10 bg-slate-950 bg-opacity-45 mt-4 rounded-lg  p-4 items-center">
            <FaGithub color="#E50914" size={50} />
            <span className="text-white">
              <h2 className="leading-tight">Software Engineer, Google</h2>
              {/* <p className="text-sm leading-tight font-thin">
                Sept 2023 - Present
              </p> */}
              <ul className="text-sm p-2">
                <li>- strong command on git and github.</li>
                {/* <li>- Senior SDE-developer</li> */}
              </ul>
            </span>
          </div>
          <div className="flex gap-10 bg-slate-950 bg-opacity-45 mt-4 rounded-lg  p-4 items-center">
            <MdDeveloperBoard color="#FF9900" size={50} />
            <span className="text-white">
              <h2 className="leading-tight">Full stack developer</h2>
              <p className="text-sm leading-tight font-thin">
                Sept 2023 - Present
              </p>
              <ul className="text-sm p-2">
                <li>- built several projects comes true.</li>
                <li>- proper knowledge of both Frontend and Backend</li>
              </ul>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;