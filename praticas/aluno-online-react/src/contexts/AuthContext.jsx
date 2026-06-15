import { useState } from "react";
import { AuthContext } from "./AuthContext";

export function AuthProvider({ children }) {
    const [autenticado, setAutenticado] = useState(() => {
        return !!localStorage.getItem("@AlunoOnline:token");
    });
    const [usuario, setUsuario] = useState(() => {
        const storedUser = localStorage.getItem("@AlunoOnline:usuario");
        return storedUser ? JSON.parse(storedUser) : {};
    });

    const login = (dadosUsuario, token) => {
        localStorage.setItem("@AlunoOnline:usuario", JSON.stringify(dadosUsuario));
        localStorage.setItem("@AlunoOnline:token", token);
        
        setAutenticado(true);
        setUsuario(dadosUsuario);
    };

    const logout = () => {
        localStorage.removeItem("@AlunoOnline:usuario");
        localStorage.removeItem("@AlunoOnline:token");
        
        setAutenticado(false);
        setUsuario({});
    };

    return (
        <AuthContext.Provider value={{ autenticado, usuario, login, logout, token: localStorage.getItem("@AlunoOnline:token") }}>
            {children}
        </AuthContext.Provider>
    );
}
