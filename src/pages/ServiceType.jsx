import React from 'react';
import { Link } from 'react-router-dom';

import Header from '../partials/Header';
import PageIllustration from '../partials/PageIllustration';
import Banner from '../partials/Banner';
import Banner8 from '../partials/Banner8';
import FormfacadeEmbed from "@formfacade/embed-react";
import ReactGA from "react-ga4";
import Footer from '../partials/Footer';
import home from '../images/home.jpg';
import office from '../images/commercial.jpg';
import Kc1 from '../images/kc1.png';
import Kc2 from '../images/kc2.jpg';
import Kc3 from '../images/kc3.png';
import Kc4 from '../images/kc4.jpg';

const callouts = [
    {
      name: 'Residential',
      description: 'Home Cleaning Services',
      imageSrc: 'https://tailwindcss.com/plus-assets/img/ecommerce-images/home-page-02-edition-01.jpg',
      src: home,
      imageAlt: 'Desk with leather desk pad, walnut desk organizer, wireless keyboard and mouse, and porcelain mug.',
      href: '/quote',
    },
    {
      name: 'Commercial',
      description: 'Business and Office Cleaning Services',
      imageSrc: 'https://tailwindcss.com/plus-assets/img/ecommerce-images/home-page-02-edition-02.jpg',
      src: office,
      imageAlt: 'Wood table with porcelain mug, leather journal, brass pen, leather key ring, and a houseplant.',
      href: '/commercial',
    },
  ]

function ServiceType() {
    ReactGA.send({ hitType: "pageview", page: "/", title: "ServiceType Page" });
    return (
        <div className="flex flex-col min-h-screen overflow-hidden">

            {/*  Site header */}
            <Header />

            {/*  Page content */}
            <main className="grow text-center items-center">

                {/*  Page illustration */}
                <div className="relative max-w-6xl mx-auto h-0 pointer-events-none py-20" aria-hidden="true">
                    <PageIllustration />
                </div>

                {/* Section header */}
                <div className="relativept-32 py-12 pb-10 md:pt-40 md:pb-16">
                <div className="max-w-3xl mx-auto text-center pb-12 md:pb-16">
                    <h2 className="h1 text-4xl mb-4 font-manrope " data-aos="fade-up" style={{ marginTop: '-100px' }}
                    >
                        Do You Want Residential or Commercial Cleaning Services?
                    </h2>
                    <p className="text-xl font-normal text-gray-400 mb-0" data-aos="fade-up" data-aos-delay="200">
                    For further inquires email us at info@kaicleans.com
                    </p> 
                </div>
                </div>

    <div className="bg-gray-900">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl py-0 sm:py-0 lg:max-w-none lg:py-0">

          <div className="mt-6 space-y-12 lg:grid lg:grid-cols-2 lg:space-y-0 lg:gap-x-6">
            {callouts.map((callout) => (
              <div key={callout.name} className="group relative">
                <img
                  alt={callout.imageAlt}
                  src={callout.src}
                  className="w-full rounded-lg bg-white object-cover group-hover:opacity-75 max-sm:h-80 sm:aspect-2/1 lg:aspect-square"
                />
                <h3 className="mt-6 text-lg text-gray-100">
                  <a href={callout.href}>
                    <span className="absolute inset-0" />
                    {callout.name}
                  </a>
                </h3>
                <p className="text-base font-semibold text-gray-100">{callout.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>


            </main>
            
            <Banner />
            <Footer style={{MarginTop: '-100px'}} />
            
           

        </div>
    );
}

export default ServiceType;