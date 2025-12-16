"use client";

import React from "react";
import imagenFondo from "../assets/images/Login-Fondo-Kimbo.png";
import imagenLogo from "../assets/images/Logo-Kimbo.png";

// Importamos TANTO 'styles' COMO 'COLORS' desde el archivo de estilos
import { styles, COLORS } from '../styles/LoginStyles';

export default function LoginPage() {
  return (
    // === CONTENEDOR PRINCIPAL ===
    <div style={styles.mainContainer(imagenFondo)}>
      
      {/* === CONTENEDOR DE PANELES === */}
      <div style={styles.panelsContainer}>
        
        {/* === PANEL IZQUIERDO === */}
        <div style={styles.leftPanel}>
          
          <div>
            {/* LOGO KIMBO */}
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

          {/* Puntos Inferiores */}
          <div style={{ display: "flex", gap: "0.5rem", marginTop: "3rem" }}>
            <div style={{...styles.inputGroup, width: "2rem", height: "0.25rem", backgroundColor: COLORS.white, borderRadius: "9999px"}}></div>
            <div style={{...styles.inputGroup, width: "2rem", height: "0.25rem", backgroundColor: "rgba(255, 255, 255, 0.3)", borderRadius: "9999px"}}></div>
          </div>
        </div>

        {/* === PANEL DERECHO === */}
        <div style={styles.rightPanel}>
          <div style={{ maxWidth: "28rem", margin: "0 auto", width: "100%" }}>
            <h2 style={styles.welcomeH2}>
              ¡Bienvenido de vuelta! 
            </h2>
            <p style={styles.welcomeP}>
              Ingresa tus datos para seguir consintiendo a tu mejor amigo.
            </p>

            <div style={styles.formItemsContainer}>
              {/* Input Email */}
              <div style={styles.inputGroup}>
                <label style={styles.label}>
                  Correo Electrónico
                </label>
                <input
                  type="email"
                  placeholder="ejemplo@kimbo.com"
                  style={{...styles.inputBase, ...styles.inputEmail}}
                />
              </div>

              {/* Input Password */}
              <div style={styles.inputGroup}>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <label style={styles.label}>
                    Contraseña
                  </label>
                  <button type="button" style={styles.forgotButton}>
                    ¿Olvidaste?
                  </button>
                </div>
                <input
                  type="password"
                  style={{...styles.inputBase, ...styles.inputPassword}}
                />
              </div>

              {/* Botón de Login */}
              <button style={styles.loginButton}>
                Ingresar
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