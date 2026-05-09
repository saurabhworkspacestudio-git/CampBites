import { useState, useEffect } from 'react';
import { T } from '../../theme/colors';
import { useCart } from '../../context/CartContext';

export const Nav = ({ page, setPage }) => {
  const { cartCount, setIsCartOpen } = useCart();
  const [sc, setSc] = useState(false);
  
  useEffect(() => {
    const fn = () => setSc(window.scrollY > 60);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  return (
    <nav style={{
      position: "fixed", top: 0, left: 0, right: 0, zIndex: 300,
      background: sc ? "rgba(15,11,8,0.97)" : "rgba(15,11,8,0.25)",
      backdropFilter: "blur(20px)",
      borderBottom: `1px solid ${sc ? T.border : "transparent"}`,
      transition: "all 0.4s"
    }}>
      <div style={{ maxWidth: 1320, margin: "0 auto", padding: "0 3rem", height: 72,
        display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <button onClick={() => setPage("home")} style={{ background: "none", border: "none", cursor: "pointer", textAlign: "left" }}>
          <div style={{ fontFamily: "'Cormorant Garamond',serif", fontWeight: 700, fontSize: "1.75rem", lineHeight: 1, color: T.cream }}>
            Camp<span style={{ color: T.gold, fontStyle: "italic" }}>Bites</span>
          </div>
          <div style={{ fontFamily: "'DM Mono',monospace", fontSize: "0.44rem", letterSpacing: "5px", color: T.gold, marginTop: "3px", opacity: 0.7 }}>
            EST. 1978 · CAMP · PUNE
          </div>
        </button>
        <div style={{ display: "flex", gap: "3rem", alignItems: "center" }}>
          {[["home", "Home"], ["menu", "Menu"], ["about", "Our Story"], ["contact", "Reserve"]].map(([k, l]) => (
            <button key={k} onClick={() => setPage(k)} style={{
              background: "none", border: "none", cursor: "pointer",
              fontFamily: "'DM Mono',monospace", fontWeight: 500,
              fontSize: "0.6rem", letterSpacing: "3px", textTransform: "uppercase",
              color: page === k ? T.gold : "rgba(240,232,216,0.5)",
              borderBottom: `1px solid ${page === k ? T.gold : "transparent"}`,
              paddingBottom: "2px", transition: "all 0.2s" }}>{l}</button>
          ))}
        </div>
        <button onClick={() => setIsCartOpen(true)} style={{ background: "none", border: "none", cursor: "pointer", position: "relative", padding: "0.3rem" }}>
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke={T.cream} strokeWidth="1.5" opacity="0.65">
            <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z" /><line x1="3" y1="6" x2="21" y2="6" />
            <path d="M16 10a4 4 0 01-8 0" />
          </svg>
          {cartCount > 0 && <span style={{ position: "absolute", top: -4, right: -4, background: T.gold, color: T.bg,
            borderRadius: "50%", width: 17, height: 17, fontSize: "0.58rem", fontWeight: 700,
            display: "flex", alignItems: "center", justifyContent: "center" }}>{cartCount}</span>}
        </button>
      </div>
    </nav>
  );
};