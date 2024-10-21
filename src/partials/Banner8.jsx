import React from "react";
import Kc0 from '../images/kc0.jpg';
        {/*  style={{borderBottom: '3px dotted white'}}*/}
const Banner8 = () => {
    return (
        <header className=" w-full z-30">
        <div className="mx-auto container py-12 px-6 xl:px-0 flex justify-center items-center flex-col" data-aos="fade-up" style={{paddingBottom: "0px", width: '100%'}}>
            <div className="flex justify-between bg-gray-50 items-stretch flex-row relative" style={{width: '100%'}}>
                <div className="flex items-center bg-gray-600 justify-center" >
                    <p className="transform flex flex-shrink-0 -rotate-90 text-2xl font-semibold tracking-wide leading-normal text-white">10% OFF</p>
                </div>
                <div className="flex justify-center items-start flex-col xl:w-2/5 md:w-5/12 xl:px-7 px-6 md:px-0 md:py-0 py-5">
                    <div>
                        <p className="text-3xl xl:text-4xl font-semibold leading-9 text-gray-800">Act before it’s too late!</p>
                    </div>
                    <div className="xl:mt-4 mt-2">
                        <p className="text-base xl:text-xl leading-7 text-gray-600 pr-4">Take an additional 10% off your first clean!</p>
                    </div>
                </div>
                <div className="hidden md:block h-44 md:h-60 xl:h-72">
                    <img className="hidden h-full xl:block" src={Kc0} alt="pexels-dmitry-zvolskiy-2082090-1" style={{height: '100%'}} />
                    <img className="xl:hidden h-full" src={Kc0} alt="pexels-dmitry-zvolskiy-2082090-1-1" />
                </div>
            </div>
            <div className="md:hidden mt-6 w-full">
                {/*<img src={Kc2} alt="pexels-dmitry-zvolskiy-2082090-1" className="w-full" /> */}
            </div>
        </div>
        </header>
    );
};

export default Banner8;