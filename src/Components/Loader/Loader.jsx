
import React, { useState } from 'react';
import { motion } from 'framer-motion';

const CircularProgress = ({ percentage, skills }) => {
    const [hover, setHover] = useState(false);

    return (
        <div
            className="hidden sm:flex relative w-36 h-36 items-center justify-center mx-auto"
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
        >
            <svg className="absolute top-0 left-0 w-full h-full" viewBox="0 0 100 100">
                <circle cx="50" cy="50" r="40" strokeWidth="10" stroke="#ccc" fill="transparent" />
                <circle
                    cx="50"
                    cy="50"
                    r="40"
                    strokeWidth="10"
                    stroke="#f87171"
                    fill="transparent"
                    strokeDasharray="251.2"
                    strokeDashoffset={251.2 - (251.2 * percentage) / 100}
                    strokeLinecap="round"
                    style={{ transition: 'stroke-dashoffset 0.5s ease' }}
                />
            </svg>
            <span className="text-lg font-bold text-red-600 z-10">{percentage}%</span>

            {hover && (
                <motion.div
                    className="absolute top-36 w-48 p-3 bg-black text-white text-sm rounded-xl shadow-xl z-20"
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                >
                    {skills.map((skill, index) => (
                        <p key={index}>{skill.name}: {skill.percentage}%</p>
                    ))}
                </motion.div>
            )}
        </div>
    );
};

const HorizontalBar = ({ skill }) => (
    <div className="sm:hidden mb-4">
        <div className="flex justify-between">
            <span>{skill.name}</span>
            <span>{skill.percentage}%</span>
        </div>
        <div className="w-full bg-gray-700 rounded-full h-2 mt-1">
            <div
                className="bg-red-500 h-2 rounded-full"
                style={{ width: `${skill.percentage}%` }}
            />
        </div>
    </div>
);

const DsaCircleLoader = () => {
    const total = 3511;
    const solved = 150;
    const easy = 56;
    const medium = 90;
    const hard = 4;

    const segments = [
        { color: '#34d399', value: easy },
        { color: '#fbbf24', value: medium },
        { color: '#f87171', value: hard },
    ];

    const totalAngle = 270;
    const radius = 40;
    const circumference = 2 * Math.PI * radius;

    let startOffset = 0;

    return (
        <div className="flex flex-col items-center mt-8">
            <div className="relative w-40 h-40">
                <svg className="absolute top-0 left-0 w-full h-full" viewBox="0 0 100 100">
                    {segments.map((seg, index) => {
                        const percentage = seg.value / total;
                        const arc = percentage * circumference;
                        const circle = (
                            <circle
                                key={index}
                                cx="50"
                                cy="50"
                                r={radius}
                                fill="transparent"
                                stroke={seg.color}
                                strokeWidth="6"
                                strokeDasharray={`${arc} ${circumference - arc}`}
                                strokeDashoffset={-startOffset}
                            />
                        );
                        startOffset += arc;
                        return circle;
                    })}
                </svg>
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                    <h2 className="text-2xl font-bold">{solved}</h2>
                    <p className="text-sm text-gray-400">/ {total} Solved</p>
                </div>
            </div>
            <div className="mt-4 text-sm text-gray-300 space-y-1">
                <div className="flex justify-between w-32">
                    <span className="text-green-400">Easy</span>
                    <span>{easy}/{871}</span>
                </div>
                <div className="flex justify-between w-32">
                    <span className="text-yellow-400">Medium</span>
                    <span>{medium}/{1821}</span>
                </div>
                <div className="flex justify-between w-32">
                    <span className="text-red-400">Hard</span>
                    <span>{hard}/{819}</span>
                </div>
            </div>
        </div>
    );
};

export default function Loader() {
    const frontendSkills = [
        { name: 'JavaScript', percentage: 70 },
        { name: 'ReactJS', percentage: 70 },
        { name: 'CSS', percentage: 80 },
        { name: 'HTML', percentage: 80 },
    ];

    const backendSkills = [
        { name: 'Node.js', percentage: 75 },
        { name: 'Express.js', percentage: 70 },
        { name: 'MongoDB', percentage: 65 },
    ];

    const technicalSkills = [
        { name: 'C++', percentage: 70 },
        { name: 'Java', percentage: 60 },
        { name: 'Python', percentage: 60 },
    ];

    return (
        <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center px-4">
            <h1 className="text-3xl sm:text-5xl font-semibold py-10">My Skills</h1>

            <div className="grid sm:grid-cols-3 gap-12">
                {/* Frontend */}
                <div className="text-center">
                    <h2 className="text-xl font-medium mb-4">Frontend</h2>
                    <CircularProgress
                        percentage={80}
                        skills={frontendSkills}
                    />
                    {frontendSkills.map(skill => (
                        <HorizontalBar key={skill.name} skill={skill} />
                    ))}
                </div>

                {/* Backend */}
                <div className="text-center">
                    <h2 className="text-xl font-medium mb-4">Backend</h2>
                    <CircularProgress
                        percentage={70}
                        skills={backendSkills}
                    />
                    {backendSkills.map(skill => (
                        <HorizontalBar key={skill.name} skill={skill} />
                    ))}
                </div>

                {/* Technical */}
                <div className="text-center">
                    <h2 className="text-xl font-medium mb-4">Technical Skills</h2>
                    <CircularProgress
                        percentage={70}
                        skills={technicalSkills}
                    />
                    {technicalSkills.map(skill => (
                        <HorizontalBar key={skill.name} skill={skill} />
                    ))}
                </div>
            </div>

            {/* DSA Circle */}
            <div className="mt-20">
                <h2 className="text-2xl font-semibold mb-6 text-center">DSA Progress</h2>
                <DsaCircleLoader />
            </div>
        </div>
    );
}



