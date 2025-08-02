"use client";
import { useState } from "react";
import { FaWhatsapp, FaTimes } from "react-icons/fa";

const WhatsAppChat = () => {
  const [isOpen, setIsOpen] = useState(false);

  const phoneNumber = "917097021082"; 

  return (
    <>
      {/* Floating WhatsApp Button */}
      <div
        onClick={() => setIsOpen(true)}
        style={{
          position: "fixed",
          bottom: "20px",
          right: "20px",
          backgroundColor: "#000000",
          color: "#128c7e",
          borderRadius: "50%",
          width: "50px",
          height: "50px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          cursor: "pointer",
          boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.2)",
          zIndex: 1000,
        }}
      >
        <FaWhatsapp size={30} />
      </div>

      {/* Chat Box */}
      {isOpen && (
        <div
          style={{
            position: "fixed",
            bottom: "80px",
            right: "20px",
            backgroundColor: "#075E54",
            color: "white",
            width: "250px",
            borderRadius: "10px",
            padding: "10px",
            boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.2)",
            zIndex: 1000,
          }}
        >
          {/* Close Button */}
          <div
            onClick={() => setIsOpen(false)}
            style={{
              position: "absolute",
              top: "8px",
              right: "8px",
              cursor: "pointer",
            }}
          >
            <FaTimes size={16} />
          </div>

          {/* Greeting Message */}
          <h3 style={{ margin: "0 0 5px 0", fontSize: "16px", fontWeight: "bold" }}>
            MS Sanitarywares
          </h3>
          <p style={{ fontSize: "14px", margin: "0 0 10px 0" }}>
            Hi there! 👋 How can we assist you today?
          </p>

          {/* WhatsApp Chat Button */}
          <a
            href={`https://wa.me/${phoneNumber}?text=Hi! I need assistance.`}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "block",
              backgroundColor: "#25D366",
              color: "white",
              textAlign: "center",
              padding: "8px",
              borderRadius: "5px",
              textDecoration: "none",
              fontWeight: "bold",
            }}
          >
            <FaWhatsapp size={16} style={{ marginRight: "5px" }} />
            Start Chat
          </a>
        </div>
      )}
    </>
  );
};

export default WhatsAppChat;
