"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import Particles from "react-tsparticles";

const tabs = [
  "Sanitarywares",
  "Faucets",
  "Mirrors",
  "Accessories",
  "Showers",
  "Sinks",
] as const;

type ProductTab = (typeof tabs)[number];

const products: Record<
  ProductTab,
  { title: string; description: string; image: string }[]
> = {
  Sanitarywares: [
    {
      title: "ZED(One Piece Commode)",
      description:
        "Experience unrivalled comfort with Bidspa's electronic WC. Its automatic lid, energy-saving features, and customizable options elevate your bathroom experience.",
      image: "/images/sanitaryware/products/rocket.png",
    },
    {
      title: "ITALIA(Wall Hang Commode)",
      description:
        "Take your daily routine to the next level with our elegant tabletop washbasin. It seamlessly combines luxury, durability, and style.",
      image: "/images/sanitaryware/products/italia.png",
    },
    {
      title: "Designer Table Top Wash Basin",
      description:
        "Take your daily routine to the next level with our elegant tabletop washbasin. It seamlessly combines luxury, durability, and style.",
      image: "/images/sanitaryware/products/tabletop3004.png",
    },
  ],
  Faucets: [],
  Mirrors: [],
  Accessories: [],
  Sinks: [],
  Showers: [],
};

const ProductShowcase = () => {
  const [activeTab, setActiveTab] = useState<ProductTab>("Sanitarywares");
  const [currentIndex, setCurrentIndex] = useState(0);

  const itemsPerView = 3;
  const totalItems = products[activeTab].length;
  const maxIndex = Math.max(0, totalItems - itemsPerView);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? maxIndex : prev - itemsPerView));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + itemsPerView));
  };

  useEffect(() => {
    setCurrentIndex(0);
  }, [activeTab]);

  return (
    <div
      style={{
        position: "relative",
        backgroundColor: "#000",
        padding: "80px 20px",
        color: "white",
      }}
    >
      {/* Background Particles */}
      <Particles
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
        }}
      />

      <div className="glow-bg" />

      <h2
        style={{
          fontSize: "2.5rem",
          fontWeight: 800,
          textAlign: "center",
          position: "relative",
          zIndex: 1,
        }}
      >
        Our Wide Range of Products
      </h2>

      {/* Tabs */}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "20px",
          flexWrap: "wrap",
          marginTop: 30,
          position: "relative",
          zIndex: 1,
        }}
      >
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            style={{
              padding: "10px 20px",
              border:
                activeTab === tab ? "2px solid #cbd0d4" : "1px solid #444",
              backgroundColor: activeTab === tab ? "#191e21" : "transparent",
              color: "#cbd0d4",
              cursor: "pointer",
              fontWeight: 600,
              borderRadius: "5px",
              transition: "0.3s",
            }}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Product Display */}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          marginTop: 40,
          position: "relative",
          zIndex: 1,
          minHeight: 420,
        }}
      >
        {products[activeTab].length > 0 && (
          <>
            <button
              onClick={handlePrev}
              style={arrowStyle("left")}
              aria-label="Previous"
            >
              ‹
            </button>

            <AnimatePresence mode="wait">
              <motion.div
                key={`${activeTab}-${currentIndex}`}
                initial={{ opacity: 0, x: 40 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -40 }}
                transition={{ duration: 0.5 }}
                style={{
                  display: "flex",
                  gap: "30px",
                  justifyContent: "center",
                  flexWrap: "wrap",
                }}
              >
                {products[activeTab]
                  .slice(currentIndex, currentIndex + itemsPerView)
                  .map((product, i) => (
                    <div className="product-card" key={i}>
                      <Image
                        src={product.image}
                        alt={product.title}
                        width={280}
                        height={180}
                        style={{
                          width: "100%",
                          height: "180px", // ← Fixed height ensures card remains same size
                          objectFit: "contain",
                        }}
                      />
                      <h3>{product.title}</h3>
                      <p>{product.description}</p>
                      <a href="#">Enquire Now ➤</a>
                    </div>
                  ))}
              </motion.div>
            </AnimatePresence>

            <button
              onClick={handleNext}
              style={arrowStyle("right")}
              aria-label="Next"
            >
              ›
            </button>
          </>
        )}
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

        @keyframes floatGlow {
          0%,
          100% {
            transform: translateY(0) scale(1);
            opacity: 0.3;
          }
          50% {
            transform: translateY(-10px) scale(1.05);
            opacity: 0.6;
          }
        }

        .product-card {
          background: #111;
          padding: 20px;
          border-radius: 10px;
          width: 300px;
          color: white;
          text-align: center;
          transition: transform 0.3s, box-shadow 0.3s;
          display: flex;
          flex-direction: column;
          justify-content: space-between; /* pushes button to bottom */
          min-height: 420px; /* ensures all cards are same height */
        }

        .product-card:hover {
          transform: scale(1.03);
          box-shadow: 0 0 15px rgba(78, 168, 255, 0.3);
        }

        .product-card h3 {
          font-size: 1.2rem;
          font-weight: 700;
          margin: 10px 0;
        }

        .product-card p {
          font-size: 0.9rem;
          color: #ccc;
        }

        .product-card a {
          color: #4ea8ff;
          font-weight: 600;
          margin-top: 10px;
          display: inline-block;
        }
      `}</style>
    </div>
  );
};

const arrowStyle = (side: "left" | "right"): React.CSSProperties => ({
  position: "absolute",
  [side]: 10,
  top: "50%",
  transform: "translateY(-50%)",
  background: "none",
  border: "none",
  color: "#4ea8ff",
  fontSize: "3rem",
  cursor: "pointer",
  zIndex: 2,
});

export default ProductShowcase;
