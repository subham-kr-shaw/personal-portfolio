// import React from "react";
// import { MdOutlineEmail } from "react-icons/md";
// import { CiLinkedin } from "react-icons/ci";
// import { FaGithub } from "react-icons/fa";

// const Footer = () => {
//   return (
//     // <div
//     //   id="Footer"
//     //   className="flex justify-around bg-[#465697] text-white p-10 md:p-12 items-center"
//     // >
//     //   <div>
//     //     <h1 className="text-2xl md:text-6xl font-bold">Contact</h1>
//     //     <h3 className="text-sm md:text-2xl font-normal">
//     //       Feel Free To reach out!
//     //     </h3>
//     //   </div>

//     //   <ul className="text-sm md:text-xl">
//     //     <li className="flex gap-1 items-center">
//     //       <MdOutlineEmail size={20} />
//     //       myemail@gmail.com
//     //     </li>
//     //     <li className="flex gap-1 items-center">
//     //       <CiLinkedin />
//     //       linkdlin.com/username
//     //     </li>
//     //     <li className="flex gap-1 items-center">
//     //       <FaGithub />
//     //       github.com/username
//     //     </li>
//     //   </ul>
//     // </div>
//   );
// };

// export default Footer;
import React from 'react'

export default function Footer() {
    return (
        <div id="Footer" className="relative flex items-top justify-center min-h-[70px] bg-[#0B1D3A] sm:items-center sm:pt-0 p-7">
            <div className="max-w-6xl mx-auto sm:px-6 lg:px-8">
                <div className="mt-8 overflow-hidden">
                    <div className="grid grid-cols-1 md:grid-cols-2">
                        <div className="p-6 mr-2 bg-[	#FDF6ED] sm:rounded-lg">
                            <h1 className="text-3xl sm:text-4xl text-blue-600 font-extrabold tracking-tight">
                                Get in touch: 
                            </h1>
                            <p className="text-normal text-lg sm:text-xl font-medium text-blue-300 mt-2">
                                Fill in the form to start a conversation
                            </p>

                            <div className="flex items-center mt-8 text-gray-600">
                                <svg
                                    fill="none"
                                    stroke="currentColor"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="1.5"
                                    viewBox="0 0 24 24"
                                    className="w-8 h-8 text-blue-300"
                                >
                                    <path
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        stroke-width="1.5"
                                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                                    />
                                    <path
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        stroke-width="1.5"
                                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                                    />
                                </svg>
                                <div className="ml-4 text-md tracking-wide font-semibold w-40 text-white">
                                     kolkata, sovabazar, westbengal, Near Metro station
                                </div>
                            </div>

                            {/* <div className="flex items-center mt-4 text-white">
                                <svg
                                    fill="none"
                                    stroke="currentColor"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="1.5"
                                    viewBox="0 0 24 24"
                                    className="w-8 h-8 text-blue-300"
                                >
                                    <path
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        stroke-width="1.5"
                                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                                    />
                                </svg>
                                <div className="ml-4 text-md tracking-wide font-semibold w-40">
                                    +91 7439629885
                                </div>
                            </div> */}
                            <div className="flex items-center mt-2 text-white">
                                <svg
                                    fill="none"
                                    stroke="currentColor"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="1.5"
                                    viewBox="0 0 24 24"
                                    className="w-8 h-8 text-blue-300"
                                >
                                    <path
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        stroke-width="1.5"
                                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                                    />
                                </svg>
                                <div className="ml-4 text-md tracking-wide font-semibold w-40">
                                    hisubham2002@gmail.com
                                </div>
                            </div>
                            {/* <div className=" text-md tracking-wide font-semibold w-96 text-white mt-2">
                                Have a project in mind or just want to chat about tech? Feel free to get in touch. I'm always open to discussing new opportunities and interesting collaborations
                                </div> */}
                                <div>
                                    <ul className='flex mt-4'>
                                        <li><a href="https://leetcode.com/u/Subham_kr_shaw/"><img src="leetcode logo.png" alt="" className='w-[50%]' /></a></li>
                                        <li><a href="https://www.linkedin.com/in/subham-shaw-2bab68284/"><img src="linkin.jpg.svg" alt=""  className='w-[10%]'/></a></li>
                                        </ul>
                                </div>
                        </div>

                        <form className="p-6 flex flex-col justify-center">
                            <div className="flex flex-col">
                                <label for="name" className="hidden">
                                    Full Name
                                </label>
                                <input
                                    type="name"
                                    name="name"
                                    id="name"
                                    placeholder="Full Name"
                                    className="w-100 mt-2 py-3 px-3 rounded-lg bg-[#444C56] border-gray-400 text-white font-semibold focus:border-orange-500 focus:outline-none"
                                />
                            </div>

                            <div className="flex flex-col mt-2">
                                <label for="email" className="hidden">
                                    Email
                                </label>
                                <input
                                    type="email"
                                    name="email"
                                    id="email"
                                    placeholder="Email"
                                    className="w-100 mt-2 py-3 px-3 rounded-lg bg-[#444C56] border-gray-400 text-white font-semibold focus:border-orange-500 focus:outline-none"
                                />
                            </div>

                            <div className="flex flex-col mt-2">
                                <label for="tel" className="hidden">
                                    text
                                </label>
                                <input
                                    type="text"
                                    name="tel"
                                    id="tel"
                                    placeholder="Message"
                                    className="w-100 mt-2 py-3 px-3 rounded-lg bg-[#444C56] border border-gray-400 text-white font-semibold focus:border-orange-500 focus:outline-none "
                                />
                            </div>

                            <button
                                type="submit"
                                className="md:w-32 bg-orange-500 hover:bg-blue-dark text-white font-bold py-3 px-6 rounded-lg mt-3 hover:bg-orange-600 transition ease-in-out duration-300"
                            >
                                Submit
                            </button>
                            <h1 className='text-red-500'>*currently not getting submitted!!! sorry for inconvience</h1>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}