import { useState } from 'react';
import { T } from '../../theme/colors';
import { useCart } from '../../context/CartContext';

export const MenuCard = ({ item, delay = 0 }) => {
  const { addToCart } = useCart();
  const [added, setAdded] = useState(false);
  const [hov, setHov] = useState(false);
  
  const tagMap = {
    new: { bg: T.gold, color: T.bg, l: "New" },
    hot: { bg: T.red, color: "#fff", l: "🌶 Hot" },
    bestseller: { bg: "rgba(201,151,58,0.15)", color: T.gold, l: "Signature", border: T.borderH },
    premium: { bg: "rgba(255,255,255,0.08)", color: "#E8E0D0", l: "✦ Premium", border: "rgba(240,232,216,0.25)" },
  };
  
  const tag = item.tag ? tagMap[item.tag] : null;
  
  const doAdd = () => {
    addToCart(item);
    setAdded(true);
    setTimeout(() => setAdded(false), 1500);
  };

  return (
    <div className="fu" style={{
      animationDelay: `${delay}s`, background: T.card,
      border: `1px solid ${hov ? T.borderH : T.border}`,
      transition: "transform 0.3s, border-color 0.3s",
      transform: hov ? "translateY(-5px)" : "none",
      display: "flex", flexDirection: "column", overflow: "hidden"
    }}
      onMouseEnter={() => setHov(true)} onMouseLeave={() => setHov(false)}>
      <div style={{ height: 220, position: "relative", flexShrink: 0, overflow: "hidden", background: T.panel }}>
        <img src={item.img} alt={item.name}
          style={{
            width: "100%", height: "100%", objectFit: "cover",
            transition: "transform 0.6s ease", transform: hov ? "scale(1.07)" : "scale(1)"
          }} />
        <div style={{
          position: "absolute", inset: 0,
          background: "linear-gradient(to top, rgba(30,22,16,0.9) 0%, rgba(30,22,16,0.1) 55%, transparent 100%)"
        }} />
        {tag && <div style={{
          position: "absolute", top: 14, left: 14, background: tag.bg, color: tag.color,
          fontFamily: "'DM Mono',monospace", fontWeight: 500, fontSize: "0.58rem",
          letterSpacing: "2px", textTransform: "uppercase", padding: "4px 10px",
          border: tag.border ? `1px solid ${tag.border}` : "none"
        }}>{tag.l}</div>}
        <div style={{
          position: "absolute", bottom: 12, right: 14,
          fontFamily: "'DM Mono',monospace", fontSize: "0.6rem",
          color: "rgba(240,232,216,0.4)"
        }}>{item.cal}</div>
      </div>
      <div style={{ padding: "1.4rem 1.6rem 1.8rem", flex: 1, display: "flex", flexDirection: "column" }}>
        <div style={{ width: 28, height: 1, background: T.gold, marginBottom: "0.9rem", opacity: 0.6 }} />
        <div style={{ fontFamily: "'Cormorant Garamond',serif", fontWeight: 600, fontSize: "1.2rem", color: T.cream, marginBottom: "0.55rem" }}>{item.name}</div>
        <div style={{ fontSize: "0.79rem", color: T.muted, lineHeight: 1.8, flex: 1, marginBottom: "1.3rem" }}>{item.desc}</div>
        <div style={{ display: "flex", justifySelf: "flex-end", justifyContent: "space-between", alignItems: "center" }}>
          <span style={{ fontFamily: "'Cormorant Garamond',serif", fontWeight: 700, fontSize: "1.9rem", color: T.gold }}>₹{item.price}</span>
          <button onClick={doAdd} style={{
            padding: "0.52rem 1.3rem",
            border: `1px solid ${added ? "#2A5A1A" : T.gold}`, cursor: "pointer",
            background: added ? "rgba(42,90,26,0.18)" : "transparent",
            color: added ? "#5ADE2A" : T.gold,
            fontFamily: "'DM Mono',monospace", fontSize: "0.62rem",
            letterSpacing: "2px", textTransform: "uppercase", transition: "all 0.22s"
          }}>
            {added ? "✓ Added" : "Add →"}
          </button>
        </div>
      </div>
    </div>
  );
};