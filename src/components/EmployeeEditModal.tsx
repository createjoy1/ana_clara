import { useState } from 'react';
import { XMarkIcon } from '@heroicons/react/24/outline';

interface EmployeeEditModalProps {
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

function EmployeeEditModal({ isOpen, onClose, employee }: EmployeeEditModalProps) {
  const [formData, setFormData] = useState({
    name: employee.name,
    email: employee.email,
    phone: employee.phone,
    cpf: employee.cpf,
    position: employee.position,
    department: employee.department,
    salary: employee.salary,
    hireDate: employee.hireDate,
    address: employee.address,
    city: employee.city,
    state: employee.state,
    zipCode: employee.zipCode,
    
    // Additional fields for editing
    workSchedule: '',
    emergencyContact: '',
    emergencyPhone: '',
    notes: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Atualizando informações do funcionário:', formData);
    // Aqui você implementaria a lógica para salvar as informações
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg shadow-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-200">
          <h2 className="text-2xl font-bold text-gray-900">Editar Informações do Funcionário</h2>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
          >
            <XMarkIcon className="h-6 w-6 text-gray-600" />
          </button>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="p-6 space-y-8">
          {/* Informações Básicas */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Informações Básicas</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                  Nome Completo
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-happy-orange focus:ring focus:ring-happy-orange focus:ring-opacity-50"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  E-mail
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-happy-orange focus:ring focus:ring-happy-orange focus:ring-opacity-50"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                  Telefone
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-happy-orange focus:ring focus:ring-happy-orange focus:ring-opacity-50"
                />
              </div>

              <div>
                <label htmlFor="cpf" className="block text-sm font-medium text-gray-700 mb-2">
                  CPF
                </label>
                <input
                  type="text"
                  id="cpf"
                  name="cpf"
                  value={formData.cpf}
                  onChange={handleInputChange}
                  className="w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-happy-orange focus:ring focus:ring-happy-orange focus:ring-opacity-50"
                />
              </div>
            </div>
          </div>

          {/* Informações Profissionais */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Informações Profissionais</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="position" className="block text-sm font-medium text-gray-700 mb-2">
                  Cargo
                </label>
                <select
                  id="position"
                  name="position"
                  value={formData.position}
                  onChange={handleInputChange}
                  className="w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-happy-orange focus:ring focus:ring-happy-orange focus:ring-opacity-50"
                >
                  <option value="">Selecione um cargo</option>
                  <option value="Médico">Médico</option>
                  <option value="Enfermeiro">Enfermeiro</option>
                  <option value="Recepcionista">Recepcionista</option>
                  <option value="Administrativo">Administrativo</option>
                  <option value="Técnico">Técnico</option>
                </select>
              </div>

              <div>
                <label htmlFor="department" className="block text-sm font-medium text-gray-700 mb-2">
                  Departamento
                </label>
                <select
                  id="department"
                  name="department"
                  value={formData.department}
                  onChange={handleInputChange}
                  className="w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-happy-orange focus:ring focus:ring-happy-orange focus:ring-opacity-50"
                >
                  <option value="">Selecione um departamento</option>
                  <option value="Cardiologia">Cardiologia</option>
                  <option value="Neurologia">Neurologia</option>
                  <option value="Ortopedia">Ortopedia</option>
                  <option value="Pediatria">Pediatria</option>
                  <option value="Psiquiatria">Psiquiatria</option>
                  <option value="Administrativo">Administrativo</option>
                </select>
              </div>

              <div>
                <label htmlFor="salary" className="block text-sm font-medium text-gray-700 mb-2">
                  Salário
                </label>
                <input
                  type="text"
                  id="salary"
                  name="salary"
                  value={formData.salary}
                  onChange={handleInputChange}
                  className="w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-happy-orange focus:ring focus:ring-happy-orange focus:ring-opacity-50"
                />
              </div>

              <div>
                <label htmlFor="hireDate" className="block text-sm font-medium text-gray-700 mb-2">
                  Data de Contratação
                </label>
                <input
                  type="date"
                  id="hireDate"
                  name="hireDate"
                  value={formData.hireDate}
                  onChange={handleInputChange}
                  className="w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-happy-orange focus:ring focus:ring-happy-orange focus:ring-opacity-50"
                />
              </div>

              <div className="md:col-span-2">
                <label htmlFor="workSchedule" className="block text-sm font-medium text-gray-700 mb-2">
                  Horário de Trabalho
                </label>
                <input
                  type="text"
                  id="workSchedule"
                  name="workSchedule"
                  value={formData.workSchedule}
                  onChange={handleInputChange}
                  placeholder="Ex: Segunda a Sexta, 8h às 18h"
                  className="w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-happy-orange focus:ring focus:ring-happy-orange focus:ring-opacity-50"
                />
              </div>
            </div>
          </div>

          {/* Endereço */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Endereço</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="md:col-span-2">
                <label htmlFor="address" className="block text-sm font-medium text-gray-700 mb-2">
                  Endereço
                </label>
                <input
                  type="text"
                  id="address"
                  name="address"
                  value={formData.address}
                  onChange={handleInputChange}
                  className="w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-happy-orange focus:ring focus:ring-happy-orange focus:ring-opacity-50"
                />
              </div>

              <div>
                <label htmlFor="city" className="block text-sm font-medium text-gray-700 mb-2">
                  Cidade
                </label>
                <input
                  type="text"
                  id="city"
                  name="city"
                  value={formData.city}
                  onChange={handleInputChange}
                  className="w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-happy-orange focus:ring focus:ring-happy-orange focus:ring-opacity-50"
                />
              </div>

              <div>
                <label htmlFor="state" className="block text-sm font-medium text-gray-700 mb-2">
                  Estado
                </label>
                <input
                  type="text"
                  id="state"
                  name="state"
                  value={formData.state}
                  onChange={handleInputChange}
                  className="w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-happy-orange focus:ring focus:ring-happy-orange focus:ring-opacity-50"
                />
              </div>

              <div>
                <label htmlFor="zipCode" className="block text-sm font-medium text-gray-700 mb-2">
                  CEP
                </label>
                <input
                  type="text"
                  id="zipCode"
                  name="zipCode"
                  value={formData.zipCode}
                  onChange={handleInputChange}
                  className="w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-happy-orange focus:ring focus:ring-happy-orange focus:ring-opacity-50"
                />
              </div>
            </div>
          </div>

          {/* Contato de Emergência */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Contato de Emergência</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="emergencyContact" className="block text-sm font-medium text-gray-700 mb-2">
                  Nome do Contato
                </label>
                <input
                  type="text"
                  id="emergencyContact"
                  name="emergencyContact"
                  value={formData.emergencyContact}
                  onChange={handleInputChange}
                  className="w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-happy-orange focus:ring focus:ring-happy-orange focus:ring-opacity-50"
                />
              </div>

              <div>
                <label htmlFor="emergencyPhone" className="block text-sm font-medium text-gray-700 mb-2">
                  Telefone de Emergência
                </label>
                <input
                  type="tel"
                  id="emergencyPhone"
                  name="emergencyPhone"
                  value={formData.emergencyPhone}
                  onChange={handleInputChange}
                  className="w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-happy-orange focus:ring focus:ring-happy-orange focus:ring-opacity-50"
                />
              </div>
            </div>
          </div>

          {/* Observações */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Observações</h3>
            <div>
              <label htmlFor="notes" className="block text-sm font-medium text-gray-700 mb-2">
                Observações Gerais
              </label>
              <textarea
                id="notes"
                name="notes"
                rows={4}
                value={formData.notes}
                onChange={handleInputChange}
                placeholder="Observações sobre o funcionário, certificações, etc."
                className="w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-happy-orange focus:ring focus:ring-happy-orange focus:ring-opacity-50"
              />
            </div>
          </div>

          {/* Botões */}
          <div className="flex justify-end space-x-4 pt-6 border-t border-gray-200">
            <button
              type="button"
              onClick={onClose}
              className="px-6 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50 transition duration-200"
            >
              Cancelar
            </button>
            <button
              type="submit"
              className="bg-happy-orange text-white px-6 py-2 rounded-md hover:bg-opacity-90 transition duration-200"
            >
              Salvar Alterações
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default EmployeeEditModal;