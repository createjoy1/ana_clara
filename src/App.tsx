import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Login from './components/Login';
import Register from './components/Register';
import Dashboard from './components/Dashboard';
import Scheduling from './components/Scheduling';
import MyAccount from './components/MyAccount';
import EmployeeRegistration from './components/EmployeeRegistration';
import EmployeeDetails from './components/EmployeeDetails';
import PatientRegistration from './components/PatientRegistration';
import PatientDetails from './components/PatientDetails';
import Layout from './components/Layout';
import ProtectedRoute from './components/ProtectedRoute';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <Layout>
                <Dashboard />
              </Layout>
            </ProtectedRoute>
          }
        />
        <Route
          path="/agendamento"
          element={
            <ProtectedRoute>
              <Layout>
                <Scheduling />
              </Layout>
            </ProtectedRoute>
          }
        />
        <Route
          path="/minha-conta"
          element={
            <ProtectedRoute>
              <Layout>
                <MyAccount />
              </Layout>
            </ProtectedRoute>
          }
        />
        <Route
          path="/cadastro-funcionario"
          element={
            <ProtectedRoute>
              <Layout>
                <EmployeeRegistration />
              </Layout>
            </ProtectedRoute>
          }
        />
        <Route
          path="/funcionario/:id"
          element={
            <ProtectedRoute>
              <EmployeeDetails />
            </ProtectedRoute>
          }
        />
        <Route
          path="/cadastro-paciente"
          element={
            <ProtectedRoute>
              <Layout>
                <PatientRegistration />
              </Layout>
            </ProtectedRoute>
          }
        />
        <Route
          path="/paciente/:id"
          element={
            <ProtectedRoute>
              <PatientDetails />
            </ProtectedRoute>
          }
        />
        <Route path="/" element={<Navigate to="/login" replace />} />
      </Routes>
    </Router>
  );
}

export default App;