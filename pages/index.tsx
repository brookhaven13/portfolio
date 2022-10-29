import type { NextPage } from "next";
import Head from "next/head";
import About from "../components/About";
import Header from "../components/Header";
import Hero from "../components/Hero";

const Home: NextPage = () => {
  return (
    <div className="bg-[#2e3440] text-slate-300 font-nunito h-screen snap-y snap-mandatory overflow-x-hidden">
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

      {/* Projects */}

      {/* Contact Me */}
    </div>
  );
};

export default Home;
