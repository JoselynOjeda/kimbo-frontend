export const styles = {
  nav: {
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    zIndex: 50,
    backgroundColor: "#f3f4f6", 
    padding: "0.5rem 0", 
    boxShadow: "0 2px 10px rgba(0,0,0,0.05)",
    fontFamily: "'Poppins', sans-serif",
  },
  
  container: {
    width: "100%",           
    maxWidth: "100%",       
    margin: "0",            
    padding: "0 1.5rem", 
    
    boxSizing: "border-box", 
  },

  flexContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    height: "3.5rem", 
  },

  logoContainer: {
    display: "flex",
    alignItems: "center",
    gap: "0.5rem", 
    cursor: "pointer",
    textDecoration: "none",
    flex: 1, 
    marginRight: "0.5rem", 
    overflow: "hidden", 
  },

  logoImage: {
    height: "2.5rem", 
    width: "auto",
    objectFit: "contain",
    flexShrink: 0, 
  },

  logoText: {
    color: "#111827",
    fontWeight: "800",
    fontSize: "1.1rem",     
    letterSpacing: "-0.025em",
    whiteSpace: "nowrap",    
  },

  logoTextMobileContainer: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    lineHeight: "1",
  },

  logoTextMobileTop: {
    color: "#111827",
    fontWeight: "800",
    fontSize: "0.85rem",
    whiteSpace: "nowrap",
  },

  logoTextMobileBottom: {
    color: "#111827",
    fontWeight: "600",
    fontSize: "0.75rem",
    whiteSpace: "nowrap",
  },

  navItemsWrapper: {
    display: "flex",
    alignItems: "center",
    gap: "0.25rem",
  },
  navItemBase: {
    display: "flex",
    alignItems: "center",
    gap: "0.5rem",
    padding: "0.5rem 0.75rem", 
    borderRadius: "9999px",
    fontSize: "0.8rem", 
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
    padding: "0.5rem 1.2rem",
    backgroundColor: "#1f2937",
    color: "white",
    borderRadius: "9999px",
    border: "none",
    fontSize: "0.85rem",
    fontWeight: "600",
    cursor: "pointer",
    transition: "all 0.3s ease",
    whiteSpace: "nowrap",
    marginLeft: "1rem",
  },


  hamburgerButton: {
    background: "transparent",
    border: "none",
    cursor: "pointer",
    color: "#374151",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "0.5rem",

    marginRight: "-0.5rem", 
    
    marginLeft: "auto", 
    flexShrink: 0, 
  },

  mobileMenuContainer: {
    position: "absolute",
    top: "100%", 
    left: 0,
    width: "100%",
    backgroundColor: "white", 
    borderTop: "1px solid #e5e7eb",
    boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1)",
    display: "flex",
    flexDirection: "column",
    padding: "1rem",
    gap: "0.5rem",
    boxSizing: "border-box",
  },

  mobileNavItem: {
    display: "flex",
    alignItems: "center",
    gap: "0.75rem",
    width: "100%",
    padding: "0.75rem 1rem",
    borderRadius: "0.5rem",
    border: "none",
    backgroundColor: "transparent",
    color: "#4b5563",
    fontSize: "1rem",
    fontWeight: "500",
    cursor: "pointer",
    textAlign: "left",
  },

  mobileNavItemActive: {
    backgroundColor: "#f0fdf4", 
    color: "#166534", 
    fontWeight: "700",
  },

  mobileCtaButton: {
    marginTop: "0.5rem",
    backgroundColor: "#1f2937",
    color: "white",
    justifyContent: "center",
    textAlign: "center",
  }
};