import { createContext, useState, useContext } from "react";


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

// eslint-disable-next-line react-refresh/only-export-components
export function useAuth() {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error("useAuth deve ser usado dentro de um AuthProvider");
    }
    return context;
}