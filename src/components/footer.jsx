import React, { useState } from "react";

import { footerStyles } from "../styles/FooterStyles";

import imagenLogo from "../assets/images/Logo-Kimbo.png";

const footerLinks = {
  Compañía: [
    { name: "Nosotros", href: "/nosotros" },
    { name: "Trabaja con Kimbo", href: "/carreras" },
    { name: "Blog", href: "/blog" },
    { name: "Prensa", href: "/prensa" },
  ],
  Productos: [
    { name: "Ingredientes", href: "/ingredientes" },
    { name: "Precios", href: "/precios" },
    { name: "Seguridad", href: "/seguridad" },
    { name: "Mapa de Ruta", href: "/roadmap" },
  ],
  Recursos: [
    { name: "Ayuda", href: "/ayuda" },
    { name: "Comunidad", href: "/comunidad" },
    { name: "Contacto", href: "/contacto" },
    { name: "Distribuidores", href: "/distribuidores" },
  ],
};

const socialLinks = [
  {
    name: "Facebook",
    href: "https://www.facebook.com/KimboBarf/?locale=es_LA",
    icon: (
      <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
        <path d="M9.101 23.691v-7.98H6.627v-3.667h2.474v-1.58c0-4.085 1.848-5.978 5.858-5.978.401 0 .955.042 1.468.103a8.68 8.68 0 0 1 1.141.195v3.325a8.623 8.623 0 0 0-.653-.036c-2.648 0-2.928 1.67-2.928 3.403v1.575h3.988l-.538 3.677h-3.45v7.98h-4.996Z"></path>
      </svg>
    ),
  },
  {
    name: "TikTok",
    href: "https://www.tiktok.com/@kimbodogfood",
    icon: (
      <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
        <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"></path>
      </svg>
    ),
  },
  {
    name: "Instagram",
    href: "https://www.instagram.com/kimbonaturalnutrition/?hl=es",
    icon: (
      <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069ZM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0Zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324ZM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8Zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881Z"></path>
      </svg>
    ),
  },
  {
    name: "YouTube",
    href: "https://www.youtube.com/@kimbonaturaldogfood",
    icon: (
      <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
        <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"></path>
      </svg>
    ),
  },
];

export default function Footer() {
  const [hoveredLink, setHoveredLink] = useState(null);
  const [hoveredSocial, setHoveredSocial] = useState(null);

  return (
    <footer style={footerStyles.footer}>
      <div style={footerStyles.gradientOverlay} />

      <div style={footerStyles.container}>
        <div style={footerStyles.contentWrapper}>
          <div style={footerStyles.brandSection}>
            <div style={footerStyles.brandHeader}>
              <img
                src={imagenLogo}
                alt="Logo Kimbo"
                style={footerStyles.logoImage}
              />
              <span style={footerStyles.brandName}>
                Kimbo Natural Dog Food & Nutrition
              </span>
            </div>

            <p style={footerStyles.brandDescription}>
              Creando nutrición real y funcional que eleva la salud de tu
              mascota y conecta contigo.
            </p>

            <div style={footerStyles.socialContainer}>
              {socialLinks.map((social) => {
                const isHovered = hoveredSocial === social.name;
                return (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank" // Abre en nueva pestaña
                    rel="noopener noreferrer"
                    onMouseEnter={() => setHoveredSocial(social.name)}
                    onMouseLeave={() => setHoveredSocial(null)}
                    style={{
                      ...footerStyles.socialIcon,
                      ...(isHovered ? footerStyles.socialIconHover : {}),
                    }}
                    title={social.name}
                  >
                    {social.icon}
                  </a>
                );
              })}
            </div>
          </div>

          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category} style={footerStyles.linksColumn}>
              <h3 style={footerStyles.columnTitle}>{category}</h3>
              <ul style={footerStyles.linkList}>
                {links.map((link) => {
                  const isLinkHovered = hoveredLink === link.name;
                  return (
                    <li key={link.name}>
                      <a
                        href={link.href}
                        onMouseEnter={() => setHoveredLink(link.name)}
                        onMouseLeave={() => setHoveredLink(null)}
                        style={{
                          ...footerStyles.linkItem,
                          ...(isLinkHovered ? footerStyles.linkItemHover : {}),
                        }}
                      >
                        <span
                          style={{
                            ...footerStyles.linkDash,
                            width: isLinkHovered ? "12px" : "0px",
                            opacity: isLinkHovered ? 1 : 0,
                          }}
                        />
                        {link.name}
                      </a>
                    </li>
                  );
                })}
              </ul>
            </div>
          ))}
        </div>

        <div
          style={{
            ...footerStyles.bottomBar,
            justifyContent: "space-between",
          }}
        >
          <p
            style={{
              ...footerStyles.copyright,
              textAlign: "center",
              width: "auto",
            }}
          >
            © 2025 Kimbo Natural Dog Food & Nutrition. Todos los derechos reservados.
          </p>
          <div style={footerStyles.legalLinks}>
            <a
              href="/privacy"
              style={footerStyles.copyright}
              onMouseEnter={(e) => (e.target.style.color = "#2E7D32")}
              onMouseLeave={(e) => (e.target.style.color = "#6B7280")}
            >
              Privacidad
            </a>
            <a
              href="/terms"
              style={footerStyles.copyright}
              onMouseEnter={(e) => (e.target.style.color = "#2E7D32")}
              onMouseLeave={(e) => (e.target.style.color = "#6B7280")}
            >
              Términos
            </a>
          </div>
        </div>
      </div>

      <div style={footerStyles.glowLine} />
    </footer>
  );
}
