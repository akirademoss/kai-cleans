import React from 'react';

function FeaturesBlocks() {
  return (
    <section>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20">

          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
            <h2 className="h2 mb-4 font-manrope">No Stress House Cleaning Services.</h2>
            <p className="text-xl font-normal text-gray-400">At Kai Cleans, we transform your home into a spotless sanctuary. Our feng shui-trained experts do more than clean – they enhance your lifestyle. </p> 
            <br></br>
            <p className="text-xl font-normal text-gray-400"> With unmatched attention to detail, we free your time for what matters most: career, family, and passions. Experience the difference with Kai Cleans, where exceptional cleaning creates exceptional living.
            </p>
          </div>

          {/* Items */}
          <div className="max-w-sm mx-auto grid gap-8 md:grid-cols-2 lg:grid-cols-3 lg:gap-16 items-start md:max-w-2xl lg:max-w-none" data-aos-id-blocks>

            {/* 1st item */}
            <div className="relative flex flex-col items-center" data-aos="fade-up" data-aos-anchor="[data-aos-id-blocks]">
              <svg className="w-16 h-16 mb-4" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
                <rect className="fill-current text-blue-800" width="64" height="64" rx="32" />
                <path className="stroke-current text-blue-100" d="M30 39.313l-4.18 2.197L27 34.628l-5-4.874 6.91-1.004L32 22.49l3.09 6.26L42 29.754l-3 2.924" strokeLinecap="square" strokeWidth="2" fill="none" fillRule="evenodd" />
                <path className="stroke-current text-blue-300" d="M43 42h-9M43 37h-9" strokeLinecap="square" strokeWidth="2" />
              </svg>
              <h4 className="h4 mb-2 font-manrope">Quality Service</h4>
              <p className="text-lg text-gray-400 text-center font-manrope">Your satisfaction is our top priority. We’ll always do our best to provide you the quality you want with the respect you deserve.</p>
            </div>

            {/* 2nd item */}
            <div className="relative flex flex-col items-center" data-aos="fade-up" data-aos-delay="100" data-aos-anchor="[data-aos-id-blocks]">
              <svg className="w-16 h-16 mb-4" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
                <circle className="fill-current text-blue-800" cx="32" cy="32" r="32" />
                <path className="stroke-current text-blue-100" strokeWidth="2" strokeLinecap="square" d="M21 23h22v18H21z" fill="none" fillRule="evenodd" />
                <path className="stroke-current text-blue-300" d="M26 28h12M26 32h12M26 36h5" strokeWidth="2" strokeLinecap="square" />
              </svg>
              <h4 className="h4 mb-2 font-manrope">Convenient Scheduling</h4>
              <p className="text-lg text-gray-400 text-center font-manrope">Relax and let us worry about your house cleaning. You can count on us to be there when we say we’ll be there.</p>
            </div>



            {/* 4th item */}
            <div className="relative flex flex-col items-center" data-aos="fade-up" data-aos-delay="300" data-aos-anchor="[data-aos-id-blocks]">
              <svg className="w-16 h-16 mb-4" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
                <rect className="fill-current text-blue-800" width="64" height="64" rx="32" />
                <g transform="translate(22 21)" strokeLinecap="square" strokeWidth="2" fill="none" fillRule="evenodd">
                  <path className="stroke-current text-blue-100" d="M17 22v-6.3a8.97 8.97 0 003-6.569A9.1 9.1 0 0011.262 0 9 9 0 002 9v1l-2 5 2 1v4a2 2 0 002 2h4a5 5 0 005-5v-5" />
                  <circle className="stroke-current text-blue-300" cx="13" cy="9" r="3" />
                </g>
              </svg>
              <h4 className="h4 mb-2 font-manrope">Kind, Friendly Staff</h4>
              <p className="text-lg text-gray-400 text-center font-manrope">You can reach out to us via phone, text, email, and social media. You’ll always get a fast, friendly response!</p>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}

export default FeaturesBlocks;
