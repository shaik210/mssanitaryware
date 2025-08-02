"use client";
import { useEffect, useRef } from "react";
import React from "react";
import FeaturedCategories from "../../app/home/components/Products";
import banner from "./faucets/Assests/banner.jpg";
import Image from "next/image";

const Products = () => {
  const categoriesRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (categoriesRef.current) {
        categoriesRef.current.scrollIntoView({ behavior: "smooth" });
      }
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div style={{ maxWidth: "100%" }}>
      {/* Banner Section */}
      <div className="banner-container">
        <Image src={banner} alt="Product Banner" layout="fill" objectFit="cover" />

        {/* Responsive Text Overlay */}
        <div className="banner-text">
          <h1>Explore Our Products</h1>
          <p>Browse through our Categories of Faucets, Showers, Sinks, Mirrors, and Sanitaryware.</p>
        </div>
      </div>

      {/* Categories Section - Auto-scrolls here on load */}
      <div ref={categoriesRef} style={{ marginTop: "40px" }}>
        <FeaturedCategories />
      </div>

      {/* Responsive Styling */}
      <style jsx>{`
        .banner-container {
          width: 100%;
          height: 70vh;
          position: relative;
          overflow: hidden;
        }

        .banner-text {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          color: white;
          text-align: center;
          background-color: rgba(0, 0, 0, 0.5);
          padding: 20px 40px;
          border-radius: 8px;
          max-width: 80%;
        }

        .banner-text h1 {
          font-size: 36px;
          font-weight: bold;
        }

        .banner-text p {
          font-size: 18px;
          margin-top: 10px;
        }

        @media (max-width: 768px) {
          .banner-container {
            height: 70vh;
          }

          .banner-text {
            padding: 15px 20px;
            max-width: 90%;
          }

          .banner-text h1 {
            font-size: 20px;
          }

          .banner-text p {
            font-size: 12px;
          }
        }
      `}</style>
    </div>
  );
};

export default Products;
