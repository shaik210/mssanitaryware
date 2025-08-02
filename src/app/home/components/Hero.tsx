"use client";
import React from "react";
import Image from "next/image";
import heroimg from "@/app/components/Assets/images/hero.jpg";
import { useRouter } from "next/navigation";

const Home = () => {
  const Router = useRouter();
  return (
    <div
      style={{
        position: "relative",
        width: "100%",
        overflow: "hidden",
        paddingTop: "80px",
      }}
    >
      {/* Hero Image */}
      <div
        style={{
          position: "relative",
          width: "100%",
          height: "90vh",
        }}
      >
        <Image
          src={heroimg}
          alt="Sanitarywares"
          layout="fill"
          objectFit="cover"
          quality={100}
          priority
          className="hero-image"
        />
      </div>

      {/* Text Content Block (Hashtag + Caption + Button) */}
      <div className="hero-content">
        <h1 className="hero-hashtag">#StyleSanctuary</h1>
        <p className="hero-text">
          Transform Your Bathroom with Elegant and Durable Sanitaryware
        </p>
        <button
          className="explore-button"
          onClick={() => Router.push("/products")}
        >
          Explore Products
        </button>
      </div>

      {/* Styles */}
      <style jsx>{`
        .hero-content {
          position: absolute;
          top: 53%;
          left: 43%;
          transform: translateY(-50%);
          z-index: 2;
          text-align: left;
        }

        .hero-hashtag {
          font-family: "Outfit", sans-serif;
          font-weight: 800;
          font-size: 5.5rem;
      -webkit-text-stroke: 2px #191e21;

          color: transparent;
          margin: 0 0 2px 0;
        }

        .hero-text {
          font-family: "Outfit", sans-serif;
          font-size: 2rem;
          font-weight: 800;
          color: #191e21;
          margin: 0 0 20px 0;
          max-width: 600px;
        }

        .explore-button {
          background-color: #191e21;
          color: #fff;
          font-weight: 500;
          padding: 10px 20px;
          font-size: 0.8rem;
          border: none;
          border-radius: 5px;
          cursor: pointer;
        }

        @media (max-width: 768px) {
          .hero-content {
            top: 50%;
            left: 5%;
          }

          .hero-hashtag {
            font-size: 2rem;
            -webkit-text-stroke: 1.5px #191e21;
          }

          .hero-text {
            font-size: 1.5rem;
            margin-bottom: 15px;
          }

          .explore-button {
            font-size: 0.8rem;
            padding: 10px 15px;
          }

          .hero-image {
            object-fit: contain !important;
            height: 40vh !important;
          }
        }
      `}</style>
    </div>
  );
};

export default Home;
