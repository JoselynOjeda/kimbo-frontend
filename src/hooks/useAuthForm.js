import { useState, useEffect, useRef } from "react";
import { useNavigate, useLocation, useParams } from "react-router-dom";
import Swal from "sweetalert2";
import { signInWithPopup } from "firebase/auth";
import { auth, googleProvider, facebookProvider } from "../config/firebase";
import { COLORS } from "../styles/AuthStyles";

export const useAuthForm = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { token } = useParams();

  const [showPassword, setShowPassword] = useState(false);
  const [showRegisterConfirmPassword, setShowRegisterConfirmPassword] =
    useState(false);
  const [isRegistering, setIsRegistering] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [formData, setFormData] = useState({
    nombre_completo: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

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

  const verificationAttempted = useRef(false);

  const togglePasswordVisibility = () => setShowPassword(!showPassword);
  const toggleRegisterConfirmVisibility = () =>
    setShowRegisterConfirmPassword(!showRegisterConfirmPassword);

  const toggleForm = () => {
    setIsRegistering(!isRegistering);
    setError("");
    setFormData({
      nombre_completo: "",
      email: "",
      password: "",
      confirmPassword: "",
    });
    setShowPassword(false);
    setShowRegisterConfirmPassword(false);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const mostrarAlerta = (icono, titulo, mensaje) => {
    Swal.fire({
      icon: icono,
      title: titulo,
      text: mensaje,
      confirmButtonColor: COLORS.primary,
      confirmButtonText: "Entendido",
      backdrop: `rgba(0,0,0,0.4)`,
    });
  };

  useEffect(() => {
    if (token && location.pathname.includes("/confirm-account/")) {
      if (verificationAttempted.current) return;
      verificationAttempted.current = true;

      const verifyAccount = async () => {
        Swal.fire({
          title: "Verificando cuenta...",
          text: "Por favor espera un momento.",
          allowOutsideClick: false,
          didOpen: () => {
            Swal.showLoading();
          },
        });

        try {
          const response = await fetch(
            `http://localhost:3001/api/auth/confirm-account/${token}`
          );
          const data = await response.json();

          if (response.ok) {
            await Swal.fire({
              title: "¡Cuenta Verificada! 🎉",
              text: "Tu correo ha sido validado correctamente. Ya puedes iniciar sesión.",
              icon: "success",
              confirmButtonColor: COLORS.primary,
              confirmButtonText: "Iniciar Sesión",
            });
            navigate("/login", { replace: true });
          } else {
            await Swal.fire({
              title: "Error de Verificación",
              text:
                data.message || "El enlace no es válido o ya fue utilizado.",
              icon: "error",
              confirmButtonColor: COLORS.primary,
              confirmButtonText: "Entendido",
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

  useEffect(() => {
    if (location.pathname.includes("/reset-password/")) {
      const pathToken = location.pathname.split("/").pop();
      setResetToken(pathToken);
      setShowResetModal(true);
    }
  }, [location]);

  const handleSocialLogin = async (providerType) => {
    setError("");
    try {
      const provider =
        providerType === "google" ? googleProvider : facebookProvider;
      const result = await signInWithPopup(auth, provider);
      const user = result.user;

      if (!user.email) throw new Error("La red social no compartió tu email.");

      const bodyData = {
        nombre: user.displayName || "Usuario Social",
        email: user.email,
        foto: user.photoURL,
        provider: providerType,
        provider_id: user.uid,
      };

      const response = await fetch("http://localhost:3001/api/auth/social", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(bodyData),
      });

      const data = await response.json();

      if (response.status === 403 && data.error === "UNVERIFIED") {
        return Swal.fire({
          icon: "warning",
          title: "¡Verificación Requerida!",
          text: data.message,
          confirmButtonColor: COLORS.primary,
          confirmButtonText: "Revisaré mi correo",
        });
      }

      if (!response.ok)
        throw new Error(data.message || "Error al conectar con el servidor");

      localStorage.setItem("token", data.token);
      localStorage.setItem("user", JSON.stringify(data.user));
      Swal.fire({
        icon: "success",
        title: "¡Inicio de sesión exitoso!", 
        text: `Bienvenido de nuevo, ${data.user.nombre}`,
        showConfirmButton: false,
        timer: 1500,
        backdrop: `rgba(0,0,123,0.4)`,
      }).then(() => {
        navigate("/");
      });
      // ----------------------------------------------

    } catch (error) {
      console.error("Error Social:", error);
      let mensaje = error.message;
      if (error.code === "auth/popup-closed-by-user") return;
      if (error.code === "auth/account-exists-with-different-credential") {
        mensaje = "Ya existe una cuenta con este email usando otro método.";
      }
      mostrarAlerta("error", "Error de Autenticación", mensaje);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    if (!formData.email.trim() || !formData.password.trim()) {
      setLoading(false);
      mostrarAlerta(
        "warning",
        "Campos Incompletos",
        "Por favor, llena todos los campos obligatorios."
      );
      return;
    }

    if (isRegistering && !formData.nombre_completo.trim()) {
      setLoading(false);
      mostrarAlerta(
        "warning",
        "Falta el Nombre",
        "Por favor ingresa tu nombre completo."
      );
      return;
    }

    if (isRegistering) {
      const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/;

      if (formData.password.length < 6 || formData.password.length > 12) {
        setLoading(false);
        setError("Longitud inválida");
        mostrarAlerta(
          "error",
          "Contraseña Inválida",
          "La contraseña debe tener entre 6 y 12 caracteres."
        );
        return;
      }

      if (!passwordRegex.test(formData.password)) {
        setLoading(false);
        setError("La contraseña no es segura");
        mostrarAlerta(
          "error",
          "Contraseña Débil",
          "La contraseña debe incluir al menos: una mayúscula, una minúscula y un número."
        );
        return;
      }

      if (formData.password !== formData.confirmPassword) {
        setLoading(false);
        setError("Las contraseñas no coinciden");
        mostrarAlerta("error", "Error", "Las contraseñas no coinciden.");
        return;
      }
    }

    try {
      const endpoint = isRegistering
        ? "http://localhost:3001/api/auth/register"
        : "http://localhost:3001/api/auth/login";

      const bodyData = isRegistering
        ? {
            nombre_completo: formData.nombre_completo,
            email: formData.email,
            password: formData.password,
          }
        : { email: formData.email, password: formData.password };

      const response = await fetch(endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(bodyData),
      });

      const data = await response.json();

      if (response.status === 403 && data.error === "UNVERIFIED") {
        setLoading(false);
        return Swal.fire({
          icon: "warning",
          title: "¡Cuenta no verificada!",
          text: data.message,
          confirmButtonColor: COLORS.primary,
          confirmButtonText: "Revisaré mi correo",
        });
      }

      if (!response.ok) throw new Error(data.message || "Error de conexión");

      setLoading(false);

      if (isRegistering) {
        Swal.fire({
          icon: "success",
          title: "¡Cuenta Creada!",
          text: `Hemos enviado un correo a ${formData.email}. Por favor verifica tu cuenta antes de iniciar sesión.`,
          confirmButtonColor: COLORS.primary,
        }).then(() => {
          toggleForm();
        });
      } else {
        localStorage.setItem("token", data.token);
        localStorage.setItem("user", JSON.stringify(data.user));

        Swal.fire({
          icon: "success",
          title: "¡Login Correcto!",
          text: `Hola de nuevo, ${data.user.nombre}`,
          showConfirmButton: false,
          timer: 1500,
          backdrop: `rgba(0,0,123,0.4)`,
        }).then(() => {
          navigate("/");
        });
      }
    } catch (error) {
      console.error("Error en autenticación:", error);
      setLoading(false);
      setError(error.message);
      mostrarAlerta("error", "Ocurrió un error", error.message);
    }
  };

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
          text: "Revisa tu bandeja de entrada.",
          icon: "success",
          confirmButtonColor: COLORS.primary,
        });
        setShowForgotModal(false);
        setResetEmail("");
      } else {
        Swal.fire({
          title: "Atención",
          text: data.message,
          icon: "warning",
          confirmButtonColor: COLORS.primary,
        });
      }
    } catch (err) {
      Swal.fire("Error", "No se pudo conectar con el servidor.", "error");
    } finally {
      setSendingReset(false);
    }
  };

  const handleResetPasswordFinal = async (e) => {
    e.preventDefault();
    setResetError("");

    const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{6,12}$/;

    if (!regex.test(newPassword)) {
      return setResetError(
        "La clave debe tener: 1 Mayúscula, 1 Minúscula, 1 Número y entre 6 y 12 caracteres."
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
        Swal.fire("¡Éxito!", "Tu contraseña ha sido actualizada.", "success");
        setShowResetModal(false);
        navigate("/login");
      } else {
        setResetError(data.message);
      }
    } catch (err) {
      setResetError("Error al conectar con el servidor.");
    } finally {
      setLoadingReset(false);
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
    error,

    showRegisterConfirmPassword,
    toggleRegisterConfirmVisibility,

    showForgotModal,
    setShowForgotModal,
    handleForgotSubmit,
    resetEmail,
    setResetEmail,
    sendingReset,
    showResetModal,
    setShowResetModal,
    handleResetPasswordFinal,
    newPassword,
    setNewPassword,
    confirmPassword,
    setConfirmPassword,
    showNewPass,
    setShowNewPass,
    showConfirmPass,
    setShowConfirmPass,
    loadingReset,
    resetError,
  };
};