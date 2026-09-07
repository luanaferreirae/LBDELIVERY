import { useState } from 'react';
import { Link } from 'react-router-dom';

function Recuperacao() {
  const [email, setEmail] = useState('');
  const [mensagem, setMensagem] = useState('');

  const handleRecuperar = (e) => {
    e.preventDefault();
    if (!email) {
      alert('Por favor, informe seu e-mail.');
      return;
    }
    setMensagem('E-mail de recuperação enviado com sucesso! Verifique sua caixa de entrada.');
    setEmail('');
  };

  return (
    <div className="card">
      <h2>Recuperação de Senha</h2>
      {mensagem && <div className="msg-success">{mensagem}</div>}
      <form onSubmit={handleRecuperar}>
        <div className="input-group">
          <label htmlFor="email">E-mail cadastrado</label>
          <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="luana@exemplo.com" />
        </div>
        <button type="submit" className="btn">Recuperar</button>
      </form>
      <div className="links">
        <Link to="/">Voltar para o Login</Link>
      </div>
    </div>
  );
}

export default Recuperacao;
