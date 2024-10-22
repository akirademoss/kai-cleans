import React from "react";
import Logo from '../images/kc-logo2.png';

function Footer2() {
    return (
      <>
        <div className="py-12 px-4">
          <div className="lg:max-w-[1440px] md:max-w-[744px] max-w-[375px] mx-auto bg-white relative lg:px-10 md:px-6 px-4 py-7">
            <div className="lg:max-w-[1280px] md:max-w-[696px] max-w-[343px] mx-auto bg-gray-200">
              <div className="lg:flex md:flex block justify-between items-center ">
                <div className="md:p-10 p-4">
                  <p className="text-base leading-none text-gray-800">
                    Refer a Friend
                  </p>
                  <p className="text-3xl font-semibold leading-9 text-gray-800 py-4">
                    Give $50, Get $50
                  </p>
                  <p className="text-base leading-normal text-gray-600">
                    Give your friend $50 off their first clean and get $50 towards your next clean!
                    <br />
                    Simply have them mention your name in the quoting process !!!
                  </p>
                </div>
                <div className="md:p-4 p-4 flex flex-col items-center" >
                  <img
                    src={Logo}
                    className="h-20 w-20 "
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
  
  export default Footer2;