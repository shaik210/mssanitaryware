import React from "react";
import Image from "next/image";
import aboutImg from "./about.jpg";
import styles from './AboutSection.module.css';

const AboutSection = () => {
  return (
    <div className={styles.container}>
      {/* Full-width Image */}
      <div className={styles.imageContainer}>
        <Image
          src={aboutImg}
          alt="About Us - MS Sanitarywares"
          layout="fill"
          objectFit="cover"
        />
        <h1 className={styles.heading}>
          Elevate Your Bath Space with Elegance & Quality
        </h1>
      </div>

      {/* About Us Section */}
      <div className={styles.contentContainer}>
        <h2 className={styles.title}>About Us</h2>
        <p className={styles.description}>
          Welcome to MS Sanitarywares, your trusted source for high-quality
          sanitaryware products. Established in 1989, we have over 36 years of
          experience in the industry, earning a reputation for reliability,
          quality, and competitive pricing. For the past 15 years, we have been
          actively engaged in wholesale and retail sanitaryware distribution,
          with a primary focus on the wholesale market. We source our products
          from trusted manufacturers, offering a diverse range of basic to
          premium sanitaryware solutions that combine functionality with
          aesthetic appeal. <br />
          Our pricing varies based on product type, brand, and manufacturer,
          ensuring that our customers—retailers, builders, and
          contractors—receive the best value for their investment. Whether you
          need affordable options or high-end sanitaryware, MS Sanitarywares is
          committed to providing the right solutions for your needs.
        </p>

        {/* Our Product Range */}
        <div className={styles.productRange}>
          <h2 className={styles.subTitle}>Our Product Range</h2>
          <p className="mb-4">We source and supply a variety of sanitaryware products, including:</p>

          <div className={styles.productList}>
            {/* Sanitaryware */}
            <div className={styles.productCategory}>
              <h3 className={styles.productTitle}>Sanitaryware</h3>
              <ul className={styles.productItems}>
                <li>Indian WC</li>
                <li>Commodes</li>
                <li>Wall-Mounted Commodes</li>
                <li>Water Closets</li>
                <li>Urinals</li>
                <li>Flush Tanks & Cisterns</li>
                <li>Concealed Flush Systems</li>
              </ul>
            </div>

            {/* Basins & Sinks */}
            <div className={styles.productCategory}>
              <h3 className={styles.productTitle}>Basins & Sinks</h3>
              <ul className={styles.productItems}>
                <li>Wash Basins</li>
                <li>Tabletop Basins</li>
                <li>Vanity Basins</li>
                <li>Stainless Steel Kitchen Sinks</li>
              </ul>
            </div>

            {/* Showers & Bathtubs */}
            <div className={styles.productCategory}>
              <h3 className={styles.productTitle}>Showers & Bathtubs</h3>
              <ul className={styles.productItems}>
                <li>Showers</li>
                <li>Hand Showers</li>
                <li>Rain Showers</li>
                <li>Shower Panels</li>
                <li>Bathtubs</li>
                <li>Jacuzzi Tubs</li>
              </ul>
            </div>

            {/* Faucets & Fittings */}
            <div className={styles.productCategory}>
              <h3 className={styles.productTitle}>Faucets & Fittings</h3>
              <ul className={styles.productItems}>
                <li>CP Fittings</li>
                <li>Faucets</li>
                <li>Sensor Taps</li>
                <li>Health Faucets</li>
                <li>Bidet Sprays</li>
                <li>Thermostatics</li>
                <li>Diverters</li>
              </ul>
            </div>

            {/* Bathroom Accessories */}
            <div className={styles.productCategory}>
              <h3 className={styles.productTitle}>Bathroom Accessories</h3>
              <ul className={styles.productItems}>
                <li>Bathroom Mirrors</li>
                <li>LED Mirrors</li>
                <li>Soap Dispensers</li>
                <li>Toothbrush Holders</li>
                <li>Towel Rods & Holders</li>
                <li>Robe Hooks</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Vision & Mission Section */}
        <div className={styles.visionMissionContainer}>
          {/* Vision */}
          <div className={styles.visionMissionItem}>
            <h3 className={styles.subTitle}>Our Vision:</h3>
            <div className={styles.visionMissionContent}>
              <p className={styles.description}>
                To be the leading provider of sourced sanitaryware solutions,
                offering high-quality products with a focus on sustainability,
                value for stakeholders, and an exceptional customer experience
                in both retail and wholesale markets.
              </p>
            </div>
          </div>

          {/* Mission */}
          <div className={styles.visionMissionItem}>
            <h3 className={styles.subTitle}>Our Mission:</h3>
            <div className={styles.visionMissionContent}>
              <p className={styles.description}>
                To source and supply high-quality, stylish, and sustainable
                bathroom solutions from trusted manufacturers, ensuring
                affordability and reliability for our customers. We aim to
                expand our presence in both wholesale and retail markets while
                maintaining strong relationships with suppliers and delivering
                exceptional customer service.
              </p>
            </div>
          </div>

          {/* Our Core Values */}
          <div className={styles.visionMissionItem}>
            <h2 className={styles.subTitle}>Our Core Values</h2>
            <div className={styles.visionMissionContent}>
              <p className={styles.description}>
                At MS Sanitarywares, we prioritize quality, sustainability, and
                customer satisfaction. We are committed to sourcing the best
                products from trusted manufacturers while ensuring
                affordability, reliability, and environmentally responsible
                practices.
              </p>
            </div>
          </div>

          {/* Our Efforts */}
          <div className={styles.visionMissionItem}>
            <h3 className={styles.subTitle}>Our Efforts:</h3>
            <div className={styles.visionMissionContent}>
              <p className={styles.description}>
                We source and supply sanitary products that incorporate
                water-saving technologies and sustainable materials, helping
                customers make eco-friendly choices for their homes and
                businesses.
              </p>
            </div>
          </div>

          {/* Why Us */}
          <div className={styles.visionMissionItem}>
            <h3 className={styles.subTitle}>Why Us?</h3>
            <div className={styles.visionMissionContent}>
              <p className={styles.description}>
                We source high-quality, durable, and innovative sanitaryware
                from trusted manufacturers. Our carefully selected products
                ensure longevity, style, and functionality, elevating modern
                bathrooms.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
