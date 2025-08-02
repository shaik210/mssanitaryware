
"use client"
import React, { useState, useRef, useEffect } from "react";

const NotificationBadge = () => {
  const badgeRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(true);
  const [dragging, setDragging] = useState(false);
  const [rel, setRel] = useState({ x: 0, y: 0 });
  const [position, setPosition] = useState({ x: window.innerWidth - 320, y: 40 });

  useEffect(() => {
    const handleMouseMove = (e:any) => {
      if (!dragging) return;
      setPosition({
        x: e.clientX - rel.x,
        y: e.clientY - rel.y,
      });
    };

    const handleMouseUp = () => {
      setDragging(false);
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseup", handleMouseUp);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
    };
  }, [dragging, rel]);

 const handleMouseDown = (e: any) => {
  const badge = badgeRef.current;
  if (!badge) return;

  const rect = badge.getBoundingClientRect();
  setDragging(true);
  setRel({
    x: e.clientX - rect.left,
    y: e.clientY - rect.top,
  });

  e.preventDefault();
};



  if (!visible) return null;

  return (
    <div
      ref={badgeRef}
      onMouseDown={handleMouseDown}
      style={{
        position: "fixed",
        left: `${position.x}px`,
        top: `${position.y}px`,
        width: "280px",
        backgroundColor: "#fff",
        borderRadius: "16px",
        boxShadow: "0 8px 24px rgba(0,0,0,0.1)",
        padding: "16px",
        zIndex: 9999,
        cursor: "move",
        transition: "all 0.2s ease",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <div style={{ position: "absolute", top: 8, right: 8, cursor: "pointer" }} onClick={() => setVisible(false)}>
        ❌
      </div>
      <div style={{ fontWeight: "bold", fontSize: "14px", marginBottom: "6px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <span>Notifications</span>
        <span
          style={{
            backgroundColor: "#f44336",
            color: "white",
            fontSize: "12px",
            padding: "2px 8px",
            borderRadius: "12px",
          }}
        >
          7
        </span>
      </div>
      <div style={{ fontSize: "13px", color: "#333", marginBottom: "10px" }}>
        🎁 Send a quote via PDF or WhatsApp and unlock a discount!
      </div>
      <div style={{ display: "flex", justifyContent: "flex-end", gap: "8px" }}>
        <button
          style={{
            backgroundColor: "#25D366",
            color: "white",
            border: "none",
            padding: "6px 10px",
            borderRadius: "6px",
            fontSize: "12px",
            cursor: "pointer",
          }}
          onClick={() => window.open("https://wa.me/91XXXXXXXXXX", "_blank")}
        >
          WhatsApp
        </button>
        <button
          style={{
            backgroundColor: "#1976d2",
            color: "white",
            border: "none",
            padding: "6px 10px",
            borderRadius: "6px",
            fontSize: "12px",
            cursor: "pointer",
          }}
          onClick={() => alert("Trigger PDF download")}
        >
          Send PDF
        </button>
      </div>
    </div>
  );
};

export default NotificationBadge;
