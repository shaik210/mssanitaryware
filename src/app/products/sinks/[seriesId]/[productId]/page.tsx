"use client";
import { useParams } from "next/navigation";
import { useState } from "react";
import { sinkData } from "@/app/data/sinksData";
import Image from "next/image";
import Breadcrumbs from "@/app/components/BreadCrum";

import { FaShareAlt } from "react-icons/fa";

export default function ProductPage() {
  const { seriesId, productId } = useParams();
  const products = sinkData[seriesId as keyof typeof sinkData] || [];

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
    <div
      style={{
        width: "100%",
        maxWidth: "1200px",
        margin: "auto",
        padding: "40px 0",
      }}
    >
      <div style={{ margin: "0 0 10px 0", padding: "0 " }}>
        <Breadcrumbs />
      </div>

      <div style={{ display: "flex", alignItems: "flex-start", gap: "5px" }}>
        {/* Left - Images */}
        <div style={{ flex: "1", display: "flex", gap: "15px" }}>
          

          {/* Main Image */}
          <Image
            src={product.img}
            alt={product.name}
            width={500}
            height={550}
            style={{ width: "500px", height: "550px", transition: "0.3s" }}
          />
        </div>

        {/* Right - Product Details */}
        <div style={{ flex: "1" }}>
          <h1
            style={{
              fontSize: "44px",
              fontWeight: "700",
              marginBottom: "5px",
              textTransform: "uppercase",
            }}
          >
            {product.name}
          </h1>
          <p
            style={{
              fontSize: "16px",
              color: "#555",
              marginBottom: "15px",
              lineHeight: "1.6",
            }}
          >
            {product.description}
          </p>

          <ul
            style={{
              paddingLeft: "20px",
              fontSize: "16px",
              color: "#555",
              marginBottom: "20px",
            }}
          >
            <li> High-quality chrome plating for long-lasting shine.</li>
            <li> Rust & corrosion-resistant for durability.</li>
            <li>Smooth water flow with efficient water-saving technology.</li>
            <li> Easy installation with all necessary fittings included.</li>
          </ul>

          {/* Pricing */}
          <div style={{ padding: "15px 0", marginBottom: "20px" }}>
            <p style={{ fontSize: "16px", color: "#444" }}>
              <strong>Product Details:</strong> Chrome Plating | Everlasting
              shine | Easy to clean | Resists stains
            </p>
          </div>

          <div
            style={{
              fontSize: "40px",
              fontWeight: "bold",
              marginBottom: "10px",
            }}
          >
            ₹{discountedPrice.toFixed(2)}
          </div>
          <div
            style={{
              fontSize: "25px",

              color: "#888",
            }}
          >
            MRP{" "}
            <span
              style={{ textDecoration: "line-through", margin: " 0 15px 0 0" }}
            >
              ₹{product.price}
            </span>
            {product.discount}% OFF
          </div>

          {/* Buttons */}
          <div style={{ display: "flex", gap: "15px", marginTop: "40px" }}>
            <button
              style={{
                border: "2px solid #128c7e",
                color: "#128c7e ",
                fontWeight: "bold",
                fontSize: "16px",
                padding: "12px 24px",
                background: "transparent",
                cursor: "pointer",
                textTransform: "uppercase",
                width: "100%",
                transition: "0.3s ease-in-out",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = "#128c7e ";
                e.currentTarget.style.color = "#fff";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = "transparent";
                e.currentTarget.style.color = "#128c7e ";
              }}
              onClick={() =>
                window.open(
                  `https://wa.me/91XXXXXXXXXX?text=I'm interested in this product`,
                  "_blank"
                )
              }
            >
              WHATSAPP INQUIRY
            </button>

            <div style={{ position: "relative", display: "inline-block" }}>
              {/* Share Icon */}
              <FaShareAlt
                size={25}
                color="#000000"
                style={{
                  cursor: "pointer",
                  backgroundColor: "transparent",
                  padding: "8px",

                  transition: "transform 0.3s ease",
                }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.transform = "scale(1.1)")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.transform = "scale(1)")
                }
                onClick={handleShare}
              />

              {/* Link Copied Message */}
              {copied && (
                <span
                  style={{
                    position: "absolute",
                    top: "-30px",
                    left: "50%",
                    transform: "translateX(-50%)",
                    backgroundColor: "#333",
                    color: "white",
                    padding: "5px 10px",
                    borderRadius: "5px",
                    fontSize: "12px",
                    whiteSpace: "nowrap",
                  }}
                >
                  Link Copied!
                </span>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
