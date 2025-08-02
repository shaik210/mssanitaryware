"use client";
import { usePathname } from "next/navigation";
import {
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube
} from "react-icons/fa";

const TopBar = () => {
  const pathname = usePathname();

  if (pathname !== "/home") return null;

  return (
    <div
      style={{
        backgroundColor: "#194e94",
        color: "white",
        fontFamily: "Outfit, sans-serif",
        fontSize: "14px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "6px 16px",
        position: "fixed", // <-- not fixed
        width: "100%",
        flexWrap: "wrap"
      }}
    >
      {/* Left Side */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          flexWrap: "wrap",
          gap: "10px"
        }}
      >
        <FaPhoneAlt style={{ fontSize: "12px" }} />
        <span>9384000801</span>
        <span style={{ margin: "0 8px" }}>|</span>
        <FaMapMarkerAlt style={{ fontSize: "12px" }} />
        <span>Parry's Corner</span>
        <FaMapMarkerAlt style={{ fontSize: "12px", marginLeft: "12px" }} />
        <span>Vadapalani</span>
        <span style={{ margin: "0 8px" }}>|</span>
      </div>

      {/* Right Side */}
      <div
        style={{
          display: "flex",
          gap: "12px",
          marginTop: "4px",
          flexWrap: "wrap"
        }}
      >
        <FaFacebookF style={{ cursor: "pointer" }} />
        <FaTwitter style={{ cursor: "pointer" }} />
        <FaInstagram style={{ cursor: "pointer" }} />
        <FaLinkedinIn style={{ cursor: "pointer" }} />
        <FaYoutube style={{ cursor: "pointer" }} />
      </div>
    </div>
  );
};

export default TopBar;
