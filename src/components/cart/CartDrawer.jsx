import { useState } from 'react';
import { T } from '../../theme/colors';
import { Eyebrow, Heading } from '../common/Typography';
import { GoldBtn } from '../common/Buttons';
import { useCart } from '../../context/CartContext';

export const CartDrawer = () => {
  const { cart, isCartOpen, setIsCartOpen, updateQty, clearCart, cartTotal, cartCount } = useCart();
  const [done, setDone] = useState(false);

  if (!isCartOpen) return null;

  const handleClose = () => {
    setIsCartOpen(false);
    if (done) {
        setDone(false);
        clearCart();
    }
  };

  return (
    <div style={{ position: "fixed", inset: 0, zIndex: 500 }} className="fi">
      <div onClick={handleClose} style={{ position: "absolute", inset: 0, background: "rgba(0,0,0,0.8)" }} />
      <div style={{
        position: "absolute", right: 0, top: 0, bottom: 0, width: 400,
        background: T.surface, borderLeft: `1px solid ${T.border}`,
        display: "flex", flexDirection: "column", animation: "slideR 0.32s cubic-bezier(.22,1,.36,1)"
      }}>
        <div style={{
          padding: "2rem", borderBottom: `1px solid ${T.border}`,
          display: "flex", justifyContent: "space-between", alignItems: "flex-end"
        }}>
          <div><Eyebrow c="Your Order" />
            <Heading size="1.8rem" style={{ fontSize: "1.8rem" }}>
              {done ? "Order Placed" : cart.length === 0 ? "Empty" : `${cartCount} Items`}
            </Heading>
          </div>
          <button onClick={handleClose} style={{
            background: "transparent", border: `1px solid ${T.border}`,
            cursor: "pointer", width: 34, height: 34, color: T.muted,
            display: "flex", alignItems: "center", justifyContent: "center", fontSize: "0.85rem"
          }}>✕</button>
        </div>
        <div style={{ flex: 1, overflowY: "auto", padding: "1.5rem" }}>
          {done ? (
            <div style={{ textAlign: "center", padding: "3rem 1rem" }}>
              <div style={{ fontSize: "3.5rem", marginBottom: "1.5rem" }}>🎉</div>
              <Heading size="1.8rem" center style={{ color: T.gold, marginBottom: "1rem", fontSize: "1.8rem" }}>Order Received!</Heading>
              <p style={{ fontFamily: "'Cormorant Garamond',serif", fontStyle: "italic", color: T.muted, lineHeight: 1.9, fontSize: "1rem", marginBottom: "2rem" }}>
                Estimated delivery:<br /><strong style={{ color: T.cream, fontStyle: "normal" }}>25–35 minutes 🛵</strong>
              </p>
              <GoldBtn onClick={handleClose}>Continue</GoldBtn>
            </div>
          ) : cart.length === 0 ? (
            <div style={{ textAlign: "center", padding: "3rem 1rem" }}>
              <div style={{ fontSize: "3rem", marginBottom: "1rem", opacity: 0.3 }}>🛒</div>
              <p style={{ fontFamily: "'Cormorant Garamond',serif", fontStyle: "italic", color: T.muted, fontSize: "1.05rem", lineHeight: 1.8 }}>
                Your cart is empty.<br />The menu awaits.
              </p>
            </div>
          ) : cart.map(item => (
            <div key={item.id} style={{
              display: "flex", gap: "1rem", alignItems: "center",
              padding: "1rem", marginBottom: "0.8rem", background: T.card, border: `1px solid ${T.border}`
            }}>
              <div style={{ width: 56, height: 56, flexShrink: 0, overflow: "hidden", background: T.panel }}>
                <img src={item.img} alt={item.name} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
              </div>
              <div style={{ flex: 1, minWidth: 0 }}>
                <div style={{
                  fontFamily: "'Cormorant Garamond',serif", fontWeight: 600, fontSize: "1rem", color: T.cream,
                  whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis"
                }}>{item.name}</div>
                <div style={{ color: T.gold, fontFamily: "'DM Mono',monospace", fontSize: "0.85rem", marginTop: "3px" }}>₹{item.price * item.qty}</div>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: "0.4rem", flexShrink: 0 }}>
                <button onClick={() => updateQty(item.id, -1)} style={{
                  width: 28, height: 28, cursor: "pointer",
                  border: `1px solid ${T.border}`, background: "transparent", color: T.muted, fontSize: "1.1rem",
                  display: "flex", alignItems: "center", justifyContent: "center"
                }}>−</button>
                <span style={{ fontFamily: "'DM Mono',monospace", minWidth: 20, textAlign: "center", fontSize: "0.9rem" }}>{item.qty}</span>
                <button onClick={() => updateQty(item.id, +1)} style={{
                  width: 28, height: 28, cursor: "pointer",
                  border: `1px solid ${T.gold}`, background: T.gold, color: T.bg, fontSize: "1rem",
                  display: "flex", alignItems: "center", justifyContent: "center"
                }}>+</button>
              </div>
            </div>
          ))}
        </div>
        {!done && cart.length > 0 && (
          <div style={{ padding: "1.5rem 2rem", borderTop: `1px solid ${T.border}` }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", marginBottom: "1.5rem" }}>
              <span style={{ fontFamily: "'DM Mono',monospace", fontSize: "0.62rem", letterSpacing: "2px", textTransform: "uppercase", color: T.muted }}>Total</span>
              <span style={{ fontFamily: "'Cormorant Garamond',serif", fontWeight: 700, fontSize: "2.2rem", color: T.gold }}>₹{cartTotal}</span>
            </div>
            <GoldBtn full onClick={() => setDone(true)}>Place Order — ₹{cartTotal}</GoldBtn>
          </div>
        )}
      </div>
    </div>
  );
};