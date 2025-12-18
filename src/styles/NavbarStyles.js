// src/styles/NavbarStyles.js

export const styles = {
  nav: {
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    zIndex: 50,
    backgroundColor: "#f3f4f6",
    padding: "0.5rem 0", 
    boxShadow: "0 2px 4px rgba(0,0,0,0.05)",
    fontFamily: "'Poppins', sans-serif",
  },
  
  container: {
    width: "100%",           
    maxWidth: "100%",       
    margin: "0",            
    padding: "0 2rem",      
    boxSizing: "border-box", 
  },

  flexContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  },

  logoContainer: {
    display: "flex",
    alignItems: "center",
    gap: "0.75rem",
    cursor: "pointer",
    textDecoration: "none",
    marginRight: "2rem", 
  },

  logoImage: {
    height: "3.5rem",
    width: "auto",
    objectFit: "contain",
  },

  logoText: {
    color: "#111827",
    fontWeight: "800",
    fontSize: "1.1rem",     
    letterSpacing: "-0.025em",
    whiteSpace: "nowrap",    
  },

  navItemsWrapper: {
    display: "flex",
    alignItems: "center",
    gap: "0.5rem",
  },
  navItemBase: {
    display: "flex",
    alignItems: "center",
    gap: "0.5rem",
    padding: "0.5rem 1rem",
    borderRadius: "9999px",
    fontSize: "0.85rem",
    fontWeight: "600",
    border: "none",
    cursor: "pointer",
    transition: "all 0.3s ease",
    outline: "none",
    whiteSpace: "nowrap",
  },
  navItemActive: {
    backgroundColor: "#16a34a",
    color: "white",
    boxShadow: "0 4px 6px -1px rgba(22, 163, 74, 0.4)",
  },
  navItemInactive: {
    backgroundColor: "transparent",
    color: "#4b5563",
  },
  ctaButton: {
    padding: "0.5rem 1.5rem",
    backgroundColor: "#1f2937",
    color: "white",
    borderRadius: "9999px",
    border: "none",
    fontSize: "0.875rem",
    fontWeight: "600",
    cursor: "pointer",
    transition: "all 0.3s ease",
    whiteSpace: "nowrap",
  }
};