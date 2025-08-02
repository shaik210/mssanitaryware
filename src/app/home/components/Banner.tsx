"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import banner1 from "./Assests/banner1.jpg";
import banner2 from "./Assests/banner2.jpg";
import banner3 from "./Assests/banner3.jpg";
import banner4 from "./Assests/banner4.jpg";
import banner5 from "./Assests/banner5.jpg";

const sections = [
  {
    img: banner1,
    caption: "Elegant Bathroom Ware",
    title: "Premium Quality & Elegant Designs",
    text: "Our sanitary ware collection is crafted for durability and sophistication. Whether you seek modern aesthetics or timeless elegance, we have the perfect solution to redefine your space.",
  },
  {
    img: banner2,
    caption: "Stylish & Functional",
    title: "Innovative Bathroom Solutions",
    text: "Upgrade your space with our stylish and functional sanitary ware, designed to blend elegance with practicality.",
  },
  {
    img: banner3,
    caption: "Luxury Comfort",
    title: "Luxury & Comfort for Every Home",
    text: "From contemporary to classic, we offer a variety of designs that elevate your bathroom experience.",
  },
  {
    img: banner4,
    caption: "Eco-smart Choices",
    title: "Sustainable & Smart Designs",
    text: "Eco-friendly and modern, our products ensure a sustainable and luxurious lifestyle.",
  },
  {
    img: banner5,
    caption: "Modern Essentials",
    title: "Designed for Modern Living",
    text: "Our premium-quality sanitary solutions are crafted to enhance comfort and aesthetics in every home.",
  },
];

const LandingPage = () => {
  return (
    <div
      style={{ overflowX: "hidden", maxWidth: "100vw", background: "#0e0e0e" }}
    >
      {sections.map((section, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{
            display: "flex",
            flexWrap: "wrap",
            alignItems: "center",
            justifyContent: "center",
            padding: "50px 5%",
            background: index % 2 === 0 ? "#1a1a1a" : "#121212",
            flexDirection: index % 2 === 0 ? "row" : "row-reverse",
            boxSizing: "border-box",
          }}
        >
          {/* Image Section */}
          <div
            style={{
              flex: 1,
              minWidth: "300px",
              maxWidth: "500px",
              overflow: "hidden",
              // borderRadius: "12px",
              position: "relative",
            }}
          >
            <Image
              src={section.img}
              alt={section.title}
              width={600}
              height={350}
              placeholder="blur"
              style={{
                display: "block",
                width: "100%",
                height: "auto",
                objectFit: "cover",
              }}
            />
            {/* Caption Overlay */}
            <div
              style={{
                position: "absolute",
                top: "1px",
                right: "1px",
                color: "#fff0ff",
                padding: "10px 15px",

                fontSize: "1.2rem ",
                fontWeight: 500,
                fontFamily: "Outfit, sans-serif",
              }}
            >
              {section.caption}
            </div>
          </div>

          {/* Text Content */}
          <div
            style={{
              flex: 1,
              padding: "0 40px",
              minWidth: "300px",
              maxWidth: "600px",
            }}
          >
            <h2
              style={{
                fontSize: "clamp(1.8rem, 5vw, 2.5rem)",
                fontWeight: "700",
                color: "#fff",
                fontFamily: "Outfit, sans-serif",
                textAlign: "center",
              }}
            >
              {section.title}
            </h2>
            <p
              style={{
                color: "#bbb",
                fontSize: "18px",
                lineHeight: "1.6",
                fontFamily: "Outfit, sans-serif",
                textAlign: "center",
                maxWidth: "500px",
                margin: "auto",
              }}
            >
              {section.text}
            </p>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default LandingPage;
