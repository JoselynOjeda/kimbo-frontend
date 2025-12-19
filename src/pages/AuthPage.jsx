import React, { useState, useEffect, useRef } from "react";
// Importamos useParams para leer el token de la URL
import { useNavigate, useLocation, useParams } from "react-router-dom";
import imagenFondo from "../assets/images/Login-Fondo-Kimbo.png";
import imagenLogo from "../assets/images/Logo-Kimbo.png";
import { styles, COLORS } from "../styles/AuthStyles";
import "../styles/AuthPage.css";
import Swal from "sweetalert2";

import { useAuthForm } from "../hooks/useAuthForm";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function LoginPage() {
  const navigate = useNavigate();
  const location = useLocation();
  const { token } = useParams(); // Hook para leer parámetros de la URL como :token

  const [showForgotModal, setShowForgotModal] = useState(false);
  const [resetEmail, setResetEmail] = useState("");
  const [sendingReset, setSendingReset] = useState(false);

  const [showResetModal, setShowResetModal] = useState(false);
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [resetToken, setResetToken] = useState("");
  const [loadingReset, setLoadingReset] = useState(false);
  const [resetError, setResetError] = useState("");

  const [showNewPass, setShowNewPass] = useState(false);
  const [showConfirmPass, setShowConfirmPass] = useState(false);

  // Ref para evitar que el efecto de verificación corra dos veces en modo desarrollo
  const verificationAttempted = useRef(false);

  const {
    formData,
    handleChange,
    handleSubmit,
    handleSocialLogin,
    togglePasswordVisibility,
    toggleForm,
    showPassword,
    isRegistering,
    loading,
    error,
  } = useAuthForm();

  // -----------------------------------------------------------------------
  // 1. LÓGICA DE VERIFICACIÓN DE CUENTA (Automática al cargar)
  // -----------------------------------------------------------------------
  useEffect(() => {
    // Si existe el token y estamos en la ruta de confirmación
    if (token && location.pathname.includes("/confirm-account/")) {
      
      if (verificationAttempted.current) return;
      verificationAttempted.current = true;

      const verifyAccount = async () => {
        // Mostramos alerta de carga
        Swal.fire({
          title: 'Verificando cuenta...',
          text: 'Por favor espera un momento.',
          allowOutsideClick: false,
          didOpen: () => {
            Swal.showLoading();
          }
        });

        try {
          const response = await fetch(`http://localhost:3001/api/auth/confirm-account/${token}`);
          const data = await response.json();

          if (response.ok) {
            await Swal.fire({
              title: "¡Cuenta Verificada! 🎉",
              text: "Tu correo ha sido validado correctamente. Ya puedes iniciar sesión.",
              icon: "success",
              confirmButtonColor: COLORS.primary,
              confirmButtonText: "Iniciar Sesión"
            });
            // Redirigimos a /login (limpiando el token de la URL)
            navigate("/login", { replace: true });
          } else {
            await Swal.fire({
              title: "Error de Verificación",
              text: data.message || "El enlace no es válido o ya fue utilizado.",
              icon: "error",
              confirmButtonColor: COLORS.primary,
              confirmButtonText: "Entendido"
            });
            navigate("/login", { replace: true });
          }
        } catch (error) {
          console.error(error);
          Swal.fire("Error", "No se pudo conectar con el servidor.", "error");
          navigate("/login", { replace: true });
        }
      };

      verifyAccount();
    }
  }, [token, location, navigate]);

  // -----------------------------------------------------------------------
  // 2. LÓGICA DE RESET PASSWORD (Mantenemos tu lógica existente)
  // -----------------------------------------------------------------------
  useEffect(() => {
    if (location.pathname.includes("/reset-password/")) {
      const pathToken = location.pathname.split("/").pop();
      setResetToken(pathToken);
      setShowResetModal(true);
    }
  }, [location]);

  // --- Handlers existentes ---

  const handleForgotSubmit = async (e) => {
    e.preventDefault();
    if (!resetEmail)
      return Swal.fire("Error", "El email es obligatorio", "error");

    setSendingReset(true);
    try {
      const response = await fetch(
        "http://localhost:3001/api/auth/forgot-password",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ email: resetEmail }),
        }
      );

      const data = await response.json();

      if (response.ok) {
        Swal.fire({
          title: "¡Enlace Enviado!",
          text: "Revisa tu bandeja de entrada para restablecer tu clave.",
          icon: "success",
          confirmButtonColor: COLORS.primary,
        });
        setShowForgotModal(false);
        setResetEmail("");
      } else {
        Swal.fire({
          title: "Atención",
          text:
            data.message || "Ese correo no está registrado en nuestro sistema.",
          icon: "warning",
          confirmButtonColor: COLORS.primary,
        });
      }
    } catch (err) {
      console.error("Error:", err);
      Swal.fire("Error", "No se pudo conectar con el servidor.", "error");
    } finally {
      setSendingReset(false);
    }
  };

  const handleResetPasswordFinal = async (e) => {
    e.preventDefault();
    setResetError("");

    const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{1,6}$/;

    if (!regex.test(newPassword)) {
      return setResetError(
        "La clave debe tener: 1 Mayúscula, 1 Minúscula, 1 Número y máximo 6 caracteres."
      );
    }
    if (newPassword !== confirmPassword) {
      return setResetError("Las contraseñas no coinciden.");
    }

    setLoadingReset(true);
    try {
      const response = await fetch(
        `http://localhost:3001/api/auth/reset-password/${resetToken}`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ newPassword }),
        }
      );
      const data = await response.json();

      if (response.ok) {
        Swal.fire(
          "¡Éxito!",
          "Tu contraseña ha sido actualizada correctamente.",
          "success"
        );
        setShowResetModal(false);
        navigate("/login");
      } else {
        setResetError(data.message || "No se pudo actualizar la clave.");
      }
    } catch (err) {
      console.error("Error:", err);
      setResetError("Error al conectar con el servidor.");
    } finally {
      setLoadingReset(false);
    }
  };

  const UserIcon = () => (
    <svg className="input-icon" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
    </svg>
  );
  const MailIcon = () => (
    <svg className="input-icon" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
    </svg>
  );
  const LockIcon = () => (
    <svg className="input-icon" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" />
    </svg>
  );
  const EyeIcon = () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
      <circle cx="12" cy="12" r="3"></circle>
    </svg>
  );
  const EyeOffIcon = () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"></path>
      <line x1="1" y1="1" x2="23" y2="23"></line>
    </svg>
  );

  return (
    <>
      <Navbar />

      <div style={styles.mainContainer}>
        <div style={styles.backgroundBanner(imagenFondo)} />

        <div
          style={{
            flex: 1,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "0 1rem 2rem 1rem",
            width: "100%",
            position: "relative",
            zIndex: 1,
          }}
        >
          <div className="responsive-panels-container">
            <div className="responsive-left-panel">
              <div style={{ width: "100%", textAlign: "center" }}>
                <div style={styles.logoContainer}>
                  <img
                    src={imagenLogo}
                    alt="Logo Kimbo Alimentos"
                    style={{
                      ...styles.logoImage,
                      width: "100px",
                      height: "100px",
                    }}
                  />
                </div>
                <h1 style={{ ...styles.titleH1, fontSize: "2.5rem" }}>
                  <span style={{ fontWeight: "800" }}>
                    Somos Kimbo Natural Dog
                  </span>
                  <br />
                  <span style={{ fontWeight: "800" }}>Food & Nutrition</span>
                </h1>
                <p style={{ ...styles.descriptionP, fontSize: "1.1rem" }}>
                  Alimentación natural, real y consciente para el bienestar de
                  tu mascota.
                </p>
                <button
                  style={{
                    ...styles.learnMoreButton,
                    fontSize: "1rem",
                    padding: "0.8rem 1.5rem",
                  }}
                >
                  Conocer Más
                  <svg
                    style={{ width: "1.5rem", height: "1.5rem" }}
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

              <div
                style={{
                  display: "flex",
                  gap: "0.6rem",
                  marginTop: "2rem",
                  justifyContent: "center",
                }}
              >
                <div
                  style={{
                    width: "2.5rem",
                    height: "0.3rem",
                    backgroundColor: COLORS.white,
                    borderRadius: "9999px",
                  }}
                ></div>
                <div
                  style={{
                    width: "2.5rem",
                    height: "0.3rem",
                    backgroundColor: "rgba(255, 255, 255, 0.3)",
                    borderRadius: "9999px",
                  }}
                ></div>
              </div>
            </div>

            <div className="responsive-right-panel">
              <div
                key={isRegistering ? "register" : "login"}
                className="slide-in-right"
                style={{ width: "100%", maxWidth: "450px", margin: "0 auto" }}
              >
                <h2 style={{ ...styles.welcomeH2, fontSize: "2.2rem" }}>
                  {isRegistering ? "Crea tu cuenta" : "¡Bienvenido de vuelta!"}
                </h2>
                <p
                  style={{
                    ...styles.welcomeP,
                    fontSize: "1rem",
                    marginBottom: "2rem",
                  }}
                >
                  {isRegistering
                    ? "Regístrate para comenzar la experiencia Kimbo."
                    : "Ingresa tus datos para seguir consintiendo a tu mejor amigo."}
                </p>

                {error && (
                  <div
                    style={{
                      backgroundColor: "#fee2e2",
                      color: "#b91c1c",
                      padding: "0.8rem",
                      borderRadius: "0.5rem",
                      marginBottom: "1.2rem",
                      textAlign: "center",
                      fontSize: "0.95rem",
                    }}
                  >
                    {error}
                  </div>
                )}

                <form
                  onSubmit={handleSubmit}
                  style={{ ...styles.formItemsContainer, gap: "1.2rem" }}
                >
                  {isRegistering && (
                    <div style={styles.inputGroup}>
                      <label style={{ ...styles.label, fontSize: "0.85rem" }}>
                        Nombre Completo
                      </label>
                      <div className="input-wrapper-relative">
                        <UserIcon />
                        <input
                          type="text"
                          name="nombre_completo"
                          value={formData.nombre_completo}
                          onChange={handleChange}
                          placeholder="Tu nombre"
                          style={{
                            ...styles.inputBase,
                            ...styles.inputEmail,
                            paddingLeft: "2.5rem",
                            fontSize: "1rem",
                          }}
                        />
                      </div>
                    </div>
                  )}
                  <div style={styles.inputGroup}>
                    <label style={{ ...styles.label, fontSize: "0.85rem" }}>
                      Correo Electrónico
                    </label>
                    <div className="input-wrapper-relative">
                      <MailIcon />
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="ejemplo@kimbo.com"
                        style={{
                          ...styles.inputBase,
                          ...styles.inputEmail,
                          paddingLeft: "2.5rem",
                          fontSize: "1rem",
                        }}
                      />
                    </div>
                  </div>
                  <div style={styles.inputGroup}>
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                      }}
                    >
                      <label style={{ ...styles.label, fontSize: "0.85rem" }}>
                        Contraseña
                      </label>
                      {!isRegistering && (
                        <button
                          type="button"
                          style={{
                            ...styles.forgotButton,
                            fontSize: "0.85rem",
                          }}
                          onClick={() => setShowForgotModal(true)}
                        >
                          ¿Olvidaste tu clave?
                        </button>
                      )}
                    </div>
                    <div style={styles.passwordWrapper}>
                      <LockIcon />
                      <input
                        type={showPassword ? "text" : "password"}
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                        maxLength={isRegistering ? 6 : 50}
                        style={{
                          ...styles.inputBase,
                          ...styles.inputPassword,
                          paddingLeft: "2.5rem",
                          fontSize: "1rem",
                        }}
                      />
                      <button
                        type="button"
                        onClick={togglePasswordVisibility}
                        style={styles.togglePasswordButton}
                      >
                        {showPassword ? <EyeOffIcon /> : <EyeIcon />}
                      </button>
                    </div>
                    {isRegistering && (
                      <p
                        style={{
                          fontSize: "0.85rem",
                          color: "#666",
                          marginTop: "5px",
                        }}
                      >
                        Requisito: Máximo 6 caracteres, 1 Mayúscula, 1 minúscula
                        y 1 número.
                      </p>
                    )}
                  </div>

                  {isRegistering && (
                    <div style={styles.inputGroup}>
                      <label style={{ ...styles.label, fontSize: "0.85rem" }}>
                        Confirmar Contraseña
                      </label>
                      <div style={styles.passwordWrapper}>
                        <LockIcon />
                        <input
                          type={showPassword ? "text" : "password"}
                          name="confirmPassword"
                          value={formData.confirmPassword}
                          onChange={handleChange}
                          maxLength={6}
                          style={{
                            ...styles.inputBase,
                            ...styles.inputPassword,
                            paddingLeft: "2.5rem",
                            fontSize: "1rem",
                          }}
                        />
                      </div>
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={loading}
                    style={{
                      ...styles.loginButton,
                      opacity: loading ? 0.7 : 1,
                      padding: "1rem",
                      fontSize: "1.1rem",
                    }}
                  >
                    {loading
                      ? "Cargando..."
                      : isRegistering
                      ? "Crear Cuenta"
                      : "Iniciar Sesión"}
                  </button>
                </form>

                <div style={styles.separatorContainer}>
                  <div style={styles.separatorLine}></div>
                  <span
                    style={{ ...styles.separatorText, fontSize: "0.85rem" }}
                  >
                    {isRegistering ? "o regístrate con" : "o inicia sesión con"}
                  </span>
                  <div style={styles.separatorLine}></div>
                </div>

                <div style={styles.socialButtonsContainer}>
                  <button
                    type="button"
                    onClick={() => handleSocialLogin("google")}
                    style={{
                      ...styles.socialButtonBase,
                      ...styles.googleButton,
                      padding: "0.8rem",
                      fontSize: "0.95rem",
                    }}
                  >
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      style={{ marginRight: "8px" }}
                    >
                      <path
                        d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                        fill="#4285F4"
                      />
                      <path
                        d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                        fill="#34A853"
                      />
                      <path
                        d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z"
                        fill="#FBBC05"
                      />
                      <path
                        d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                        fill="#EA4335"
                      />
                    </svg>{" "}
                    Google
                  </button>
                  <button
                    type="button"
                    onClick={() => handleSocialLogin("facebook")}
                    style={{
                      ...styles.socialButtonBase,
                      ...styles.facebookButton,
                      padding: "0.8rem",
                      fontSize: "0.95rem",
                    }}
                  >
                    <svg
                      width="20"
                      height="20"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      style={{ marginRight: "8px" }}
                    >
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.469h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                    </svg>{" "}
                    Facebook
                  </button>
                </div>

                <div
                  style={{
                    ...styles.registerP,
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    gap: "0.5rem",
                    marginTop: "2rem",
                  }}
                >
                  <span style={{ fontSize: "1.1rem" }}>
                    {isRegistering
                      ? "¿Ya tienes una cuenta?"
                      : "¿Aún no tienes cuenta?"}
                  </span>
                  <button
                    type="button"
                    className="toggle-btn"
                    onClick={toggleForm}
                    style={{ fontSize: "1rem", padding: "0.6rem 1.8rem" }}
                  >
                    {isRegistering
                      ? "Inicia Sesión Aquí"
                      : "Crear Cuenta Nueva"}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {showForgotModal && (
          <div className="modal-overlay">
            <div className="modal-content slide-in-top">
              <button
                className="close-modal"
                onClick={() => setShowForgotModal(false)}
              >
                &times;
              </button>
              <h2
                style={{
                  color: COLORS.primary,
                  marginBottom: "0.8rem",
                  fontWeight: "bold",
                  fontSize: "1.8rem",
                }}
              >
                Recuperar Acceso
              </h2>
              <p
                style={{
                  fontSize: "1rem",
                  color: COLORS.gray600,
                  marginBottom: "1.8rem",
                }}
              >
                Escribe tu correo electrónico para recibir el enlace de
                restauración.
              </p>
              <form onSubmit={handleForgotSubmit}>
                <div style={{ ...styles.inputGroup, marginBottom: "1.5rem" }}>
                  <label style={{ ...styles.label, fontSize: "0.85rem" }}>
                    Correo Electrónico
                  </label>
                  <div className="input-wrapper-relative">
                    <MailIcon />
                    <input
                      type="email"
                      name="resetEmail"
                      required
                      value={resetEmail}
                      onChange={(e) => setResetEmail(e.target.value)}
                      placeholder="ejemplo@kimbo.com"
                      style={{
                        ...styles.inputBase,
                        ...styles.inputEmail,
                        paddingLeft: "2.5rem",
                        fontSize: "1rem",
                      }}
                    />
                  </div>
                </div>
                <div style={{ display: "flex", gap: "10px" }}>
                  <button
                    type="submit"
                    disabled={sendingReset}
                    style={{
                      ...styles.loginButton,
                      flex: 1,
                      fontSize: "1.1rem",
                    }}
                  >
                    {sendingReset ? "Enviando..." : "Enviar Enlace"}
                  </button>
                  <button
                    type="button"
                    onClick={() => setShowForgotModal(false)}
                    style={{
                      ...styles.loginButton,
                      flex: 1,
                      background: "#ccc",
                      color: "#333",
                      fontSize: "1.1rem",
                    }}
                  >
                    Cancelar
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}

        {showResetModal && (
          <div className="modal-overlay">
            <div className="modal-content slide-in-top">
              <h2
                style={{
                  color: COLORS.primary,
                  marginBottom: "0.8rem",
                  fontWeight: "bold",
                  fontSize: "1.8rem",
                }}
              >
                Nueva Contraseña
              </h2>
              <p
                style={{
                  fontSize: "1rem",
                  color: COLORS.gray600,
                  marginBottom: "1.5rem",
                }}
              >
                Ingresa tu nueva clave de acceso.
              </p>

              {resetError && (
                <div
                  style={{
                    backgroundColor: "#fee2e2",
                    color: "#b91c1c",
                    padding: "0.8rem",
                    borderRadius: "0.5rem",
                    marginBottom: "1.2rem",
                    textAlign: "center",
                    fontSize: "0.95rem",
                  }}
                >
                  {resetError}
                </div>
              )}

              <form onSubmit={handleResetPasswordFinal}>
                <div style={{ ...styles.inputGroup, marginBottom: "1rem" }}>
                  <label style={{ ...styles.label, fontSize: "0.85rem" }}>
                    NUEVA CONTRASEÑA
                  </label>
                  <div style={styles.passwordWrapper}>
                    <LockIcon />
                    <input
                      type={showNewPass ? "text" : "password"}
                      required
                      maxLength={6}
                      value={newPassword}
                      onChange={(e) => setNewPassword(e.target.value)}
                      style={{
                        ...styles.inputBase,
                        borderBottom: "1px solid #ccc",
                        paddingLeft: "2.5rem",
                        padding: "10px",
                      }}
                    />
                    <button
                      type="button"
                      onClick={() => setShowNewPass(!showNewPass)}
                      style={styles.togglePasswordButton}
                    >
                      {showNewPass ? <EyeOffIcon /> : <EyeIcon />}
                    </button>
                  </div>
                </div>
                <div style={{ ...styles.inputGroup, marginBottom: "1.5rem" }}>
                  <label style={{ ...styles.label, fontSize: "0.85rem" }}>
                    CONFIRMAR CONTRASEÑA
                  </label>
                  <div style={styles.passwordWrapper}>
                    <LockIcon />
                    <input
                      type={showConfirmPass ? "text" : "password"}
                      required
                      maxLength={6}
                      value={confirmPassword}
                      onChange={(e) => setConfirmPassword(e.target.value)}
                      style={{
                        ...styles.inputBase,
                        borderBottom: "1px solid #ccc",
                        paddingLeft: "2.5rem",
                        padding: "10px",
                      }}
                    />
                    <button
                      type="button"
                      onClick={() => setShowConfirmPass(!showConfirmPass)}
                      style={styles.togglePasswordButton}
                    >
                      {showConfirmPass ? <EyeOffIcon /> : <EyeIcon />}
                    </button>
                  </div>
                </div>
                <div style={{ display: "flex", gap: "10px" }}>
                  <button
                    type="submit"
                    disabled={loadingReset}
                    style={{
                      ...styles.loginButton,
                      flex: 1,
                      fontSize: "1.1rem",
                    }}
                  >
                    {loadingReset ? "Guardando..." : "Actualizar"}
                  </button>
                  <button
                    type="button"
                    onClick={() => {
                      setShowResetModal(false);
                      navigate("/login");
                    }}
                    style={{
                      ...styles.loginButton,
                      flex: 1,
                      background: "#ccc",
                      color: "#333",
                      fontSize: "1.1rem",
                    }}
                  >
                    Cancelar
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}

        <Footer />
      </div>
    </>
  );
}