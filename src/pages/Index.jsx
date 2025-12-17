import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function Index() {
  const navigate = useNavigate();
  const [usuario, setUsuario] = useState(null);

  useEffect(() => {
    // 1. Al cargar la página, buscamos si hay datos guardados
    const userData = localStorage.getItem("user");
    
    if (userData) {
      // Si hay datos, los convertimos de texto a objeto real
      setUsuario(JSON.parse(userData));
    }
  }, []);

  const handleLogout = () => {
    // Borramos datos para cerrar sesión
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    setUsuario(null); // Limpiamos el estado visualmente
    // Opcional: Recargar la página o navegar al login
    // navigate("/login"); 
  };

  return (
    <div style={{ padding: "2rem", fontFamily: "sans-serif" }}>
      
      {/* --- ZONA CONDICIONAL --- */}
      {usuario ? (
        // A) SI EL USUARIO ESTÁ LOGUEADO, SE MUESTRA ESTO:
        <div style={{ backgroundColor: "#d1fae5", padding: "20px", borderRadius: "10px" }}>
          <h1 style={{ color: "#065f46" }}>¡Bienvenido de vuelta, {usuario.nombre}! 🐶</h1>
          <p>Nos alegra verte por aquí, {usuario.email}.</p>
          <button onClick={handleLogout} style={{ padding: "10px 20px", cursor: "pointer" }}>
            Cerrar Sesión
          </button>
        </div>
      ) : (
        // B) SI NO HA INICIADO SESIÓN, SE MUESTRA ESTO:
        <div>
          <h1>Bienvenido a Kimbo (Modo Visitante)</h1>
          <p>Explora nuestros productos naturales para tu mascota.</p>
          <p>Para ver tu perfil y ofertas exclusivas, inicia sesión.</p>
          
          <button 
            onClick={() => navigate("/login")}
            style={{ padding: "10px 20px", backgroundColor: "#2E7D32", color: "white", border: "none", borderRadius: "5px", cursor: "pointer" }}
          >
            Iniciar Sesión / Registrarse
          </button>
        </div>
      )}

      <hr style={{ margin: "2rem 0" }} />
      
      <h2>Productos Destacados</h2>
      <p>Aquí va el resto de tu página que todo el mundo puede ver...</p>
      
    </div>
  );
}

export default Index;