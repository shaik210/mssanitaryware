"use client";
import Image from "next/image";

import wallmixerImg from "./Assests/wallmixers.jpg";
import cammodeImg from "./Assests/commode.jpg";
import wallmountImg from "./Assests/wallmountbasin.avif";
import handwashImg from "./Assests/handwash.jpg";
import showersImg from "./Assests/rainshower.jpeg";
import mirrorImg from "./Assests/mirror.jpg";

const bestSellingProducts = [
  {
    id: 1,
    name: "Rain Shower",
    img: showersImg,
    price: "₹3,999",
    description: "High-pressure rain shower with sleek modern design and durability.",
  },
  {
    id: 2,
    name: "Wall Mount Basin",
    img: wallmountImg,
    price: "₹2,499",
    description: "Elegant ceramic wall-mounted basin for a stylish bathroom look.",
  },
  {
    id: 3,
    name: "Advanced Wall Mixer",
    img: wallmixerImg,
    price: "₹5,999",
    description: "Smart water temperature control with anti-scalding protection.",
  },
  {
    id: 4,
    name: "Designer LED Mirror",
    img: mirrorImg,
    price: "₹4,499",
    description: "Anti-fog LED mirror with touch sensor and adjustable brightness.",
  },
  {
    id: 5,
    name: "Imported Handwash",
    img: handwashImg,
    price: "₹1,999",
    description: "Imported ceramic hand wash, stylish & durable with a premium glazed finish.",
  },
  {
    id: 6,
    name: "Commode",
    img: cammodeImg,
    price: "₹1,999",
    description: "Seamless design with a soft-close lid, water-saving flush, and ergonomic comfort.",
  },
];

const BestSellingProducts = () => {
  return (
    <div className="best-selling-container">
      <style>
        {`
          .best-selling-container {
            text-align: center;
            padding: 50px 20px;
            background-color: #111;
          }

          .best-selling-title {
            font-size: 32px;
            font-weight: 700;
            color: #fff;
            font-family: "Outfit", sans-serif;
            margin-bottom: 30px;
          }

          .productsGrid {
            display: grid;
            grid-template-columns: repeat(6, 1fr);
            gap: 20px;
            justify-content: center;
          }

          @media (max-width: 1024px) {
            .productsGrid {
              grid-template-columns: repeat(3, 1fr);
            }
          }

          @media (max-width: 639px) {
            .productsGrid {
              grid-template-columns: repeat(2, 1fr);
            }
          }

          .productCard {
            background-color: #222;
            border-radius: 10px;
            padding: 20px;
            text-align: center;
            transition: transform 0.3s ease;
            box-shadow: 0 6px 12px rgba(0, 0, 0, 0.4);
          }

          .productCard:hover {
            transform: translateY(-5px);
          }

          .productImage {
            object-fit: cover;
            border-radius: 8px;
            width: 100%;
            height: 150px;
          }

          .productName {
            font-size: 18px;
            font-weight: 600;
            color: #fff;
            font-family: "Outfit", sans-serif;
            margin-top: 12px;
          }

          .productDescription {
            font-size: 14px;
            color: #ccc;
            font-family: "Outfit", sans-serif;
            margin-top: 8px;
          }
        `}
      </style>

      <h2 className="best-selling-title">Our Best Selling Products</h2>

      <div className="productsGrid">
        {bestSellingProducts.map((product) => (
          <div key={product.id} className="productCard">
            <Image
              src={product.img}
              alt={product.name}
              width={300}
              height={200}
              className="productImage"
            />
            <h3 className="productName">{product.name}</h3>
            <p className="productDescription">{product.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BestSellingProducts;
