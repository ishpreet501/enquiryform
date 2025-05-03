
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import CandidateEnquiryForm from './components/CandidateEnquiryForm';
import Dashboard from './components/dashboard';
import Login from './components/Login';
import ProtectedRoute from './components/PROTECTEDROUTE.JSX';
import React from 'react';

function App() {
  return (
    <BrowserRouter>
    <Routes>
     
      <Route path="/" element={<CandidateEnquiryForm />} />

    
      <Route path="/login" element={<Login />} />

      <Route path="/dashboard" element={
        <ProtectedRoute>
          <Dashboard />
        </ProtectedRoute>
      } />
    </Routes>
    </BrowserRouter>
  );
}

export default App;

