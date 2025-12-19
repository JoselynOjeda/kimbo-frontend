import React, { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

export default function ConfirmAccountPage() {
  const { token } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const confirmAccount = async () => {
      try {
        const response = await fetch(`http://localhost:3001/api/auth/confirm-account/${token}`);
        const data = await response.json();

        if (response.ok) {
          Swal.fire("¡Cuenta Confirmada!", data.message, "success");
          navigate("/login");
        } else {
          Swal.fire("Error", data.message, "error");
        }
      } catch (error) {
        Swal.fire("Error", "No se pudo conectar con el servidor", "error");
      }
    };
    confirmAccount();
  }, [token, navigate]);

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <h2>Verificando tu cuenta, por favor espera...</h2>
    </div>
  );
}