import React from "react";
import ProjectCard from "./ProjectCard";

const Projects = () => {
  return (
    <div id="Projects" className="p-10 md:p-24 text-white ">
      <h1 className="text-2xl md:text-4xl text-white font-bold">Projects</h1>
      <div className="py-12 px-8 flex flex-wrap gap-5">
        <ProjectCard
          title="Blogging Website"
          main="this is a bloggin website created in  js and tailwind css, along with some component library like GSAP....."
          gf="lazarev2.png"
        />
        <ProjectCard
          title="Voice Recognition"
          main="I built a Voice Recognition app that uses Speech Synthesis Utterance to convert text to speech and vice versa, with support for multiple languages and dynamic voice switching."
          gf="text.jpg"
        />
        <ProjectCard
          title="Netflix Clone"
          main="I created a responsive UI clone of Netflix using Tailwind CSS and JavaScript, replicating its sleek layout, hover effects, and dynamic content sections. It's optimized for both desktop and mobile viewing."
          gf="netflix.jpg"
        />
      </div>
    </div>
  );
};

export default Projects;