"use client";
import { useParams } from "next/navigation";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { showerSeries, showerData } from "@/app/data/showersData";

import { CiSearch } from "react-icons/ci";
import Breadcrumbs from "@/app/components/BreadCrum";

export default function SeriesPage() {
  const params = useParams();
  const seriesId = params.seriesId as string;
  const products = showerData[seriesId as keyof typeof showerData] || [];


  const [searchTerm, setSearchTerm] = useState<string>("");

  // ✅ Find the series image from faucetSeries data
  const series = showerSeries.find((item) => item.id === seriesId);
  const seriesImage = series
    ? series.img
    : "/images/faucets/products/facetsBanner.jpeg";
  const filteredProducts = products.filter((item) =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase())
  );
  return (
    <>
      {/* Series Banner */}
      <div
        style={{
          width: "100%",
          height: "70vh",
          overflow: "hidden",
          position: "relative",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {/* Background Banner Image */}
        <Image
          src={seriesImage}
          alt={`${seriesId} Series Banner`}
          layout="fill"
          objectFit="cover"
          priority
        />

        {/* Series Name Overlay */}
        <h1
          style={{
            position: "absolute",
            color: "white",
            fontSize: "64px",
            fontWeight: "bold",
            textAlign: "center",
            fontFamily: "Outfit",
            textShadow: "2px 2px 5px rgba(0, 0, 0, 0.5)",
            textTransform: "uppercase",
          }}
        >
          {series ? series.name : seriesId} Faucets
        </h1>
      </div>

      {/* Search Bar (Right) */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          width: "500px",
          top: "60px",
          left: "31%",
          margin: "0 auto",
          // padding: "20px 0",
          position: "relative",
        }}
      >
        <CiSearch
          style={{
            position: "absolute",
            right: "10px",
            top: "50%",
            transform: "translateY(-50%)",
            fontSize: "20px",
            color: "#666",
            fontWeight: "bold",
          }}
        />
        <input
          type="text"
          placeholder="Search by name..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          style={{
            width: "100%",
            padding: "10px 10px 10px 35px",
            fontSize: "16px",
            border: "1px solid #ccc",
            outline: "none",
            borderRadius: "4px",
          }}
        />
      </div>

      {/* breadcrump */}

      <div style={{ margin: "20px 0", padding: "0 20px" }}>
        <Breadcrumbs />
      </div>

      {/* Product Grid */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))",
          gap: "20px",
          justifyContent: "centre",
          padding: "30px",
        }}
      >
        {filteredProducts.length > 0 ? (
          filteredProducts.map((item) => (
            <Link
              key={item.id}
              href={`/products/showers/${seriesId}/${item.id}`}
              style={{
                textDecoration: "none",
                color: "black",

                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                transition: "transform 0.3s ease-in-out",
                cursor: "pointer",
                width: "280px",
                height: "380px",
                backgroundColor: "transparent",
                overflowX: "hidden",
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.transform = "scale(1.05)")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.transform = "scale(1)")
              }
            >
              <Image
                src={item.img}
                alt={item.name}
                width={320}
                height={280}
                style={{
                  objectFit: "cover",

                  // border: "1px solid #d3d3d3",
                  maxWidth: "100%",
                }}
              />

              {/* Text Content */}
              <h2
                style={{
                  display: "flex",
                  justifyContent: "center", // Centers horizontally
                  alignItems: "center", // Centers vertically
                  textAlign: "center", // Ensures text is centered inside
                  fontSize: "25px",
                  fontWeight: "bold",
                  margin: "10px 0px",
                  width: "100%",
                }}
              >
                {item.name}
              </h2>

              <p
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  textAlign: "center",
                  fontSize: "14px",
                  margin: "0 10px",
                  width: "100%",
                }}
              >
                {item.description}
              </p>
            </Link>
          ))
        ) : (
          <p style={{ fontSize: "18px", color: "gray" }}>No products found</p>
        )}
      </div>
    </>
  );
}
