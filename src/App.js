import './default.scss';
import React from 'react';
import Header from './Components/Header';
import HomePage from './Pages/HomePage';
import Registration from './Pages/Registration/Index'
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Header />
      <div className='main'>
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route exact path="/Registration" element={<Registration/>} />
        </Routes>
      </div>

    </div>
  );
}

export default App;