import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

export const useUserSession = () => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {

    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  const logout = () => {
    Swal.fire({
      title: "¿Cerrar sesión?",
      text: "¿Estás seguro que deseas salir?",
      icon: "question",
      showCancelButton: true,
      confirmButtonColor: "#374151",
      cancelButtonColor: "#d33",
      confirmButtonText: "Sí, salir",
      cancelButtonText: "Cancelar"
    }).then((result) => {
      if (result.isConfirmed) {

        localStorage.removeItem("token");
        localStorage.removeItem("user");
        setUser(null);
        

        navigate("/login");
        

      }
    });
  };

  return { user, logout };
};