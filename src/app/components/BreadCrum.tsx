"use client";
import { usePathname } from "next/navigation";
import Link from "next/link";

const Breadcrumbs = () => {
  const pathname = usePathname();

  // ✅ Show breadcrumbs only for /products and its subpages
  if (!pathname.startsWith("/products")) return null;

  // Convert pathname to an array of segments
  const pathSegments = pathname.split("/").filter((segment) => segment);

  return (
    <div style={{ padding: "10px", backgroundColor: "transparent" }}>
      <nav>
        <Link
          href="/"
          style={{
            padding: "0 5px",
            textTransform: "capitalize",
            color: "#000000",
            textDecoration: "none",
            fontFamily: "Outfit",
            fontWeight: "400",
            fontSize: "18px",
            position: "relative",
          }}
        >
          Home
        </Link>

        {/* Breadcrumb Links */}
        {pathSegments.map((segment, index) => {
          const href = `/${pathSegments.slice(0, index + 1).join("/")}`;
          const isActive = pathname === href; // Check if the link is active

          return (
            <span key={href}>
              {" | "}
              <Link
                href={href}
                style={{
                  padding: "0 5px",
                  textTransform: "capitalize",
                  color: "#000000",
                  textDecoration: "none",
                  fontFamily: "Outfit",
                  fontWeight: "400",
                  fontSize: "18px",
                  position: "relative",
                  borderBottom: isActive ? "2px solid black" : "none", // Active underline
                }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.borderBottom = "2px solid black")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.borderBottom = isActive
                    ? "2px solid black"
                    : "none")
                }
              >
                {segment.replace("-", " ")}
              </Link>
            </span>
          );
        })}
      </nav>
    </div>
  );
};

export default Breadcrumbs;
