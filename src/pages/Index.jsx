import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import imagenFondo from "../assets/images/FondoIndex-Kimbo.png";

function Index() {
  const navigate = useNavigate();
  const [usuario, setUsuario] = useState(null);

  useEffect(() => {
    const userData = localStorage.getItem("user");
    if (userData) {
      setUsuario(JSON.parse(userData));
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    setUsuario(null);
  };

  const pageStyles = {
    pageContainer: {
      minHeight: "100vh",
      display: "flex",
      flexDirection: "column",
      backgroundColor: "#F9FAFB",
      fontFamily: "'Poppins', sans-serif",
    },

    heroWrapper: {
      width: "100%",
      marginTop: "0",
      paddingTop: "6rem",

      position: "relative",
      display: "flex",
      justifyContent: "center",
      backgroundColor: "#f3f4f6",
    },
    heroImage: {
      width: "100%",
      height: "auto",
      display: "block",
      objectFit: "contain",
    },

    userWelcomeCard: {
      position: "absolute",
      top: "50%",
      left: "50%",
      transform: "translate(-50%, -50%)",
      backgroundColor: "rgba(255, 255, 255, 0.95)",
      padding: "2rem",
      borderRadius: "1rem",
      boxShadow: "0 10px 25px rgba(0, 0, 0, 0.2)",
      textAlign: "center",
      maxWidth: "600px",
      width: "90%",
    },

    mainContent: {
      flex: 1,
      padding: "4rem 1.5rem",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      maxWidth: "1200px",
      margin: "0 auto",
      width: "100%",
    },

    // Estilos generales
    title: {
      color: "#2E7D32",
      fontSize: "1.8rem",
      fontWeight: "800",
      marginBottom: "0.5rem",
    },
    text: {
      color: "#374151",
      marginBottom: "1.5rem",
    },
    primaryButton: {
      padding: "0.8rem 2rem",
      backgroundColor: "#2E7D32",
      color: "white",
      border: "none",
      borderRadius: "8px",
      fontSize: "1rem",
      fontWeight: "600",
      cursor: "pointer",
    },
    secondaryButton: {
      padding: "0.8rem 2rem",
      backgroundColor: "transparent",
      color: "#2E7D32",
      border: "2px solid #2E7D32",
      borderRadius: "8px",
      fontSize: "1rem",
      fontWeight: "600",
      cursor: "pointer",
      marginLeft: "1rem",
    },

    productsPlaceholderSection: {
      textAlign: "center",
      marginTop: "1rem",
    },
    sectionTitle: {
      fontSize: "2rem",
      color: "#111827",
      marginBottom: "1rem",
      fontWeight: "bold",
    },
  };

  return (
    <div style={pageStyles.pageContainer}>
      <Navbar />

      <div style={pageStyles.heroWrapper}>
        <img
          src={imagenFondo}
          alt="Banner Principal Kimbo"
          style={pageStyles.heroImage}
        />

        {usuario && (
          <div style={pageStyles.userWelcomeCard}>
            <h1 style={pageStyles.title}>¡Hola, {usuario.nombre}! 🐾</h1>
            <p style={pageStyles.text}>
              Tu cuenta está activa. ¿Listo para consentir a tu mascota?
            </p>
            <div style={{ display: "flex", justifyContent: "center" }}>
              <button
                onClick={() => navigate("/productos")}
                style={pageStyles.primaryButton}
              >
                Ver Catálogo
              </button>
              <button onClick={handleLogout} style={pageStyles.secondaryButton}>
                Cerrar Sesión
              </button>
            </div>
          </div>
        )}
      </div>

      <Footer />
    </div>
  );
}

export default Index;
