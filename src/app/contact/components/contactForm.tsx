"use client";
import { useState } from "react";
import Image from "next/image";
import { FaPaperPlane } from "react-icons/fa";
import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";

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
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        theme: "light",
      });

      setFormData({ name: "", email: "", phone: "", message: "" });
    } catch (error) {
      toast.error("Failed to submit message!", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        theme: "light",
      });

      console.error("Error submitting form:", error);
    }
  };

  return (
    <div>
      {/* Toast Notifications */}
      <ToastContainer />

      {/* Full-Width Image with 80% Height */}
      <div className="contactImageContainer">
        <Image src={contactImg} alt="Contact" layout="fill" objectFit="cover" />
      </div>

      {/* Contact Form Section */}
      <div className="contact-form-container">
  <div className="contact-form-left">
    <h2 className="contact-form-heading">
      We would love to hear from you.
    </h2>
    <p className="contact-form-description">
      If you need great products or any assistance, feel free to connect with us.
    </p>

    <form onSubmit={handleSubmit} className="contact-form">
      <input
        type="text"
        name="name"
        value={formData.name}
        onChange={handleChange}
        placeholder="Your Name"
        required
        className="contact-form-input"
      />
      
      <div className="contact-form-input-group">
        <input
          type="text"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          placeholder="Your Contact Number"
          required
          className="contact-form-input contact-form-input-half"
        />
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Your Email"
          required
          className="contact-form-input contact-form-input-half"
        />
      </div>
      
      <textarea
        name="message"
        value={formData.message}
        onChange={handleChange}
        placeholder="Message"
        rows={4}
        required
        className="contact-form-textarea"
      ></textarea>
      
      <p className="contact-form-privacy">
        By sharing my contact details, I authorize MS Sanitarywares and its
        representatives to contact me via call or SMS.
      </p>
      
      <button
        type="submit"
        className="contact-form-button"
      >
        SEND MESSAGE <FaPaperPlane />
      </button>
    </form>
  </div>

  <div className="contact-form-right">
    <h3 className="contact-form-subheading">Address</h3>
    <p className="contact-form-details">
      Moti Mahal, Golconda Fort, Hyderabad, 500008, Telangana.
    </p>

    <h3 className="contact-form-subheading">Timings</h3>
    <p className="contact-form-details">
      Mon-Sat (10 AM - 9 PM), Sun (10 AM - 6 PM)
    </p>

    <h3 className="contact-form-subheading">Information</h3>
    <p className="contact-form-details">+91 7097021082</p>
    <p className="contact-form-details">mssanitarywares@gmail.com</p>
  </div>
</div>


      {/* FAQ Section */}

      <h2 style={{ fontSize: "30px", textAlign: "center", margin: "25px" }}>
        Our Store Location
      </h2>

      {/* Add your store location or map here */}
    </div>
  );
};

export default ContactForm;
