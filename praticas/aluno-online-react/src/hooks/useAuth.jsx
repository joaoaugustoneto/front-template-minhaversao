import { useContext } from 'react';
import { AuthContext } from '../contexts/AuthContext'; // Ajustando o caminho para buscar o contexto

// Declarando e exportando o hook isoladamente para atender às regras do ESLint
export function useAuth() {
  const context = useContext(AuthContext);
  
  if (!context) {
    throw new Error('useAuth deve ser usado dentro de um AuthProvider');
  }
  
  return context;
}