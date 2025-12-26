import React, { useState, useEffect, useRef } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import imagenLogo from "../assets/images/Logo-Kimbo.png";
import { styles } from "../styles/NavbarStyles";
import { useUserSession } from "../hooks/useUserSession"; 

const Icons = {
  Home: () => (<svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" /></svg>),
  Brand: () => (<svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" /></svg>),
  Nature: () => (<svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" /></svg>),
  ShoppingBag: () => (<svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" /></svg>),
  Calculator: () => (<svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" /></svg>),
  Map: () => (<svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>),
  Book: () => (<svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" /></svg>),
  Star: () => (<svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" /></svg>),
  Menu: () => (<svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" /></svg>),
  Close: () => (<svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" /></svg>),
  User: () => (<svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" /></svg>),
  Logout: () => (<svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" /></svg>),
  ChevronDown: () => (<svg width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" /></svg>),
  Profile: () => (<svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>),
  Settings: () => (<svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" /><path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /></svg>),
  CreditCard: () => (<svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" /></svg>)
};

const navItems = [
  { name: "Inicio", href: "/", icon: <Icons.Home /> },
  { name: "Kimbo", href: "/kimbo", icon: <Icons.Brand /> },
  { name: "Alimentación Natural", href: "/alimentacion-natural", icon: <Icons.Nature /> },
  { name: "Productos", href: "/productos", icon: <Icons.ShoppingBag /> },
  { name: "Calculadora", href: "/calculadora", icon: <Icons.Calculator /> },
  { name: "Puntos de Venta", href: "/mapa", icon: <Icons.Map /> },
  { name: "Blog", href: "/blog", icon: <Icons.Book /> },
  { name: "Club VIP", href: "/club", icon: <Icons.Star /> },
];

export default function Navbar() {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [dropdownHoveredIndex, setDropdownHoveredIndex] = useState(null); 
  const [isMobile, setIsMobile] = useState(window.innerWidth < 1150);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isProfileMenuOpen, setIsProfileMenuOpen] = useState(false);
  const profileMenuRef = useRef(null);

  const { user, logout } = useUserSession();
  const location = useLocation();
  const navigate = useNavigate();

  const showLoginButton = location.pathname === "/" && !user;

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
    setIsProfileMenuOpen(false);
  }, [location]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (profileMenuRef.current && !profileMenuRef.current.contains(event.target)) {
        setIsProfileMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <nav style={styles.nav}>
      <div style={styles.container}>
        <div style={styles.flexContainer}>
          
          <div style={styles.logoContainer} onClick={() => navigate("/")}>
            <img src={imagenLogo} alt="Logo Kimbo" style={styles.logoImage} />
            {isMobile ? (
              <div style={styles.logoTextMobileContainer}>
                <span style={styles.logoTextMobileTop}>Kimbo Natural Dog</span>
                <span style={styles.logoTextMobileBottom}>Food & Nutrition</span>
              </div>
            ) : (
              <span style={styles.logoText}>Kimbo Natural Dog Food & Nutrition</span>
            )}
          </div>

          {!isMobile && (
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
                      ...(isActive ? styles.navItemActive : styles.navItemInactive),
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
          )}

          <div style={styles.rightSection}>
            {!isMobile && (
              <>
                {user ? (
                   <div style={{ position: 'relative' }} ref={profileMenuRef}>
                       <div 
                         style={{
                           ...styles.userProfileContainer,
                           backgroundColor: isProfileMenuOpen ? '#f3f4f6' : 'white'
                         }}
                         onClick={() => setIsProfileMenuOpen(!isProfileMenuOpen)}
                       >
                          {user.foto ? (
                             <img 
                               src={user.foto} 
                               alt="Avatar" 
                               style={styles.avatarImage} 
                               referrerPolicy="no-referrer"
                             />
                          ) : (
                             <div style={styles.avatarPlaceholder}><Icons.User /></div>
                          )}
                          
                          <span style={styles.name}>{user.nombre?.split(" ")[0]}</span>
                          <span style={{ 
                              fontSize: '10px', 
                              color: '#666', 
                              marginLeft: '2px',
                              transform: isProfileMenuOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                              transition: 'transform 0.2s ease'
                          }}>
                              <Icons.ChevronDown />
                          </span>
                       </div>

                       {isProfileMenuOpen && (
                         <div style={{
                             ...styles.dropdownMenu,
                             opacity: isProfileMenuOpen ? 1 : 0,
                             visibility: isProfileMenuOpen ? 'visible' : 'hidden',
                             transform: isProfileMenuOpen ? 'translateY(0)' : 'translateY(-10px)',
                             transition: 'all 0.2s ease-in-out'
                         }}>
                            {[
                              { label: 'Ver Perfil', icon: <Icons.Profile />, path: '/perfil' },
                              { label: 'Suscripciones', icon: <Icons.CreditCard />, path: '/suscripciones' },
                              { label: 'Configuración', icon: <Icons.Settings />, path: '/configuracion' }
                            ].map((option, idx) => (
                              <button 
                                  key={idx}
                                  onClick={() => navigate(option.path)} 
                                  onMouseEnter={() => setDropdownHoveredIndex(idx)}
                                  onMouseLeave={() => setDropdownHoveredIndex(null)}
                                  style={{
                                      ...styles.dropdownItem,
                                      backgroundColor: dropdownHoveredIndex === idx ? '#f3f4f6' : 'transparent'
                                  }}
                              >
                                  {option.icon} {option.label}
                              </button>
                            ))}
                            
                            <div style={styles.dropdownDivider}></div>
                            
                            <button 
                              onClick={logout} 
                              onMouseEnter={() => setDropdownHoveredIndex('logout')}
                              onMouseLeave={() => setDropdownHoveredIndex(null)}
                              style={{
                                  ...styles.dropdownItem, 
                                  color: '#ef4444',
                                  backgroundColor: dropdownHoveredIndex === 'logout' ? '#fef2f2' : 'transparent'
                              }}
                            >
                                <Icons.Logout /> Cerrar Sesión
                            </button>
                         </div>
                       )}
                   </div>
                ) : showLoginButton ? (
                   <button
                    style={styles.ctaButton}
                    onClick={() => navigate("/login")}
                    onMouseEnter={(e) => (e.target.style.backgroundColor = "#374151")}
                    onMouseLeave={(e) => (e.target.style.backgroundColor = "#1f2937")}
                   >
                    Iniciar Sesión
                   </button>
                ) : null}
              </>
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
      </div>

      {isMobile && isMenuOpen && (
        <div style={styles.mobileMenuContainer}>
            {user && (
                <div style={styles.mobileUserHeader}>
                    {user.foto ? (
                        <img 
                          src={user.foto} 
                          alt="Avatar" 
                          style={styles.avatarImageLarge} 
                          referrerPolicy="no-referrer" 
                        />
                    ) : (
                        <div style={styles.avatarPlaceholderLarge}><Icons.User /></div>
                    )}
                    <div>
                        <p style={{fontWeight: 'bold', margin: 0, color: '#111827'}}>{user.nombre}</p>
                        <p style={{fontSize: '0.8rem', color: '#6b7280', margin: 0}}>{user.email}</p>
                    </div>
                </div>
            )}

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

          {user && (
            <>
                <div style={{ width: '100%', height: '1px', background: '#e5e7eb', margin: '0.5rem 0' }}></div>
                <button onClick={() => navigate('/perfil')} style={styles.mobileNavItem}><Icons.Profile /> Ver Perfil</button>
                <button onClick={() => navigate('/suscripciones')} style={styles.mobileNavItem}><Icons.CreditCard /> Suscripciones</button>
                <button onClick={() => navigate('/configuracion')} style={styles.mobileNavItem}><Icons.Settings /> Configuración</button>
                <button
                    onClick={logout}
                    style={{ ...styles.mobileNavItem, color: '#ef4444', marginTop: '0.5rem', borderTop: '1px solid #f3f4f6' }}
                >
                    <Icons.Logout />
                    <span>Cerrar Sesión</span>
                </button>
            </>
          )}

          {!user && showLoginButton && (
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