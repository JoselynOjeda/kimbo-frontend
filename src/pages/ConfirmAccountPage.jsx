import React, { useEffect, useRef } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { COLORS } from "../styles/AuthStyles"; 

export default function ConfirmAccountPage() {
  const { token } = useParams();
  const navigate = useNavigate();
  
 
  const effectRan = useRef(false);

  useEffect(() => {
    if (effectRan.current) return; 

    const confirmAccount = async () => {
      try {
        const response = await fetch(`http://localhost:3001/api/auth/confirm-account/${token}`);
        const data = await response.json();

        if (response.ok) {

          Swal.fire({
            title: "¡Cuenta Verificada!",
            text: "Tu correo ha sido validado exitosamente. Ya puedes iniciar sesión.",
            icon: "success",
            confirmButtonColor: COLORS.primary || '#EF6C00',
            confirmButtonText: "Ir al Login",
            allowOutsideClick: false 
          }).then((result) => {
            if (result.isConfirmed) {
              navigate("/login");
            }
          });

        } else {
 
          Swal.fire({
            title: "Error",
            text: data.message || "El enlace no es válido o ya expiró.",
            icon: "error",
            confirmButtonColor: COLORS.primary || '#EF6C00',
            confirmButtonText: "Volver al inicio"
          }).then(() => {
             navigate("/login");
          });
        }
      } catch (error) {
        console.error(error);
        Swal.fire("Error", "No se pudo conectar con el servidor", "error")
            .then(() => navigate("/login"));
      }
    };

    confirmAccount();
    
 
    effectRan.current = true;

  }, [token, navigate]);

  return (
    <div style={{ 
        display: 'flex', 
        flexDirection: 'column',
        justifyContent: 'center', 
        alignItems: 'center', 
        height: '100vh',
        backgroundColor: '#f3f4f6',
        fontFamily: 'Arial, sans-serif'
    }}>
      <div style={{
          padding: '2rem',
          backgroundColor: 'white',
          borderRadius: '1rem',
          boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
          textAlign: 'center'
      }}>
          <h2 style={{ color: '#EF6C00', marginBottom: '1rem' }}>Verificando cuenta...</h2>
          <p style={{ color: '#666' }}>Por favor espera un momento.</p>
      </div>
    </div>
  );
}