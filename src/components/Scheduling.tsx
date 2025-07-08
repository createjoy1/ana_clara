import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  PlusIcon, 
  CalendarIcon, 
  ClockIcon, 
  UserIcon,
  PhoneIcon,
  EnvelopeIcon
} from '@heroicons/react/24/outline';
import SchedulingModal from './SchedulingModal';

interface Appointment {
  id: number;
  patientName: string;
  patientEmail: string;
  patientPhone: string;
  patientId: number;
  date: string;
  time: string;
  doctor: string;
  specialty: string;
  status: 'agendado' | 'confirmado' | 'cancelado' | 'concluido';
  notes?: string;
}

function Scheduling() {
  const [appointments, setAppointments] = useState<Appointment[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedDate, setSelectedDate] = useState(new Date().toISOString().split('T')[0]);

  useEffect(() => {
    // Simulate API call - replace with real data fetching
    setAppointments([
      {
        id: 1,
        patientName: 'Maria Silva',
        patientEmail: 'maria@email.com',
        patientPhone: '(11) 99999-9999',
        patientId: 1,
        date: '2024-01-25',
        time: '09:00',
        doctor: 'Dr. Carlos Oliveira',
        specialty: 'Cardiologia',
        status: 'agendado',
        notes: 'Consulta de rotina'
      },
      {
        id: 2,
        patientName: 'João Santos',
        patientEmail: 'joao@email.com',
        patientPhone: '(11) 88888-8888',
        patientId: 2,
        date: '2024-01-25',
        time: '10:30',
        doctor: 'Dra. Fernanda Lima',
        specialty: 'Neurologia',
        status: 'confirmado',
        notes: 'Acompanhamento neurológico'
      },
      {
        id: 3,
        patientName: 'Ana Costa',
        patientEmail: 'ana@email.com',
        patientPhone: '(11) 77777-7777',
        patientId: 3,
        date: '2024-01-25',
        time: '14:00',
        doctor: 'Dr. Roberto Alves',
        specialty: 'Ortopedia',
        status: 'agendado',
        notes: 'Consulta ortopédica'
      },
      {
        id: 4,
        patientName: 'Pedro Oliveira',
        patientEmail: 'pedro@email.com',
        patientPhone: '(11) 66666-6666',
        patientId: 4,
        date: '2024-01-26',
        time: '08:30',
        doctor: 'Dra. Ana Santos',
        specialty: 'Psiquiatria',
        status: 'agendado',
        notes: 'Primeira consulta'
      }
    ]);
  }, []);

  const filteredAppointments = appointments.filter(appointment => 
    appointment.date === selectedDate
  );

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'agendado':
        return 'bg-yellow-100 text-yellow-800';
      case 'confirmado':
        return 'bg-green-100 text-green-800';
      case 'cancelado':
        return 'bg-red-100 text-red-800';
      case 'concluido':
        return 'bg-blue-100 text-blue-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case 'agendado':
        return 'Agendado';
      case 'confirmado':
        return 'Confirmado';
      case 'cancelado':
        return 'Cancelado';
      case 'concluido':
        return 'Concluído';
      default:
        return status;
    }
  };

  const handleNewAppointment = (appointmentData: any) => {
    const newAppointment: Appointment = {
      id: appointments.length + 1,
      ...appointmentData,
      status: 'agendado' as const
    };
    setAppointments([...appointments, newAppointment]);
  };

  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Agendamento</h1>
          <p className="text-gray-600">Gerencie consultas e agendamentos</p>
        </div>
        
        <button
          onClick={() => setIsModalOpen(true)}
          className="flex items-center space-x-2 bg-happy-orange text-white px-6 py-3 rounded-lg hover:bg-opacity-90 transition-colors"
        >
          <PlusIcon className="h-5 w-5" />
          <span>Novo Agendamento</span>
        </button>
      </div>

      {/* Statistics Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <div className="flex items-center">
            <div className="p-3 rounded-full bg-blue-100">
              <CalendarIcon className="h-6 w-6 text-blue-600" />
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-600">Total Hoje</p>
              <p className="text-2xl font-bold text-gray-900">{filteredAppointments.length}</p>
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md">
          <div className="flex items-center">
            <div className="p-3 rounded-full bg-green-100">
              <ClockIcon className="h-6 w-6 text-green-600" />
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-600">Confirmados</p>
              <p className="text-2xl font-bold text-gray-900">
                {filteredAppointments.filter(a => a.status === 'confirmado').length}
              </p>
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md">
          <div className="flex items-center">
            <div className="p-3 rounded-full bg-yellow-100">
              <UserIcon className="h-6 w-6 text-yellow-600" />
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-600">Agendados</p>
              <p className="text-2xl font-bold text-gray-900">
                {filteredAppointments.filter(a => a.status === 'agendado').length}
              </p>
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md">
          <div className="flex items-center">
            <div className="p-3 rounded-full bg-happy-orange bg-opacity-20">
              <CalendarIcon className="h-6 w-6 text-happy-orange" />
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-600">Total Mês</p>
              <p className="text-2xl font-bold text-gray-900">{appointments.length}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Date Filter */}
      <div className="bg-white p-6 rounded-lg shadow-md">
        <div className="flex items-center space-x-4 mb-6">
          <CalendarIcon className="h-5 w-5 text-gray-600" />
          <label htmlFor="date" className="text-sm font-medium text-gray-700">
            Filtrar por data:
          </label>
          <input
            type="date"
            id="date"
            value={selectedDate}
            onChange={(e) => setSelectedDate(e.target.value)}
            className="rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-happy-orange focus:ring focus:ring-happy-orange focus:ring-opacity-50"
          />
        </div>

        {/* Appointments List */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-gray-900">
            Agendamentos para {new Date(selectedDate).toLocaleDateString('pt-BR')}
          </h3>
          
          {filteredAppointments.length === 0 ? (
            <div className="text-center py-8">
              <CalendarIcon className="h-12 w-12 text-gray-400 mx-auto mb-4" />
              <p className="text-gray-500">Nenhum agendamento para esta data</p>
            </div>
          ) : (
            <div className="grid gap-4">
              {filteredAppointments.map((appointment) => (
                <div key={appointment.id} className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
                  <div className="flex items-center justify-between">
                    <div className="flex-1">
                      <div className="flex items-center space-x-4 mb-2">
                        <div className="flex items-center space-x-2">
                          <ClockIcon className="h-4 w-4 text-gray-500" />
                          <span className="font-medium text-gray-900">{appointment.time}</span>
                        </div>
                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(appointment.status)}`}>
                          {getStatusText(appointment.status)}
                        </span>
                      </div>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                        <div>
                          <p className="text-sm text-gray-500">Paciente</p>
                          <Link 
                            to={`/paciente/${appointment.patientId}`}
                            className="font-medium text-blue-600 hover:text-blue-800 hover:underline transition-colors"
                          >
                            {appointment.patientName}
                          </Link>
                        </div>
                        
                        <div>
                          <p className="text-sm text-gray-500">Médico</p>
                          <p className="font-medium text-gray-900">{appointment.doctor}</p>
                          <p className="text-sm text-gray-600">{appointment.specialty}</p>
                        </div>
                        
                        <div>
                          <p className="text-sm text-gray-500">Contato</p>
                          <div className="flex items-center space-x-1 text-sm text-gray-600">
                            <PhoneIcon className="h-3 w-3" />
                            <span>{appointment.patientPhone}</span>
                          </div>
                          <div className="flex items-center space-x-1 text-sm text-gray-600">
                            <EnvelopeIcon className="h-3 w-3" />
                            <span>{appointment.patientEmail}</span>
                          </div>
                        </div>
                        
                        {appointment.notes && (
                          <div>
                            <p className="text-sm text-gray-500">Observações</p>
                            <p className="text-sm text-gray-600">{appointment.notes}</p>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Scheduling Modal */}
      <SchedulingModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSubmit={handleNewAppointment}
      />
    </div>
  );
}

export default Scheduling;