import { XMarkIcon } from '@heroicons/react/24/outline';

interface PatientInfoModalProps {
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

function PatientInfoModal({ isOpen, onClose, patient }: PatientInfoModalProps) {
  if (!isOpen) return null;

  // Mock data - informações completas do paciente
  const patientInfo = {
    // Informações pessoais
    name: patient.name,
    email: patient.email,
    phone: patient.phone,
    cpf: '123.456.789-00',
    birthDate: '15/03/1985',
    gender: 'Feminino',
    bloodType: 'A+',
    
    // Endereço
    address: 'Rua das Flores, 123',
    city: 'São Paulo',
    state: 'SP',
    zipCode: '01234-567',
    
    // Contato de emergência
    emergencyContact: 'João Silva',
    emergencyPhone: '(11) 88888-8888',
    
    // Informações médicas
    treatment: patient.treatment,
    improvementLevel: patient.improvementLevel,
    daysInTreatment: patient.daysHospitalized,
    responsibleDoctor: 'Dra. Ana Santos - Psiquiatria',
    nextAppointment: '25/01/2024 às 14:30',
    
    // Medicamentos
    medications: 'Sertralina 50mg, Clonazepam 0,5mg',
    dosage: '1 comprimido pela manhã, 1/2 comprimido à noite',
    frequency: 'Diário, conforme prescrição médica',
    
    // Histórico médico
    medicalHistory: 'Histórico de ansiedade generalizada. Paciente apresentou melhora significativa com o tratamento atual.',
    allergies: 'Alergia a penicilina',
    treatmentPlan: 'Continuar com medicação atual. Sessões de terapia semanais. Reavaliação em 30 dias.',
    medicalNotes: 'Paciente colaborativa, aderente ao tratamento. Relatou diminuição dos sintomas de ansiedade.'
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg shadow-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-200">
          <h2 className="text-2xl font-bold text-gray-900">Informações do Paciente</h2>
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
                <p className="text-gray-900">{patientInfo.name}</p>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-500 mb-1">E-mail</label>
                <p className="text-gray-900">{patientInfo.email}</p>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-500 mb-1">Telefone</label>
                <p className="text-gray-900">{patientInfo.phone}</p>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-500 mb-1">CPF</label>
                <p className="text-gray-900">{patientInfo.cpf}</p>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-500 mb-1">Data de Nascimento</label>
                <p className="text-gray-900">{patientInfo.birthDate}</p>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-500 mb-1">Sexo</label>
                <p className="text-gray-900">{patientInfo.gender}</p>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-500 mb-1">Tipo Sanguíneo</label>
                <p className="text-gray-900">{patientInfo.bloodType}</p>
              </div>
            </div>
          </div>

          {/* Endereço */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Endereço</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-gray-500 mb-1">Endereço</label>
                <p className="text-gray-900">{patientInfo.address}</p>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-500 mb-1">Cidade</label>
                <p className="text-gray-900">{patientInfo.city}</p>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-500 mb-1">Estado</label>
                <p className="text-gray-900">{patientInfo.state}</p>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-500 mb-1">CEP</label>
                <p className="text-gray-900">{patientInfo.zipCode}</p>
              </div>
            </div>
          </div>

          {/* Contato de Emergência */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Contato de Emergência</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-500 mb-1">Nome do Contato</label>
                <p className="text-gray-900">{patientInfo.emergencyContact}</p>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-500 mb-1">Telefone de Emergência</label>
                <p className="text-gray-900">{patientInfo.emergencyPhone}</p>
              </div>
            </div>
          </div>

          {/* Informações de Tratamento */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Informações de Tratamento</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-500 mb-1">Tipo de Tratamento</label>
                <p className="text-gray-900">{patientInfo.treatment}</p>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-500 mb-1">Nível de Melhora</label>
                <p className="text-gray-900">{patientInfo.improvementLevel}</p>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-500 mb-1">Dias em Tratamento</label>
                <p className="text-gray-900">{patientInfo.daysInTreatment} dias</p>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-500 mb-1">Doutor Responsável</label>
                <p className="text-gray-900">{patientInfo.responsibleDoctor}</p>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-500 mb-1">Próxima Consulta</label>
                <p className="text-gray-900">{patientInfo.nextAppointment}</p>
              </div>
            </div>
          </div>

          {/* Medicamentos */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Medicamentos</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-500 mb-1">Medicamentos em Uso</label>
                <p className="text-gray-900">{patientInfo.medications}</p>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-500 mb-1">Dosagem</label>
                <p className="text-gray-900">{patientInfo.dosage}</p>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-500 mb-1">Frequência</label>
                <p className="text-gray-900">{patientInfo.frequency}</p>
              </div>
            </div>
          </div>

          {/* Informações Médicas */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Informações Médicas</h3>
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-500 mb-1">Histórico Médico</label>
                <p className="text-gray-900 bg-gray-50 p-3 rounded-md">{patientInfo.medicalHistory}</p>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-500 mb-1">Alergias</label>
                <p className="text-gray-900 bg-gray-50 p-3 rounded-md">{patientInfo.allergies}</p>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-500 mb-1">Plano de Tratamento</label>
                <p className="text-gray-900 bg-gray-50 p-3 rounded-md">{patientInfo.treatmentPlan}</p>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-500 mb-1">Observações Médicas</label>
                <p className="text-gray-900 bg-gray-50 p-3 rounded-md">{patientInfo.medicalNotes}</p>
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

export default PatientInfoModal;