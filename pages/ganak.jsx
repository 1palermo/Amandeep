import Image from "next/image";
import React from "react";
import ProjectItem from "../components/ProjectItem";
import ganakHeader from "../public/assets/projects/ganak.png";
import { RiRadioButtonFill } from "react-icons/ri";
import Link from "next/link";

const ganak = () => {
  return (
    <div className="w-full">
      <div className="w-screen h-[50vh] relative">
        <div className="absolute top-0 left-0 w-full h-[50vh] bg-black/70 z-10" />
        <Image
          className="absolute z-1"
          layout="fill"
          objectFit="cover"
          src={ganakHeader}
          alt="/"
        />
        <div className="absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2">
          <h2 className="py-2">Ganak</h2>
          <h3>Svelte Js / Tailwind / WhatsOnChain</h3>
        </div>
      </div>

      <div className="max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 py-8">
        <div className="col-span-4">
          <p>Project</p>
          <h2>Overview</h2>
          <p>
            Ganak, a secure loan and agreement management platform designed for
            the Reserve Bank of India (RBI), showcases my architectural
            expertise. In leading the development of Ganak front-end, I utilized
            Svelte to ensure a seamless and intuitive user interface. Notably,
            the integration of WhatsonChain blockchain technology heightened
            security measures by 10%, providing tamper-proof data integrity.
            This experience not only contributed to the platform enhanced
            security but also offered invaluable hands-on exposure to
            cutting-edge blockchain technologies. Ganak stands as a testament to
            my commitment to creating robust and innovative solutions at the
            intersection of finance, technology, and security.
          </p>
          <a href="https://ganak.vercel.app" target="_blank" rel="noreferrer">
            <button className="px-8 py-2 mt-4 mr-8">Demo</button>
          </a>
          <a
            href="https://github.com/1palermo"
            target="_blank"
            rel="noreferrer"
          >
            <button className="px-8 py-2 mt-4">Code</button>
          </a>
        </div>
        <div className="col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl py-4">
          <div className="p-2">
            <p className="text-center font-bold pb-2">Technologies</p>
            <div className="grid grid-cols-3 md:grid-cols-1">
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> Svelte js
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> Tailwind
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> Javascript
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> Svelte Kit
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> WhatsonChain
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> Sanity
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

export default ganak;
