import type { NextPage } from "next";
import Head from "next/head";
import About from "../components/About";
import Contact from "../components/Contact";
import Experience from "../components/Experience";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Projects from "../components/Projects";

const Home: NextPage = () => {
  return (
    <div className="bg-[#2e3440] text-slate-300 font-nunito h-screen snap-y snap-mandatory overflow-x-hidden scrollbar- scrollbar-thin scrollbar-track-[#E5E9F0]/25 scrollbar-thumb-[#88C0D0] scrollbar-thumb-rounded">
      <Head>
        <title>Harley&apos;s Portfolio</title>
        <meta name="description" content="Harley's Personal Website" />
        <link rel="icon" href="/favicon.png" />
      </Head>

      {/* Header */}
      <Header />

      {/* Hero */}
      <section id="hero" className="snap-center">
        <Hero />
      </section>

      {/* About */}
      <section id="about" className="snap-center">
        <About />
      </section>

      {/* Experience */}
      <section id="experience" className="snap-start">
        <Experience />
      </section>

      {/* Projects */}
      <section id="projects" className="snap-center">
        <Projects />
      </section>

      {/* Contact Me */}
      <section id="contact" className="snap-center">
        <Contact />
      </section>
    </div>
  );
};

export default Home;
