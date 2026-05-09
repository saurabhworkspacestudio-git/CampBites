import { useState, useEffect } from "react";
import { T } from "./theme/colors";
import { CartProvider } from "./context/CartContext";
import { Nav } from "./components/layout/Navbar";
import { Footer } from "./components/layout/Footer";
import { CartDrawer } from "./components/cart/CartDrawer";
import { Home } from "./pages/Home";
import { MenuPage } from "./pages/Menu";
import { AboutPage } from "./pages/About";
import { ContactPage } from "./pages/Contact";

const GCSS = `
  @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,600;0,700;1,400;1,600;1,700&family=DM+Mono:wght@400;500&family=Jost:wght@300;400;500;600&display=swap');
  *,*::before,*::after{margin:0;padding:0;box-sizing:border-box;}
  html{scroll-behavior:smooth;}
  body{font-family:'Jost',sans-serif;background:#0F0B08;color:#F0E8D8;overflow-x:hidden;}
  input,select,textarea,button{font-family:'Jost',sans-serif;}
  ::-webkit-scrollbar{width:3px;}
  ::-webkit-scrollbar-thumb{background:#C9973A;}
  @keyframes fadeUp{from{opacity:0;transform:translateY(28px)}to{opacity:1;transform:translateY(0)}}
  @keyframes fadeIn{from{opacity:0}to{opacity:1}}
  @keyframes slideR{from{opacity:0;transform:translateX(40px)}to{opacity:1;transform:translateX(0)}}
  @keyframes marquee{0%{transform:translateX(0)}100%{transform:translateX(-50%)}}
  @keyframes spin{from{transform:rotate(0)}to{transform:rotate(360deg)}}
  @keyframes zoomIn{from{transform:scale(1.06)}to{transform:scale(1)}}
  .fu{animation:fadeUp 0.75s cubic-bezier(.22,1,.36,1) both;}
  .fi{animation:fadeIn 0.4s ease both;}
  .pg{animation:fadeIn 0.35s ease both;}
`;

export default function App() {
  const [page, setPage] = useState("home");

  useEffect(() => {
    if (!document.getElementById("__cb_g")) {
      const s = document.createElement("style");
      s.id = "__cb_g";
      s.textContent = GCSS;
      document.head.appendChild(s);
    }
  }, []);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [page]);

  const renderPage = () => {
    switch (page) {
      case "home": return <Home setPage={setPage} />;
      case "menu": return <MenuPage />;
      case "about": return <AboutPage setPage={setPage} />;
      case "contact": return <ContactPage />;
      default: return <Home setPage={setPage} />;
    }
  };

  return (
    <CartProvider>
      <div style={{ minHeight: "100vh", background: T.bg }}>
        <Nav page={page} setPage={setPage} />
        <div key={page} className="pg">
          {renderPage()}
        </div>
        <Footer setPage={setPage} />
        <CartDrawer />
      </div>
    </CartProvider>
  );
}