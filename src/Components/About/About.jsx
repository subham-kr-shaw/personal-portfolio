import React from "react";
import AboutImg from "../../assets/7358653-removebg-preview.png";
// Match the folder name "Components"
import Loader from '../Loader/Loader.jsx';

import { IoArrowForward } from "react-icons/io5";
const About = () => {
    return (
        <div
            id="About"
            className="text-white md:flex overflow-hidden items-center md:flex-wrap md:justify-center bg-black shadow-xl mx-0 md:mx-20 bg-opacity-30 rounded-lg p-12"
        >
            <div>
                <h2 className="text-2xl md:text-4xl font-bold">About</h2>
                <div className="md:flex flex-wrap flex-col md:flex-row items-center ">
                    {/* <img className="md:h-80" src={AboutImg} alt="About img" /> */}
                    <Loader />
                    <ul>
                        <div className="flex gap-3 py-4">
                            <IoArrowForward size={30} className="mt-1" />

                            <span className="w-96">
                                <h1 className="text-xl md:text-2xl font-semibold leading-normal">
                                    Frontend developer
                                </h1>
                                <p className="text-sm md:text-md leading-tight text-blue-300">
                                    I am a passionate Frontend Developer skilled in React.js, JavaScript, and Tailwind CSS. I specialize in building responsive, user-friendly web applications with clean and efficient code.
                                </p>
                            </span>
                        </div>
                        <div className="flex gap-3 py-4 ">
                            <IoArrowForward size={30} className="mt-1" />

                            <span className="w-96">
                                <h1 className="text-xl md:text-2xl font-semibold leading-normal">
                                    Database developer
                                </h1>
                                <p className="text-sm md:text-md leading-tight text-blue-300">
                                I'm a passionate Database Developer with a strong grasp of data modeling, SQL optimization, and backend integration. I enjoy designing efficient, scalable databases that power robust applications and ensure data integrity.
                                </p>
                            </span>
                        </div>
                        <div className="flex gap-3 py-4">
                            <IoArrowForward size={30} className="mt-1" />

                            <span className="w-96">
                                <h1 className="text-xl md:text-2xl font-semibold leading-normal">
                                    Backend developer
                                </h1>
                                <p className="text-sm md:text-md leading-tight text-blue-300">
                                    I am a dedicated Backend Developer with expertise in Node.js, Express.js, and MongoDB. I focus on building robust, scalable server-side applications and RESTful APIs. With a strong understanding of databases and server logic, I ensure smooth data flow and efficient performance to power reliable, full-stack web applications.
                                </p>
                            </span>
                        </div>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default About;