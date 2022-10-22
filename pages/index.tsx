import type { NextPage } from "next";
import Head from "next/head";
import Header from "../components/Header";
import Hero from "../components/Hero";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Harley&apos;s Portfolio</title>
        <meta name="description" content="Harley's Personal Website" />
        <link rel="icon" href="/favicon.png" />
      </Head>

      {/* Header */}
      <Header />

      {/* Hero */}
      <section id="hero">
        <Hero />
      </section>

      {/* About */}

      {/* Experience */}

      {/* Projects */}

      {/* Contact Me */}
    </div>
  );
};

export default Home;
