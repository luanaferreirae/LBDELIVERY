import { useNavigate } from 'react-router-dom';

function Dashboard() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('auth');
    navigate('/');
  };

  return (
    <div className="card" style={{ textAlign: 'center' }}>
      <h2>Dashboard</h2>
      <p style={{ marginBottom: '20px', color: '#2b6cb0', fontWeight: 'bold' }}>
        Seja bem-vinda, Luana!
      </p>
      
      <div style={{ padding: '40px 20px', backgroundColor: '#edf2f7', border: '1px dashed #cbd5e1', borderRadius: '8px', marginBottom: '20px' }}>
        Área de Conteúdo Restrito
        <br/><br/>
        <span style={{ fontSize: '14px', color: '#718096' }}>(Seus relatórios e pedidos aparecerão aqui)</span>
      </div>

      <button onClick={handleLogout} className="btn btn-danger">Sair (Logout)</button>
    </div>
  );
}

export default Dashboard;
