import "./globals.css";
import Header from "@/app/components/header";
import Footer from "@/app/components/footer";
import WhatsAppChat from "@/app/components/WhatsAppChat";
import RouteLoader from "@/app/components/RouteLoader";
import { Outfit } from "next/font/google";
import QuoteModal from "@/app/components/QuoteModal";
import NotificationBadge   from "./components/NotificationBadge";
import TopBar from "./home/components/TopBar";
const outfit = Outfit({ subsets: ["latin"] });
// import '@/styles/globals.css';

export const metadata = {
  title: "MS Sanitarywares",
  description: "Top quality bathroom solutions",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={outfit.className}>
        <RouteLoader>
          {/* <TopBar /> */}
          <Header />
           <NotificationBadge   />
          {children}
        <QuoteModal />
          <Footer />
          <WhatsAppChat />
        </RouteLoader>
      </body>
    </html>
  );
}
