import Image from "next/image";
import React from "react";
import netflixImg from "../public/assets/projects/netflix.jpg";
import { RiRadioButtonFill } from "react-icons/ri";
import Link from "next/link";

const hostels = () => {
  return (
    <div className="w-full">
      <div className="w-screen h-[50vh] relative">
        <div className="absolute top-0 left-0 w-full h-[50vh] bg-black/70 z-10" />
        <Image
          className="absolute z-1"
          layout="fill"
          objectFit="cover"
          src={netflixImg}
          alt="/"
        />
        <div className="absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2">
          <h2 className="py-2">Hostels Complaint App</h2>
          <h3>Next JS / Tailwind / Nodejs / MongoDB</h3>
        </div>
      </div>

      <div className="max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 py-8">
        <div className="col-span-4">
          <p>Project</p>
          <h2>Overview</h2>
          <p>
          Hostel Complaint System project is a testament to his adeptness in full-stack web development. Utilizing Next.js, Node.js, MongoDB, Typescript, and Cloudinary, I created a dynamic web application that significantly improved efficiency within the hostel ecosystem.
The system role-specific dashboards for administrators, attendants, and students allowed for seamless communication and real-time issue resolution. My user-centric design approach, backed by thorough research, resulted in a 20% increase in student satisfaction. The automation implemented, including student registration and complaint management, contributed to a 20% boost in operational efficiency.
This project not only showcased my technical proficiency in modern web technologies but also emphasized his commitment to user experience. The utilization of a scalable tech stack and the incorporation of modern tools underline his capability to create secure, scalable, and user-friendly applications. My Hostel Complaint System stands as a compelling example of his skills in web development, problem-solving, and user-centric design.
          </p>
          <a
            href="https://github.com/1palermo/Hostel-Complaint "
            target="_blank"
            rel="noreferrer"
          >
            <button className="px-8 py-2 mt-4 mr-8">Code</button>
          </a>
          <a
            href="https://hostel-complaint.vercel.app/"
            target="_blank"
            rel="noreferrer"
          >
            <button className="px-8 py-2 mt-4">Demo</button>
          </a>
        </div>
        <div className="col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl py-4">
          <div className="p-2">
            <p className="text-center font-bold pb-2">Technologies</p>
            <div className="grid grid-cols-3 md:grid-cols-1">
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> Next
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> Tailwind
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> Typescript
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> Mongodb
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> Cloudinary
              </p>
            </div>
          </div>
        </div>
        <Link href="/#projects">
          <p className="underline cursor-pointer">Back</p>
        </Link>
      </div>
    </div>
  );
};

export default hostels;
