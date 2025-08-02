"use client";
import Image from "next/image";

import cera from "./Assests/brands/cera.png"
import hindware from "./Assests/brands/hindware.jpeg"
import parryware from "./Assests/brands/parryware.png"
import cityart from "./Assests/brands/city art.jpg"
import kohler from "./Assests/brands/kohler.jpeg"
import jindal from "./Assests/brands/jindal.png"

const brands = [
  { name: "Cera", logo:cera },
  { name: "Hindware", logo:hindware  },
  { name: "Parryware", logo: parryware },
  { name: "Jaquar", logo: cityart },
  { name: "Kohler", logo:  kohler},
  {name:"Jindal", logo: jindal}
];

const Brands = () => {
  return (
    <div style={{ textAlign: "center", padding: "40px 20px", backgroundColor: "#f1f5f9" }}>
      <h2 style={{ fontSize: "32px", fontWeight: "700", color: "#191e21", marginBottom: "50px" ,fontFamily:"outfit"}}>
        Brands We Sell
      </h2>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "wrap",
          gap: "25px",
        }}
      >
        {brands.map((brand, index) => (
          <div key={index} style={{ maxWidth: "120px" }}>
            <Image src={brand.logo} alt={brand.name} width={120} height={80} style={{ objectFit: "contain" }} />
            <p style={{ fontSize: "15px",fontWeight:"500", color: "#191e21", marginTop: "5px",fontFamily:"outfit" }}>{brand.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Brands;
