import { T } from '../../theme/colors';
import { Eyebrow } from '../common/Typography';

export const Footer = ({ setPage }) => (
  <footer style={{ background: T.surface, borderTop: `1px solid ${T.border}`, padding: "5rem 3rem 2.5rem" }}>
    <div style={{ maxWidth: 1320, margin: "0 auto" }}>
      <div style={{ display: "grid", gridTemplateColumns: "2fr 1fr 1fr 1fr", gap: "4rem", marginBottom: "4rem", paddingBottom: "4rem", borderBottom: `1px solid ${T.border}` }}>
        <div>
          <div style={{ fontFamily: "'Cormorant Garamond',serif", fontWeight: 700, fontSize: "2.2rem", lineHeight: 1, marginBottom: "0.4rem" }}>
            Camp<span style={{ color: T.gold, fontStyle: "italic" }}>Bites</span>
          </div>
          <div style={{ fontFamily: "'DM Mono',monospace", fontSize: "0.46rem", letterSpacing: "5px", color: T.gold, marginBottom: "1.5rem" }}>EST. 1978 · CAMP · PUNE</div>
          <p style={{ fontFamily: "'Cormorant Garamond',serif", fontStyle: "italic", fontSize: "0.95rem", color: T.muted, lineHeight: 1.9, maxWidth: 280, marginBottom: "1.5rem" }}>Three generations, one obsession. Making Pune's finest burgers since 1978.</p>
          <div style={{ fontFamily: "'DM Mono',monospace", fontSize: "0.6rem", color: T.muted }}>★★★★★ <span style={{ color: T.gold }}>4.8/5</span> · 2,400+ reviews</div>
        </div>
        {[{ title: "Navigate", items: [{ l: "Home", k: "home" }, { l: "Menu", k: "menu" }, { l: "Our Story", k: "about" }, { l: "Reserve", k: "contact" }] }, { title: "Menu", items: [{ l: "Classic Burgers" }, { l: "Specials" }, { l: "Sides" }, { l: "Milkshakes" }] }, { title: "Visit", items: [{ l: "17, MG Road, Camp" }, { l: "Pune – 411001" }, { l: "+91 20 2612 3456" }, { l: "11AM – 11PM Daily" }] }].map(({ title, items }) => (
          <div key={title}>
            <Eyebrow c={title} style={{ marginBottom: "1.5rem" }} />
            {items.map(({ l, k }) => (
              <div key={l} onClick={k ? () => setPage(k) : undefined} style={{ fontSize: "0.85rem", color: T.muted, marginBottom: "0.7rem", cursor: k ? "pointer" : "default", transition: "color 0.2s" }}
                onMouseEnter={e => { if (k) e.currentTarget.style.color = T.cream; }} onMouseLeave={e => e.currentTarget.style.color = T.muted}>{l}</div>
            ))}
          </div>
        ))}
      </div>
      <div style={{ display: "flex", justifyContent: "space-between", flexWrap: "wrap", gap: "1rem" }}>
        <div style={{ fontFamily: "'DM Mono',monospace", fontSize: "0.6rem", color: "rgba(240,232,216,0.18)", letterSpacing: "1px" }}>© 2024 CampBites Pvt. Ltd., Pune. All rights reserved.</div>
        <div style={{ fontFamily: "'Cormorant Garamond',serif", fontStyle: "italic", fontSize: "0.85rem", color: "rgba(240,232,216,0.18)" }}>Crafted with love for Pune</div>
      </div>
    </div>
  </footer>
);