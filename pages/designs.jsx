import React from "react";
import Head from "next/head";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";
import propertyImg from "../public/assets/projects/property.jpg";
import cryptoImg from "../public/assets/projects/crypto.jpg";
import netflixImg from "../public/assets/projects/netflix.jpg";
import twitchImg from "../public/assets/projects/twitch.jpg";
import bigBlock from "../public/assets/projects/bb.png";
import ProjectItem from "../components/ProjectItem";

const designs = () => {
  return (
    <>
      <Head>
        <title>Aman | Designs</title>
        <meta
          name="description"
          content="I’m a front-end web developer specializing in building (and occasionally designing) exceptional digital experiences."
        />
        <link rel="icon" href="/fav.png" />
      </Head>

      <div id="projects" className="w-full pt-[120px]">
        
        <div className="max-w-[1240px] mx-auto px-2 py-16">
          <p className="text-4xl text-center text-bold tracking-widest uppercase text-[#5651e5]">
            My Designs
          </p>
          <h2 className="py-4">What I&apos;ve Built</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <ProjectItem
              title="Hostel Complaint App"
              backgroundImg={propertyImg}
              projectUrl="/property"
              tech=""
            />
            <ProjectItem
              title="SEMA"
              backgroundImg={cryptoImg}
              projectUrl="/crypto"
              tech="React JS"
            />
            <ProjectItem
              title="Big Blockers Community"
              backgroundImg={bigBlock}
              projectUrl="/netflix"
              tech="React JS"
            />
            <ProjectItem
              title="GANAK"
              backgroundImg={twitchImg}
              projectUrl="/twitch"
              tech="Next JS"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default designs;
