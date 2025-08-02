"use client";
import { useParams } from "next/navigation";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { accessorySeries, accessoryData } from "@/app/data/accessoriesData";
import accessoriesImg from "../Assests/accesoriesBanner.jpg";
import { CiSearch } from "react-icons/ci";
import Breadcrumbs from "@/app/components/BreadCrum";

export default function SeriesPage() {
  const params = useParams();
  const seriesId = params.seriesId as string;
  const products = accessoryData[seriesId as keyof typeof accessoryData] || [];

  const [searchTerm, setSearchTerm] = useState<string>("");

  // ✅ Find the series image from faucetSeries data
  const series = accessorySeries.find((item) => item.id === seriesId);
  const seriesImage = series ? series.img : accessoriesImg;
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
            fontSize: "clamp(38px, 6vw, 64px)",
            fontWeight: "bold",
            textAlign: "center",
            fontFamily: "Outfit",
            textShadow: "2px 2px 5px rgba(0, 0, 0, 0.5)",
            textTransform: "uppercase",
            padding: "0 10px",
          }}
        >
          {series ? series.name : seriesId}
        </h1>
      </div>

      {/* Breadcrumb + Search Bar */}
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          alignItems: "center",
          justifyContent: "space-between",
          gap: "12px",
          padding: "20px",
          maxWidth: "1600px",
          margin: "auto",
        }}
      >
        {/* Breadcrumb */}
        <div style={{ flex: "1 1 200px", minWidth: "150px" }}>
          <Breadcrumbs />
        </div>

        {/* Search Bar */}
        <div
          style={{
            flex: "1 1 300px",
            minWidth: "180px",
            maxWidth: "400px",
            position: "relative",
            width: "100%",
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
      </div>

      {/* Product Grid */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
          gap: "30px",
          justifyContent: "center",
          padding: "30px 20px",
        }}
      >
        {filteredProducts.length > 0 ? (
          filteredProducts.map((item) => (
            <Link
              key={item.id}
              href={`/products/accessories/${seriesId}/${item.id}`}
              style={{
                textDecoration: "none",
                color: "black",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                transition: "transform 0.3s ease-in-out",
                cursor: "pointer",
                backgroundColor: "white",
                borderRadius: "8px",
                padding: "10px",
                boxShadow: "0 2px 10px rgba(0,0,0,0.05)",
                height: "100%", // Allow dynamic height
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.transform = "scale(1.03)")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.transform = "scale(1)")
              }
            >
              <Image
                src={item.img}
                alt={item.name}
                width={300}
                height={280}
                style={{
                  objectFit: "contain",
                  width: "100%",
                  height: "220px",
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
