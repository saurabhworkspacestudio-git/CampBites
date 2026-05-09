import { useState } from 'react';
import { T } from '../theme/colors';
import { P, MENU } from '../data/menu';
import { Eyebrow, Heading } from '../components/common/Typography';
import { MenuCard } from '../components/menu/MenuCard';

export const MenuPage = () => {
  const [cat, setCat] = useState("all");
  const [q, setQ] = useState("");
  const items = MENU.filter(i => (cat === "all" || i.cat === cat) && (i.name.toLowerCase().includes(q.toLowerCase()) || i.desc.toLowerCase().includes(q.toLowerCase())));
  return (
    <div style={{ paddingTop: 72, minHeight: "100vh" }}>
      <div style={{ position: "relative", height: 320, overflow: "hidden" }}>
        <img src={P.b6} alt="Menu" style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center 60%" }} />
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top,rgba(15,11,8,1) 0%,rgba(15,11,8,0.5) 60%,rgba(15,11,8,0.15) 100%)" }} />
        <div style={{ position: "absolute", bottom: "3.5rem", left: 0, right: 0, maxWidth: 1320, margin: "0 auto", padding: "0 3rem" }}>
          <Eyebrow c="The Full Menu" /><Heading size="4.5rem">Handcrafted. <em style={{color: T.gold}}>Always Fresh.</em></Heading>
        </div>
      </div>
      <div style={{ background: T.surface, padding: "1.4rem 3rem", borderBottom: `1px solid ${T.border}`, display: "flex", gap: "1rem", flexWrap: "wrap", alignItems: "center", justifyContent: "space-between" }}>
        <div style={{ display: "flex", flexWrap: "wrap", gap: 0 }}>
          {["all", "burgers", "sides", "drinks", "desserts"].map((c, i) => (
            <button key={c} onClick={() => setCat(c)} style={{
              padding: "0.6rem 1.4rem", cursor: "pointer",
              border: `1px solid ${cat === c ? T.gold : T.border}`,
              marginLeft: i > 0 ? "-1px" : "0",
              background: cat === c ? "rgba(201,151,58,0.1)" : "transparent", color: cat === c ? T.gold : T.muted,
              fontFamily: "'DM Mono',monospace", fontWeight: 500, fontSize: "0.62rem", letterSpacing: "2px", textTransform: "uppercase", transition: "all 0.2s", position: "relative", zIndex: cat === c ? 2 : 1
            }}>
              {c === "all" ? "All" : c[0].toUpperCase() + c.slice(1)}
            </button>
          ))}
        </div>
        <div style={{ position: "relative", width: 260 }}>
          <span style={{ position: "absolute", left: 12, top: "50%", transform: "translateY(-50%)", fontSize: "0.85rem", opacity:0.35 }}>⌕</span>
          <input value={q} onChange={e => setQ(e.target.value)} placeholder="Search menu..."
            style={{ width: "100%", padding: "0.65rem 1rem 0.65rem 2.4rem", background: T.card, border: `1px solid ${T.border}`, color: T.cream, fontSize: "0.85rem", outline: "none", transition: "border-color 0.2s" }}
            onFocus={e => e.target.style.borderColor = T.gold} onBlur={e => e.target.style.borderColor = T.border} />
        </div>
      </div>
      <div style={{ maxWidth: 1320, margin: "0 auto", padding: "4rem 3rem" }}>
        <div style={{
          fontFamily: "'DM Mono',monospace", fontSize: "0.62rem", letterSpacing: "3px",
          textTransform: "uppercase", color: T.muted, marginBottom: "2.5rem"
        }}>
          {items.length} {items.length === 1 ? "item" : "items"}{cat !== "all" ? ` · ${cat}` : ""}{q ? ` matching "${q}"` : ""}
        </div>
        {items.length === 0 ? (
          <div style={{ textAlign: "center", padding: "5rem", color: T.muted }}>
            <div style={{ fontFamily: "'Cormorant Garamond',serif", fontStyle: "italic", fontSize: "1.6rem", marginBottom: "0.5rem" }}>Nothing found.</div>
          </div>
        ) : (
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill,minmax(290px,1fr))", gap: "2rem" }}>
            {items.map((item, i) => <MenuCard key={item.id} item={item} delay={i * 0.06} />)}
          </div>
        )}
      </div>
    </div>
  );
};