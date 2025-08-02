"use client";
import { useParams } from "next/navigation";
import { useState } from "react";
import { seriesData } from "@/app/data/faucetData";
import Image from "next/image";
import Breadcrumbs from "@/app/components/BreadCrum";
import { FaShareAlt } from "react-icons/fa";
import { useRouter } from "next/navigation";
import { useQuoteStore } from "@/app/store/quoteStore";
import { useQuoteModal } from "@/app/store/quoteModalStore";

export default function ProductPage() {
  const { seriesId, productId } = useParams();
  const products = seriesData[seriesId as string] || [];
  const product = products.find((item) => item.id === Number(productId));
  if (!product) return <h1>Product Not Found</h1>;
  const discountedPrice =
    product.price - (product.price * product.discount) / 100;
  const router = useRouter();
  const { addToQuote } = useQuoteStore();
  const { openModal } = useQuoteModal();

  const [copied, setCopied] = useState(false);

  const handleShare = async () => {
    try {
      await navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (error) {
      console.error("Failed to copy link:", error);
    }
  };

  return (
    <div className="product-container">
      <div className="breadcrumb-container">
        <Breadcrumbs />
      </div>

      <div className="product-content">
        {/* Left - Images */}
        <div className="product-image-container">
          <Image
            src={product.img}
            alt={product.name}
            width={500}
            height={550}
            className="product-image"
          />
        </div>

        {/* Right - Product Details */}
        <div className="product-details">
          <h1 className="product-title">{product.name}</h1>
          <p className="product-description">{product.description}</p>

          <ul className="product-features">
            <li>High-quality chrome plating for long-lasting shine.</li>
            <li>Rust & corrosion-resistant for durability.</li>
            <li>Smooth water flow with efficient water-saving technology.</li>
            <li>Easy installation with all necessary fittings included.</li>
          </ul>

          {/* Pricing */}
          <div className="product-extra-details">
            <p>
              <strong>Product Details:</strong> Chrome Plating | Everlasting
              shine | Easy to clean | Resists stains
            </p>
          </div>

          <div className="product-price">₹{discountedPrice.toFixed(2)}</div>
          <div className="product-mrp">
            MRP <span className="product-mrp-strike">₹{product.price}</span>
            {product.discount}% OFF
          </div>

          {/* Buttons */}
          <div className="button-container">
            <button
              className="whatsapp-button"
              onClick={() =>
                window.open(
                  `https://wa.me/91XXXXXXXXXX?text=I'm interested in this product`,
                  "_blank"
                )
              }
            >
              WHATSAPP INQUIRY
            </button>
            <button
              className="whatsapp-button"
              style={{ borderColor: "#007bff", color: "#007bff" }}
              onClick={() => {
                addToQuote({
                  id: `${product.name}-${product.id}`,
                  name: product.name,
                  price: discountedPrice,
                  image: product.img,
                  quantity: 1,
                });
                openModal();
              }}
            >
              ADD TO QUOTE
            </button>
            <FaShareAlt
              size={25}
              color="#000000"
              className="share-icon"
              onClick={handleShare}
            />

            {/* Link Copied Message */}
            {copied && <span className="copied-message">Link Copied!</span>}
          </div>
        </div>
      </div>

      {/* Mobile Responsive Styles */}
      <style>{`
        .product-container {
          width: 100%;
          max-width: 1200px;
          margin: auto;
          padding: 40px 0;
        }

        .breadcrumb-container {
          margin-bottom: 10px;
        }

        .product-content {
          display: flex;
          align-items: flex-start;
          gap: 20px;
        }

        .product-image-container {
          flex: 1;
        }

        .product-image {
          width: 500px;
          height: 550px;
          object-fit: cover;
        }

        .product-details {
          flex: 1;
        }

        .product-title {
          font-size: 44px;
          font-weight: 700;
          margin-bottom: 5px;
          text-transform: uppercase;
        }

        .product-description {
          font-size: 16px;
          color: #555;
          margin-bottom: 15px;
          line-height: 1.6;
        }

        .product-features {
          padding-left: 20px;
          font-size: 16px;
          color: #555;
          margin-bottom: 20px;
        }

        .product-extra-details {
          padding: 15px 0;
          margin-bottom: 20px;
          font-size: 16px;
          color: #444;
        }

        .product-price {
          font-size: 40px;
          font-weight: bold;
          margin-bottom: 10px;
        }

        .product-mrp {
          font-size: 25px;
          color: #888;
        }

        .product-mrp-strike {
          text-decoration: line-through;
          margin-right: 15px;
        }

        /* 📌 Buttons in a Single Line */
        .button-container {
          display: flex;
          align-items: center;
          gap: 15px;
          margin-top: 40px;
          flex-wrap: nowrap;
        }

        .whatsapp-button {
          border: 2px solid #128c7e;
          color: #128c7e;
          font-weight: bold;
          font-size: 16px;
          padding: 12px 24px;
          background: transparent;
          cursor: pointer;
          text-transform: uppercase;
          transition: 0.3s ease-in-out;
          flex-grow: 1;
        }

        .whatsapp-button:hover {
          background-color: #128c7e;
          color: #fff;
        }

        .share-icon {
          cursor: pointer;
          padding: 8px;
          transition: transform 0.3s ease;
        }

        .share-icon:hover {
          transform: scale(1.1);
        }

        .copied-message {
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

        /* 📱 Mobile Styles */
        @media (max-width: 768px) {
          .product-content {
            flex-direction: column;
            align-items: center;
            text-align: center;
          }

          .product-image-container {
            width: 100%;
            display: flex;
            justify-content: center;
          }

          .product-image {
            width: 90%;
            height: auto;
          }

          .product-details {
            width: 90%;
          }

          .product-title {
            font-size: 32px;
          }

          .product-description {
            font-size: 14px;
          }

          .product-features {
            text-align: left;
          }

          .product-price {
            font-size: 30px;
          }

          .product-mrp {
            font-size: 18px;
          }

          /* Keep Buttons in a Single Line */
          .button-container {
            justify-content: center;
            flex-wrap: nowrap;
            gap: 10px;
          }

          .whatsapp-button {
            font-size: 14px;
            padding: 10px;
            flex-grow: 1;
          }

          .share-icon {
            font-size: 22px;
          }
        }
      `}</style>
    </div>
  );
}
