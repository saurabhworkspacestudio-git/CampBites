import { useState } from 'react';
import { T } from '../../theme/colors';

export const GoldBtn = ({ children, onClick, full = false, style = {} }) => {
  const [h, sH] = useState(false);
  return (
    <button
      onClick={onClick}
      onMouseEnter={() => sH(true)}
      onMouseLeave={() => sH(false)}
      style={{
        padding: "0.9rem 2.6rem",
        cursor: "pointer",
        border: `1px solid ${T.gold}`,
        background: h ? T.gold : "transparent",
        color: h ? T.bg : T.gold,
        fontFamily: "'DM Mono',monospace",
        fontWeight: 500,
        fontSize: "0.65rem",
        letterSpacing: "3px",
        textTransform: "uppercase",
        transition: "all 0.25s",
        width: full ? "100%" : "auto",
        ...style,
      }}
    >
      {children}
    </button>
  );
};

export const GhostBtn = ({ children, onClick, style = {} }) => {
  const [h, sH] = useState(false);
  return (
    <button
      onClick={onClick}
      onMouseEnter={() => sH(true)}
      onMouseLeave={() => sH(false)}
      style={{
        padding: "0.9rem 2.6rem",
        cursor: "pointer",
        border: `1px solid ${h ? T.cream : T.border}`,
        background: "transparent",
        color: h ? T.cream : T.muted,
        fontFamily: "'DM Mono',monospace",
        fontWeight: 500,
        fontSize: "0.65rem",
        letterSpacing: "3px",
        textTransform: "uppercase",
        transition: "all 0.25s",
        ...style,
      }}
    >
      {children}
    </button>
  );
};