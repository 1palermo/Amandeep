import Image from "next/image";
import Link from "next/link";
import React from "react";
import propertyImg from "../public/assets/projects/hm.png";
import cryptoImg from "../public/assets/projects/sema.png";
import twitchImg from "../public/assets/projects/ganak.png";
import bigBlock from "../public/assets/projects/bb.png";
import ProjectItem from "./ProjectItem";

const Projects = () => {
  return (
    <div id="projects" className="w-full">
      <div className="max-w-[1240px] mx-auto px-2 py-16">
        <p className="text-xl tracking-widest uppercase text-[#5651e5]">
          Projects
        </p>
        <h2 className="py-4">What I&apos;ve Built</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <ProjectItem
            title="Hostel Complaint App"
            backgroundImg={propertyImg}
            projectUrl="/property"
            tech="Next JS"
          />
          <ProjectItem
            title="Big Blockers Community"
            backgroundImg={bigBlock}
            projectUrl="/netflix"
            tech="Svelte JS"
          />
          <ProjectItem
            title="GANAK"
            backgroundImg={twitchImg}
            projectUrl="/twitch"
            tech="Svelte JS"
          />
          <ProjectItem
            title="SEMA"
            backgroundImg={cryptoImg}
            projectUrl="/crypto"
            tech="Kotlin & Java"
          />
        </div>
        <p className="lg:pt-10 pt-5 text-lg lg:text-2xl ">
          <Link href="/projects">{`More ->`}</Link>
        </p>
      </div>
    </div>
  );
};

export default Projects;
