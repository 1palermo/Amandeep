import Head from "next/head";
import About from "../components/About";
import Contact from "../components/Contact";
import Main from "../components/Main";
import Projects from "../components/Projects";
import Skills from "../components/Skills";

export default function Home() {
  return (
    <div className="">
      <Head>
        <title>Aman | Software Engineer</title>
        <meta
          name="description"
          content="I’m a software developer specializing in building (and occasionally designing) exceptional digital experiences."
        />
        <link rel="icon" href="./assets/logo1.png" />
      </Head>
      <Main />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </div>
  );
}
