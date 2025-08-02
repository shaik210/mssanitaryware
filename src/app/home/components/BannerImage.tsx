"use client";

import Image from "next/image";
import banner from "./Assests/Banner.jpg";

const BannerImage = () => {
  return (
    <div className="banner-container">
      {/* Background Image */}
      <Image
        src={banner}
        alt="Banner Image"
        fill
        style={{
          objectFit: "cover",
          objectPosition: "center",
        }}
        priority
      />

      {/* Dark Overlay */}
      <div className="overlay"></div>

      {/* Tagline */}
      <div className="overlay-text">
        Redefining Spaces with Modern Sanitary Solutions
      </div>

      {/* Caption */}
      <div className="caption">
        We source high-quality bathroom solutions from trusted manufacturers,
        ensuring durability, hygiene, and modern aesthetics for your home.
      </div>

      {/* CSS Styling */}
      <style jsx>{`
        .banner-container {
          position: relative;
          width: 100%;
          height: 100vh;
          overflow: hidden;
        }

        .overlay {
          position: absolute;
          top: 0;
          left: 0;
          height: 100%;
          width: 100%;
          background: rgba(0, 0, 0, 0.4);
          z-index: 1;
        }

        .overlay-text {
          position: absolute;
          top: 30%;
          left: 50%;
          transform: translateX(-50%);
          z-index: 2;
          color: white;
          font-size: 3.5rem;
          font-weight: 700;
          text-align: center;
          text-shadow: 2px 2px 8px rgba(0, 0, 0, 0.6);
          font-family: "Outfit", sans-serif;
          max-width: 100%;
        }

        .caption {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translateX(-50%);
          z-index: 2;
          color: white;
          font-size: 1.3rem;
          font-weight: 300;
          text-align: center;
          text-shadow: 1px 1px 6px rgba(0, 0, 0, 0.5);
          font-family: "Outfit", sans-serif;
          max-width: 90%;
        }

        @media (max-width: 768px) {
          .overlay-text {
            font-size: 2rem;
            top: 25%;
          }

          .caption {
            font-size: 1rem;
            top: 45%;
          }
        }

        @media (max-width: 480px) {
          .overlay-text {
            font-size: 1.5rem;
            top: 25%;
            align-items: center;
            padding: 0px;
            width: 90%;
          }

          .caption {
            font-size: 0.9rem;
            top: 38%;
            width: 100%;
            padding: 0 15px;
          }
        }
      `}</style>
    </div>
  );
};

export default BannerImage;
