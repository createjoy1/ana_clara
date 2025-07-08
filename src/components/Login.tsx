import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate login - in real app, validate credentials
    localStorage.setItem('isAuthenticated', 'true');
    navigate('/dashboard');
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-happy-cream">
      <div className="bg-white p-8 rounded-lg shadow-md w-96">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-happy-orange">Happy Live</h2>
          <p className="text-gray-600">Bem-vindo de volta!</p>
        </div>
        
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              E-mail
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-happy-orange focus:ring focus:ring-happy-orange focus:ring-opacity-50"
              required
            />
          </div>
          
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
              Senha
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-happy-orange focus:ring focus:ring-happy-orange focus:ring-opacity-50"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-happy-orange text-white py-2 px-4 rounded-md hover:bg-opacity-90 transition duration-200"
          >
            Entrar
          </button>
        </form>

        <p className="mt-4 text-center text-sm text-gray-600">
          Não tem uma conta?{' '}
          <Link to="/register" className="text-happy-orange hover:underline">
            Cadastre-se aqui
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Login;