import React from 'react';

import Header from '../partials/Header';
import PageIllustration from '../partials/PageIllustration';
import HeroHome from '../partials/HeroHome';
import FeaturesBlocks from '../partials/FeaturesBlocks';
import FeaturesZigZag from '../partials/FeaturesZigzag';
import Testimonials from '../partials/Testimonials';
import Newsletter from '../partials/Newsletter';
import Banner from '../partials/Banner';
import Footer from '../partials/Footer';
import Banner8 from '../partials/Banner8';
import ReactGA from "react-ga4";


function Home() {
  ReactGA.send({ hitType: "pageview", page: "/", title: "Home Page" });
  return (
    <div className="flex flex-col min-h-screen overflow-hidden">
      {/*  Site header */}
      <Header />

      {/*  Page content */}
      <main className="grow">
        {/*  Page illustration */}
        <div className="relative max-w-6xl mx-auto h-0 pointer-events-none py-12" aria-hidden="true">
          <PageIllustration />
        </div>

        {/*  Page sections */}
        <HeroHome />
        <FeaturesBlocks />
        <Testimonials />
        <Newsletter />
      </main>

      <Banner />

      {/*  Site footer */}
      <Footer />

    </div>


  );
}

export default Home;