"use client";
import { useParams } from "next/navigation";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { faucetSeries, seriesData } from "@/app/data/faucetData";
import { CiSearch } from "react-icons/ci";
import Breadcrumbs from "@/app/components/BreadCrum";

export default function SeriesPage() {
  const params = useParams();
  const seriesId = params.seriesId as string;
  const products = seriesData[seriesId] || [];

  const [searchTerm, setSearchTerm] = useState<string>("");

  const series = faucetSeries.find((item) => item.id === seriesId);
  const seriesImage = series
    ? series.img
    : "/images/faucets/products/facetsBanner.jpeg";

  const filteredProducts = products.filter((item) =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      <style>{`
        .banner {
          width: 100%;
          height: 70vh;
          position: relative;
        }

        .banner img {
          object-fit: cover;
        }

        .banner-title {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          color: white;
          font-size: 64px;
          font-weight: bold;
          text-align: center;
          font-family: "Outfit", sans-serif;
          text-shadow: 2px 2px 5px rgba(0, 0, 0, 0.5);
          text-transform: uppercase;
          z-index: 1;
        }

        @media (max-width: 768px) {
          .banner {
            height: 40vh;
          }

          .banner-title {
            font-size: 28px;
            padding: 0 10px;
          }
        }

        .breadcrumb-search-container {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 20px;
          max-width: 1300px;
          margin: auto;
          flex-wrap: wrap;
          gap: 20px;
        }

        .search-container {
          position: relative;
          width: 100%;
          max-width: 500px;
        }

        .search-icon {
          position: absolute;
          right: 10px;
          top: 50%;
          transform: translateY(-50%);
          font-size: 20px;
          color: #666;
        }

        .search-input {
          width: 100%;
          padding: 10px 10px 10px 35px;
          font-size: 16px;
          border: 1px solid #ccc;
          border-radius: 4px;
          outline: none;
        }

        .product-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 20px;
          padding: 30px 20px;
        }

        .product-card {
          text-decoration: none;
          color: black;
          display: flex;
          flex-direction: column;
          align-items: center;
          background-color: white;
          border-radius: 8px;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
          overflow: hidden;
          transition: transform 0.2s;
        }

        .product-card:hover {
          transform: scale(1.03);
        }

        .product-title {
          font-size: 18px;
          font-weight: bold;
          margin-top: 10px;
          text-align: center;
        }

        .product-description {
          font-size: 14px;
          text-align: center;
          margin: 5px 10px 10px;
        }

        .no-products {
          text-align: center;
          font-size: 18px;
          color: #777;
        }
      `}</style>

      {/* Banner */}
      <div className="banner">
        <Image
          src={seriesImage}
          alt={`${seriesId} Series Banner`}
          fill
          className="banner-image"
          priority
        />
        <h1 className="banner-title">
          {series ? series.name : seriesId} Faucets
        </h1>
      </div>

      {/* Breadcrumbs & Search */}
      <div className="breadcrumb-search-container">
        <Breadcrumbs />
        <div className="search-container">
          <CiSearch className="search-icon" />
          <input
            type="text"
            placeholder="Search by name..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="search-input"
          />
        </div>
      </div>

      {/* Product Grid */}
      <div className="product-grid">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((item) => (
            <Link
              key={item.id}
              href={`/products/faucets/${seriesId}/${item.id}`}
              className="product-card"
            >
              <Image
                src={item.img}
                alt={item.name}
                width={300}
                height={220}
                style={{ objectFit: "contain", width: "100%" }}
              />
              <h2 className="product-title">{item.name}</h2>
              <p className="product-description">{item.description}</p>
            </Link>
          ))
        ) : (
          <p className="no-products">No products found</p>
        )}
      </div>
    </>
  );
}
