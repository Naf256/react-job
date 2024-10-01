import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import CompanyForm from './CompanyForm';
import CompanyList from './CompanyList';
import JobForm from './JobForm';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<CompanyList />} />
        <Route path="/add-company" element={<CompanyForm />} />
        <Route path="/company-list" element={<CompanyList />} />
        <Route path="/add-jobs" element={<JobForm />} />
      </Routes>
    </Router>
  );
};

export default App;

