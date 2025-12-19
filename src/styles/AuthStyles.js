// src/styles/AuthStyles.js

export const COLORS = {
  primary: "#2E7D32",
  secondary: "#8D6E63",
  accent: "#A5D6A7",
  white: "#FFFFFF",
  gray700: "#4B5563",
  gray600: "#6B7280",
  gray300: "#D1D5DB",
  facebook: "#1877F2",
};

const LOGO_SIZE = "80px";

export const styles = {
  mainContainer: {
    minHeight: "100vh",
    width: "100%",
    position: "relative",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    padding: "6rem 0 0 0",
    fontFamily: "Poppins, sans-serif",
    backgroundColor: "#f3f4f6",
    overflowX: "hidden",
  },

  backgroundBanner: (imagenFondo) => ({
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "85vh",
    backgroundImage: `url(${imagenFondo})`,
    backgroundSize: "cover",
    backgroundPosition: "center bottom",
    zIndex: 0,
    maskImage: "linear-gradient(to bottom, black 80%, transparent 100%)",
    WebkitMaskImage: "linear-gradient(to bottom, black 80%, transparent 100%)",
  }),

  logoContainer: {
    display: "flex",
    justifyContent: "center",
    marginBottom: "1rem",
    position: "relative",
    zIndex: 2,
  },

  logoImage: {
    width: LOGO_SIZE,
    height: LOGO_SIZE,
    objectFit: "contain",
  },

  titleH1: {
    fontSize: "clamp(2rem, 4vw, 2.5rem)",
    fontWeight: "bold",
    lineHeight: 1.2,
    marginBottom: "1rem",
    textAlign: "center",
    color: COLORS.white,
    position: "relative",
    zIndex: 2,
  },

  descriptionP: {
    opacity: 0.9,
    fontSize: "1.1rem",
    marginBottom: "1.5rem",
    textAlign: "center",
    position: "relative",
    zIndex: 2,
  },

  learnMoreButton: {
    border: `2px solid ${COLORS.white}`,
    color: COLORS.white,
    padding: "0.5rem 1.25rem",
    borderRadius: "0.5rem",
    backgroundColor: "transparent",
    display: "flex",
    alignItems: "center",
    gap: "0.5rem",
    cursor: "pointer",
    transition: "background-color 0.3s",
    width: "fit-content",
    fontSize: "0.9rem",
    margin: "0 auto",
    position: "relative",
    zIndex: 2,
  },

  // --- SOLO CAMBIAMOS ESTO ---
  welcomeH2: {
    fontSize: "3.5rem", // Tamaño aumentado para el Título
    fontWeight: "bold",
    color: COLORS.primary,
    marginBottom: "0.5rem",
    textAlign: "center",
  },

  welcomeP: {
    color: COLORS.gray700,
    marginBottom: "1.5rem",
    fontSize: "1.4rem", // Tamaño aumentado para el Párrafo
    textAlign: "center",
  },
  // ---------------------------

  formItemsContainer: {
    display: "flex",
    flexDirection: "column",
    gap: "1rem",
  },

  inputGroup: {
    display: "flex",
    flexDirection: "column",
    gap: "0.2rem",
  },

  label: {
    fontSize: "0.9rem",
    color: COLORS.gray600,
    textTransform: "uppercase",
    letterSpacing: "0.05em",
  },

  inputBase: {
    width: "100%",
    border: "none",
    backgroundColor: "transparent",
    padding: "0.4rem 0.25rem",
    color: COLORS.gray700,
    transition: "border-color 0.3s",
    fontSize: "0.9rem",
  },

  inputEmail: {
    borderBottom: `1px solid ${COLORS.gray300}`,
    borderLeft: `4px solid ${COLORS.accent}`,
  },

  inputPassword: {
    borderBottom: `1px solid ${COLORS.gray300}`,
    paddingRight: "2rem",
  },

  passwordWrapper: {
    position: "relative",
    width: "100%",
  },

  togglePasswordButton: {
    position: "absolute",
    right: "0",
    top: "50%",
    transform: "translateY(-50%)",
    border: "none",
    background: "transparent",
    cursor: "pointer",
    color: COLORS.gray600,
    padding: "0.25rem",
  },

  forgotButton: {
    fontSize: "0.7rem",
    color: COLORS.primary,
    textTransform: "uppercase",
    cursor: "pointer",
    border: "none",
    background: "none",
  },

  loginButton: {
    width: "100%",
    background: `linear-gradient(to right, ${COLORS.primary}, ${COLORS.secondary})`,
    color: COLORS.white,
    fontWeight: "bold",
    padding: "0.8rem",
    borderRadius: "0.5rem",
    textTransform: "uppercase",
    fontSize: "1rem",
    border: "none",
    cursor: "pointer",
  },

  separatorContainer: {
    display: "flex",
    alignItems: "center",
    margin: "1rem 0",
    width: "100%",
  },

  separatorLine: {
    flex: 1,
    height: "1px",
    backgroundColor: COLORS.gray300,
  },

  separatorText: {
    padding: "0 0.5rem",
    color: COLORS.gray600,
    fontSize: "1rem",
    textAlign: "center",
  },

  socialButtonsContainer: {
    display: "flex",
    gap: "0.75rem",
    width: "100%",
    flexDirection: "row",
  },

  socialButtonBase: {
    flex: 1,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "0.5rem",
    padding: "0.6rem",
    borderRadius: "0.5rem",
    cursor: "pointer",
    fontSize: "0.8rem",
    fontWeight: "600",
    transition: "0.3s",
    whiteSpace: "nowrap",
  },

  googleButton: {
    backgroundColor: COLORS.white,
    border: `1px solid ${COLORS.gray300}`,
    color: COLORS.gray700,
  },

  facebookButton: {
    backgroundColor: "#1877F2",
    border: "none",
    color: COLORS.white,
  },

  registerP: {
    textAlign: "center",
    color: COLORS.gray700,
    marginTop: "1.5rem",
    fontSize: "0.85rem",
  },

  registerButton: {
    color: COLORS.primary,
    fontWeight: "600",
    textDecoration: "underline",
    border: "none",
    background: "none",
    cursor: "pointer",
  },
};