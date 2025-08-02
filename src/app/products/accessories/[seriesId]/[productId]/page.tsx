"use client";
import { useParams } from "next/navigation";
import { useState, useEffect } from "react";
import { accessoryData } from "@/app/data/accessoriesData";
import Image from "next/image";
import Breadcrumbs from "@/app/components/BreadCrum";
import { FaShareAlt } from "react-icons/fa";

export default function ProductPage() {
  const { seriesId, productId } = useParams();
  const products = accessoryData[seriesId as keyof typeof accessoryData] || [];
  const product = products.find((item) => item.id === Number(productId));
  const [copied, setCopied] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    handleResize(); // Initial check
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  if (!product) return <h1>Product Not Found</h1>;

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
        padding: isMobile ? "20px 10px" : "40px 0",
      }}
    >
      <div style={{ margin: "0 0 10px 0", padding: "0 " }}>
        <Breadcrumbs />
      </div>

      <div
        style={{
          display: "flex",
          flexDirection: isMobile ? "column" : "row",
          alignItems: isMobile ? "center" : "flex-start",
          gap: "20px",
        }}
      >
        {/* Left - Images */}
        <div
          style={{
            flex: "1",
            display: "flex",
            justifyContent: "center",
            width: "100%",
          }}
        >
          <Image
            src={product.img}
            alt={product.name}
            width={isMobile ? 300 : 500}
            height={isMobile ? 320 : 550}
            style={{
              width: isMobile ? "100%" : "500px",
              height: isMobile ? "auto" : "550px",
              transition: "0.3s",
              objectFit: "contain",
            }}
          />
        </div>

        {/* Right - Product Details */}
        <div style={{ flex: "1", width: "100%" }}>
          <h1
            style={{
              fontSize: isMobile ? "28px" : "44px",
              fontWeight: "700",
              marginBottom: "5px",
              textTransform: "uppercase",
              textAlign: isMobile ? "center" : "left",
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
              textAlign: isMobile ? "center" : "left",
            }}
          >
            {product.description}
          </p>

          <ul
            style={{
              paddingLeft: isMobile ? "20px" : "20px",
              fontSize: "16px",
              color: "#555",
              marginBottom: "20px",
            }}
          >
            <li>High-quality chrome plating for long-lasting shine.</li>
            <li>Rust & corrosion-resistant for durability.</li>
            <li>Smooth water flow with efficient water-saving technology.</li>
            <li>Easy installation with all necessary fittings included.</li>
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
              fontSize: isMobile ? "28px" : "40px",
              fontWeight: "bold",
              marginBottom: "10px",
              textAlign: isMobile ? "center" : "left",
            }}
          >
            ₹{discountedPrice.toFixed(2)}
          </div>

          <div
            style={{
              fontSize: isMobile ? "18px" : "25px",
              color: "#888",
              textAlign: isMobile ? "center" : "left",
            }}
          >
            MRP{" "}
            <span
              style={{
                textDecoration: "line-through",
                margin: " 0 15px 0 0",
              }}
            >
              ₹{product.price}
            </span>
            {product.discount}% OFF
          </div>

          {/* Buttons */}
          <div
            style={{
              display: "flex",
              flexDirection: isMobile ? "column" : "row",
              gap: "15px",
              marginTop: "40px",
              alignItems: isMobile ? "center" : "flex-start",
            }}
          >
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
                width: isMobile ? "100%" : "100%",
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
                size={45}
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
                    fontSize: "15px",
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
