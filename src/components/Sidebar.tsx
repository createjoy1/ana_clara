import { Link, useLocation } from 'react-router-dom';
import { 
  ChartBarIcon, 
  UserIcon, 
  UserPlusIcon, 
  HeartIcon,
  CalendarIcon,
  ArrowRightOnRectangleIcon 
} from '@heroicons/react/24/outline';

interface SidebarProps {
  onLogout: () => void;
}

function Sidebar({ onLogout }: SidebarProps) {
  const location = useLocation();

  const menuItems = [
    { path: '/dashboard', label: 'Dashboard', icon: ChartBarIcon },
    { path: '/agendamento', label: 'Agendamento', icon: CalendarIcon },
    { path: '/minha-conta', label: 'Minha Conta', icon: UserIcon },
    { path: '/cadastro-funcionario', label: 'Cadastro de Funcionário', icon: UserPlusIcon },
    { path: '/cadastro-paciente', label: 'Cadastro de Paciente', icon: HeartIcon },
  ];

  return (
    <div className="bg-white shadow-lg h-screen w-64 fixed left-0 top-0 flex flex-col">
      <div className="p-6 border-b border-gray-200">
        <h1 className="text-2xl font-bold text-happy-orange">Happy Live</h1>
      </div>
      
      <nav className="flex-1 p-4">
        <ul className="space-y-2">
          {menuItems.map((item) => {
            const Icon = item.icon;
            const isActive = location.pathname === item.path;
            
            return (
              <li key={item.path}>
                <Link
                  to={item.path}
                  className={`flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors duration-200 ${
                    isActive
                      ? 'bg-happy-orange text-white'
                      : 'text-gray-700 hover:bg-happy-cream'
                  }`}
                >
                  <Icon className="h-5 w-5" />
                  <span>{item.label}</span>
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>

      <div className="p-4 border-t border-gray-200">
        <button
          onClick={onLogout}
          className="flex items-center space-x-3 px-4 py-3 w-full text-left text-gray-700 hover:bg-red-50 hover:text-red-600 rounded-lg transition-colors duration-200"
        >
          <ArrowRightOnRectangleIcon className="h-5 w-5" />
          <span>Sair</span>
        </button>
      </div>
    </div>
  );
}

export default Sidebar