
export const loginUser = async (email, password) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (email === "admin@kimbo.com" && password === "123456") {
                resolve({ 
                    success: true, 
                    user: { name: "Joselyn", role: "admin", token: "token-falso-123" } 
                });
            } else {
                reject({ success: false, message: "Correo o contraseña incorrectos" });
            }
        }, 1000);
    });
};