// src/styles/FooterStyles.js

export const footerStyles = {
  footer: {
    position: "relative",
    marginTop: "auto",

    borderTop: "1px solid rgba(255, 255, 255, 0.4)",
    

    backgroundColor: "rgba(255, 255, 255, 0.85)",
    backdropFilter: "blur(12px)", 
    boxShadow: "0 -4px 30px rgba(0, 0, 0, 0.1)",
    
    width: "100%",
    zIndex: 10,
    fontFamily: "'Poppins', sans-serif",
    overflow: "hidden",
  },
  

  gradientOverlay: {
    position: "absolute",
    inset: 0,
    background: "linear-gradient(to top, rgba(255, 255, 255, 0.5), transparent)",
    pointerEvents: "none",
  },

  container: {
    position: "relative",
    maxWidth: "1280px",
    margin: "0 auto",
    padding: "3rem 1.5rem 1.5rem 1.5rem", 
  },

  contentWrapper: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center", 
    gap: "3rem",
    marginBottom: "2rem",
    textAlign: "left",
  },


  brandSection: {
    flex: "0 1 350px",
    maxWidth: "380px",
  },

  brandHeader: {
    display: "flex",
    alignItems: "center",
    gap: "0.75rem",
    marginBottom: "1rem",
  },

  logoImage: {
    height: "3.5rem",
    width: "auto",
    objectFit: "contain",

  },

  brandName: {
    color: "#111827", 
    fontWeight: "800",
    fontSize: "1.1rem",
    lineHeight: "1.2",
    maxWidth: "200px",
  },

  brandDescription: {
    color: "#4B5563",
    fontSize: "0.9rem",
    lineHeight: "1.6",
    marginBottom: "1.5rem",
    fontWeight: "500",
  },

  socialContainer: {
    display: "flex",
    gap: "0.75rem",
  },


  socialIcon: {
    width: "2.5rem",
    height: "2.5rem",
    borderRadius: "50%",
    backgroundColor: "white", 
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: "#374151", 
    border: "1px solid #E5E7EB", 
    textDecoration: "none",
    transition: "all 0.3s ease",
    cursor: "pointer",
    boxShadow: "0 2px 4px rgba(0,0,0,0.05)",
  },
  
  socialIconHover: {
    transform: "scale(1.1)",
    backgroundColor: "#2E7D32", 
    color: "white", 
    borderColor: "#2E7D32",
    boxShadow: "0 4px 12px rgba(46, 125, 50, 0.3)",
  },

  linksColumn: {
    flex: "0 1 160px",
    minWidth: "140px",
  },

  columnTitle: {
    color: "#166534",
    fontWeight: "700",
    marginBottom: "1rem",
    textTransform: "uppercase",
    fontSize: "0.85rem",
    letterSpacing: "0.05em",
  },

  linkList: {
    listStyle: "none",
    padding: 0,
    margin: 0,
    display: "flex",
    flexDirection: "column",
    gap: "0.7rem",
  },

  linkItem: {
    color: "#4B5563",
    fontSize: "0.9rem",
    textDecoration: "none",
    transition: "all 0.3s ease",
    display: "inline-flex",
    alignItems: "center",
    gap: "0.5rem",
    cursor: "pointer",
    fontWeight: "500",
  },
  
  linkItemHover: {
    color: "#2E7D32", 
    paddingLeft: "4px",
    fontWeight: "600",
  },

  linkDash: {
    height: "2px",
    background: "linear-gradient(to right, #2E7D32, #EF6C00)",
    transition: "all 0.3s ease",
  },

  bottomBar: {
    paddingTop: "1.5rem",
    borderTop: "1px solid rgba(0, 0, 0, 0.05)", 
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    alignItems: "center",
    gap: "2rem",
    textAlign: "center",
  },

  copyright: {
    color: "#6B7280",
    fontSize: "0.85rem",
    fontWeight: "500",
  },

  legalLinks: {
    display: "flex",
    gap: "1.5rem",
    justifyContent: "center",
  },
  

  glowLine: {
    position: "absolute",
    bottom: 0,
    left: "0",
    width: "100%",
    height: "4px", 
    background: "linear-gradient(90deg, #2E7D32, #81C784, #EF6C00, #2E7D32)", 
    opacity: 0.8
  }
};