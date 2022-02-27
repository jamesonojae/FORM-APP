import React from 'react';
import { Routes, Route} from 'react-router-dom';
import './App.css';
import EmployeeForm from './components/users/EmployeeForm'

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<EmployeeForm />} exact />
        <Route path="/customer-service" element={<EmployeeForm />} exact />
      </Routes>

    </>
  );
}

export default App;
