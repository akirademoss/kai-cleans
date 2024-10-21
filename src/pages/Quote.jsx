import React from 'react';
import { Link } from 'react-router-dom';

import Header from '../partials/Header';
import PageIllustration from '../partials/PageIllustration';
import Banner from '../partials/Banner';
import Banner8 from '../partials/Banner8';

import Kc0 from '../images/kc0.jpg';
import Kc1 from '../images/kc1.png';
import Kc2 from '../images/kc2.jpg';
import Kc3 from '../images/kc3.png';
import Kc4 from '../images/kc4.jpg';

function Quote() {
    return (
        <div className="flex flex-col min-h-screen overflow-hidden">

            {/*  Site header */}
            <Header />

            {/*  Page content */}
            <main className="grow text-center items-center">

                {/*  Page illustration */}
                <div className="relative max-w-6xl mx-auto h-0 pointer-events-none" aria-hidden="true">
                    <PageIllustration />
                </div>
                <Banner8 />
                <div className="flex items-center text-center">
                <h2 class="text-white text-4xl font-bold font-manrope leading-normal lg:text-start text-center mx-auto" data-aos="fade-up">
                    Quoting Software Coming Soon
                </h2>
                </div>




            </main>

            <Banner />

        </div>
    );
}

export default Quote;