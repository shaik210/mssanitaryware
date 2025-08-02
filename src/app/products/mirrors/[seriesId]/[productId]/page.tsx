"use client";
import { useParams } from "next/navigation";
import { useState, useEffect } from "react";
import { mirrorData } from "@/app/data/mirrorData";
import Image from "next/image";
import Breadcrumbs from "@/app/components/BreadCrum";
import { FaShareAlt } from "react-icons/fa";

export default function ProductPage() {
  const { seriesId, productId } = useParams();
  const products = mirrorData[seriesId as keyof typeof mirrorData] || [];
  const product = products.find((item) => item.id === Number(productId));

  const [copied, setCopied] = useState(false);

  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (copied) {
      timer = setTimeout(() => setCopied(false), 2000);
    }
    return () => clearTimeout(timer);
  }, [copied]);

  const handleShare = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopied(true);
  };

  if (!product) return <h1>Product Not Found</h1>;

  const discountedPrice =
    product.price - (product.price * product.discount) / 100;

  return (
    <div style={styles.container}>
      <div style={styles.breadcrumbWrapper}>
        <Breadcrumbs />
      </div>

      <div style={styles.responsiveWrapper}>
        {/* Left - Image */}
        <div style={styles.imageWrapper}>
          <Image
            src={product.img}
            alt={product.name}
            width={500}
            height={550}
            style={styles.productImage}
          />
        </div>

        {/* Right - Details */}
        <div style={styles.detailsWrapper}>
          <h1 style={styles.title}>{product.name}</h1>
          <p style={styles.description}>{product.description}</p>

          <ul style={styles.features}>
            <li>High-quality chrome plating for long-lasting shine.</li>
            <li>Rust & corrosion-resistant for durability.</li>
            <li>Smooth water flow with efficient water-saving technology.</li>
            <li>Easy installation with all necessary fittings included.</li>
          </ul>

          <p style={styles.detailsText}>
            <strong>Product Details:</strong> Chrome Plating | Everlasting shine | Easy to clean | Resists stains
          </p>

          <div style={styles.price}>₹{discountedPrice.toFixed(2)}</div>
          <div style={styles.mrp}>
            MRP <span style={styles.strike}>₹{product.price}</span>
            {product.discount}% OFF
          </div>

          <div style={styles.buttonRow}>
            <button
              style={styles.whatsappButton}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = "#128c7e";
                e.currentTarget.style.color = "#fff";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = "transparent";
                e.currentTarget.style.color = "#128c7e";
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

            <div style={{ position: "relative" }}>
              <FaShareAlt
                size={25}
                color="#000"
                style={styles.shareIcon}
                onClick={handleShare}
              />
              {copied && (
                <span style={styles.copiedText}>Link Copied!</span>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const styles: { [key: string]: React.CSSProperties } = {
  container: {
    width: "100%",
    maxWidth: "1200px",
    margin: "auto",
    padding: "40px 20px",
  },
  breadcrumbWrapper: {
    marginBottom: "20px",
  },
  responsiveWrapper: {
    display: "flex",
    flexDirection: "row",
    gap: "30px",
    flexWrap: "wrap",
  },
  imageWrapper: {
    flex: "1 1 400px",
    minWidth: "300px",
    display: "flex",
    justifyContent: "center",
  },
  productImage: {
    width: "100%",
    height: "auto",
    maxWidth: "500px",
  },
  detailsWrapper: {
    flex: "1 1 400px",
    minWidth: "300px",
  },
  title: {
    fontSize: "32px",
    fontWeight: "700",
    marginBottom: "10px",
    textTransform: "uppercase",
  },
  description: {
    fontSize: "16px",
    color: "#555",
    marginBottom: "15px",
    lineHeight: "1.6",
  },
  features: {
    paddingLeft: "20px",
    fontSize: "16px",
    color: "#555",
    marginBottom: "20px",
  },
  detailsText: {
    fontSize: "16px",
    color: "#444",
    marginBottom: "20px",
  },
  price: {
    fontSize: "32px",
    fontWeight: "bold",
    marginBottom: "10px",
  },
  mrp: {
    fontSize: "20px",
    color: "#888",
  },
  strike: {
    textDecoration: "line-through",
    marginRight: "10px",
  },
  buttonRow: {
    display: "flex",
    gap: "15px",
    marginTop: "40px",
    flexWrap: "wrap",
    alignItems: "center",
  },
  whatsappButton: {
    border: "2px solid #128c7e",
    color: "#128c7e",
    fontWeight: "bold",
    fontSize: "16px",
    padding: "12px 24px",
    background: "transparent",
    cursor: "pointer",
    textTransform: "uppercase",
    transition: "0.3s ease-in-out",
    flexGrow: 1,
    minWidth: "200px",
  },
  shareIcon: {
    cursor: "pointer",
    backgroundColor: "transparent",
    padding: "8px",
    transition: "transform 0.3s ease",
  },
  copiedText: {
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
  },
};
