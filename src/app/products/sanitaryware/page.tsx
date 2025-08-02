"use client";
import Link from "next/link";
import Image from "next/image";
import { sanitarySeries } from "@/app/data/sanitarywareData";
import SanitaryBanner from "../sanitaryware/Assests/sanitarywareBanner.jpg";
import Breadcrumbs from "@/app/components/BreadCrum";
import { useEffect, useRef } from "react";

export default function Page() {
  const categoriesRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      const timer = setTimeout(() => {
        if (categoriesRef.current) {
          categoriesRef.current.scrollIntoView({ behavior: "smooth" });
        }
      }, 500);
      return () => clearTimeout(timer);
    });
  }, []);

  return (
    <div
      style={{
        padding: "20px 0",
        width: "100%",
        margin: "0 auto ",
        paddingTop: "0",
      }}
    >
      {/* Banner Section with Heading */}
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
          src={SanitaryBanner}
          alt="Faucets Banner"
          layout="fill"
          objectFit="cover"
        />

        {/* Heading Overlay */}
        <h1
          style={{
            position: "absolute",
            color: "white",
            fontSize: "94px",
            fontWeight: "bold",
            textAlign: "center",
            fontFamily: "Outfit",
            textShadow: "2px 2px 5px rgba(0, 0, 0, 0.5)",
          }}
        >
          SanitaryWares
        </h1>
      </div>
      <div  ref={categoriesRef} style={{ margin: "20px 0", padding: "0 20px" }}>
        <Breadcrumbs />
      </div>
      {/* Faucet Series Grid */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
          gap: "22px",
          overflowX: "hidden",
          // width:"98%",
          margin: "40px 20px",
        }}
      >
        {sanitarySeries.map((series) => (
          <Link
            key={series.id}
            href={`/products/sanitaryware/${series.id}`}
            style={{
              textDecoration: "none",
              color: "black",
              // backgroundColor: "#191c21",
              border: "1px solid #d3d3d3",
              borderRadius: "5px",
              overflowX: "hidden",
              transition: "transform 0.3s ease-in-out",
              cursor: "pointer",
            }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.transform = "scale(1.05)")
            }
            onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
          >
            <Image
              src={series.img}
              alt={series.name}
              width={300}
              height={250}
              style={{ width: "100%", height: "200px", objectFit: "cover" }}
            />
            <h2
              style={{
                textAlign: "center",
                padding: "10px",
                fontSize: "20px",
                fontWeight: "600",
                fontFamily: "Outfit",
              }}
            >
              {series.name}
            </h2>
          </Link>
        ))}
      </div>
    </div>
  );
}
