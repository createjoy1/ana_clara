import { useState } from 'react';
import { XMarkIcon } from '@heroicons/react/24/outline';

interface SchedulingModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (appointmentData: any) => void;
}

function SchedulingModal({ isOpen, onClose, onSubmit }: SchedulingModalProps) {
  const [formData, setFormData] = useState({
    // Dados do paciente
    patientName: '',
    patientEmail: '',
    patientPhone: '',
    patientCpf: '',
    patientBirthDate: '',
    patientGender: '',
    
    // Dados do agendamento
    date: '',
    time: '',
    doctor: '',
    specialty: '',
    appointmentType: '',
    notes: '',
    
    // Endereço do paciente
    address: '',
    city: '',
    state: '',
    zipCode: '',
    
    // Contato de emergência
    emergencyContact: '',
    emergencyPhone: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Create appointment data with patient ID (simulate new patient creation)
    const appointmentData = {
      patientName: formData.patientName,
      patientEmail: formData.patientEmail,
      patientPhone: formData.patientPhone,
      patientId: Date.now(), // Simulate new patient ID
      date: formData.date,
      time: formData.time,
      doctor: formData.doctor,
      specialty: formData.specialty,
      notes: formData.notes
    };
    
    onSubmit(appointmentData);
    
    // Reset form
    setFormData({
      patientName: '',
      patientEmail: '',
      patientPhone: '',
      patientCpf: '',
      patientBirthDate: '',
      patientGender: '',
      date: '',
      time: '',
      doctor: '',
      specialty: '',
      appointmentType: '',
      notes: '',
      address: '',
      city: '',
      state: '',
      zipCode: '',
      emergencyContact: '',
      emergencyPhone: ''
    });
    
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg shadow-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-200">
          <h2 className="text-2xl font-bold text-gray-900">Novo Agendamento</h2>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
          >
            <XMarkIcon className="h-6 w-6 text-gray-600" />
          </button>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="p-6 space-y-8">
          {/* Dados do Paciente */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Dados do Paciente</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="patientName" className="block text-sm font-medium text-gray-700 mb-2">
                  Nome Completo *
                </label>
                <input
                  type="text"
                  id="patientName"
                  name="patientName"
                  value={formData.patientName}
                  onChange={handleInputChange}
                  required
                  className="w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-happy-orange focus:ring focus:ring-happy-orange focus:ring-opacity-50"
                />
              </div>

              <div>
                <label htmlFor="patientEmail" className="block text-sm font-medium text-gray-700 mb-2">
                  E-mail
                </label>
                <input
                  type="email"
                  id="patientEmail"
                  name="patientEmail"
                  value={formData.patientEmail}
                  onChange={handleInputChange}
                  className="w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-happy-orange focus:ring focus:ring-happy-orange focus:ring-opacity-50"
                />
              </div>

              <div>
                <label htmlFor="patientPhone" className="block text-sm font-medium text-gray-700 mb-2">
                  Telefone *
                </label>
                <input
                  type="tel"
                  id="patientPhone"
                  name="patientPhone"
                  value={formData.patientPhone}
                  onChange={handleInputChange}
                  required
                  className="w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-happy-orange focus:ring focus:ring-happy-orange focus:ring-opacity-50"
                />
              </div>

              <div>
                <label htmlFor="patientCpf" className="block text-sm font-medium text-gray-700 mb-2">
                  CPF
                </label>
                <input
                  type="text"
                  id="patientCpf"
                  name="patientCpf"
                  value={formData.patientCpf}
                  onChange={handleInputChange}
                  className="w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-happy-orange focus:ring focus:ring-happy-orange focus:ring-opacity-50"
                />
              </div>

              <div>
                <label htmlFor="patientBirthDate" className="block text-sm font-medium text-gray-700 mb-2">
                  Data de Nascimento
                </label>
                <input
                  type="date"
                  id="patientBirthDate"
                  name="patientBirthDate"
                  value={formData.patientBirthDate}
                  onChange={handleInputChange}
                  className="w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-happy-orange focus:ring focus:ring-happy-orange focus:ring-opacity-50"
                />
              </div>

              <div>
                <label htmlFor="patientGender" className="block text-sm font-medium text-gray-700 mb-2">
                  Sexo
                </label>
                <select
                  id="patientGender"
                  name="patientGender"
                  value={formData.patientGender}
                  onChange={handleInputChange}
                  className="w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-happy-orange focus:ring focus:ring-happy-orange focus:ring-opacity-50"
                >
                  <option value="">Selecione</option>
                  <option value="masculino">Masculino</option>
                  <option value="feminino">Feminino</option>
                  <option value="outro">Outro</option>
                </select>
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

          {/* Dados do Agendamento */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Dados do Agendamento</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="date" className="block text-sm font-medium text-gray-700 mb-2">
                  Data da Consulta *
                </label>
                <input
                  type="date"
                  id="date"
                  name="date"
                  value={formData.date}
                  onChange={handleInputChange}
                  required
                  className="w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-happy-orange focus:ring focus:ring-happy-orange focus:ring-opacity-50"
                />
              </div>

              <div>
                <label htmlFor="time" className="block text-sm font-medium text-gray-700 mb-2">
                  Horário *
                </label>
                <input
                  type="time"
                  id="time"
                  name="time"
                  value={formData.time}
                  onChange={handleInputChange}
                  required
                  className="w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-happy-orange focus:ring focus:ring-happy-orange focus:ring-opacity-50"
                />
              </div>

              <div>
                <label htmlFor="specialty" className="block text-sm font-medium text-gray-700 mb-2">
                  Especialidade *
                </label>
                <select
                  id="specialty"
                  name="specialty"
                  value={formData.specialty}
                  onChange={handleInputChange}
                  required
                  className="w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-happy-orange focus:ring focus:ring-happy-orange focus:ring-opacity-50"
                >
                  <option value="">Selecione a especialidade</option>
                  <option value="Cardiologia">Cardiologia</option>
                  <option value="Neurologia">Neurologia</option>
                  <option value="Ortopedia">Ortopedia</option>
                  <option value="Pediatria">Pediatria</option>
                  <option value="Psiquiatria">Psiquiatria</option>
                  <option value="Clínico Geral">Clínico Geral</option>
                </select>
              </div>

              <div>
                <label htmlFor="doctor" className="block text-sm font-medium text-gray-700 mb-2">
                  Médico *
                </label>
                <select
                  id="doctor"
                  name="doctor"
                  value={formData.doctor}
                  onChange={handleInputChange}
                  required
                  className="w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-happy-orange focus:ring focus:ring-happy-orange focus:ring-opacity-50"
                >
                  <option value="">Selecione o médico</option>
                  <option value="Dr. Carlos Oliveira">Dr. Carlos Oliveira - Cardiologia</option>
                  <option value="Dra. Fernanda Lima">Dra. Fernanda Lima - Neurologia</option>
                  <option value="Dr. Roberto Alves">Dr. Roberto Alves - Ortopedia</option>
                  <option value="Dra. Ana Santos">Dra. Ana Santos - Psiquiatria</option>
                  <option value="Dr. João Silva">Dr. João Silva - Clínico Geral</option>
                </select>
              </div>

              <div>
                <label htmlFor="appointmentType" className="block text-sm font-medium text-gray-700 mb-2">
                  Tipo de Consulta
                </label>
                <select
                  id="appointmentType"
                  name="appointmentType"
                  value={formData.appointmentType}
                  onChange={handleInputChange}
                  className="w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-happy-orange focus:ring focus:ring-happy-orange focus:ring-opacity-50"
                >
                  <option value="">Selecione o tipo</option>
                  <option value="primeira-consulta">Primeira Consulta</option>
                  <option value="retorno">Retorno</option>
                  <option value="urgencia">Urgência</option>
                  <option value="exame">Exame</option>
                  <option value="procedimento">Procedimento</option>
                </select>
              </div>

              <div className="md:col-span-2">
                <label htmlFor="notes" className="block text-sm font-medium text-gray-700 mb-2">
                  Observações
                </label>
                <textarea
                  id="notes"
                  name="notes"
                  rows={3}
                  value={formData.notes}
                  onChange={handleInputChange}
                  placeholder="Observações sobre a consulta, sintomas, etc."
                  className="w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-happy-orange focus:ring focus:ring-happy-orange focus:ring-opacity-50"
                />
              </div>
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
              Agendar Consulta
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default SchedulingModal;