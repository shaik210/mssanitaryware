"use client";
import Image from "next/image";
import Link from "next/link";
import logo from "../../../public/Sanitarywares.png";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* 🔹 Left Section - Logo & Description */}
        <div className="footer-left">
          <Image
            src={logo}
            alt="MS Sanitaryware Logo"
            width={250}
            height={180}
          />
          <p>
            At MS Sanitaryware, we provide a diverse range of bathroom
            essentials, from budget-friendly options to premium fixtures,
            ensuring quality, style, and durability for every home.
          </p>
        </div>

        {/* 🔹 Category & Social Links - Hidden on Mobile */}
        <div className="footer-links">
          <div>
            <h3>CATEGORY</h3>
            <ul>
              {[
                "Faucets",
                "Showers",
                "Sanitaryware",
                "Mirrors",
                "Sinks",
                "Bathroom Accessories",
              ].map((category, index) => (
                <li key={index}>
                  <Link
                    href={`/products/${category
                      .toLowerCase()
                      .replace(" ", "-")}`}
                      style={{ color: '#bac1c6', textDecoration: 'none' }}
                  >

                    {category}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3>SOCIAL</h3>
            <ul>
              {[
                { name: "Instagram", url: "https://www.instagram.com" },
                { name: "Twitter", url: "https://www.twitter.com" },
                { name: "Facebook", url: "https://www.facebook.com" },
              ].map((social, index) => (
                <li key={index}>
                  <a
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {social.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* 🔹 Contact Section */}
        <div style={{marginBottom:"20px"}} className="footer-contact">
          <h3>Contact Us</h3>
          <p>Mon to Sat, 10 AM - 9 PM</p>
          <p>Sun, 11 AM - 6 PM</p>
          <p>📞 +91-9989396467</p>
          <p>✉ mssanitaryware@gmail.com</p>
        </div>
      </div>

      {/* 🔹 Bottom Section */}
      <div className="footer-bottom">
        <p>
          &copy; {new Date().getFullYear()} MS Sanitaryware. All rights
          reserved.
        </p>
      </div>

      {/* 🔹 CSS Styling */}
      <style jsx>{`
  .footer {
    background-color: #191e21;
    color: #bac1c6;
    padding: 20px 0;
  }

  .footer-container {
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    max-width: 1300px;
    margin: 0 auto;
    gap: 20px;
    padding: 20px;
    align-items: center;
  }

  .footer-left {
    max-width: 500px;
    display: flex;
    align-items: center;
    gap: 10px;
  }

  .footer-left p {
    font-size: 15px;
    line-height: 1.8;
  }

  .footer-links {
    display: flex;
    flex: 1 1 400px;
    justify-content: space-around;
    min-width: 300px;
    color: #bac1c6;
  }

  .footer-links h3 {
    font-size: 16px;
    color: white;
    margin-bottom: 10px;
  }

  .footer-links ul {
    list-style: none;
    padding: 0;
    font-size: 14px;
    line-height: 1.8;
    color: #bac1c6;
  }

  .footer .footer-links a {
    color: #bac1c6 !important;  /* Adding !important to enforce the white color */
    text-decoration: none;
  }

  .footer-contact {
    min-width: 220px;
    // text-align: center;
    
  }

  .footer-contact h3 {
    color: white; /* Change to white */
  }

  .footer-bottom {
    text-align: center;
    margin-top: 20px;
    font-size: 12px;
    border-top: 1px solid #444;
    padding-top: 12px;
  }

  /* 🔹 Mobile View - Change Order & Hide Categories/Social */
  @media (max-width: 748px) {
    .footer-container {
      display: flex;
      flex-direction: column;
      align-items: center;
      text-align: center;
    }

    .footer-left {
      flex-direction: column;
      text-align: center;
      align-items: center;
    }

    .footer-links {
      display: none;
    }

    .footer-left p {
      margin-top: 10px;
      font=size:14px
    }

    .footer-contact {
      order: 3;
      margin-top: 15px;
    }
  }
`}</style>

    </footer>
  );
};

export default Footer;
