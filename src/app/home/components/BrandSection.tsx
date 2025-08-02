"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const brandLogos = [
  { src: "/images/brands/kohler.jpeg", alt: "Kohler" },
  { src: "/images/brands/parryware.png", alt: "Parryware" },
  { src: "/images/brands/cera.png", alt: "Cera" },
  { src: "/images/brands/hindware.jpeg", alt: "Hindware" },
  { src: "/images/brands/jaquar.webp", alt: "Jaquar" },
  { src: "/images/brands/cityart.jpg", alt: "CityArt" },
  { src: "/images/brands/jindal.png", alt: "Jindal" },
];

const BrandsSection = () => {
  const scrollingLogos = [...brandLogos, ...brandLogos, ...brandLogos];

  return (
    <div
      style={{
        backgroundColor: "#000",
        color: "#fff",
        padding: "60px 5%",
        fontFamily: "Outfit, sans-serif",
      }}
    >
      {/* Main Row */}
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          gap: "40px",
          padding: "40px 100px",
          flexWrap: "wrap",
        }}
      >
        {/* Left Text */}
        <div style={{ flex: "1 1 300px", minWidth: "300px" }}>
          <h2
            style={{
              fontSize: "4.5rem",
              fontWeight: "bold",
              marginBottom: "20px",
              lineHeight: 1.1,
            }}
          >
            We are home <br />
            to the best Brands
          </h2>
          <p
            style={{
              fontSize: "1.1rem",
              color: "#ccc",
              maxWidth: "500px",
              lineHeight: "1.8",
            }}
          >
            Sanitary ware is an indispensable element in every construction
            project. Choose from a wide range of top-tier brands for the best
            quality and performance.
          </p>
        </div>

        {/* Right Image with Animation */}
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          style={{
            maxWidth: "800px",
            boxShadow: "0 4px 20px rgba(0,0,0,0.2)",
            overflow: "hidden",
            // borderRadius: "12px",
            flex: "1 1 300px",
            minWidth: "300px",
          }}
        >
          <Image
            src="/images/brands/brandsimg.jpg"
            alt="Brand Display"
            width={650}
            height={400}
            style={{
              height: "100%",
              width: "100%",
              objectFit: "cover",
              display: "block",
            }}
          />
        </motion.div>
      </div>

      {/* Scrolling Brand Logos */}
      <div
        style={{
          overflow: "hidden",
          width: "100%",
          marginTop: "40px",
          padding: "10px 0",
        }}
      >
        <motion.div
          style={{
            display: "flex",
            gap: "120px",
            width: "fit-content",
          }}
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            duration: 50,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          {scrollingLogos.map((brand, index) => (
            <div
              key={index}
              style={{
                width: "140px",
                height: "80px",
                backgroundColor: "white",
                padding: "8px",
                borderRadius: "2px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Image
                src={brand.src}
                alt={brand.alt}
                width={100}
                height={60}
                style={{
                  objectFit: "contain",
                  width: "100%",
                  height: "100%",
                }}
              />
            </div>
          ))}
        </motion.div>
      </div>

      {/* Responsive Styling */}
      <style jsx>{`
        @media (max-width: 768px) {
          div[style*="display: flex"][style*="padding: 40px 100px"] {
            flex-direction: column !important;
            padding: 20px 20px !important;
          }

          h2 {
            font-size: 2.2rem !important;
            text-align: center;
          }

          p {
            text-align: center;
          }

          div[style*="maxWidth: 800px"] {
            margin-top: 20px;
          }
        }
      `}</style>
    </div>
  );
};

export default BrandsSection;
