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
    justifyContent: "space-between", // Mantiene logo a la izq y user a la der
    height: "3.5rem", 
  },

  // 1. LOGO (Izquierda)
  logoContainer: {
    display: "flex",
    alignItems: "center",
    gap: "0.5rem", 
    cursor: "pointer",
    textDecoration: "none",
    flexShrink: 0, // No permitir que se encoja
    marginRight: "1rem", 
  },

  logoImage: {
    height: "2.5rem", 
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

  // 2. MENÚ CENTRAL (Centrado Absoluto o Flex)
  navItemsWrapper: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center", // Centra los items
    gap: "0.25rem",
    flex: 1, // Toma todo el espacio disponible para centrarse
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

  // 3. SECCIÓN DERECHA (Login / Perfil / Hamburguesa)
  rightSection: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    flexShrink: 0, // No permitir que se encoja
    minWidth: "150px", // Reserva espacio para equilibrar visualmente si es necesario
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
  },

  // --- ESTILOS DE PERFIL DE USUARIO ---
  userProfileContainer: {
    display: "flex",
    alignItems: "center",
    gap: "8px",
    backgroundColor: "white",
    padding: "4px 8px 4px 4px",
    borderRadius: "9999px",
    border: "1px solid #e5e7eb",
    boxShadow: "0 1px 2px rgba(0,0,0,0.05)",
  },
  avatarImage: {
    width: "32px",
    height: "32px",
    borderRadius: "50%",
    objectFit: "cover",
  },
  avatarPlaceholder: {
    width: "32px",
    height: "32px",
    borderRadius: "50%",
    backgroundColor: "#e5e7eb",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: "#6b7280",
  },
  userInfo: {
    display: "flex",
    flexDirection: "column",
    marginRight: "4px",
  },
  userName: {
    fontSize: "0.85rem",
    fontWeight: "600",
    color: "#374151",
    lineHeight: "1",
  },
  logoutButton: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    background: "transparent",
    border: "none",
    cursor: "pointer",
    padding: "6px",
    borderRadius: "50%",
    color: "#ef4444",
    transition: "background-color 0.2s",
  },

  // --- MOBILE ---
  hamburgerButton: {
    background: "transparent",
    border: "none",
    cursor: "pointer",
    color: "#374151",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "0.5rem",
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

  mobileUserHeader: {
    display: 'flex',
    alignItems: 'center',
    gap: '12px',
    paddingBottom: '1rem',
    marginBottom: '0.5rem',
    borderBottom: '1px solid #f3f4f6',
  },
  avatarImageLarge: {
    width: "40px", 
    height: "40px", 
    borderRadius: "50%",
    objectFit: "cover",
  },
  avatarPlaceholderLarge: {
    width: "40px", 
    height: "40px", 
    borderRadius: "50%", 
    backgroundColor: "#e5e7eb",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: "#6b7280",
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
  },
};