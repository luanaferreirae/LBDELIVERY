import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

function Cadastro() {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [confirmaSenha, setConfirmaSenha] = useState('');
  const navigate = useNavigate();

  const handleCadastro = (e) => {
    e.preventDefault();
    if (!nome || !email || !senha) {
      alert('Preencha todos os campos obrigatórios!');
      return;
    }
    if (senha !== confirmaSenha) {
      alert('As senhas não coincidem!');
      return;
    }
    alert('Cadastro realizado com sucesso! (Simulação)');
    navigate('/');
  };

  return (
    <div className="card">
      <h2>Cadastro</h2>
      <form onSubmit={handleCadastro}>
        <div className="input-group">
          <label htmlFor="nome">Nome</label>
          <input type="text" id="nome" value={nome} onChange={(e) => setNome(e.target.value)} />
        </div>
        <div className="input-group">
          <label htmlFor="email">E-mail</label>
          <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </div>
        <div className="input-group">
          <label htmlFor="senha">Senha</label>
          <input type="password" id="senha" value={senha} onChange={(e) => setSenha(e.target.value)} />
        </div>
        <div className="input-group">
          <label htmlFor="confirmaSenha">Confirmar Senha</label>
          <input type="password" id="confirmaSenha" value={confirmaSenha} onChange={(e) => setConfirmaSenha(e.target.value)} />
        </div>
        <button type="submit" className="btn">Cadastrar</button>
      </form>
      <div className="links">
        <Link to="/">Já tenho conta (Voltar ao Login)</Link>
      </div>
    </div>
  );
}

export default Cadastro;
