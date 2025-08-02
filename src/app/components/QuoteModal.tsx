"use client";

import { useQuoteModal } from "@/app/store/quoteModalStore";
import { useQuoteStore } from "@/app/store/quoteStore";
import { X, Trash2 } from "lucide-react";
import Image from "next/image";
import logo from "../../../public/Sanitarywares.png";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import { textAlign } from "html2canvas/dist/types/css/property-descriptors/text-align";

export default function QuoteModal() {
  const html2pdf = require("html2pdf.js");
  const quoteItems = useQuoteStore((state) => state.items);
  console.log("quote itemssss", quoteItems);
  const { isOpen, closeModal } = useQuoteModal();
  const { items, addToQuote, removeFromQuote, decreaseQuantity } =
    useQuoteStore();

  if (!isOpen) return null;

  const total = items.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  const handleDownload = async () => {
    const element = document.getElementById("print-quote");
    if (!element) return;

    const canvas = await html2canvas(element);
    const imgData = canvas.toDataURL("image/png");

    const pdf = new jsPDF("p", "mm", "a4");
    const imgProps = pdf.getImageProperties(imgData);
    const pdfWidth = pdf.internal.pageSize.getWidth();
    const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;

    pdf.addImage(imgData, "PNG", 0, 0, pdfWidth, pdfHeight);
    pdf.save("ms-sanitaryware-quote.pdf");
  };

  const handleWhatsAppShare = () => {
    const message = encodeURIComponent(
      "Here's your quote from MS Sanitaryware:\n\n" +
        quoteItems
          .map((item) => `${item.name} - ₹${item.price} x ${item.quantity}`)
          .join("\n")
    );
    window.open(`https://wa.me/?text=${message}`, "_blank");
  };

const handleEmailShare = () => {
  if (!quoteItems || quoteItems.length === 0) {
    alert("No items to send in the quote.");
    return;
  }
const subject = encodeURIComponent("Quote from MS Sanitaryware");
  const body = encodeURIComponent(
    "Hello,\n\nHere is the quote you requested:\n\n" +
      quoteItems
        .map((item) => `${item.name} - ₹${item.price} x ${item.quantity}`)
        .join("\n") +
      "\n\nRegards,\nMS Sanitaryware"
  );

  // Use location.href for proper user gesture handling
  window.location.href = `mailto:mssanitaryware@gmail.com?subject=${subject}&body=${body}`;
};



  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        right: 0,
        width: "380px",
        height: "100%",
        backgroundColor: "#ffffff",
        borderLeft: "1px solid #e0e0e0",
        boxShadow: "-2px 0 10px rgba(0,0,0,0.1)",
        zIndex: 9999,
        display: "flex",
        flexDirection: "column",
      }}
    >
      {/* Header with Logo */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "16px",
          borderBottom: "1px solid #e0e0e0",
          backgroundColor: "#33393d",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "25px" }}>
          <Image
            src={logo}
            alt="MS Logo"
            width={65}
            height={45}
            style={{ borderRadius: "4px" }}
          />
          <div>
            <h3
              style={{
                margin: 0,
                fontSize: "16px",
                fontWeight: "600",
                color: "#ffffff",
              }}
            >
              MS Sanitarywares
            </h3>
            <p style={{ margin: 0, fontSize: "12px", color: "#888" }}>
              Quote Builder
            </p>
          </div>
        </div>
        <button
          onClick={closeModal}
          style={{
            background: "none",
            border: "none",
            cursor: "pointer",
            color: "#ffffff",
          }}
        >
          <X width={20} height={20} />
        </button>
      </div>

      {/* Scrollable Body */}
      <div
        style={{
          flex: 1,
          overflowY: "auto",
          padding: "16px ",
          display: "flex",
          flexDirection: "column",
          gap: "16px",
        }}
      >
        {items.length === 0 ? (
          <p style={{ color: "#888", fontSize: "14px" }}>No items in quote.</p>
        ) : (
          items.map((item) => (
            <div
              key={item.id}
              style={{
                display: "flex",
                gap: "16px",
                alignItems: "center",
                borderBottom: "1px solid #eee",
                paddingBottom: "8px",
              }}
            >
              <Image
                src={item.image}
                alt={item.name}
                width={80}
                height={80}
                style={{
                  borderRadius: "5px",
                  border: "1px solid #ddd",
                }}
              />
              <div style={{ flex: 1 }}>
                <p style={{ fontWeight: 500 }}>{item.name}</p>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "12px",
                    marginTop: "4px",
                  }}
                >
                  <button
                    onClick={() => decreaseQuantity(item.id)}
                    style={{
                      border: "1px solid #ccc",
                      borderRadius: "4px",
                      padding: "4px",
                      background: "#fff",
                      cursor: "pointer",
                    }}
                  >
                    ➖
                  </button>
                  <span>{item.quantity}</span>
                  <button
                    onClick={() => addToQuote({ ...item, quantity: 1 })}
                    style={{
                      border: "1px solid #ccc",
                      borderRadius: "4px",
                      padding: "4px",
                      background: "#fff",
                      cursor: "pointer",
                    }}
                  >
                    ➕
                  </button>
                </div>
              </div>
              <div style={{ textAlign: "right" }}>
                <p style={{ fontWeight: 500, color: "green" }}>
                  ₹{item.price * item.quantity}
                </p>
                <button
                  onClick={() => removeFromQuote(item.id)}
                  style={{
                    color: "red",
                    background: "none",
                    border: "none",
                    cursor: "pointer",
                  }}
                >
                  <Trash2 size={22} />
                </button>
              </div>
            </div>
          ))
        )}
      </div>

      {/* Footer */}
      <div
        style={{
          borderTop: "1px solid #e0e0e0",
          padding: "16px",
        }}
      >
        <div
          style={{
            fontWeight: "600",
            marginBottom: "10px",
            textAlign: "right",
          }}
        >
          Total: ₹{total}
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
          <button
            onClick={handleDownload}
            style={{
              padding: "10px",
              backgroundColor: "#222",
              color: "white",
              borderRadius: "6px",
              border: "none",
              cursor: "pointer",
            }}
          >
            📄 Download PDF
          </button>

          <button
            onClick={handleWhatsAppShare}
            style={{
              padding: "10px",
              backgroundColor: "#25D366",
              color: "white",
              borderRadius: "6px",
              border: "none",
              cursor: "pointer",
            }}
          >
            💬 Share via WhatsApp
          </button>
          <button
            onClick={handleEmailShare}
            style={{
              padding: "10px",
              backgroundColor: "#D44638",
              color: "white",
              borderRadius: "6px",
              border: "none",
              cursor: "pointer",
            }}
          >
            📧 Share via Email
          </button>
        </div>

        <div
          id="print-quote"
          style={{
            position: "absolute",
            top: "-9999px",
            left: "0",
            width: "800px",
            backgroundColor: "#fff",
            padding: " 0",
            fontFamily: "Arial",
          }}
        >
          <div
            style={{
              backgroundColor: "#33393d",
              color: "#fff",
              padding: "10px 0",
              textAlign: "center",
            }}
          >
            <h1 style={{ margin: 0 }}>MS Sanitarywares</h1>
          </div>

          {/* Title */}
          <div style={{ textAlign: "center", margin: "20px 0" }}>
            <h2
              style={{
                margin: "10px 0",
                borderBottom: "2px solid #000",
                display: "inline-block",
                paddingBottom: "5px",
              }}
            >
              Quotation
            </h2>
          </div>

          {/* Table */}
          <table style={{ width: "100%", borderCollapse: "collapse" }}>
            <thead>
              <tr>
                <th style={{ border: "1px solid #000", padding: "8px" }}>
                  Image
                </th>
                <th style={{ border: "1px solid #000", padding: "8px" }}>
                  Name
                </th>
                <th style={{ border: "1px solid #000", padding: "8px" }}>
                  Price
                </th>
                <th style={{ border: "1px solid #000", padding: "8px" }}>
                  Quantity
                </th>
                <th style={{ border: "1px solid #000", padding: "8px" }}>
                  Total
                </th>
              </tr>
            </thead>
            <tbody>
              {quoteItems.map((item) => (
                <tr key={item.id}>
                  <td
                    style={{
                      border: "1px solid #000",
                      padding: "8px",
                      textAlign: "center",
                    }}
                  >
                    <img src={item.image} width="60" alt={item.name} />
                  </td>
                  <td style={{ border: "1px solid #000", padding: "8px" }}>
                    {item.name}
                  </td>
                  <td style={{ border: "1px solid #000", padding: "8px" }}>
                    ₹{item.price}
                  </td>
                  <td style={{ border: "1px solid #000", padding: "8px" }}>
                    {item.quantity}
                  </td>
                  <td style={{ border: "1px solid #000", padding: "8px" }}>
                    ₹{item.price * item.quantity}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          {/* Total */}
          <div
            style={{
              textAlign: "right",
              marginTop: "20px",
              fontWeight: "bold",
            }}
          >
            Grand Total: ₹
            {quoteItems.reduce(
              (total, item) => total + item.price * item.quantity,
              0
            )}
          </div>

          {/* Footer */}
          <div
            style={{
              marginTop: "50px",
              backgroundColor: "#000",
              color: "#fff",
              padding: "15px",
              fontSize: "14px",
            }}
          >
            <p style={{ margin: "4px 0" }}>
              Phone: +91-9989396467, +91-8341053908
            </p>
            <p style={{ margin: "4px 0" }}>Email: mssanitaryware@gmail.com</p>
            <p style={{ margin: "4px 0" }}>Website: www.mssanitarywares.in</p>
            <p style={{ margin: "4px 0" }}>
              Address: Bada Bazar Road, Moti Mahal, Golconda Fort, Hyderabad,
              India
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
