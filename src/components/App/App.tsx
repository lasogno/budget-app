import React, { ReactElement } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Accounts from '../Accounts/Accounts';

const App = function App(): ReactElement {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Accounts />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
