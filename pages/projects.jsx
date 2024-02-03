import React from "react";
import Head from "next/head";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";
import propertyImg from "../public/assets/projects/property.jpg";
import SemaImg from "../public/assets/projects/sema.png";
import hostel from "../public/assets/projects/hm.png";
import ganak from "../public/assets/projects/ganak.png";
import bigBlock from "../public/assets/projects/bb.png";
import ProjectItem from "../components/ProjectItem";

const designs = () => {
  return (
    <>
      <Head>
        <title>Aman | Projects</title>
        <meta
          name="description"
          content="I’m a front-end web developer specializing in building (and occasionally designing) exceptional digital experiences."
        />
        <link rel="icon" href="/fav.png" />
      </Head>

      <div id="projects" className="w-full pt-[120px]">
        <div className="max-w-[1240px] mx-auto px-2 py-16">
          <p className="lg:text-4xl text-xl text-center text-bold tracking-widest uppercase text-[#5651e5]">
            My Latest Projects
          </p>
          <h2 className="py-4">What I&apos;ve Built</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <ProjectItem
              title="Hostel Complaint App"
              backgroundImg={hostel}
              projectUrl="/hostels"
              tech="Next JS "
            />
            <ProjectItem
              title="Big Blockers Community"
              backgroundImg={bigBlock}
              projectUrl="https://www.figma.com/proto/1Oqrs9vaKiTvppWQT86NnD?node-id=0-1&mode=design&t=yUlET3YLOW6yRqw5-6"
              tech="Svelte JS"
            />
            <ProjectItem
              title="GANAK"
              backgroundImg={ganak}
              projectUrl=""
              tech="Svelte JS"
            />
            <ProjectItem
              title="SEMA"
              backgroundImg={SemaImg}
              projectUrl="https://www.figma.com/file/e46bRRRXYg5k05zpTHcTge/SEMA-SIH-Designs?type=design&mode=design&t=laefT2rp2JgeW5B0-1"
              tech="Kotlin & Java"
              imageStyle={{ width: "100px", height: "200px" }}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default designs;
