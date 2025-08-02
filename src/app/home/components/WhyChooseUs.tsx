"use client";
import { FaCheckCircle, FaStar, FaTags } from "react-icons/fa";

const WhyChooseUs = () => {
  const benefits = [
    {
      id: 1,
      icon: <FaStar style={{ color: "#facc15", fontSize: "40px" }} />,
      title: "Wide Range of Products",
      description:
        "From budget-friendly local brands to premium luxury collections, including faucets, showers, sanitaryware, and more.",
    },
    {
      id: 2,
      icon: <FaCheckCircle style={{ color: "#22c55e", fontSize: "40px" }} />,
      title: "Premium Quality & Durability",
      description:
        "Rust-proof, leak-proof, and stylish designs made with high-quality materials for long-lasting performance.",
    },
    {
      id: 3,
      icon: <FaTags style={{ color: "#3b82f6", fontSize: "40px" }} />,
      title: "Expert Assistance & Best Prices",
      description:
        "Get professional guidance, competitive pricing, and special discounts on your favorite bathroom essentials.",
    },
  ];

  return (
    <div
      style={{
        textAlign: "center",
        padding: "60px 20px",
        backgroundColor: "#111", // Full dark background
      }}
    >
      <h2
        style={{
          fontSize: "32px",
          fontWeight: "700",
          color: "#fff",
          marginBottom: "40px",
          fontFamily: "Outfit, sans-serif",
        }}
      >
        Why Choose Us?
      </h2>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          flexWrap: "wrap",
          gap: "30px",
        }}
      >
        {benefits.map((benefit) => (
          <div
            key={benefit.id}
            style={{
              backgroundColor: "#222", // Darker card background
              borderRadius: "10px",
              padding: "25px",
              maxWidth: "300px",
              textAlign: "center",
              transition: "transform 0.3s ease",
              boxShadow: "0 6px 16px rgba(0, 0, 0, 0.6)",
            }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.transform = "translateY(-5px)")
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.transform = "translateY(0)")
            }
          >
            <div style={{ marginBottom: "15px" }}>{benefit.icon}</div>
            <h3
              style={{
                fontSize: "18px",
                fontWeight: "600",
                color: "#fff",
                fontFamily: "Outfit, sans-serif",
              }}
            >
              {benefit.title}
            </h3>
            <p
              style={{
                fontSize: "14px",
                color: "#ccc",
                marginTop: "8px",
                fontFamily: "Outfit, sans-serif",
              }}
            >
              {benefit.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WhyChooseUs;
