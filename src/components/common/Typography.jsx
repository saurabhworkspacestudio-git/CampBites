import { T } from '../../theme/colors';

export const Eyebrow = ({ c, center = false, style = {} }) => (
  <div
    style={{
      fontFamily: "'DM Mono',monospace",
      fontSize: "0.6rem",
      letterSpacing: "5px",
      textTransform: "uppercase",
      color: T.gold,
      marginBottom: "0.9rem",
      textAlign: center ? "center" : "left",
      ...style,
    }}
  >
    {c}
  </div>
);

export const Heading = ({ children, size = "4rem", center = false, style = {} }) => (
  <h2
    style={{
      fontFamily: "'Cormorant Garamond',serif",
      fontWeight: 700,
      fontSize: `clamp(2rem, ${size}, ${size})`,
      lineHeight: 1.0,
      textAlign: center ? "center" : "left",
      color: T.cream,
      ...style,
    }}
  >
    {children}
  </h2>
);