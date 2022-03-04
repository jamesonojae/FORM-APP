import React from 'react';
import { Routes, Route} from 'react-router-dom';
import './App.css';
import EmployeeForm from './components/users/EmployeeForm'
import CustomerForm from './components/users/CustomerForm';


const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<EmployeeForm />} exact />
        <Route path="/customer-service" element={<CustomerForm />} exact />
      </Routes>

    </>
  );
}

export default App;
