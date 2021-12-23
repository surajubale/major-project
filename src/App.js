import './default.scss';
import React from 'react';
import Header from './Components/Header';
import HomePage from './Pages/HomePage';
import Registration from './Pages/Registration/Index'
import { Route, Routes } from 'react-router-dom';
import Footer from './Components/Footer';
import Login from './Pages/Login';


function App() {
  return (
    <div className="App">
      <Header />
      <div className='main'>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/Registration" element={<Registration/>}/>
          <Route path="/Login" element={<Login/>}/>
        </Routes>
      </div>
      <Footer/>
    </div>
  );
}

export default App;