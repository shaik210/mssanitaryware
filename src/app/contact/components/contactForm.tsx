"use client";
import { useState } from "react";
import Image from "next/image";
import { FaPaperPlane } from "react-icons/fa";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import contactImg from "./Assests/contact1.jpg";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      await fetch(
        "https://script.google.com/macros/s/AKfycbwM_Tjw_9yybVojfFuZ9mH6cf-Pit-ROeozK8trS7dwtXrQDXBZzCePZ-KuUMKA9nMK/exec",
        {
          method: "POST",
          mode: "no-cors",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      toast.success("Message submitted successfully!", {
        position: "top-center",
        autoClose: 3000,
        theme: "dark",
      });

      setFormData({ name: "", email: "", phone: "", message: "" });
    } catch (error) {
      toast.error("Failed to submit message!", {
        position: "top-right",
        autoClose: 3000,
        theme: "dark",
      });
      console.error("Error submitting form:", error);
    }
  };

  return (
    <div style={{ backgroundColor: "#121212", color: "#e0e0e0", fontFamily: "Arial, sans-serif" }}>
      <ToastContainer />

      {/* Full-Width Image */}
      <div style={{ position: "relative", width: "100%", height: "60vh" }}>
        <Image
          src={contactImg}
          alt="Contact"
          fill
          style={{ objectFit: "cover" }}
          priority
        />
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: "rgba(0,0,0,0.5)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          
        </div>
      </div>

      {/* Contact Form Section */}
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-between",
          padding: "3rem 2rem",
          gap: "3rem", // ensures clear spacing between left & right
          maxWidth: "1200px",
          margin: "0 auto",
        }}
      >
        {/* Left Side */}
        <div style={{ flex: "1 1 500px", minWidth: "300px" }}>
          <h2 style={{ fontSize: "1.8rem", marginBottom: "1rem" }}>
            We would love to hear from you.
          </h2>
          <p style={{ marginBottom: "1.5rem", color: "#b0b0b0" }}>
            If you need great products or any assistance, feel free to connect
            with us.
          </p>

          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your Name"
              required
              style={{
                width: "100%",
                padding: "14px",
                marginBottom: "1rem",
                border: "1px solid #333",
                borderRadius: "8px",
                background: "#1e1e1e",
                color: "#fff",
                fontSize: "1rem",
              }}
            />

            <div
              style={{
                display: "flex",
                gap: "1rem",
                flexWrap: "wrap",
                marginBottom: "1rem",
              }}
            >
              <input
                type="text"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Your Contact Number"
                required
                style={{
                  flex: "1",
                  padding: "14px",
                  border: "1px solid #333",
                  borderRadius: "8px",
                  background: "#1e1e1e",
                  color: "#fff",
                  fontSize: "1rem",
                  minWidth: "180px",
                }}
              />
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Your Email"
                required
                style={{
                  flex: "1",
                  padding: "14px",
                  border: "1px solid #333",
                  borderRadius: "8px",
                  background: "#1e1e1e",
                  color: "#fff",
                  fontSize: "1rem",
                  minWidth: "180px",
                }}
              />
            </div>

            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Message"
              rows={5}
              required
              style={{
                width: "100%",
                padding: "14px",
                marginBottom: "1rem",
                border: "1px solid #333",
                borderRadius: "8px",
                background: "#1e1e1e",
                color: "#fff",
                fontSize: "1rem",
              }}
            ></textarea>

            <p style={{ fontSize: "0.85rem", color: "#888", marginBottom: "1.2rem" }}>
              By sharing my contact details, I authorize MS Sanitarywares and
              its representatives to contact me via call or SMS.
            </p>

            <button
              type="submit"
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "8px",
                width: "100%",
                padding: "14px",
                border: "none",
                borderRadius: "8px",
                background: "#191e21",
                color: "#fff",
                fontSize: "1rem",
                fontWeight: 600,
                cursor: "pointer",
                transition: "0.3s",
              }}
              // onMouseOver={(e) =>
              //   (e.currentTarget.style.background = "#2563eb")
              // }
              // onMouseOut={(e) =>
              //   (e.currentTarget.style.background = "#3b82f6")
              // }
            >
              SEND MESSAGE <FaPaperPlane />
            </button>
          </form>
        </div>

        {/* Right Side */}
        <div style={{ flex: "0.8 1 300px", minWidth: "280px", padding: "1rem" }}>
          <h3 style={{ marginBottom: "0.5rem", fontSize: "1.3rem", color: "#fff" }}>
            Address
          </h3>
          <p style={{ marginBottom: "1rem", color: "#bbb", lineHeight: "1.6" }}>
            Moti Mahal, Golconda Fort, Hyderabad, 500008, Telangana.
          </p>

          <h3 style={{ marginBottom: "0.5rem", fontSize: "1.3rem", color: "#fff" }}>
            Timings
          </h3>
          <p style={{ marginBottom: "1rem", color: "#bbb" }}>
            Mon-Sat (10 AM - 9 PM), Sun (10 AM - 6 PM)
          </p>

          <h3 style={{ marginBottom: "0.5rem", fontSize: "1.3rem", color: "#fff" }}>
            Information
          </h3>
          <p style={{ margin: "0.3rem 0", color: "#bbb" }}>+91 7097021082</p>
          <p style={{ margin: "0.3rem 0", color: "#bbb" }}>
            mssanitarywares@gmail.com
          </p>
        </div>
      </div>

      {/* Store Section */}
      <h2
        style={{
          fontSize: "1.7rem",
          textAlign: "center",
          margin: "2.5rem 0",
        }}
      >
        Our Store Location
      </h2>
    </div>
  );
};

export default ContactForm;
