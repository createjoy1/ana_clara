import { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { 
  ArrowLeftIcon, 
  PencilIcon, 
  UserIcon
} from '@heroicons/react/24/outline';
import Layout from './Layout';
import EmployeeEditModal from './EmployeeEditModal';
import EmployeeInfoModal from './EmployeeInfoModal';

interface Employee {
  id: number;
  name: string;
  email: string;
  phone: string;
  cpf: string;
  position: string;
  department: string;
  salary: string;
  hireDate: string;
  address: string;
  city: string;
  state: string;
  zipCode: string;
}

function EmployeeDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [isInfoModalOpen, setIsInfoModalOpen] = useState(false);

  // Mock data - replace with real data fetching
  const employee: Employee = {
    id: parseInt(id || '1'),
    name: 'Dr. Carlos Oliveira',
    email: 'carlos@email.com',
    phone: '(11) 99999-1111',
    cpf: '123.456.789-00',
    position: 'Médico',
    department: 'Cardiologia',
    salary: 'R$ 15.000,00',
    hireDate: '2020-03-15',
    address: 'Rua dos Médicos, 456',
    city: 'São Paulo',
    state: 'SP',
    zipCode: '01234-567'
  };

  const handleEdit = () => {
    setIsEditModalOpen(true);
  };

  const handleCloseEditModal = () => {
    setIsEditModalOpen(false);
  };

  const handleShowInfo = () => {
    setIsInfoModalOpen(true);
  };

  const handleCloseInfoModal = () => {
    setIsInfoModalOpen(false);
  };

  return (
    <Layout>
      <div className="space-y-8">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <button
              onClick={() => navigate('/dashboard')}
              className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
            >
              <ArrowLeftIcon className="h-5 w-5 text-gray-600" />
            </button>
            <div>
              <h1 className="text-3xl font-bold text-gray-900">{employee.name}</h1>
              <p className="text-gray-600">Detalhes do funcionário</p>
            </div>
          </div>
          
          <div className="flex items-center space-x-3">
            <button 
              onClick={handleEdit}
              className="flex items-center space-x-2 px-4 py-2 bg-happy-orange text-white rounded-lg hover:bg-opacity-90 transition-colors"
            >
              <PencilIcon className="h-4 w-4" />
              <span>Editar</span>
            </button>
            <button 
              onClick={handleShowInfo}
              className="flex items-center space-x-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              <UserIcon className="h-4 w-4" />
              <span>Cadastro</span>
            </button>
          </div>
        </div>

        {/* Employee Info Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <p className="text-sm text-gray-600 mb-2">Cargo</p>
            <p className="text-3xl font-bold text-gray-900">{employee.position}</p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md">
            <p className="text-sm text-gray-600 mb-2">Departamento</p>
            <p className="text-3xl font-bold text-gray-900">{employee.department}</p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md">
            <p className="text-sm text-gray-600 mb-2">Data de Contratação</p>
            <p className="text-3xl font-bold text-gray-900">{new Date(employee.hireDate).toLocaleDateString('pt-BR')}</p>
          </div>
        </div>

        {/* Employee Information */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-6">Informações do Funcionário</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-500 mb-1">Nome Completo</label>
              <p className="text-gray-900">{employee.name}</p>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-500 mb-1">E-mail</label>
              <p className="text-gray-900">{employee.email}</p>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-500 mb-1">Telefone</label>
              <p className="text-gray-900">{employee.phone}</p>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-500 mb-1">CPF</label>
              <p className="text-gray-900">{employee.cpf}</p>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-500 mb-1">Salário</label>
              <p className="text-gray-900">{employee.salary}</p>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-500 mb-1">Data de Contratação</label>
              <p className="text-gray-900">{new Date(employee.hireDate).toLocaleDateString('pt-BR')}</p>
            </div>
          </div>
        </div>

        {/* Address Information */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-6">Endereço</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="md:col-span-2">
              <label className="block text-sm font-medium text-gray-500 mb-1">Endereço</label>
              <p className="text-gray-900">{employee.address}</p>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-500 mb-1">Cidade</label>
              <p className="text-gray-900">{employee.city}</p>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-500 mb-1">Estado</label>
              <p className="text-gray-900">{employee.state}</p>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-500 mb-1">CEP</label>
              <p className="text-gray-900">{employee.zipCode}</p>
            </div>
          </div>
        </div>

        {/* Edit Modal */}
        <EmployeeEditModal
          isOpen={isEditModalOpen}
          onClose={handleCloseEditModal}
          employee={employee}
        />

        {/* Employee Info Modal */}
        <EmployeeInfoModal
          isOpen={isInfoModalOpen}
          onClose={handleCloseInfoModal}
          employee={employee}
        />
      </div>
    </Layout>
  );
}

export default EmployeeDetails;