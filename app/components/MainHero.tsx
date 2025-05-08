'use client';

import { useEffect, useState } from 'react';

export default function MainHero() {
  const images = [
    // '/images/img1.jpg',
    // '/images/img2.jpg',
    // '/images/img3.jpg',
    // '/images/img4.jpg',
    // '/images/img5.jpg',
    // '/images/img6.jpg',
    // '/images/img7.jpg',
    // '/images/img8.jpg',
    // '/images/img9.jpg',
    // '/images/img10.jpg',
    // '/images/img11.jpg',
    // '/images/img12.jpg',
    // '/images/img13.jpg',
    // '/images/img14.jpg',
    '/images/img15.jpg',
    '/images/img16.jpg',
    '/images/img17.jpg',
    '/images/img18.jpg',
    '/images/img19.jpg',
    '/images/img20.jpg',
  ];

  const [current, setCurrent] = useState(0);

  //   useEffect(() => {
  //     const interval = setInterval(() => {
  //       setCurrent((prev) => prev + 1);
  //     }, 5000);
  //     return () => clearInterval(interval);
  //   }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      className="relative text-white text-center h-screen px-6 bg-cover bg-center"
      style={{
        backgroundImage: `url(${images[current]})`,
      }}
    >
      <div className="absolute inset-0 bg-black opacity-40"></div>
      <div className="relative flex-col justify-center items-center z-10 max-w-2xl mx-auto">
        <h3>{images[current]}</h3>
        <h2 className="text-4xl md:text-5xl font-extrabold mb-4 leading-tight drop-shadow">
          Professional Tree Surgery
        </h2>
        <p className="text-lg md:text-xl mb-6 text-white drop-shadow">
          Trusted tree care for homes and businesses across [your region].
        </p>
        <a
          href="#contact"
          className="inline-block bg-primary hover:bg-green-600 transition px-8 py-3 rounded-full font-semibold text-white text-lg"
        >
          Get a Free Quote
        </a>
      </div>
    </section>
  );
}

// 'use client';

// import { useState, useEffect } from 'react';

// const HERO_IMAGES = [
//   '/images/img1.jpg',
//   '/images/img2.jpg',
//   '/images/img3.jpg',
// ];

// export default function MainHero() {
//   const [current, setCurrent] = useState(0);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrent((prev) => (prev + 1) % HERO_IMAGES.length);
//     }, 5000); // change every 5 seconds
//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <section
//       aria-label="Hero section showcasing tree services"
//       className="relative overflow-hidden text-white text-center py-24 px-6"
//     >
//       {/* Background image layer */}
//       <div
//         style={{
//           backgroundImage: `url(${HERO_IMAGES[current]})`,
//         }}
//         className="absolute inset-0 bg-cover bg-center transition-opacity duration-1000"
//       />
//       {/* Overlay to darken for text contrast */}
//       <div className="absolute inset-0 bg-black bg-opacity-40" />
//       {/* Content */}
//       <div className="relative z-10 max-w-2xl mx-auto">
//         <h2 className="text-4xl md:text-5xl font-extrabold mb-4 leading-tight">
//           Professional Tree Surgery
//         </h2>
//         <p className="text-lg md:text-xl mb-6">
//           Trusted tree care for homes and businesses across your region.
//         </p>
//         <a
//           href="#contact"
//           className="inline-block bg-primary hover:bg-green-600 transition px-8 py-3 rounded-full font-semibold text-white text-lg"
//         >
//           Get a Free Quote
//         </a>
//       </div>
//     </section>
//   );
// }
