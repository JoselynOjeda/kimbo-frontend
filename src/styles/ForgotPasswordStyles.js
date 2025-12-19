export const COLORS = {
  primary: "#2E7D32",
  secondary: "#8D6E63",
  white: "#FFFFFF",
  gray700: "#4B5563",
  gray100: "#F3F4F6",
  accent: "#A5D6A7",
};

export const forgotStyles = {
  mainContainer: {
    minHeight: "100vh",
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundSize: "cover",
    backgroundPosition: "center",
    padding: "1rem",
  },
  infoBox: {
    backgroundColor: "rgba(255, 255, 255, 0.1)",
    padding: "1rem",
    borderRadius: "0.5rem",
    borderLeft: `4px solid ${COLORS.accent}`,
    marginTop: "1.5rem",
  },
  submitButton: {
    width: "100%",
    background: `linear-gradient(to right, ${COLORS.primary}, ${COLORS.secondary})`,
    color: COLORS.white,
    fontWeight: "bold",
    padding: "0.8rem",
    borderRadius: "0.5rem",
    textTransform: "uppercase",
    border: "none",
    cursor: "pointer",
    transition: "transform 0.2s",
  }
};