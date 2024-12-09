import React from 'react';
import { Link } from 'react-router-dom';

import Header from '../partials/Header';
import PageIllustration from '../partials/PageIllustration';
import Banner from '../partials/Banner';
import Banner8 from '../partials/Banner8';
import FormfacadeEmbed from "@formfacade/embed-react";

import Kc0 from '../images/kc0.jpg';
import Kc1 from '../images/kc1.png';
import Kc2 from '../images/kc2.jpg';
import Kc3 from '../images/kc3.png';
import Kc4 from '../images/kc4.jpg';

function Quote() {
    return (
        <div className="flex flex-row min-h-screen overflow-hidden">

            {/*  Site header */}
            <Header />

            {/*  Page content */}
            <main className="grow text-center items-center">

                {/*  Page illustration */}
                <div className="relative max-w-6xl mx-auto h-0 pointer-events-none py-20" aria-hidden="true">
                    <PageIllustration />
                </div>

                
               


                {/*  <div className="flex flex-col max-w-3xl mx-auto text-center pb-12 md:pb-16" style={{ alignItems: 'center',marginTop: '100px'  }}>
                <h2 class="text-white text-4xl font-bold font-manrope leading-normal lg:text-start text-center mx-auto" data-aos="fade-up">
                    Quoting Software Coming Soon
                </h2>
                <p class="text-gray-400 text-xl font-normal leading-normal mx-auto lg:text-start text-center"
                                                        data-aos="fade-up">
                                                        For quick service contact Kai at 515-686-7566 or send an email to info@kaicleans.com.
                                                        </p>
                </div>*/}


                {/* Section header */}
                <div className="relativept-32 py-12 pb-10 md:pt-40 md:pb-16">
                <div className="max-w-3xl mx-auto text-center pb-12 md:pb-16">
                    <h2 className="h1 text-4xl mb-4 font-manrope " data-aos="fade-up" style={{ marginTop: '-100px' }}
                    >
                        Quick and Easy Onboarding!
                    </h2>
                    <p className="text-xl font-normal text-gray-400 mb-0" data-aos="fade-up" data-aos-delay="200">
                    For further inquires email us at info@kaicleans.com
                    </p> 
                </div>
                <FormfacadeEmbed

formFacadeURL="https://formfacade.com/include/110568194946322389214/form/1FAIpQLSdvRGosBt11ZESQnbzVukFh3W79CwlZ3Fd0WJRb2dzCfy5MZA/classic.js/?div=ff-compose"

onSubmitForm={() => console.log('Form submitted')}

/>
                </div>


            </main>

            <Banner />

        </div>
    );
}

export default Quote;