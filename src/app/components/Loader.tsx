import Image from "next/image";
import React from "react";
import sanitarywares from "../../../public/images/loader.png";

const Loader = () => {
  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        zIndex: 9999,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#fff",
        transition: "opacity 0.1s ease-in-out",
      }}
    >
      <div
        style={{
          animation: " fadeInOut 2s ease-in-out", // 3s for both effects
          display: "inline-block",
        }}
      >
        <Image
          src={sanitarywares}
          alt="MS Sanitarywares Logo"
          width={300}
          height={300}
          style={{ opacity: 0.9 }}
        />
      </div>

      {/* Injecting the keyframes with inline CSS */}
      <style jsx>{`
        @keyframes fadeInOut {
          0%,
          100% {
            opacity: 0.1;
          }
          50% {
            opacity: 1;
          }
        }
      `}</style>
    </div>
  );
};

export default Loader;
