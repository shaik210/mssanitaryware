"use client";
import { useParams } from "next/navigation";
import { useState } from "react";
import { sanitaryData } from "@/app/data/sanitarywareData";
import Image from "next/image";
import Breadcrumbs from "@/app/components/BreadCrum";

import { FaShareAlt } from "react-icons/fa";

export default function ProductPage() {
  const { seriesId, productId } = useParams();
  const products = sanitaryData[seriesId as string] || [];
  const product = products.find((item) => item.id === Number(productId));

  if (!product) return <h1>Product Not Found</h1>;
  const [copied, setCopied] = useState(false);

  const handleShare = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const discountedPrice =
    product.price - (product.price * product.discount) / 100;

  return (
    <>
      <div className="container">
        <div className="breadcrumb-container">
          <Breadcrumbs />
        </div>

        <div className="main-flex">
          {/* Left - Images */}
          <div className="left-image">
            <Image
              src={product.img}
              alt={product.name}
              width={500}
              height={550}
              className="product-image"
            />
          </div>

          {/* Right - Product Details */}
          <div className="right-details">
            <h1 className="product-name">{product.name}</h1>
            <p className="description">{product.description}</p>

            <ul className="feature-list">
              <li>High-quality chrome plating for long-lasting shine.</li>
              <li>Rust & corrosion-resistant for durability.</li>
              <li>Smooth water flow with efficient water-saving technology.</li>
              <li>Easy installation with all necessary fittings included.</li>
            </ul>

            <div className="product-details-text">
              <strong>Product Details:</strong> Chrome Plating | Everlasting shine | Easy to clean | Resists stains
            </div>

            <div className="price">₹{discountedPrice.toFixed(2)}</div>
            <div className="mrp">
              MRP{" "}
              <span className="strikethrough">₹{product.price}</span> {product.discount}% OFF
            </div>

            <div className="button-group">
              <button
                className="inquiry-button"
                onClick={() =>
                  window.open(
                    `https://wa.me/91XXXXXXXXXX?text=I'm interested in this product`,
                    "_blank"
                  )
                }
              >
                WHATSAPP INQUIRY
              </button>

              <div className="share-icon-wrapper">
                <FaShareAlt
                  size={25}
                  color="#000000"
                  className="share-icon"
                  onClick={handleShare}
                />
                {copied && <span className="copied-tooltip">Link Copied!</span>}
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .container {
          width: 100%;
          max-width: 1200px;
          margin: auto;
          padding: 40px 0;
        }
        .breadcrumb-container {
          margin-bottom: 10px;
          padding: 0;
        }
        .main-flex {
          display: flex;
          align-items: flex-start;
          gap: 5px;
        }
        .left-image {
          flex: 1;
          display: flex;
          gap: 15px;
          justify-content: center;
        }
        .product-image {
          width: 500px;
          height: 550px;
          transition: 0.3s;
          object-fit: contain;
        }
        .right-details {
          flex: 1;
        }
        .product-name {
          font-size: 44px;
          font-weight: 700;
          margin-bottom: 5px;
          text-transform: uppercase;
        }
        .description {
          font-size: 16px;
          color: #555;
          margin-bottom: 15px;
          line-height: 1.6;
        }
        .feature-list {
          padding-left: 20px;
          font-size: 16px;
          color: #555;
          margin-bottom: 20px;
        }
        .product-details-text {
          padding: 15px 0;
          margin-bottom: 20px;
          font-size: 16px;
          color: #444;
        }
        .price {
          font-size: 40px;
          font-weight: bold;
          margin-bottom: 10px;
        }
        .mrp {
          font-size: 25px;
          color: #888;
        }
        .strikethrough {
          text-decoration: line-through;
          margin-right: 15px;
        }
        .button-group {
          display: flex;
          gap: 15px;
          margin-top: 40px;
        }
        .inquiry-button {
          border: 2px solid #128c7e;
          color: #128c7e;
          font-weight: bold;
          font-size: 16px;
          padding: 12px 24px;
          background: transparent;
          cursor: pointer;
          text-transform: uppercase;
          width: 100%;
          transition: 0.3s ease-in-out;
        }
        .inquiry-button:hover {
          background-color: #128c7e;
          color: #fff;
        }
        .share-icon-wrapper {
          position: relative;
          display: inline-block;
        }
        .share-icon {
          cursor: pointer;
          background-color: transparent;
          padding: 8px;
          transition: transform 0.3s ease;
        }
        .share-icon:hover {
          transform: scale(1.1);
        }
        .copied-tooltip {
          position: absolute;
          top: -30px;
          left: 50%;
          transform: translateX(-50%);
          background-color: #333;
          color: white;
          padding: 5px 10px;
          border-radius: 5px;
          font-size: 12px;
          white-space: nowrap;
        }

        /* MOBILE RESPONSIVE */
        @media (max-width: 768px) {
          .container {
            padding: 20px 10px;
          }
          .main-flex {
            flex-direction: column;
          }
          .product-image {
            width: 320px;
            height: 350px;
          }
          .right-details {
            margin-top: 20px;
          }
          .product-name {
            font-size: 28px;
          }
          .description,
          .feature-list,
          .product-details-text {
            font-size: 14px;
          }
          .price {
            font-size: 30px;
          }
          .mrp {
            font-size: 18px;
          }
          .button-group {
            flex-direction: column;
            gap: 10px;
          }
          .inquiry-button {
            font-size: 14px;
            padding: 10px 15px;
          }
          .share-icon-wrapper {
            width: 40px;
          }
        }
      `}</style>
    </>
  );
}
