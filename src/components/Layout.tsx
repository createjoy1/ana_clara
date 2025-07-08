import type { ReactNode } from 'react';
import { useNavigate } from 'react-router-dom';
import Sidebar from './Sidebar';

interface LayoutProps {
  children: ReactNode;
}

function Layout({ children }: LayoutProps) {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('isAuthenticated');
    navigate('/login');
  };

  return (
    <div className="flex min-h-screen bg-happy-cream">
      <Sidebar onLogout={handleLogout} />
      <main className="flex-1 ml-64 p-8">
        {children}
      </main>
    </div>
  );
}

export default Layout;