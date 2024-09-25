
import React from 'react';
import Home from './Pages/Home'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import EmployeeDetails from './Pages/EmployeeDetails';
import './App.css';



function App() {
  return (
    <>
      <Header></Header>
      <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/employee-details" element={<EmployeeDetails />} />
      </Routes>
      </Router>
     
    </>

  );
}

export default App;