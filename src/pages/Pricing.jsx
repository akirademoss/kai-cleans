import React from 'react';
import { Link, NavLink } from 'react-router-dom';

import Header from '../partials/Header';
import PageIllustration from '../partials/PageIllustration';
import Banner from '../partials/Banner';
import Banner8 from '../partials/Banner8';
import Footer2 from '../partials/Footer2';
import Footer from '../partials/Footer';
import Testimonials from '../partials/Testimonials';
import {
  Typography,
  Button,
  Card,
  CardBody,
  CardHeader,
} from "@material-tailwind/react";
import { CheckCircleIcon } from "@heroicons/react/24/solid";
import { MinusCircleIcon } from "@heroicons/react/24/outline";
import Quality from '../images/qual.png';

function PricingCard({ title, desc, price, options }) {
  return (

    <Card variant="gradient" color="white" data-aos="fade-up">
      <CardHeader
        floated={false}
        shadow={false}
        color="transparent"
        className="!m-0 p-6"
        data-aos="fade-up"
      >
        <Typography
          variant="h6"
          color="blue-gray"
          className="capitalize font-bold mb-1"
        >
          {title}
        </Typography>
        <Typography
          variant="small"
          className="font-normal !text-gray-500"
        >
          {desc}
        </Typography>
        <Typography
          variant="h3"
          color="blue-gray"
          className="!mt-4 flex gap-1 !text-4xl"
        >
          {price[0]}
          {price[1]}
          <Typography
            as="span"
            color="blue-gray"
            className="-translate-y-0.5 self-end opacity-70 text-lg font-bold"
          >
            /{price[2]}
          </Typography>
        </Typography>
      </CardHeader>
      <CardBody className="pt-0" data-aos="fade-up">
        <ul className="flex flex-col gap-3 mb-6">
          {options.map((option, key) => (
            <li
              key={key}
              className="flex items-center gap-3 text-gray-700"
            >
              {option.icon}
              <Typography
                variant="small"
                className="font-normal text-inherit"
              >
                {option.info}
              </Typography>
            </li>
          ))}
        </ul>
        <NavLink to="/quote">
        <Button className="text-white bg-blue-600" fullWidth varient="gradient">
          get started
        </Button>
        </NavLink>
      </CardBody>
    </Card>

  );
}

export function PricingSection11() {
  const cards = [
    {
      title: "Monthly",
      desc: "Every 4 weeks",
      price: ["$", "85.50", "hr"],
      options: [
        {
          icon: (
            <CheckCircleIcon className="mx-1 h-5 w-5 text-green-700" />
          ),
          info: "Ideal for households with minimal foot traffic or smaller spaces",
        },
        {
          icon: (
            <CheckCircleIcon className="mx-1 h-5 w-5 text-green-700"  />
          ),
          info: "Clients who maintain a tidy home but need periodic maintenance",
        },
        {
          icon: (
            <CheckCircleIcon className="mx-1 h-5 w-5 text-green-700" />
          ),
          info: "Budget is a concern, but consistent upkeep is still important",
        },
      ],
    },
    {
      title: "Bi-weekly",
      desc: "Every 2 weeks",
      price: ["$", "80.75", "hr"],
      options: [
        {
          icon: (
            <CheckCircleIcon className="h-5 w-5 text-green-700" />
          ),
          info: "Best for professionals or families who need more regular maintenance",
        },
        {
          icon: (
            <CheckCircleIcon className="h-5 w-5 text-green-700" />
          ),
          info: "Ideal for homes with moderate foot traffic, kids, or pets",
        },
        {
          icon: (
            <CheckCircleIcon className="h-5 w-5 text-green-700" />
          ),
          info: "Balance of thorough cleaning and ongoing upkeep w/o daily attention",
        },
      ],
    },
    {
      title: "One-Time",
      desc: "One-Time deep cleaning",
      price: ["$", "95", "hr"],
      options: [
        {
          icon: (
            <CheckCircleIcon className="h-5 w-5 text-green-700" />
          ),
          info: "Clients who need a comprehensive, top-to-bottom clean",
          
        },
        {
          icon: (
            <CheckCircleIcon className="h-5 w-5 text-green-700" />
          ),
          info: "Preparing for events, move-ins/outs, or after renovations",
        },
        {
          icon: (
            <CheckCircleIcon className="h-5 w-5 text-green-700" />
          ),
          info: "Reset your space with an intensive clean w/o onging service",
        },
      ],
    },
  ];

  return (
    
    <div className="flex flex-col min-h-screen overflow-hidden ">

    {/*  Site header */}
    <Header />
   
    <main className="grow">
    <div className="relative max-w-6xl mx-auto h-0 pointer-events-none" aria-hidden="true">
                    <PageIllustration />
                </div>
    <Banner8 />
    <div className="flex justify-center align-center">
    <section className="py-24 px-8">
      <div className="container mx-auto">
        <Typography
          color="blue-gray"
          className="mb-4 font-bold font-manrope text-lg"
          data-aos="fade-up" 
        >
          Pricing Plans
        </Typography>
        <Typography
          variant="h1"
          color="blue-gray"
          className="mb-4 !leading-snug lg:!text-4xl font-bold font-manrope !text-2xl max-w-2xl"
          data-aos="fade-up" data-aos-delay="100"
        >
          Invest in a Plan That Provides You With the Peace of Mind You Deserve.
        </Typography>
        <Typography
          variant="lead"
          className="mb-10 font-normal !text-gray-500 max-w-xl"
          data-aos="fade-up" data-aos-delay="200"
        >
          Compare the benefits and features of each plan below to find the ideal
          match for your home&apos;s budget and cleaning needs.
        </Typography>
        <div className="grid gap-x-10 gap-y-8 md:grid-cols-2 lg:grid-cols-3 max-w-5xl">
          {cards.map(({ title, desc, options, price }, key) => (
            <PricingCard
              key={key}
              title={title}
              desc={desc}
              price={price}
              options={options}
            />
          ))}
        </div>
        <Typography
          variant="lead"
          className="mt-10 font-normal !text-gray-500"
        >
          
        </Typography>

        <div className="lg:flex md:flex block justify-between items-center ">
                <div className="md:p-4 p-4 flex flex-col items-center" >
                  <img 
                    src={Quality}
                    className="lg:!h-20 lg:!w-20 !h-21 !w-21"
                  />
                </div>
                <div className="md:p-10 p-4">
                  <p className="lg:!text-3xl !text-2xl font-semibold leading-9 text-gray-300 py-4">
                    100% Satisfaction Gaurenteed Or Your Clean Is On Us!
                  </p>
                  <p className="lg:!text-xl !text-normal leading-normal text-gray-500">
                  No contracts required housecleaning services provider.
                  Book today to secure a slot.
                  </p>
                </div>
               
              </div>
      </div>
    </section>
    </div>
    <Testimonials />
    <Footer2 />
    
    <Footer style={{MarginTop: '-100px'}} />
    </main>

    </div>
  );
}

export default PricingSection11;

