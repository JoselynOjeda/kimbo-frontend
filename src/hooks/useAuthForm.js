import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { signInWithPopup } from "firebase/auth";
import { auth, googleProvider, facebookProvider } from "../config/firebase";
import { COLORS } from "../styles/AuthStyles"; 

export const useAuthForm = () => {
  const navigate = useNavigate();


  const [showPassword, setShowPassword] = useState(false);
  const [isRegistering, setIsRegistering] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [formData, setFormData] = useState({
    nombre_completo: "",
    email: "",
    password: "",
    confirmPassword: ""
  });


  const togglePasswordVisibility = () => setShowPassword(!showPassword);

  const toggleForm = () => {
    setIsRegistering(!isRegistering);
    setError("");
    setFormData({ nombre_completo: "", email: "", password: "", confirmPassword: "" });
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const mostrarAlerta = (icono, titulo, mensaje) => {
    Swal.fire({
      icon: icono,
      title: titulo,
      text: mensaje,
      confirmButtonColor: COLORS.primary,
      confirmButtonText: 'Entendido',
      backdrop: `rgba(0,0,0,0.4)`,
      showClass: { popup: 'animate__animated animate__fadeInDown' },
      hideClass: { popup: 'animate__animated animate__fadeOutUp' },
      customClass: { title: 'font-poppins-title', htmlContainer: 'font-poppins-text' }
    });
  };


  const handleSocialLogin = async (providerType) => {
    setError("");
    try {
      const provider = providerType === 'google' ? googleProvider : facebookProvider;
      const result = await signInWithPopup(auth, provider);
      const user = result.user;

      if (!user.email) {
        throw new Error("La red social no compartió tu email. Por favor usa el registro normal.");
      }

      const bodyData = {
        nombre: user.displayName || "Usuario Social",
        email: user.email,
        foto: user.photoURL,
        provider: providerType,
        provider_id: user.uid
      };

      const response = await fetch("http://localhost:3001/api/auth/social", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(bodyData),
      });

      const data = await response.json();

      if (!response.ok) throw new Error(data.message || "Error al conectar con el servidor");

      localStorage.setItem("token", data.token);
      localStorage.setItem("user", JSON.stringify(data.user));

      Swal.fire({
        icon: 'success',
        title: `¡Bienvenido con ${providerType === 'google' ? 'Google' : 'Facebook'}!`,
        text: `Hola, ${data.user.nombre}`,
        showConfirmButton: false,
        timer: 1500,
        backdrop: `rgba(0,0,123,0.4)`
      }).then(() => {
        navigate("/");
      });

    } catch (error) {
      console.error("Error Social:", error);
      let mensaje = error.message;
      if (error.code === 'auth/popup-closed-by-user') return;
      if (error.code === 'auth/account-exists-with-different-credential') {
        mensaje = "Ya existe una cuenta con este email usando otro método.";
      }
      mostrarAlerta('error', 'Error de Autenticación', mensaje);
    }
  };


  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    // Validaciones
    if (!formData.email.trim() || !formData.password.trim()) {
      setLoading(false);
      mostrarAlerta('warning', 'Campos Incompletos', 'Por favor, llena todos los campos obligatorios.');
      return;
    }

    if (isRegistering && !formData.nombre_completo.trim()) {
      setLoading(false);
      mostrarAlerta('warning', 'Falta el Nombre', 'Por favor ingresa tu nombre completo.');
      return;
    }

    if (isRegistering) {
      const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/;
      if (formData.password.length > 6) {
        setLoading(false);
        setError("La contraseña es muy larga");
        mostrarAlerta('error', 'Contraseña Inválida', 'La contraseña debe tener un MÁXIMO de 6 caracteres.');
        return;
      }
      if (!passwordRegex.test(formData.password)) {
        setLoading(false);
        setError("La contraseña no es segura");
        mostrarAlerta('error', 'Contraseña Débil', 'La contraseña debe incluir al menos: una mayúscula, una minúscula y un número.');
        return;
      }
      if (formData.password !== formData.confirmPassword) {
        setLoading(false);
        setError("Las contraseñas no coinciden");
        mostrarAlerta('error', 'Error', 'Las contraseñas no coinciden.');
        return;
      }
    }

    try {
      const endpoint = isRegistering
        ? "http://localhost:3001/api/auth/register"
        : "http://localhost:3001/api/auth/login";

      const bodyData = isRegistering
        ? { nombre_completo: formData.nombre_completo, email: formData.email, password: formData.password }
        : { email: formData.email, password: formData.password };

      const response = await fetch(endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(bodyData),
      });

      const data = await response.json();

      if (!response.ok) throw new Error(data.message || "Error de conexión");

      setLoading(false);

      if (isRegistering) {
        Swal.fire({
          icon: 'success',
          title: '¡Cuenta Creada!',
          text: `Bienvenido/a ${data.user.nombre}. Ahora inicia sesión.`,
          confirmButtonColor: COLORS.primary,
          timer: 3000,
          timerProgressBar: true
        }).then(() => {
          toggleForm();
        });
      } else {
        localStorage.setItem("token", data.token);
        localStorage.setItem("user", JSON.stringify(data.user));

        Swal.fire({
          icon: 'success',
          title: '¡Login Correcto!',
          text: `Hola de nuevo, ${data.user.nombre}`,
          showConfirmButton: false,
          timer: 1500,
          backdrop: `rgba(0,0,123,0.4)`
        }).then(() => {
          navigate("/");
        });
      }
    } catch (error) {
      console.error("Error en autenticación:", error);
      setLoading(false);
      setError(error.message);
      mostrarAlerta('error', 'Ocurrió un error', error.message);
    }
  };
  return {
    formData,
    handleChange,
    handleSubmit,
    handleSocialLogin,
    togglePasswordVisibility,
    toggleForm,
    showPassword,
    isRegistering,
    loading,
    error
  };
};