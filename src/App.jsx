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

export default function App() {
  const [page, setPage] = useState("home");

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [page]);

  const renderPage = () => {
    switch (page) {
      case "home":    return <Home setPage={setPage} />;
      case "menu":    return <MenuPage />;
      case "about":   return <AboutPage setPage={setPage} />;
      case "contact": return <ContactPage />;
      default:        return <Home setPage={setPage} />;
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