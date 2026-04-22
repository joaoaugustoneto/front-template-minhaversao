import { useState } from 'react';
import Input from '../components/Input';
import logo from '../assets/learn.svg';
import './Login.css';

function Login() {
  // 1. Estados para armazenar os valores digitados
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  
  // 2. Estado para armazenar as mensagens de erro
  const [errors, setErrors] = useState({ email: '', password: '' });

  // 3. Função de Validação
  const validate = () => {
    let isValid = true;
    const newErrors = { email: '', password: '' };

    // Validação do E-mail
    if (!email) {
      newErrors.email = 'O e-mail é obrigatório';
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = 'Digite um e-mail válido';
      isValid = false;
    }

    // Validação da Senha
    if (!password) {
      newErrors.password = 'A senha é obrigatória';
      isValid = false;
    } else if (password.length < 6) {
      newErrors.password = 'A senha deve ter no mínimo 6 caracteres';
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  // 4. Função chamada ao enviar o formulário

  const handleSubmit = (event) => {
    event.preventDefault(); // Impede o formulário de recarregar a página na hora de validar

    if (validate()) {
      // Se estiver tudo certo, altera a URL nativamente, o que causará o recarregamento pra página certa
      window.location.href = '/dashboard'; 
    }
  };

  return (
    <div className="login-container">
      <div className="login-card">
        
        <header className="login-header">
          <img src={logo} alt="Logo Aluno Online" className="login-logo" />
          <h1>Aluno Online</h1>
        </header>
        
        <p className="login-subtitle">Acesse sua conta</p>

        <form onSubmit={handleSubmit} noValidate>
          <Input
            label="E-mail"
            type="email"
            id="email"
            placeholder="Digite seu e-mail"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            error={errors.email}
          />

          <Input
            label="Senha"
            type="password"
            id="password"
            placeholder="Digite sua senha"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            error={errors.password}
          />

          <button type="submit" className="btn-login">Entrar</button>
        </form>

      </div>
    </div>
  );
}

export default Login;