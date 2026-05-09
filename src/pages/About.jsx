import { useState } from 'react';
import { T } from '../theme/colors';
import { P, GALLERY } from '../data/menu';
import { Eyebrow, Heading } from '../components/common/Typography';
import { GoldBtn } from '../components/common/Buttons';

export const AboutPage = ({ setPage }) => {
  const [lb, setLb] = useState(null);
  return (
    <div style={{ paddingTop: 72, minHeight: "100vh" }}>
      <div style={{ position: "relative", height: 520, overflow: "hidden" }}>
        <img src={P.about} alt="Our story" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top,rgba(15,11,8,1) 0%,rgba(15,11,8,0.5) 55%,rgba(15,11,8,0.15) 100%)" }} />
        <div style={{ position: "absolute", bottom: "4rem", left: 0, right: 0, maxWidth: 1320, margin: "0 auto", padding: "0 3rem" }}>
          <Eyebrow c="Our Story · Since 1978" />
          <Heading size="5.5rem" style={{ lineHeight: 0.93 }}>
            A Pune <em style={{color: T.gold}}>Legend.</em><br />
            <span style={{ opacity: 0.45, fontSize: "0.7em" }}>46 Years in the Making.</span>
          </Heading>
        </div>
      </div>

      <section style={{ maxWidth: 1320, margin: "0 auto", padding: "7rem 3rem", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "7rem", alignItems: "start" }}>
        <div style={{ position: "sticky", top: "6rem" }}>
          <Eyebrow c="The Journey" />
          <Heading size="3rem" style={{ marginBottom: "2rem" }}>
            From a Street<br />Counter to an<br /><em style={{color: T.gold}}>Institution</em>
          </Heading>
          <p style={{ fontSize: "0.87rem", color: T.muted, lineHeight: 1.9, marginBottom: "2.5rem" }}>
            Every great restaurant has a founding obsession. Ours was simple: the most satisfying burger in Pune, made honestly, priced fairly, served with heart.
          </p>
          <GoldBtn onClick={() => setPage("contact")}>Reserve a Table →</GoldBtn>
        </div>
        <div>
          {[
            ["1978", "The First Counter", "Ramesh Patel opens a small burger counter on MG Road with one griddle, one recipe, and one obsession."],
            ["1989", "Upstairs & Downstairs", "Demand grows. We expand into the floor above. The legendary upstairs/downstairs slip system becomes Pune folklore."],
            ["2001", "Second Generation", "Rajan Patel takes over the kitchen at age 22. Keeps every original recipe, adds the Loaded Camp Fries. The queue gets longer."],
            ["2018", "Third Generation", "Arjun Patel joins. The neon sign goes up. A new generation of Pune students find their first Camp Classic."],
            ["Today", "Still Here", "Every morning at 6AM, someone in the Patel family is hand-pressing patties for the day ahead."],
          ].map(([yr, t, d]) => (
            <div key={yr} style={{ display: "flex", gap: "2rem", marginBottom: "3rem", paddingBottom: "3rem", borderBottom: `1px solid ${T.border}` }}>
              <div style={{ flexShrink: 0, width: 56 }}>
                <div style={{ fontFamily: "'DM Mono',monospace", fontSize: "0.68rem", color: T.gold, letterSpacing: "1px" }}>{yr}</div>
              </div>
              <div>
                <div style={{ fontFamily: "'Cormorant Garamond',serif", fontWeight: 600, fontSize: "1.2rem", color: T.cream, marginBottom: "0.5rem" }}>{t}</div>
                <div style={{ fontSize: "0.85rem", color: T.muted, lineHeight: 1.85 }}>{d}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section style={{ background: T.surface, padding: "7rem 3rem" }}>
        <div style={{ maxWidth: 1320, margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "6rem", alignItems: "center" }}>
          <div style={{ position: "relative", height: 540, overflow: "hidden", border: `1px solid ${T.border}` }}>
            <img src={P.chef} alt="Chef Rajan Patel" style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "top" }} />
            <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top,rgba(24,18,8,0.85) 0%,transparent 55%)" }} />
            <div style={{ position: "absolute", bottom: "2rem", left: "2rem", right: "2rem" }}>
              <div style={{ fontFamily: "'Cormorant Garamond',serif", fontWeight: 700, fontSize: "1.3rem", color: T.cream }}>Chef Rajan Patel</div>
              <div style={{ fontFamily: "'DM Mono',monospace", fontSize: "0.56rem", letterSpacing: "3px", color: T.gold, marginTop: "4px" }}>HEAD CHEF · 22 YEARS</div>
            </div>
          </div>
          <div>
            <Eyebrow c="Behind the Griddle" />
            <Heading size="3rem" style={{ marginBottom: "1.5rem" }}>Every Burger is a<br /><em style={{color: T.gold}}>Labour of Love</em></Heading>
            <blockquote style={{ fontFamily: "'Cormorant Garamond',serif", fontStyle: "italic", fontSize: "1.15rem", color: "rgba(240,232,216,0.8)", lineHeight: 1.95, borderLeft: `2px solid ${T.gold}`, paddingLeft: "1.5rem", marginBottom: "2.5rem" }}>
              "I've been standing at this griddle for 22 years. Every patty I press, I feel the weight of every customer who trusted us with their hunger. That's not something I take lightly."
            </blockquote>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1px", border: `1px solid ${T.border}`, background: T.border }}>
              {[["🥩", "Fresh Meat Daily", "No frozen. Never."], ["🧀", "Local Cheese", "Pune dairy only."], ["🍟", "Hand-Cut Fries", "Every single morning."], ["🔥", "Made to Order", "No heat lamps. Ever."]].map(([ic, t, d]) => (
                <div key={t} style={{ background: T.card, padding: "1.5rem", transition: "background 0.25s" }}
                  onMouseEnter={e => e.currentTarget.style.background = T.panel}
                  onMouseLeave={e => e.currentTarget.style.background = T.card}>
                  <div style={{ fontSize: "1.5rem", marginBottom: "0.6rem" }}>{ic}</div>
                  <div style={{ fontFamily: "'Cormorant Garamond',serif", fontWeight: 600, fontSize: "1rem", color: T.cream, marginBottom: "0.2rem" }}>{t}</div>
                  <div style={{ fontSize: "0.76rem", color: T.muted }}>{d}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section style={{ padding: "7rem 3rem", maxWidth: 1320, margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: "4rem" }}>
          <Eyebrow c="Gallery" center /><Heading size="3.5rem" center>A Glimpse <em style={{color: T.gold}}>Inside</em></Heading>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: "1px", background: T.border, border: `1px solid ${T.border}` }}>
          {GALLERY.map((img, i) => (
            <div key={i} onClick={() => setLb(img)}
              style={{ position: "relative", overflow: "hidden", cursor: "pointer", aspectRatio: "4/3" }}
              onMouseEnter={e => { e.currentTarget.querySelector(".ov").style.opacity = "1"; e.currentTarget.querySelector("img").style.transform = "scale(1.08)"; }}
              onMouseLeave={e => { e.currentTarget.querySelector(".ov").style.opacity = "0"; e.currentTarget.querySelector("img").style.transform = "scale(1)"; }}>
              <img src={img.img} alt={img.label} style={{ width: "100%", height: "100%", objectFit: "cover", transition: "transform 0.5s ease" }} />
              <div className="ov" style={{ position: "absolute", inset: 0, opacity: 0, transition: "opacity 0.3s", background: "rgba(201,151,58,0.28)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <span style={{ fontFamily: "'Cormorant Garamond',serif", fontStyle: "italic", fontSize: "1.4rem", color: T.cream }}>View</span>
              </div>
              <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, padding: "1rem 1.2rem", background: "linear-gradient(transparent,rgba(15,11,8,0.85))" }}>
                <span style={{ fontFamily: "'DM Mono',monospace", fontSize: "0.62rem", letterSpacing: "3px", textTransform: "uppercase", color: T.cream, opacity: 0.8 }}>{img.label}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {lb && (
        <div onClick={() => setLb(null)} className="fi" style={{ position: "fixed", inset: 0, zIndex: 600, background: "rgba(0,0,0,0.95)", display: "flex", alignItems: "center", justifyContent: "center", padding: "2rem", cursor: "pointer" }}>
          <div onClick={e => e.stopPropagation()} style={{ position: "relative", maxWidth: 820, width: "100%", border: `1px solid ${T.border}` }}>
            <img src={lb.img} alt={lb.label} style={{ width: "100%", height: 520, objectFit: "cover", display: "block" }} />
            <div style={{ padding: "1.2rem 1.5rem", background: T.panel, display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <span style={{ fontFamily: "'Cormorant Garamond',serif", fontStyle: "italic", fontSize: "1.1rem", color: T.cream }}>{lb.label}</span>
              <button onClick={() => setLb(null)} style={{ background: "transparent", border: `1px solid ${T.border}`, cursor: "pointer", color: T.muted, width: 32, height: 32, display: "flex", alignItems: "center", justifyContent: "center", fontSize: "0.85rem" }}>✕</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};