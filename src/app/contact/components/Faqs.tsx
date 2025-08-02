"use client"
import { motion } from "framer-motion";
import React, { useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa";

const Faqs = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const faqs = [
    {
      question: "Do you offer installation services?",
      answer: "Yes, we provide professional installation services.",
    },
    {
      question: "Can I order products online from Website?",
      answer:
        "We currently operate offline, but online ordering is coming soon.",
    },
    {
      question: "Do you sell both local and premium brands?",
      answer: "Yes, we offer a wide variety from budget to luxury.",
    },

    {
      question: "Do you provide home delivery?",
      answer:
        "Yes, we offer delivery services within the city. Charges may apply.",
    },
    {
      question: "Do you provide a warranty on products?",
      answer: "Yes, all products come with manufacturer warranties.",
    },
    {
      question: "Can I return or exchange a product?",
      answer:
        "Returns and exchanges are accepted within 7 days with the original bill.",
    },

    {
      question: "Do you have an in-store showroom?",
      answer: "Yes, visit our showroom to explore our full product range.",
    },
  ];
  return (
    <div style={{ maxWidth: "800px", margin: "auto", padding: "40px 20px" }}>
      <h2
        style={{
          fontSize: "30px",
          textAlign: "center",
          marginBottom: "25px",
        }}
      >
        Frequently Asked Questions
      </h2>
      {faqs.map((faq, index) => (
        <div
          key={index}
          style={{ borderBottom: "1px solid #ddd", padding: "10px 0" }}
        >
          <motion.div
            onClick={() => setOpenFaq(openFaq === index ? null : index)}
            style={{
              display: "flex",
              justifyContent: "space-between",
              cursor: "pointer",
              fontSize: "18px",
              fontWeight: "500",
            }}
          >
            {faq.question}
            {openFaq === index ? <FaMinus /> : <FaPlus />}
          </motion.div>
          {openFaq === index && (
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
              style={{ marginTop: "10px", fontSize: "16px", color: "#666" }}
            >
              {faq.answer}
            </motion.p>
          )}
        </div>
      ))}
    </div>
  );
};

export default Faqs;
