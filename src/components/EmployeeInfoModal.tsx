import { XMarkIcon } from '@heroicons/react/24/outline';

interface EmployeeInfoModalProps {
  isOpen: boolean;
  onClose: () => void;
  employee: {
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
  };
}

function EmployeeInfoModal({ isOpen, onClose, employee }: EmployeeInfoModalProps) {
  if (!isOpen) return null;

  // Mock data - informações completas do funcionário
  const employeeInfo = {
    // Informações pessoais
    name: employee.name,
    email: employee.email,
    phone: employee.phone,
    cpf: employee.cpf,
    birthDate: '10/05/1980',
    gender: 'Masculino',
    
    // Informações profissionais
    position: employee.position,
    department: employee.department,
    salary: employee.salary,
    hireDate: employee.hireDate,
    workSchedule: 'Segunda a Sexta, 8h às 18h',
    employeeId: 'EMP001',
    
    // Endereço
    address: employee.address,
    city: employee.city,
    state: employee.state,
    zipCode: employee.zipCode,
    
    // Contato de emergência
    emergencyContact: 'Maria Oliveira',
    emergencyPhone: '(11) 99999-0000',
    
    // Informações adicionais
    certifications: 'CRM 123456-SP, Especialização em Cardiologia',
    notes: 'Médico experiente com mais de 15 anos de atuação. Especialista em procedimentos cardíacos.',
    lastEvaluation: '15/12/2023',
    performanceRating: 'Excelente'
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg shadow-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-200">
          <h2 className="text-2xl font-bold text-gray-900">Informações do Funcionário</h2>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
          >
            <XMarkIcon className="h-6 w-6 text-gray-600" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 space-y-8">
          {/* Informações Pessoais */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Informações Pessoais</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-500 mb-1">Nome Completo</label>
                <p className="text-gray-900">{employeeInfo.name}</p>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-500 mb-1">E-mail</label>
                <p className="text-gray-900">{employeeInfo.email}</p>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-500 mb-1">Telefone</label>
                <p className="text-gray-900">{employeeInfo.phone}</p>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-500 mb-1">CPF</label>
                <p className="text-gray-900">{employeeInfo.cpf}</p>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-500 mb-1">Data de Nascimento</label>
                <p className="text-gray-900">{employeeInfo.birthDate}</p>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-500 mb-1">Sexo</label>
                <p className="text-gray-900">{employeeInfo.gender}</p>
              </div>
            </div>
          </div>

          {/* Informações Profissionais */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Informações Profissionais</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-500 mb-1">ID do Funcionário</label>
                <p className="text-gray-900">{employeeInfo.employeeId}</p>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-500 mb-1">Cargo</label>
                <p className="text-gray-900">{employeeInfo.position}</p>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-500 mb-1">Departamento</label>
                <p className="text-gray-900">{employeeInfo.department}</p>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-500 mb-1">Salário</label>
                <p className="text-gray-900">{employeeInfo.salary}</p>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-500 mb-1">Data de Contratação</label>
                <p className="text-gray-900">{new Date(employeeInfo.hireDate).toLocaleDateString('pt-BR')}</p>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-500 mb-1">Horário de Trabalho</label>
                <p className="text-gray-900">{employeeInfo.workSchedule}</p>
              </div>
            </div>
          </div>

          {/* Endereço */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Endereço</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-gray-500 mb-1">Endereço</label>
                <p className="text-gray-900">{employeeInfo.address}</p>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-500 mb-1">Cidade</label>
                <p className="text-gray-900">{employeeInfo.city}</p>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-500 mb-1">Estado</label>
                <p className="text-gray-900">{employeeInfo.state}</p>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-500 mb-1">CEP</label>
                <p className="text-gray-900">{employeeInfo.zipCode}</p>
              </div>
            </div>
          </div>

          {/* Contato de Emergência */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Contato de Emergência</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-500 mb-1">Nome do Contato</label>
                <p className="text-gray-900">{employeeInfo.emergencyContact}</p>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-500 mb-1">Telefone de Emergência</label>
                <p className="text-gray-900">{employeeInfo.emergencyPhone}</p>
              </div>
            </div>
          </div>

          {/* Certificações e Avaliações */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Certificações e Avaliações</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-500 mb-1">Última Avaliação</label>
                <p className="text-gray-900">{employeeInfo.lastEvaluation}</p>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-500 mb-1">Classificação de Desempenho</label>
                <p className="text-gray-900">{employeeInfo.performanceRating}</p>
              </div>
            </div>
          </div>

          {/* Informações Adicionais */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Informações Adicionais</h3>
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-500 mb-1">Certificações</label>
                <p className="text-gray-900 bg-gray-50 p-3 rounded-md">{employeeInfo.certifications}</p>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-500 mb-1">Observações</label>
                <p className="text-gray-900 bg-gray-50 p-3 rounded-md">{employeeInfo.notes}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="flex justify-end p-6 border-t border-gray-200">
          <button
            onClick={onClose}
            className="px-6 py-2 bg-gray-600 text-white rounded-md hover:bg-gray-700 transition duration-200"
          >
            Fechar
          </button>
        </div>
      </div>
    </div>
  );
}

export default EmployeeInfoModal;