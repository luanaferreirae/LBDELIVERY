import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';

function Login() {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [erro, setErro] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    if (!email || !senha) {
      setErro('Preencha todos os campos.');
      return;
    }
    // Simulação de autenticação simples
    if (email === 'luana@exemplo.com' && senha === '123456') {
      localStorage.setItem('auth', 'true');
      navigate('/dashboard');
    } else {
      setErro('E-mail ou senha incorretos. (Dica: luana@exemplo.com / 123456)');
    }
  };

  return (
    <div className="card">
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <div className="input-group">
          <label htmlFor="email">E-mail</label>
          <input 
            type="email" 
            id="email" 
            value={email} 
            onChange={(e) => setEmail(e.target.value)} 
            placeholder="Digite seu e-mail"
          />
        </div>
        <div className="input-group">
          <label htmlFor="senha">Senha</label>
          <input 
            type="password" 
            id="senha" 
            value={senha} 
            onChange={(e) => setSenha(e.target.value)}
            placeholder="Digite sua senha" 
          />
        </div>
        {erro && <span className="error">{erro}</span>}
        <button type="submit" className="btn">Entrar</button>
      </form>
      <div className="links">
        <Link to="/recuperacao">Esqueci minha senha</Link>
        <Link to="/cadastro">Criar conta</Link>
      </div>
    </div>
  );
}

export default Login;
