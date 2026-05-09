import { T } from '../theme/colors';
import { P, MENU } from '../data/menu';
import { Eyebrow, Heading } from '../components/common/Typography';
import { GoldBtn, GhostBtn } from '../components/common/Buttons';
import { MenuCard } from '../components/menu/MenuCard';

export const Home = ({ setPage }) => {
  const best = MENU.filter(i => i.tag === "bestseller");
  return (
    <div>
      <section style={{ minHeight: "100vh", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", inset: 0 }}>
          <img src={P.hero} alt="CampBites" style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center", animation: "zoomIn 8s ease both" }} />
          <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to right, rgba(15,11,8,0.97) 0%, rgba(15,11,8,0.82) 48%, rgba(15,11,8,0.3) 100%)" }} />
          <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(15,11,8,0.75) 0%, transparent 50%)" }} />
        </div>
        <div style={{
          position: "relative", zIndex: 2, maxWidth: 1320, margin: "0 auto", padding: "0 3rem",
          minHeight: "100vh", display: "flex", flexDirection: "column", justifyContent: "center"
        }}>
          <div style={{ maxWidth: 620 }}>
            <div className="fu" style={{ animationDelay: "0.1s" }}><Eyebrow c="Camp · MG Road · Pune — Est. 1978" /></div>
            <h1 className="fu" style={{
              animationDelay: "0.22s", fontFamily: "'Cormorant Garamond',serif", fontWeight: 700,
              fontSize: "clamp(4.5rem,9vw,8rem)", lineHeight: 0.9, marginBottom: "2rem"
            }}>
              <span style={{ display: "block", color: T.cream }}>Where</span>
              <span style={{ display: "block", color: T.gold, fontStyle: "italic" }}>Flavour</span>
              <span style={{ display: "block", color: T.cream }}>Finds</span>
              <span style={{ display: "block", WebkitTextStroke: `1.5px ${T.gold}`, color: "transparent", fontStyle: "italic" }}>Soul.</span>
            </h1>
            <p className="fu" style={{
              animationDelay: "0.38s", fontFamily: "'Cormorant Garamond',serif", fontStyle: "italic",
              fontSize: "1.2rem", color: "rgba(240,232,216,0.72)", lineHeight: 1.85, marginBottom: "2.5rem", maxWidth: 460
            }}>
              Handcrafted smash burgers, crispy fries and cold milkshakes — cooked fresh from the same Camp kitchen since 1978.
            </p>
            <div className="fu" style={{ animationDelay: "0.5s", display: "flex", gap: "1rem", flexWrap: "wrap" }}>
              <GoldBtn onClick={() => setPage("menu")} style={{ padding: "1.05rem 3rem" }}>Explore Menu</GoldBtn>
              <GhostBtn onClick={() => setPage("contact")} style={{ padding: "1.05rem 3rem" }}>Book a Table</GhostBtn>
            </div>
            <div className="fu" style={{ animationDelay: "0.65s", display: "flex", gap: "0", marginTop: "4rem", paddingTop: "2.5rem", borderTop: `1px solid ${T.border}` }}>
              {[["46", "Years"], ["32+", "Burgers"], ["4.8★", "Rating"], ["2L+", "Guests"]].map(([n, l], i) => (
                <div key={l} style={{ paddingRight: "2rem", borderRight: i < 3 ? `1px solid ${T.border}` : "none", paddingLeft: i > 0 ? "2rem" : "0" }}>
                  <div style={{ fontFamily: "'Cormorant Garamond',serif", fontWeight: 700, fontSize: "2.2rem", color: T.gold, lineHeight: 1 }}>{n}</div>
                  <div style={{ fontFamily: "'DM Mono',monospace", fontSize: "0.55rem", letterSpacing: "2px", textTransform: "uppercase", color: T.muted, marginTop: "0.3rem" }}>{l}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div style={{ position: "absolute", bottom: "2.5rem", left: "50%", transform: "translateX(-50%)", zIndex: 2, display: "flex", flexDirection: "column", alignItems: "center", gap: "0.5rem" }}>
          <div style={{ fontFamily: "'DM Mono',monospace", fontSize: "0.52rem", letterSpacing: "4px", color: T.muted }}>SCROLL</div>
          <div style={{ width: 1, height: 36, background: `linear-gradient(${T.gold},transparent)` }} />
        </div>
      </section>

      {/* MARQUEE */}
      <div style={{ borderTop: `1px solid ${T.border}`, borderBottom: `1px solid ${T.border}`, padding: "0.72rem 0", overflow: "hidden", background: T.surface }}>
        <div style={{ display: "inline-block", animation: "marquee 28s linear infinite", whiteSpace: "nowrap" }}>
          {[...Array(2)].map((_, j) => (
            <span key={j}>{["Smash Burgers", "Crispy Fries", "Thick Milkshakes", "Pune's Finest", "Since 1978", "MG Road Camp", "No Frozen Patties", "Cooked to Order"].map(t => (
              <span key={t}>
                <span style={{ fontFamily: "'Cormorant Garamond',serif", fontStyle: "italic", fontSize: "1.1rem", color: T.cream, opacity: 0.6, margin: "0 2rem" }}>{t}</span>
                <span style={{ color: T.gold, opacity: 0.3, margin: "0 0.5rem" }}>·</span>
              </span>
            ))}</span>
          ))}
        </div>
      </div>

      <section style={{ padding: "8rem 3rem", maxWidth: 1320, margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "7rem", alignItems: "center" }}>
        <div>
          <Eyebrow c="The Camp Bites Story" />
          <Heading size="4rem" style={{ marginBottom: "2rem" }}>
            <em style={{ color: T.gold }}>Three generations.</em><br />One obsession.
          </Heading>
          <p style={{ fontFamily: "'Cormorant Garamond',serif", fontStyle: "italic", fontSize: "1.15rem", color: "rgba(240,232,216,0.75)", lineHeight: 1.95, marginBottom: "1.5rem" }}>
            "What started as a tiny counter on MG Road has become the burger Pune grew up on. We don't cut corners. We never have."
          </p>
          <p style={{ fontSize: "0.87rem", color: T.muted, lineHeight: 1.9, marginBottom: "2.5rem" }}>
            Since 1978, three generations of the Patel family have hand-pressed every patty, sliced every bun fresh, and served every order with the warmth that made Camp Bites a Pune institution.
          </p>
          <GoldBtn onClick={() => setPage("about")}>Our Full Story →</GoldBtn>
        </div>
        <div style={{ position: "relative" }}>
          <div style={{ width: "100%", aspectRatio: "4/5", overflow: "hidden", border: `1px solid ${T.border}` }}>
            <img src={P.interior1} alt="Camp Bites interior" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
            <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top,rgba(15,11,8,0.5) 0%,transparent 60%)" }} />
          </div>
          <div style={{ position: "absolute", top: -14, right: -14, width: 60, height: 60, borderTop: `2px solid ${T.gold}`, borderRight: `2px solid ${T.gold}`, opacity: 0.45 }} />
          <div style={{ position: "absolute", bottom: -14, left: -14, width: 60, height: 60, borderBottom: `2px solid ${T.gold}`, borderLeft: `2px solid ${T.gold}`, opacity: 0.45 }} />
          <div style={{ position: "absolute", bottom: -24, right: -24, background: T.panel, border: `1px solid ${T.border}`, padding: "1.2rem 1.8rem", textAlign: "center" }}>
            <div style={{ fontFamily: "'Cormorant Garamond',serif", fontWeight: 700, fontSize: "2.6rem", color: T.gold, lineHeight: 1 }}>1978</div>
            <div style={{ fontFamily: "'DM Mono',monospace", fontSize: "0.5rem", letterSpacing: "4px", color: T.muted, marginTop: "4px" }}>EST. PUNE</div>
          </div>
        </div>
      </section>

      <section style={{ padding: "5rem 3rem 8rem", background: T.surface }}>
        <div style={{ maxWidth: 1320, margin: "0 auto" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: "4rem", flexWrap: "wrap", gap: "1.5rem" }}>
            <div>
              <Eyebrow c="Signature Dishes" />
              <Heading size="3.5rem">What Pune <em style={{color: T.gold}}> Can't Stop</em> Ordering</Heading>
            </div>
            <GhostBtn onClick={() => setPage("menu")}>Full Menu →</GhostBtn>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(300px,1fr))", gap: "2rem" }}>
            {best.map((item, i) => <MenuCard key={item.id} item={item} delay={i * 0.1} />)}
          </div>
        </div>
      </section>

      <div style={{ position: "relative", height: 480, overflow: "hidden" }}>
        <img src={P.grill} alt="The grill" style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center 40%" }} />
        <div style={{ position: "absolute", inset: 0, background: "rgba(15,11,8,0.65)" }} />
        <div style={{ position: "absolute", inset: 0, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", textAlign: "center", padding: "2rem" }}>
          <Eyebrow c="Our Kitchen" center />
          <Heading size="4rem" center style={{ marginBottom: "1.5rem" }}>The Griddle Never <em style={{color: T.gold}}>Stops.</em></Heading>
          <p style={{ fontFamily: "'Cormorant Garamond',serif", fontStyle: "italic", fontSize: "1.1rem", color: "rgba(240,232,216,0.7)", maxWidth: 520, lineHeight: 1.9 }}>
            Every order cooked fresh. No heat lamps. No waiting trays. Just fire, metal, and 46 years of instinct.
          </p>
        </div>
      </div>

      <section style={{ padding: "8rem 3rem" }}>
        <div style={{ maxWidth: 1320, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: "5rem" }}>
            <Eyebrow c="Our Promise" center />
            <Heading size="3.5rem" center>Made the <em style={{color: T.gold}}>Camp Bites</em> Way</Heading>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", border: `1px solid ${T.border}` }}>
            {[
              { n: "01", t: "No Frozen Patties", d: "Every patty hand-pressed fresh each morning. In 46 years, not once have we used frozen." },
              { n: "02", t: "No Heat Lamps", d: "Your order is cooked the moment you place it. The griddle doesn't stop until you're served." },
              { n: "03", t: "Local Suppliers", d: "Our cheese, produce and dairy come from Pune and the surrounding Maharashtra region." },
              { n: "04", t: "Fair Prices", d: "Great food shouldn't cost a fortune. Burgers from ₹149. Same family. Same values. Since 1978." },
            ].map(({ n, t, d }, i) => (
              <div key={n} style={{
                padding: "3rem 2.2rem", borderRight: i < 3 ? `1px solid ${T.border}` : "none",
                position: "relative", transition: "background 0.3s"
              }}
                onMouseEnter={e => e.currentTarget.style.background = T.card}
                onMouseLeave={e => e.currentTarget.style.background = "transparent"}>
                <div style={{ position: "absolute", top: "1rem", right: "1.5rem", fontFamily: "'Cormorant Garamond',serif", fontWeight: 700, fontSize: "4rem", color: T.gold, opacity: 0.1, lineHeight: 1 }}>{n}</div>
                <div style={{ width: 24, height: 1, background: T.gold, marginBottom: "1.5rem", opacity: 0.6 }} />
                <div style={{ fontFamily: "'Cormorant Garamond',serif", fontWeight: 600, fontSize: "1.1rem", color: T.cream, marginBottom: "0.9rem" }}>{t}</div>
                <div style={{ fontSize: "0.82rem", color: T.muted, lineHeight: 1.85 }}>{d}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ padding: "7rem 3rem", background: T.surface }}>
        <div style={{ maxWidth: 1320, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: "5rem" }}>
            <Eyebrow c="Guest Words" center />
            <Heading size="3.5rem" center>Loved by <em style={{color: T.gold}}>Pune</em></Heading>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: "1px", background: T.border, border: `1px solid ${T.border}` }}>
            {[
              { n: "Rahul Deshmukh", l: "Koregaon Park", av: "R", t: "Been coming since my FC Road college days. 15 years later, the Classic Camp still hits exactly the same. Some things should never change — thankfully this hasn't." },
              { n: "Priya Joshi", l: "Aundh, Pune", av: "P", t: "The Pune Masala Smash is a masterpiece. Pune street food elevated into something you genuinely sit down for. I've been back six times this month alone." },
              { n: "Suresh Patil", l: "Visiting from Mumbai", av: "S", t: "Drove from Mumbai specifically for this. My kids went absolutely crazy. The loaded fries alone are worth the trip. Planning our next visit already." },
            ].map(r => (
              <div key={r.n} style={{ background: T.card, padding: "3rem 2.5rem", transition: "background 0.3s", position: "relative", overflow: "hidden" }}
                onMouseEnter={e => e.currentTarget.style.background = T.panel}
                onMouseLeave={e => e.currentTarget.style.background = T.card}>
                <div style={{ position: "absolute", top: "-1rem", left: "1rem", fontFamily: "'Cormorant Garamond',serif", fontWeight: 700, fontSize: "8rem", color: T.gold, opacity: 0.06, lineHeight: 1, pointerEvents: "none" }}>"</div>
                <div style={{ color: T.gold, fontSize: "0.8rem", marginBottom: "1.2rem", letterSpacing: "3px" }}>★★★★★</div>
                <div style={{ width: 22, height: 1, background: T.gold, opacity: 0.5, marginBottom: "1.5rem" }} />
                <p style={{ fontFamily: "'Cormorant Garamond',serif", fontStyle: "italic", fontSize: "1.05rem", color: "rgba(240,232,216,0.8)", lineHeight: 1.9, marginBottom: "2rem" }}>"{r.t}"</p>
                <div style={{ display: "flex", gap: "1rem", alignItems: "center" }}>
                  <div style={{ width: 42, height: 42, borderRadius: "50%", background: "rgba(201,151,58,0.12)", flexShrink: 0, border: `1px solid ${T.borderH}`, display: "flex", alignItems: "center", justifyContent: "center", fontFamily: "'Cormorant Garamond',serif", fontWeight: 700, fontSize: "1.1rem", color: T.gold }}>{r.av}</div>
                  <div>
                    <div style={{ fontFamily: "'Cormorant Garamond',serif", fontWeight: 600, fontSize: "1rem", color: T.cream }}>{r.n}</div>
                    <div style={{ fontFamily: "'DM Mono',monospace", fontSize: "0.58rem", color: T.muted, letterSpacing: "1px", marginTop: "2px" }}>{r.l}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};