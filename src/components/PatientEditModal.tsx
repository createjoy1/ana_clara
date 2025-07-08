import { useState } from 'react';
import { XMarkIcon } from '@heroicons/react/24/outline';

interface PatientEditModalProps {
  isOpen: boolean;
  onClose: () => void;
  patient: {
    id: number;
    name: string;
    email: string;
    phone: string;
    improvementLevel: string;
    treatment: string;
    daysHospitalized: number;
  };
}

function PatientEditModal({ isOpen, onClose, patient }: PatientEditModalProps) {
  const [formData, setFormData] = useState({
    // Informações básicas do paciente
    name: patient.name,
    email: patient.email,
    phone: patient.phone,
    
    // Informações médicas
    treatment: patient.treatment,
    improvementLevel: patient.improvementLevel,
    daysInTreatment: patient.daysHospitalized.toString(),
    responsibleDoctor: '',
    
    // Medicamentos
    medications: '',
    dosage: '',
    frequency: '',
    
    // Observações
    medicalNotes: '',
    treatmentPlan: '',
    nextAppointment: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Atualizando informações do paciente:', formData);
    // Aqui você implementaria a lógica para salvar as informações
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg shadow-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-200">
          <h2 className="text-2xl font-bold text-gray-900">Editar Informações do Paciente</h2>
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
            </div>
          </div>

          {/* Informações de Tratamento */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Informações de Tratamento</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="treatment" className="block text-sm font-medium text-gray-700 mb-2">
                  Tipo de Tratamento
                </label>
                <select
                  id="treatment"
                  name="treatment"
                  value={formData.treatment}
                  onChange={handleInputChange}
                  className="w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-happy-orange focus:ring focus:ring-happy-orange focus:ring-opacity-50"
                >
                  <option value="">Selecione o tratamento</option>
                  <option value="Ansiedade">Ansiedade</option>
                  <option value="Depressão">Depressão</option>
                  <option value="Cardiologia">Cardiologia</option>
                  <option value="Neurologia">Neurologia</option>
                  <option value="Ortopedia">Ortopedia</option>
                  <option value="Pediatria">Pediatria</option>
                </select>
              </div>

              <div>
                <label htmlFor="improvementLevel" className="block text-sm font-medium text-gray-700 mb-2">
                  Nível de Melhora
                </label>
                <select
                  id="improvementLevel"
                  name="improvementLevel"
                  value={formData.improvementLevel}
                  onChange={handleInputChange}
                  className="w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-happy-orange focus:ring focus:ring-happy-orange focus:ring-opacity-50"
                >
                  <option value="">Selecione o nível</option>
                  <option value="Baixo">Baixo</option>
                  <option value="Moderado">Moderado</option>
                  <option value="Elevado">Elevado</option>
                  <option value="Excelente">Excelente</option>
                </select>
              </div>

              <div>
                <label htmlFor="daysInTreatment" className="block text-sm font-medium text-gray-700 mb-2">
                  Dias em Tratamento
                </label>
                <input
                  type="number"
                  id="daysInTreatment"
                  name="daysInTreatment"
                  value={formData.daysInTreatment}
                  onChange={handleInputChange}
                  className="w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-happy-orange focus:ring focus:ring-happy-orange focus:ring-opacity-50"
                />
              </div>

              <div>
                <label htmlFor="responsibleDoctor" className="block text-sm font-medium text-gray-700 mb-2">
                  Doutor Responsável
                </label>
                <select
                  id="responsibleDoctor"
                  name="responsibleDoctor"
                  value={formData.responsibleDoctor}
                  onChange={handleInputChange}
                  className="w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-happy-orange focus:ring focus:ring-happy-orange focus:ring-opacity-50"
                >
                  <option value="">Selecione o doutor</option>
                  <option value="Dr. Carlos Oliveira">Dr. Carlos Oliveira - Cardiologia</option>
                  <option value="Dra. Fernanda Lima">Dra. Fernanda Lima - Neurologia</option>
                  <option value="Dr. Roberto Alves">Dr. Roberto Alves - Ortopedia</option>
                  <option value="Dra. Ana Santos">Dra. Ana Santos - Psiquiatria</option>
                  <option value="Dr. João Silva">Dr. João Silva - Clínico Geral</option>
                </select>
              </div>

              <div>
                <label htmlFor="nextAppointment" className="block text-sm font-medium text-gray-700 mb-2">
                  Próxima Consulta
                </label>
                <input
                  type="datetime-local"
                  id="nextAppointment"
                  name="nextAppointment"
                  value={formData.nextAppointment}
                  onChange={handleInputChange}
                  className="w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-happy-orange focus:ring focus:ring-happy-orange focus:ring-opacity-50"
                />
              </div>
            </div>
          </div>

          {/* Medicamentos */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Medicamentos</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <label htmlFor="medications" className="block text-sm font-medium text-gray-700 mb-2">
                  Medicamentos em Uso
                </label>
                <textarea
                  id="medications"
                  name="medications"
                  rows={3}
                  value={formData.medications}
                  onChange={handleInputChange}
                  placeholder="Liste os medicamentos separados por vírgula"
                  className="w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-happy-orange focus:ring focus:ring-happy-orange focus:ring-opacity-50"
                />
              </div>

              <div>
                <label htmlFor="dosage" className="block text-sm font-medium text-gray-700 mb-2">
                  Dosagem
                </label>
                <textarea
                  id="dosage"
                  name="dosage"
                  rows={3}
                  value={formData.dosage}
                  onChange={handleInputChange}
                  placeholder="Dosagem de cada medicamento"
                  className="w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-happy-orange focus:ring focus:ring-happy-orange focus:ring-opacity-50"
                />
              </div>

              <div>
                <label htmlFor="frequency" className="block text-sm font-medium text-gray-700 mb-2">
                  Frequência
                </label>
                <textarea
                  id="frequency"
                  name="frequency"
                  rows={3}
                  value={formData.frequency}
                  onChange={handleInputChange}
                  placeholder="Frequência de cada medicamento"
                  className="w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-happy-orange focus:ring focus:ring-happy-orange focus:ring-opacity-50"
                />
              </div>
            </div>
          </div>

          {/* Observações Médicas */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Observações e Plano de Tratamento</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="medicalNotes" className="block text-sm font-medium text-gray-700 mb-2">
                  Observações Médicas
                </label>
                <textarea
                  id="medicalNotes"
                  name="medicalNotes"
                  rows={4}
                  value={formData.medicalNotes}
                  onChange={handleInputChange}
                  placeholder="Observações sobre o estado do paciente, evolução, etc."
                  className="w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-happy-orange focus:ring focus:ring-happy-orange focus:ring-opacity-50"
                />
              </div>

              <div>
                <label htmlFor="treatmentPlan" className="block text-sm font-medium text-gray-700 mb-2">
                  Plano de Tratamento
                </label>
                <textarea
                  id="treatmentPlan"
                  name="treatmentPlan"
                  rows={4}
                  value={formData.treatmentPlan}
                  onChange={handleInputChange}
                  placeholder="Próximos passos do tratamento, metas, etc."
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
              Salvar Alterações
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default PatientEditModal;