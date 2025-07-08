import { useState } from 'react';

function PatientRegistration() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    cpf: '',
    birthDate: '',
    gender: '',
    bloodType: '',
    emergencyContact: '',
    emergencyPhone: '',
    address: '',
    city: '',
    state: '',
    zipCode: '',
    medicalHistory: '',
    allergies: '',
    medications: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Registering patient:', formData);
    // Handle patient registration logic here
  };

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Cadastro de Paciente</h1>
        <p className="text-gray-600">Registre um novo paciente no sistema</p>
      </div>

      <div className="bg-white rounded-lg shadow-md p-6">
        <form onSubmit={handleSubmit} className="space-y-6">
          <h3 className="text-lg font-medium text-gray-900 mb-4">Informações Pessoais</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                Nome Completo *
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                required
                className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-happy-orange focus:ring focus:ring-happy-orange focus:ring-opacity-50"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                E-mail
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-happy-orange focus:ring focus:ring-happy-orange focus:ring-opacity-50"
              />
            </div>

            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
                Telefone *
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                required
                className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-happy-orange focus:ring focus:ring-happy-orange focus:ring-opacity-50"
              />
            </div>

            <div>
              <label htmlFor="cpf" className="block text-sm font-medium text-gray-700">
                CPF *
              </label>
              <input
                type="text"
                id="cpf"
                name="cpf"
                value={formData.cpf}
                onChange={handleInputChange}
                required
                className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-happy-orange focus:ring focus:ring-happy-orange focus:ring-opacity-50"
              />
            </div>

            <div>
              <label htmlFor="birthDate" className="block text-sm font-medium text-gray-700">
                Data de Nascimento *
              </label>
              <input
                type="date"
                id="birthDate"
                name="birthDate"
                value={formData.birthDate}
                onChange={handleInputChange}
                required
                className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-happy-orange focus:ring focus:ring-happy-orange focus:ring-opacity-50"
              />
            </div>

            <div>
              <label htmlFor="gender" className="block text-sm font-medium text-gray-700">
                Sexo *
              </label>
              <select
                id="gender"
                name="gender"
                value={formData.gender}
                onChange={handleInputChange}
                required
                className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-happy-orange focus:ring focus:ring-happy-orange focus:ring-opacity-50"
              >
                <option value="">Selecione</option>
                <option value="masculino">Masculino</option>
                <option value="feminino">Feminino</option>
                <option value="outro">Outro</option>
              </select>
            </div>

            <div>
              <label htmlFor="bloodType" className="block text-sm font-medium text-gray-700">
                Tipo Sanguíneo
              </label>
              <select
                id="bloodType"
                name="bloodType"
                value={formData.bloodType}
                onChange={handleInputChange}
                className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-happy-orange focus:ring focus:ring-happy-orange focus:ring-opacity-50"
              >
                <option value="">Selecione</option>
                <option value="A+">A+</option>
                <option value="A-">A-</option>
                <option value="B+">B+</option>
                <option value="B-">B-</option>
                <option value="AB+">AB+</option>
                <option value="AB-">AB-</option>
                <option value="O+">O+</option>
                <option value="O-">O-</option>
              </select>
            </div>
          </div>

          <hr className="my-6" />

          <h3 className="text-lg font-medium text-gray-900 mb-4">Contato de Emergência</h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="emergencyContact" className="block text-sm font-medium text-gray-700">
                Nome do Contato
              </label>
              <input
                type="text"
                id="emergencyContact"
                name="emergencyContact"
                value={formData.emergencyContact}
                onChange={handleInputChange}
                className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-happy-orange focus:ring focus:ring-happy-orange focus:ring-opacity-50"
              />
            </div>

            <div>
              <label htmlFor="emergencyPhone" className="block text-sm font-medium text-gray-700">
                Telefone de Emergência
              </label>
              <input
                type="tel"
                id="emergencyPhone"
                name="emergencyPhone"
                value={formData.emergencyPhone}
                onChange={handleInputChange}
                className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-happy-orange focus:ring focus:ring-happy-orange focus:ring-opacity-50"
              />
            </div>
          </div>

          <hr className="my-6" />

          <h3 className="text-lg font-medium text-gray-900 mb-4">Endereço</h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="md:col-span-2">
              <label htmlFor="address" className="block text-sm font-medium text-gray-700">
                Endereço
              </label>
              <input
                type="text"
                id="address"
                name="address"
                value={formData.address}
                onChange={handleInputChange}
                className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-happy-orange focus:ring focus:ring-happy-orange focus:ring-opacity-50"
              />
            </div>

            <div>
              <label htmlFor="city" className="block text-sm font-medium text-gray-700">
                Cidade
              </label>
              <input
                type="text"
                id="city"
                name="city"
                value={formData.city}
                onChange={handleInputChange}
                className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-happy-orange focus:ring focus:ring-happy-orange focus:ring-opacity-50"
              />
            </div>

            <div>
              <label htmlFor="state" className="block text-sm font-medium text-gray-700">
                Estado
              </label>
              <input
                type="text"
                id="state"
                name="state"
                value={formData.state}
                onChange={handleInputChange}
                className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-happy-orange focus:ring focus:ring-happy-orange focus:ring-opacity-50"
              />
            </div>

            <div>
              <label htmlFor="zipCode" className="block text-sm font-medium text-gray-700">
                CEP
              </label>
              <input
                type="text"
                id="zipCode"
                name="zipCode"
                value={formData.zipCode}
                onChange={handleInputChange}
                className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-happy-orange focus:ring focus:ring-happy-orange focus:ring-opacity-50"
              />
            </div>
          </div>

          <hr className="my-6" />

          <h3 className="text-lg font-medium text-gray-900 mb-4">Informações Médicas</h3>

          <div className="space-y-4">
            <div>
              <label htmlFor="medicalHistory" className="block text-sm font-medium text-gray-700">
                Histórico Médico
              </label>
              <textarea
                id="medicalHistory"
                name="medicalHistory"
                rows={3}
                value={formData.medicalHistory}
                onChange={handleInputChange}
                className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-happy-orange focus:ring focus:ring-happy-orange focus:ring-opacity-50"
              />
            </div>

            <div>
              <label htmlFor="allergies" className="block text-sm font-medium text-gray-700">
                Alergias
              </label>
              <textarea
                id="allergies"
                name="allergies"
                rows={2}
                value={formData.allergies}
                onChange={handleInputChange}
                className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-happy-orange focus:ring focus:ring-happy-orange focus:ring-opacity-50"
              />
            </div>

            <div>
              <label htmlFor="medications" className="block text-sm font-medium text-gray-700">
                Medicamentos em Uso
              </label>
              <textarea
                id="medications"
                name="medications"
                rows={2}
                value={formData.medications}
                onChange={handleInputChange}
                className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-happy-orange focus:ring focus:ring-happy-orange focus:ring-opacity-50"
              />
            </div>
          </div>

          <div className="flex justify-end space-x-4">
            <button
              type="button"
              className="px-6 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50 transition duration-200"
            >
              Cancelar
            </button>
            <button
              type="submit"
              className="bg-happy-orange text-white px-6 py-2 rounded-md hover:bg-opacity-90 transition duration-200"
            >
              Cadastrar Paciente
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default PatientRegistration;