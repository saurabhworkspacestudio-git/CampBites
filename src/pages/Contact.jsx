import { useState } from 'react';
import { T } from '../theme/colors';
import { P } from '../data/menu';
import { Eyebrow, Heading } from '../components/common/Typography';
import { GoldBtn } from '../components/common/Buttons';

export const ContactPage = () => {
  const [f, setF] = useState({ name: "", phone: "", email: "", date: "", time: "", guests: "2", seating: "", note: "" });
  const [step, setStep] = useState("form");
  const [errors, setErrors] = useState({});

  const validate = () => {
      let e = {};
      if (!f.name) e.name = "Required";
      if (!f.phone) e.phone = "Required";
      if (!f.date) e.date = "Required";
      if (!f.time) e.time = "Required";
      setErrors(e);
      return Object.keys(e).length === 0;
  };

  const set = (k, v) => setF(p => ({ ...p, [k]: v }));
  const inp = { width: "100%", padding: "0.85rem 1rem", background: T.card, border: `1px solid ${T.border}`, color: T.cream, fontSize: "0.88rem", outline: "none", transition: "border-color 0.22s" };
  const lbl = { display: "block", fontFamily: "'DM Mono',monospace", fontWeight: 500, fontSize: "0.58rem", letterSpacing: "3px", textTransform: "uppercase", color: T.muted, marginBottom: "0.5rem" };
  
  const submit = () => { 
      if (!validate()) return;
      setStep("loading"); 
      setTimeout(() => setStep("success"), 2000); 
  };

  return (
    <div style={{ paddingTop: 72, minHeight: "100vh" }}>
      <div style={{ position: "relative", height: 340, overflow: "hidden" }}>
        <img src={P.table} alt="Reserve a table" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top,rgba(15,11,8,1) 0%,rgba(15,11,8,0.5) 60%,transparent 100%)" }} />
        <div style={{ position: "absolute", bottom: "3.5rem", left: 0, right: 0, maxWidth: 1320, margin: "0 auto", padding: "0 3rem" }}>
          <Eyebrow c="Reservations" /><Heading size="4.5rem">Reserve Your <em style={{color: T.gold}}>Table</em></Heading>
        </div>
      </div>
      <div style={{ maxWidth: 1320, margin: "0 auto", padding: "5rem 3rem", display: "grid", gridTemplateColumns: "1fr 1.8fr", gap: "5rem", alignItems: "start" }}>
        <div>
          <Eyebrow c="Find Us" /><Heading size="2rem" style={{ fontSize: "2rem", marginBottom: "2.5rem" }}>Come Visit<br /><em style={{color: T.gold}}>Camp Bites</em></Heading>
          {[{ ic: "📍", lb: "Address", val: "17, MG Road, Camp\nPune – 411001" }, { ic: "🕐", lb: "Hours", val: "Mon–Fri: 11AM – 11PM\nSat–Sun: 10AM – 12AM" }, { ic: "📞", lb: "Phone", val: "+91 20 2612 3456" }, { ic: "✉️", lb: "Email", val: "hello@campbitespune.in" }].map(({ ic, lb, val }) => (
            <div key={lb} style={{ display: "flex", gap: "1.2rem", padding: "1.1rem 0", borderBottom: `1px solid ${T.border}` }}>
              <span style={{ fontSize: "1rem", flexShrink: 0, marginTop: "3px", opacity: 0.7 }}>{ic}</span>
              <div>
                <div style={{ fontFamily: "'DM Mono',monospace", fontSize: "0.58rem", letterSpacing: "3px", textTransform: "uppercase", color: T.gold, marginBottom: "0.35rem" }}>{lb}</div>
                <div style={{ fontSize: "0.87rem", color: T.cream, lineHeight: 1.7, whiteSpace: "pre-line" }}>{val}</div>
              </div>
            </div>
          ))}
          <div style={{ marginTop: "2rem", height: 220, overflow: "hidden", border: `1px solid ${T.border}` }}>
            <img src={P.interior2} alt="Inside" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
          </div>
        </div>
        <div style={{ border: `1px solid ${T.border}`, padding: "3rem", background: T.surface }}>
          {step === "success" ? (
            <div style={{ textAlign: "center", padding: "3rem 1rem" }}>
              <div style={{ fontSize: "3.5rem", marginBottom: "1.5rem" }}>🎉</div>
              <Eyebrow c="Confirmed" center />
              <Heading size="2rem" center style={{ color: T.gold, marginBottom: "1.5rem", fontSize: "2rem" }}>We'll See You Soon!</Heading>
              <p style={{ fontFamily: "'Cormorant Garamond',serif", fontStyle: "italic", color: T.muted, lineHeight: 1.9, fontSize: "1.05rem", marginBottom: "2.5rem" }}>
                Table for {f.guests} on {f.date} at {f.time}.<br />
                We'll call <strong style={{ color: T.cream, fontStyle: "normal" }}>{f.phone}</strong> to confirm.
              </p>
              <GoldBtn onClick={() => { setStep("form"); setF({ name: "", phone: "", email: "", date: "", time: "", guests: "2", seating: "", note: "" }); }}>Make Another</GoldBtn>
            </div>
          ) : (
            <>
              <Eyebrow c="Reservation Details" />
              <Heading size="2rem" style={{ fontSize: "2rem", marginBottom: "2.5rem" }}>Book Your <em style={{color: T.gold}}>Spot</em></Heading>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1.2rem", marginBottom: "1.2rem" }}>
                {[{ k: "name", l: "Full Name *", t: "text", p: "Your name" }, { k: "phone", l: "Phone *", t: "tel", p: "+91 98765 43210" }, { k: "email", l: "Email", t: "email", p: "you@example.com" }, { k: "guests", l: "Guests", t: "select", opts: ["1", "2", "3", "4", "5", "6", "7+"] }, { k: "date", l: "Date *", t: "date" }, { k: "time", l: "Time *", t: "time" }].map(field => (
                  <div key={field.k}>
                    <label style={lbl}>{field.l}</label>
                    {field.t === "select" ? (
                      <select value={f[field.k]} onChange={e => set(field.k, e.target.value)} style={{ ...inp, cursor: "pointer", borderColor: errors[field.k] ? T.red : T.border }}>
                        {field.opts.map(o => <option key={o} value={o} style={{ background: T.card }}>{o} Guest{o !== "1" && o !== "7+" ? "s" : o === "7+" ? " or more" : ""}</option>)}
                      </select>
                    ) : (
                      <input type={field.t} placeholder={field.p || ""} value={f[field.k]} onChange={e => set(field.k, e.target.value)} style={{...inp, borderColor: errors[field.k] ? T.red : T.border}}
                        onFocus={e => e.target.style.borderColor = T.gold} onBlur={e => e.target.style.borderColor = errors[field.k] ? T.red : T.border} />
                    )}
                    {errors[field.k] && <div style={{color: T.red, fontSize: '0.65rem', marginTop: '4px', fontFamily: "'DM Mono', monospace"}}>{errors[field.k]}</div>}
                  </div>
                ))}
              </div>
              <div style={{ marginBottom: "1.2rem" }}>
                <label style={lbl}>Seating Preference</label>
                <div style={{ display: "flex" }}>
                  {["No Preference", "Upstairs", "Downstairs", "Outdoor"].map((s, i) => (
                    <button key={s} onClick={() => set("seating", s)} style={{
                      flex: 1, padding: "0.65rem 0.5rem", cursor: "pointer",
                      border: `1px solid ${f.seating === s ? T.gold : T.border}`, borderLeft: i > 0 ? "none" : `1px solid ${f.seating === s ? T.gold : T.border}`,
                      background: f.seating === s ? "rgba(201,151,58,0.1)" : "transparent", color: f.seating === s ? T.gold : T.muted,
                      fontFamily: "'DM Mono',monospace", fontSize: "0.6rem", letterSpacing: "1px", transition: "all 0.2s"
                    }}>{s}</button>
                  ))}
                </div>
              </div>
              <div style={{ marginBottom: "2rem" }}>
                <label style={lbl}>Special Requests</label>
                <textarea value={f.note} onChange={e => set("note", e.target.value)} placeholder="Allergies, celebrations, anything we should know..."
                  style={{ ...inp, resize: "vertical", minHeight: 85 }} onFocus={e => e.target.style.borderColor = T.gold} onBlur={e => e.target.style.borderColor = T.border} />
              </div>
              <button onClick={submit} style={{
                width: "100%", padding: "1.1rem", border: `1px solid ${T.gold}`, cursor: "pointer",
                background: step === "loading" ? "transparent" : "rgba(201,151,58,0.1)", color: step === "loading" ? T.muted : T.gold,
                fontFamily: "'DM Mono',monospace", fontWeight: 500, fontSize: "0.7rem", letterSpacing: "3px", textTransform: "uppercase",
                display: "flex", alignItems: "center", justifyContent: "center", gap: "0.8rem", transition: "all 0.3s"
              }}>
                {step === "loading" ? (<><span style={{ width: 15, height: 15, border: "1.5px solid rgba(201,151,58,0.2)", borderTopColor: T.gold, borderRadius: "50%", animation: "spin 0.8s linear infinite", display: "inline-block" }} />Confirming...</>) : "Confirm Reservation →"}
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
};