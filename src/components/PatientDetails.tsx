import { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { 
  ArrowLeftIcon, 
  PencilIcon, 
  UserIcon
} from '@heroicons/react/24/outline';
import Layout from './Layout';
import PatientEditModal from './PatientEditModal';
import PatientInfoModal from './PatientInfoModal.tsx';

interface Patient {
  id: number;
  name: string;
  email: string;
  phone: string;
  lastVisit: string;
  improvementLevel: string;
  treatment: string;
  daysHospitalized: number;
}

interface Doctor {
  id: number;
  name: string;
  email: string;
  avatar: string;
}

interface Medication {
  name: string;
  dosage: number;
  change: string;
}

function PatientDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [isInfoModalOpen, setIsInfoModalOpen] = useState(false);

  // Mock data - replace with real data fetching
  const patient: Patient = {
    id: parseInt(id || '1'),
    name: 'Maria Silva',
    email: 'maria@email.com',
    phone: '(11) 99999-9999',
    lastVisit: '2024-01-15',
    improvementLevel: 'Elevado',
    treatment: 'Ansiedade',
    daysHospitalized: 10
  };

  const doctors: Doctor[] = [
    { id: 1, name: 'Dr xxxxxx', email: '...', avatar: 'https://images.pexels.com/photos/5215024/pexels-photo-5215024.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop' },
    { id: 2, name: 'Dr xxxxxx', email: 'email@figmasfakedomain.net', avatar: 'https://images.pexels.com/photos/6129967/pexels-photo-6129967.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop' },
    { id: 3, name: 'Dr xxxx', email: 'email@figmasfakedomain.net', avatar: 'https://images.pexels.com/photos/5452201/pexels-photo-5452201.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop' },
    { id: 4, name: 'Dr xxxxxx', email: 'email@figmasfakedomain.net', avatar: 'https://images.pexels.com/photos/7579831/pexels-photo-7579831.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop' },
    { id: 5, name: 'Dr xxxxxx', email: 'email@figmasfakedomain.net', avatar: 'https://images.pexels.com/photos/5452293/pexels-photo-5452293.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop' }
  ];

  const medications: Medication[] = [
    { name: 'nome', dosage: 4321, change: '+84%' },
    { name: 'nome', dosage: 4033, change: '-8%' },
    { name: 'nome', dosage: 3128, change: '+2%' },
    { name: 'nome', dosage: 2104, change: '+3%' },
    { name: 'nome', dosage: 2003, change: '+30%' },
    { name: 'nome', dosage: 1894, change: '+15%' },
    { name: 'nome', dosage: 405, change: '-12%' }
  ];

  const progressData = [
    { date: '23 Nov', value: 22000 },
    { date: '24', value: 23000 },
    { date: '25', value: 25000 },
    { date: '26', value: 24000 },
    { date: '27', value: 32000 },
    { date: '28', value: 35000 },
    { date: '29', value: 38000 },
    { date: '30', value: 50000 }
  ];

  const improvementData = [
    { month: 'Jan', value: 35000 },
    { month: 'Feb', value: 45000 },
    { month: 'Mar', value: 55000 },
    { month: 'Apr', value: 48000 },
    { month: 'May', value: 52000 },
    { month: 'Jun', value: 78000 },
    { month: 'Jul', value: 65000 },
    { month: 'Aug', value: 75000 },
    { month: 'Sep', value: 58000 },
    { month: 'Oct', value: 62000 },
    { month: 'Nov', value: 55000 },
    { month: 'Dec', value: 48000 }
  ];

  const maxValue = Math.max(...progressData.map(d => d.value));
  const maxImprovementValue = Math.max(...improvementData.map(d => d.value));

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
              <h1 className="text-3xl font-bold text-gray-900">{patient.name}</h1>
              <p className="text-gray-600">Detalhes do paciente</p>
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

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <p className="text-sm text-gray-600 mb-2">Nível de melhora</p>
            <p className="text-3xl font-bold text-gray-900">{patient.improvementLevel}</p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md">
            <p className="text-sm text-gray-600 mb-2">Tratamento</p>
            <p className="text-3xl font-bold text-gray-900">{patient.treatment}</p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md">
            <p className="text-sm text-gray-600 mb-2">Dias internados</p>
            <p className="text-3xl font-bold text-gray-900">{patient.daysHospitalized}</p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Progress Chart */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-lg font-semibold text-gray-900">Paciente</h3>
            </div>
            
            <div className="h-64 relative">
              <svg className="w-full h-full" viewBox="0 0 400 200">
                {/* Grid lines */}
                {[0, 1, 2, 3, 4, 5].map((i) => (
                  <line
                    key={i}
                    x1="40"
                    y1={40 + i * 24}
                    x2="380"
                    y2={40 + i * 24}
                    stroke="#f3f4f6"
                    strokeWidth="1"
                  />
                ))}
                
                {/* Y-axis labels */}
                {['$50,000', '$45,000', '$40,000', '$35,000', '$30,000', '$25,000'].map((label, i) => (
                  <text
                    key={i}
                    x="35"
                    y={45 + i * 24}
                    textAnchor="end"
                    className="text-xs fill-gray-500"
                  >
                    {label}
                  </text>
                ))}
                
                {/* Line chart */}
                <polyline
                  fill="none"
                  stroke="#000"
                  strokeWidth="2"
                  points={progressData.map((d, i) => 
                    `${60 + i * 40},${160 - (d.value / maxValue) * 120}`
                  ).join(' ')}
                />
                
                {/* Data points */}
                {progressData.map((d, i) => (
                  <circle
                    key={i}
                    cx={60 + i * 40}
                    cy={160 - (d.value / maxValue) * 120}
                    r="3"
                    fill="#000"
                  />
                ))}
                
                {/* X-axis labels */}
                {progressData.map((d, i) => (
                  <text
                    key={i}
                    x={60 + i * 40}
                    y="185"
                    textAnchor="middle"
                    className="text-xs fill-gray-500"
                  >
                    {d.date}
                  </text>
                ))}
              </svg>
            </div>
          </div>

          {/* Doctors List */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-lg font-semibold text-gray-900 mb-6">Doutores</h3>
            <div className="space-y-4">
              {doctors.map((doctor) => (
                <div key={doctor.id} className="flex items-center space-x-3">
                  <img
                    src={doctor.avatar}
                    alt={doctor.name}
                    className="w-10 h-10 rounded-full object-cover"
                  />
                  <div className="flex-1">
                    <p className="font-medium text-gray-900">{doctor.name}</p>
                    <p className="text-sm text-gray-500">{doctor.email}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Medications Table */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-lg font-semibold text-gray-900 mb-6">Medicamentos</h3>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="text-left">
                    <th className="text-sm font-medium text-gray-500 pb-3">Source</th>
                    <th className="text-sm font-medium text-gray-500 pb-3 text-right">ml</th>
                    <th className="text-sm font-medium text-gray-500 pb-3 text-right">Change</th>
                  </tr>
                </thead>
                <tbody className="space-y-2">
                  {medications.map((med, index) => (
                    <tr key={index} className="border-t border-gray-100">
                      <td className="py-3 text-sm text-gray-900">{med.name}</td>
                      <td className="py-3 text-sm text-gray-900 text-right">{med.dosage}</td>
                      <td className={`py-3 text-sm text-right ${
                        med.change.startsWith('+') ? 'text-green-600' : 'text-red-600'
                      }`}>
                        {med.change}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Improvement Chart */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-lg font-semibold text-gray-900 mb-6">Nível de melhora</h3>
            
            <div className="h-64 relative">
              <svg className="w-full h-full" viewBox="0 0 400 200">
                {/* Y-axis labels */}
                {['$80,000', '$70,000', '$60,000', '$50,000', '$40,000', '$30,000'].map((label, i) => (
                  <text
                    key={i}
                    x="35"
                    y={35 + i * 20}
                    textAnchor="end"
                    className="text-xs fill-gray-500"
                  >
                    {label}
                  </text>
                ))}
                
                {/* Bar chart */}
                {improvementData.map((d, i) => (
                  <rect
                    key={i}
                    x={50 + i * 28}
                    y={160 - (d.value / maxImprovementValue) * 120}
                    width="20"
                    height={(d.value / maxImprovementValue) * 120}
                    fill="#000"
                  />
                ))}
                
                {/* X-axis labels */}
                {improvementData.map((d, i) => (
                  <text
                    key={i}
                    x={60 + i * 28}
                    y="185"
                    textAnchor="middle"
                    className="text-xs fill-gray-500"
                  >
                    {d.month}
                  </text>
                ))}
              </svg>
            </div>
          </div>
        </div>

        {/* Edit Modal */}
        <PatientEditModal
          isOpen={isEditModalOpen}
          onClose={handleCloseEditModal}
          patient={patient}
        />

        {/* Patient Info Modal */}
        <PatientInfoModal
          isOpen={isInfoModalOpen}
          onClose={handleCloseInfoModal}
          patient={patient}
        />
      </div>
    </Layout>
  );
}

export default PatientDetails;