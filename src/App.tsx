import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Shipping } from 'pages';
import { Route, Routes } from 'react-router-dom';

const App: React.FC = () => {
  return (
    <Routes>
      <Route element={<Shipping />} path="/" />
    </Routes>
  );
};

export default App;
