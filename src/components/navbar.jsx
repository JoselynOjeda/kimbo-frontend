import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import imagenLogo from "../assets/images/Logo-Kimbo.png";
import { styles } from "../styles/NavbarStyles";

// --- TUS ICONOS (Copia los mismos de antes, los omito aquí para ahorrar espacio) ---
const Icons = {
  Home: () => (
    <svg
      width="16"
      height="16"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
      />
    </svg>
  ),
  Brand: () => (
    <svg
      width="16"
      height="16"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z"
      />
    </svg>
  ),
  Nature: () => (
    <svg
      width="16"
      height="16"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
      />
    </svg>
  ),
  ShoppingBag: () => (
    <svg
      width="16"
      height="16"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
      />
    </svg>
  ),
  Calculator: () => (
    <svg
      width="16"
      height="16"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z"
      />
    </svg>
  ),
  Map: () => (
    <svg
      width="16"
      height="16"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
      />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
      />
    </svg>
  ),
  Book: () => (
    <svg
      width="16"
      height="16"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
      />
    </svg>
  ),
  Star: () => (
    <svg
      width="16"
      height="16"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
      />
    </svg>
  ),
  Menu: () => (
    <svg
      width="24"
      height="24"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M4 6h16M4 12h16M4 18h16"
      />
    </svg>
  ),
  Close: () => (
    <svg
      width="24"
      height="24"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M6 18L18 6M6 6l12 12"
      />
    </svg>
  ),
};

const navItems = [
  { name: "Inicio", href: "/", icon: <Icons.Home /> },
  { name: "Kimbo", href: "/kimbo", icon: <Icons.Brand /> },
  {
    name: "Alimentación Natural",
    href: "/alimentacion-natural",
    icon: <Icons.Nature />,
  },
  { name: "Productos", href: "/productos", icon: <Icons.ShoppingBag /> },
  { name: "Calculadora", href: "/calculadora", icon: <Icons.Calculator /> },
  { name: "Puntos de Venta", href: "/mapa", icon: <Icons.Map /> },
  { name: "Blog", href: "/blog", icon: <Icons.Book /> },
  { name: "Club VIP", href: "/club", icon: <Icons.Star /> },
];

export default function Navbar() {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 1150);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const location = useLocation();
  const navigate = useNavigate();

  const showLoginButton = location.pathname === "/";

  useEffect(() => {
    const handleResize = () => {
      const mobile = window.innerWidth < 1150;
      setIsMobile(mobile);
      if (!mobile) setIsMenuOpen(false);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  return (
    <nav style={styles.nav}>
      <div style={styles.container}>
        <div style={styles.flexContainer}>
          <div style={styles.logoContainer} onClick={() => navigate("/")}>
            <img src={imagenLogo} alt="Logo Kimbo" style={styles.logoImage} />

            {isMobile ? (
              <div style={styles.logoTextMobileContainer}>
                <span style={styles.logoTextMobileTop}>Kimbo Natural Dog</span>
                <span style={styles.logoTextMobileBottom}>
                  Food & Nutrition
                </span>
              </div>
            ) : (
              <span style={styles.logoText}>
                Kimbo Natural Dog Food & Nutrition
              </span>
            )}
          </div>

          {!isMobile && (
            <div style={{ display: "flex", alignItems: "center" }}>
              <div style={styles.navItemsWrapper}>
                {navItems.map((item, index) => {
                  const isActive = location.pathname === item.href;
                  return (
                    <button
                      key={item.name}
                      onClick={() => navigate(item.href)}
                      onMouseEnter={() => setHoveredIndex(index)}
                      onMouseLeave={() => setHoveredIndex(null)}
                      style={{
                        ...styles.navItemBase,
                        ...(isActive
                          ? styles.navItemActive
                          : styles.navItemInactive),
                        ...(hoveredIndex === index && !isActive
                          ? { color: "#111827", backgroundColor: "#e5e7eb" }
                          : {}),
                      }}
                    >
                      {item.icon}
                      <span>{item.name}</span>
                    </button>
                  );
                })}
              </div>

              {showLoginButton ? (
                <button
                  style={styles.ctaButton}
                  onClick={() => navigate("/login")}
                  onMouseEnter={(e) =>
                    (e.target.style.backgroundColor = "#374151")
                  }
                  onMouseLeave={(e) =>
                    (e.target.style.backgroundColor = "#1f2937")
                  }
                >
                  Iniciar Sesión
                </button>
              ) : (
                <div style={{ width: "130px" }}></div>
              )}
            </div>
          )}

          {isMobile && (
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              style={styles.hamburgerButton}
            >
              {isMenuOpen ? <Icons.Close /> : <Icons.Menu />}
            </button>
          )}
        </div>
      </div>

      {isMobile && isMenuOpen && (
        <div style={styles.mobileMenuContainer}>
          {navItems.map((item) => (
            <button
              key={item.name}
              onClick={() => navigate(item.href)}
              style={{
                ...styles.mobileNavItem,
                ...(location.pathname === item.href
                  ? styles.mobileNavItemActive
                  : {}),
              }}
            >
              {item.icon}
              <span>{item.name}</span>
            </button>
          ))}
          {showLoginButton && (
            <button
              onClick={() => navigate("/login")}
              style={{ ...styles.mobileNavItem, ...styles.mobileCtaButton }}
            >
              Iniciar Sesión
            </button>
          )}
        </div>
      )}
    </nav>
  );
}
