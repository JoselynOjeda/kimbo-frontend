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

const PANEL_HEIGHT = "550px";
const PANEL_WIDTH = "450px";
const BORDER_RADIUS = "1.5rem";
const LOGO_SIZE = "100px";

export const styles = {
  
  mainContainer: (imagenFondo) => ({
    minHeight: "100vh",
    width: "100%",
    backgroundImage: `url(${imagenFondo})`,
    backgroundSize: "cover",
    backgroundPosition: "center center",
    backgroundRepeat: "no-repeat",
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-start",
    padding: "2rem",
    fontFamily: "Poppins, sans-serif",
  }),

  panelsContainer: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "nowrap",
    width: `1090px`,
    maxWidth: "100%",
    backgroundColor: "transparent",
    overflow: "hidden",
    borderRadius: BORDER_RADIUS,
    boxShadow: "0 10px 30px rgba(0, 0, 0, 0.3)",
    alignItems: "stretch",
  },

  leftPanel: {
    background: `linear-gradient(135deg, rgba(46, 125, 50, 0.7) 0%, rgba(141, 110, 99, 0.7) 100%)`,
    backdropFilter: "blur(3px)",
    borderRadius: BORDER_RADIUS,
    padding: "3rem",
    color: COLORS.white,
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    width: PANEL_WIDTH,
    flex: "none",
    height: PANEL_HEIGHT,
    position: "relative",
    zIndex: 20,
  },

  logoContainer: {
    display: "flex",
    justifyContent: "center",
    marginBottom: "2rem",
  },

  logoImage: {
    width: LOGO_SIZE,
    height: LOGO_SIZE,
    objectFit: "contain",
  },

  titleH1: {
    fontSize: "3rem",
    fontWeight: "bold",
    lineHeight: 1.2,
    marginBottom: "1.5rem",
  },

  descriptionP: {
    opacity: 0.9,
    fontSize: "1.125rem",
    marginBottom: "2rem",
  },

  learnMoreButton: {
    border: `2px solid ${COLORS.white}`,
    color: COLORS.white,
    padding: "0.75rem 1.5rem",
    borderRadius: "0.5rem",
    backgroundColor: "transparent",
    display: "flex",
    alignItems: "center",
    gap: "0.5rem",
    cursor: "pointer",
    transition: "background-color 0.3s",
  },

  rightPanel: {
    backgroundColor: "rgba(255, 255, 255, 0.9)",
    backdropFilter: "blur(3px)",
    borderRadius: BORDER_RADIUS,
    padding: "3rem",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    width: PANEL_WIDTH,
    flex: "none",
    height: PANEL_HEIGHT,
    position: "relative",
    zIndex: 10,
    marginLeft: 0,
  },

  welcomeH2: {
    fontSize: "2.25rem",
    fontWeight: "bold",
    color: COLORS.primary,
    marginBottom: "0.5rem",
  },

  welcomeP: {
    color: COLORS.gray700,
    marginBottom: "2rem",
  },

  formItemsContainer: {
    display: "flex",
    flexDirection: "column",
    gap: "1.5rem",
  },

  inputGroup: {
    display: "flex",
    flexDirection: "column",
    gap: "0.25rem",
  },

  label: {
    fontSize: "0.75rem",
    color: COLORS.gray600,
    textTransform: "uppercase",
    letterSpacing: "0.05em",
  },

  inputBase: {
    width: "100%",
    border: "none",
    backgroundColor: "transparent",
    padding: "0.5rem 0.25rem",
    color: COLORS.gray700,
    transition: "border-color 0.3s",
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
    fontSize: "0.75rem",
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
    padding: "1rem",
    borderRadius: "0.5rem",
    textTransform: "uppercase",
    fontSize: "1.125rem",
    border: "none",
    cursor: "pointer",
  },

  separatorContainer: {
    display: "flex",
    alignItems: "center",
    margin: "1.5rem 0",
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
    fontSize: "0.75rem",
    textAlign: "center",
  },

  socialButtonsContainer: {
    display: "flex",
    gap: "1rem",
    width: "100%",
  },

  socialButtonBase: {
    flex: 1,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "0.5rem",
    padding: "0.75rem",
    borderRadius: "0.5rem",
    cursor: "pointer",
    fontSize: "0.875rem",
    fontWeight: "600",
    transition: "0.3s",
  },

  googleButton: {
    backgroundColor: COLORS.white,
    border: `1px solid ${COLORS.gray300}`,
    color: COLORS.gray700,
  },

  facebookButton: {
    backgroundColor: COLORS.facebook,
    border: "none",
    color: COLORS.white,
  },

  registerP: {
    textAlign: "center",
    color: COLORS.gray700,
    marginTop: "2rem",
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