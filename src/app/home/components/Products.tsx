"use client";

import { useRouter } from "next/navigation";
import Image from "next/image";
import { motion } from "framer-motion";

import faucetsImg from "./Assests/faucets.jpg";
import showersImg from "./Assests/showers.jpg";
import sanitarywareImg from "./Assests/sanitaryware.jpg";
import mirrorsImg from "./Assests/mirror.webp";
import sinksImg from "./Assests/sinks.jpg";
import diverterImg from "./Assests/diverter.jpg";
import thermostaticImg from "./Assests/thermostatic.jpg";
import accessoriesImg from "./Assests/accessories.webp";

const categories = [
  {
    id: 1,
    name: "Faucets",
    img: faucetsImg,
    route: "/products/faucets",
    description:
      "Choose from modern, stylish, and durable faucets for your home or commercial space.",
  },
  {
    id: 2,
    name: "Sanitaryware",
    img: sanitarywareImg,
    route: "/products/sanitaryware",
    description:
      "Explore a wide range of elegant and water-efficient sanitaryware solutions.",
  },
  {
    id: 3,
    name: "Showers",
    img: showersImg,
    route: "/products/showers",
    description:
      "Upgrade your bathroom with high-performance showers, from rain showers to digital models.",
  },
  {
    id: 4,
    name: "Sinks",
    img: sinksImg,
    route: "/products/sinks",
    description:
      "Discover stylish and functional sinks, from budget-friendly to luxury designs.",
  },
  {
    id: 5,
    name: "Thermostatic Mixers",
    img: thermostaticImg,
    route: "/products/faucets",
    description:
      "Maintain the perfect water temperature effortlessly with our thermostatic mixers.",
  },
  {
    id: 6,
    name: "Diverters",
    img: diverterImg,
    route: "/products/faucets",
    description:
      "Switch water flow seamlessly between taps and showers with our premium diverters.",
  },
  {
    id: 7,
    name: "Mirrors",
    img: mirrorsImg,
    route: "/products/mirrors",
    description:
      "Browse anti-fog, LED-lit, and designer mirrors to enhance your bathroom’s appeal.",
  },
  {
    id: 8,
    name: "Bathroom Accessories",
    img: accessoriesImg,
    route: "/products/accessories",
    description:
      "Upgrade your space with towel racks, soap dispensers, toilet paper holders, and more.",
  },
];

const FeaturedCategories = () => {
  const router = useRouter();

  return (
    <div
      style={{
        textAlign: "center",
        padding: "60px 5%",
        backgroundColor: "#000",
        color: "#fff",
      }}
    >
      <h2
        style={{
          fontSize: "2.5rem",
          color: "#fff",
          marginBottom: "41px",
          fontFamily: "Outfit, sans-serif",
        }}
      >
       Shop by Category
      </h2>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
          gap: "30px",
          maxWidth: "1300px",
          margin: "0 auto",
        }}
      >
        {categories.map((category, index) => (
          <div
            style={{
              borderRadius: "8px",
              transition: "box-shadow 0.3s ease",
              overflow: "hidden",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.boxShadow =
                "0 0 15px rgba(255, 255, 255, 0.2), 0 0 30px rgba(0, 123, 255, 0.2)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.boxShadow = "none";
            }}
          >
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02 }}
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                padding: "20px",
                borderRadius: "8px",
                backgroundColor: "#111",
                cursor: "pointer",
                height: "100%",
              }}
            >
              <Image
                src={category.img}
                alt={category.name}
                width={260}
                height={260}
                style={{
                  objectFit: "cover",
                  borderRadius: "8px",
                  marginBottom: "15px",
                }}
              />
              <h3
                style={{
                  fontSize: "18px",
                  fontWeight: "700",
                  color: "#fff",
                  marginBottom: "10px",
                  fontFamily: "Outfit, sans-serif",
                }}
              >
                {category.name}
              </h3>
              <p
                style={{
                  fontSize: "15px",
                  color: "#ccc",
                  lineHeight: "1.5",
                  fontFamily: "Outfit, sans-serif",
                }}
              >
                {category.description}
              </p>
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturedCategories;
