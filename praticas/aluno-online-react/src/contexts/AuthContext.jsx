import { createContext, useState } from "react";


const AuthContext = createContext();

export function AuthProvider({ children }) {
    const [autenticado, setAutenticado] = useState(false);
    const [usuario, setUsuario] = useState({});

    const login = (dadosUsuario) => {
        setAutenticado(true);
        setUsuario(dadosUsuario);
    };

    const logout = () => {
        setAutenticado(false);
        setUsuario({});
    };

    return (
        <AuthContext.Provider value={{ autenticado, usuario, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
}