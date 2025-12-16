"use client";

import React, { useState } from "react";
import imagenFondo from "../assets/images/Login-Fondo-Kimbo.png";
import imagenLogo from "../assets/images/Logo-Kimbo.png";

import { styles, COLORS } from "../styles/LoginStyles";

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div style={styles.mainContainer(imagenFondo)}>
      <div style={styles.panelsContainer}>
        <div style={styles.leftPanel}>
          <div>
            <div style={styles.logoContainer}>
              <img
                src={imagenLogo}
                alt="Logo Kimbo Alimentos"
                style={styles.logoImage}
              />
            </div>

            <h1 style={styles.titleH1}>
              <span style={{ fontWeight: "800" }}>Somos Kimbo Natural Dog</span>
              <br />
              <span style={{ fontWeight: "800" }}>Food & Nutrition</span>
            </h1>

            <p style={styles.descriptionP}>
              Alimentación natural, real y consciente para el bienestar de tu
              mascota. Porque lo que pones en su plato también es una forma de
              amor.
            </p>

            <button style={styles.learnMoreButton}>
              Conocer Más
              <svg
                style={{ width: "1.25rem", height: "1.25rem" }}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </button>
          </div>

          <div style={{ display: "flex", gap: "0.5rem", marginTop: "3rem" }}>
            <div
              style={{
                ...styles.inputGroup,
                width: "2rem",
                height: "0.25rem",
                backgroundColor: COLORS.white,
                borderRadius: "9999px",
              }}
            ></div>
            <div
              style={{
                ...styles.inputGroup,
                width: "2rem",
                height: "0.25rem",
                backgroundColor: "rgba(255, 255, 255, 0.3)",
                borderRadius: "9999px",
              }}
            ></div>
          </div>
        </div>

        <div style={styles.rightPanel}>
          <div style={{ maxWidth: "28rem", margin: "0 auto", width: "100%" }}>
            <h2 style={styles.welcomeH2}>¡Bienvenido de vuelta!</h2>
            <p style={styles.welcomeP}>
              Ingresa tus datos para seguir consintiendo a tu mejor amigo.
            </p>

            <div style={styles.formItemsContainer}>
              <div style={styles.inputGroup}>
                <label style={styles.label}>Correo Electrónico</label>
                <input
                  type="email"
                  placeholder="ejemplo@kimbo.com"
                  style={{ ...styles.inputBase, ...styles.inputEmail }}
                />
              </div>

              <div style={styles.inputGroup}>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <label style={styles.label}>Contraseña</label>
                  <button type="button" style={styles.forgotButton}>
                    ¿Olvidaste?
                  </button>
                </div>

                <div style={styles.passwordWrapper}>
                  <input
                    type={showPassword ? "text" : "password"}
                    style={{ ...styles.inputBase, ...styles.inputPassword }}
                  />

                  <button
                    type="button"
                    onClick={togglePasswordVisibility}
                    style={styles.togglePasswordButton}
                  >
                    {showPassword ? (
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                        <circle cx="12" cy="12" r="3"></circle>
                      </svg>
                    ) : (
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"></path>
                        <line x1="1" y1="1" x2="23" y2="23"></line>
                      </svg>
                    )}
                  </button>
                </div>
              </div>

              {/* Botón de Login Principal */}
              <button style={styles.loginButton}>Ingresar</button>
            </div>
            <div style={styles.separatorContainer}>
              <div style={styles.separatorLine}></div>
              <span style={styles.separatorText}>
                o iniciar sesión de otra forma
              </span>
              <div style={styles.separatorLine}></div>
            </div>

            <div style={styles.socialButtonsContainer}>
              {/* Botón Google */}
              <button
                style={{ ...styles.socialButtonBase, ...styles.googleButton }}
              >
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M23.52 12.29C23.52 11.43 23.44 10.6 23.28 9.81H12V14.42H18.46C18.18 15.9 17.34 17.15 16.08 18.01V20.98H19.96C22.24 18.89 23.52 15.82 23.52 12.29Z"
                    fill="#4285F4"
                  />
                  <path
                    d="M12 24C15.24 24 17.96 22.92 19.96 21.08L16.08 18.09C15 18.81 13.62 19.25 12 19.25C8.87 19.25 6.22 17.14 5.27 14.29H1.26V17.39C3.24 21.32 7.31 24 12 24Z"
                    fill="#34A853"
                  />
                  <path
                    d="M5.27 14.29C5.03 13.43 4.9 12.53 4.9 11.6C4.9 10.67 5.03 9.77 5.27 8.91V5.81H1.26C0.45 7.42 0 9.25 0 11.6C0 13.95 0.45 15.78 1.26 17.39L5.27 14.29Z"
                    fill="#FBBC05"
                  />
                  <path
                    d="M12 3.95C13.76 3.95 15.34 4.56 16.58 5.75L19.99 2.34C17.96 0.45 15.24 0 12 0C7.31 0 3.24 2.68 1.26 6.61L5.27 9.71C6.22 6.86 8.87 3.95 12 3.95Z"
                    fill="#EA4335"
                  />
                </svg>
                Google
              </button>

              {/* Botón Facebook */}
              <button
                style={{ ...styles.socialButtonBase, ...styles.facebookButton }}
              >
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M24 12.07C24 5.41 18.63 0 12 0C5.37 0 0 5.41 0 12.07C0 18.1 4.39 23.1 10.13 24V15.56H7.08V12.07H10.13V9.41C10.13 6.39 11.91 4.71 14.65 4.71C15.96 4.71 17.34 4.95 17.34 4.95V7.91H15.82C14.34 7.91 13.88 8.84 13.88 9.78V12.07H17.2L16.67 15.56H13.88V24C19.61 23.1 24 18.1 24 12.07Z" />
                </svg>
                Facebook
              </button>
            </div>

            <p style={styles.registerP}>
              {"¿No tienes cuenta? "}
              <button type="button" style={styles.registerButton}>
                Regístrate
              </button>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
