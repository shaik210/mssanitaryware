"use client";

import Image from "next/image";
import sideImg from "./Assests/showers.jpg";
import { motion, AnimatePresence } from "framer-motion";
import Particles from "react-tsparticles";

const ReadMore = () => {
  return (
    <><Particles
          options={{
              fullScreen: false,
              background: { color: "#000" },
              particles: {
                  color: { value: "#183c7e" },
                  number: { value: 20 },
                  size: { value: 2 },
                  move: { enable: true, speed: 0.6 },
              },
          }}
          style={{
              position: "absolute",
              zIndex: 0,
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
          }} />
          <div className="glow-bg" />
          <div className="hero-container">
              <div className="text-section">
                  <h1>
                      We are here to
                      <br />
                      please you
                      <br />
                      always !
                  </h1>
                  <h2>#Sanitation</h2>
                  <p>
                      Sanitary ware is an essential need for any building. So many items
                      compose sanitary ware, from faucets, showers and basins to mirrors and sinks and so
                      much more.
                  </p>
                  <button>Read More ➤</button>
              </div>

              <div className="image-section">
                  <Image
                      src={sideImg}
                      alt="Sanitary ware"
                      fill
                      className="responsive-image"
                      priority />
              </div>

              <style jsx>{`
      .glow-bg {
          position: absolute;
          top: 10%;
          left: 50%;
          width: 400px;
          height: 400px;
          background: radial-gradient(circle, #183c7e 0%, transparent 70%);
          z-index: 0;
          animation: floatGlow 5s ease-in-out infinite;
          filter: blur(80px);
          opacity: 0.2;
          transform: translateX(-50%);
        }
        .hero-container {
          display: flex;
          flex-direction: row;
          width: 100%;
          height: 90vh;
          background: #000;
          color: #fff;
        }

        .text-section {
          flex: 1;
          padding: 0 120px;
          display: flex;
          flex-direction: column;
          justify-content: center;
          z-index: 1;
        }

        .text-section h1 {
          font-size: 3rem;
          font-weight: bold;
          color: #fff;
          margin: 0 0 20px 0;
        }

        .text-section h2 {
          font-size: 5rem;
          font-weight: 900;
          color: transparent;
          -webkit-text-stroke: 1px #fff;
          margin:  10px 0 ;
        }

        .text-section p {
          font-size: 2 rem;
          color: #ccc;
          max-width: 500px;
          margin-bottom: 28px;
        }

        .text-section button {
          background-color: #191e21;
          color: #fff;
          font-weight: 500;
          padding: 10px 20px;
          font-size: 0.9rem;
          border: none;
          border-radius: 5px;
          cursor: pointer;
          width: 150px;       }

        .image-section {
          flex: 1;
          position: relative;
          min-height: 100%;
        }

        .responsive-image {
          object-fit: cover;
        }

        @media screen and (max-width: 768px) {
          .hero-container {
            flex-direction: column-reverse;
            height: auto;
          }

          .image-section {
            height: 300px;
            min-height: 300px;
          }

          .responsive-image {
            object-fit: contain; /* ✅ don't crop image on mobile */
          }

          .text-section {
            padding: 30px;
          }

          .text-section h1 {
            font-size: 2rem;
          }

          .text-section h2 {
            font-size: 2.5rem;
            -webkit-text-stroke: 1px #fff;
          }
        }
      `}</style>
          </div></>
  );
};

export default ReadMore;
