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

function SignUp() {
    return (
        <div className="flex flex-col min-h-screen overflow-hidden">

            {/*  Site header */}
            <Header />

            {/*  Page content */}
            <main className="grow">

                {/*  Page illustration */}
                <div className="relative max-w-6xl mx-auto h-0 pointer-events-none" aria-hidden="true">
                    <PageIllustration />
                </div>
                <Banner8 />

                <section className="relative">
                    <div className="max-w-6xl mx-auto px-4 sm:px-6">
                        <div className="pt-32 pb-12 md:pt-40 md:pb-20">

                            {/* Page header 
                            <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
                                <h1 className="h1">Welcome. We exist to make entrepreneurship easier.</h1>
                            </div>*/}

                            {/* About Us*/}
                            <section class="py-0 relative">
                                <div class="w-full max-w-7xl px-4 md:px-5 lg:px-5 mx-auto">
                                    <div class="w-full justify-start items-center gap-12 grid lg:grid-cols-2 grid-cols-1">
                                        <div
                                            class="w-full justify-center items-start gap-6 grid sm:grid-cols-2 grid-cols-1 lg:order-first order-last">
                                            <div class="pt-24 lg:justify-center sm:justify-end justify-start items-start gap-2.5 flex">
                                                <img class=" rounded-xl object-cover" src={Kc0} alt="about Us image" 
                                                     data-aos="fade-up" data-aos-delay="100"/>
                                            </div>
                                            <img class="sm:ml-0 ml-auto rounded-xl object-cover" src={Kc4}
                                                alt="about Us image" 
                                                data-aos="fade-up" data-aos-delay="200"/>
                                        </div>
                                        <div class="w-full flex-col justify-center lg:items-start items-center gap-10 inline-flex">
                                            <div class="w-full flex-col justify-center items-start gap-8 flex">
                                                <div class="w-full flex-col justify-start lg:items-start items-center gap-3 flex">
                                                    <h2
                                                        class="text-white text-4xl font-bold font-manrope leading-normal lg:text-start text-center"
                                                        data-aos="fade-up">
                                                        Empowering Each Other to Succeed</h2>
                                                    <p class="text-gray-400 text-xl font-normal leading-relaxed lg:text-start text-center"
                                                        data-aos="fade-up">
                                                        At Kai cleans we are revolutionizing the cleaning services industry with our modern approach to business and unparalleled customer experience.
                                                        Our early adopters have the opportunity to shape the direction of our company while also earning discounts for their valuable feedback.
                                                        </p>
                                                </div>
                                                <div class="w-full lg:justify-start justify-center items-center sm:gap-10 gap-2 inline-flex" >
                                                    <div class="flex-col justify-start items-start inline-flex"  data-aos="fade-up" data-aos-delay="300" >
                                                        <h3 class="text-white text-4xl font-bold font-manrope leading-normal">5+</h3>
                                                        <h6 class="text-gray-400 text-base font-normal leading-relaxed">Years of Experience</h6>
                                                    </div>
                                                    <div class="flex-col justify-start items-start inline-flex"  data-aos="fade-up" data-aos-delay="400" >
                                                        <h4 class="text-white text-4xl font-bold font-manrope leading-normal">400+</h4>
                                                        <h6 class="text-gray-400 text-base font-normal leading-relaxed">Satisfied Clients</h6>
                                                    </div>
                                                    <div class="flex-col justify-start items-start inline-flex"  data-aos="fade-up" data-aos-delay="500" >
                                                        <h4 class="text-white text-4xl font-bold font-manrope leading-normal">250+</h4>
                                                        <h6 class="text-gray-400 text-base font-normal leading-relaxed">Repeat Appointments</h6>
                                                    </div>
                                                </div>
                                            </div>
                                            
                                            <Link to="https://www.google.com/search?q=kai+cleans&rlz=1C5CHFA_enUS871US871&oq=kai+cleans&gs_lcrp=EgZjaHJvbWUyCQgAEEUYORiABDIMCAEQIxgnGIAEGIoFMg0IAhAAGIYDGIAEGIoFMgoIAxAAGIAEGKIEMgoIBBAAGIAEGKIEMgYIBRBFGD0yBggGEEUYPDIGCAcQRRg80gEIMTMxNWowajeoAgCwAgA&sourceid=chrome&ie=UTF-8#lrd=0x4e5565ff4a9129ab:0xa857b9fe74acd199,1,,,,">
                                            <button
                                                class="sm:w-fit w-full px-3.5 py-2 bg-blue-600 hover:bg-white transition-all duration-700 ease-in-out rounded-lg shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] justify-center items-center flex" data-aos="fade-up" data-aos-delay="300">
                                                <span class="px-1.5 text-white hover:text-blue-600 text-sm font-medium leading-6">Read Reviews</span>
                                            </button>
                                            </Link>
                                            
                                        </div>
                                    </div>
                                </div>
                            </section>



                        </div>
                    </div>
                </section>

            </main>

            <Banner />

        </div>
    );
}

export default SignUp;