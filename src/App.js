import './default.scss';
import React, { Component } from 'react';
import Header from './Components/Header';
import HomePage from './Pages/HomePage';
import Registration from './Pages/Registration/Index'
import { Route, Routes, Navigate } from 'react-router-dom';
import Footer from './Components/Footer';
import Login from './Pages/Login';

import { auth, handleUserProfile } from './Firebase/utilities';

const initialState = {
  currentUser: null
}

class App extends Component {

  constructor(props) {
    super(props)

    this.state = {
      ...initialState
    };
  }

  authListner = null;

  componentDidMount() {
    this.authListner = auth.onAuthStateChanged( async userAuth => {
      if(userAuth){
        const userRef = await handleUserProfile(userAuth);
    
        userRef.onSnapshot(snapshot => {
          this.setState({currentUser:{
            id:snapshot.id, ...snapshot.data()
          }})
        })
      }
      this.setState({...initialState})
    })
  
  }

  componentWillUnmount() {
    this.authListner();
  }

  render() {
    const { currentUser } = this.state;
    console.log(currentUser);
    return (
      <div className="App">
        <Header currentUser={currentUser} />
        <div className='main'>
          <Routes>
            

            <Route path="/" element={<HomePage />} />
            <Route path="/Registration" element={<Registration />} />

            {currentUser && (
              < Route path ="*" element={<Navigate to="/"  />}/>
            )}

            {!currentUser && (
              <Route path="/Login" element={<Login />} /> 
            )}

          </Routes>
        </div>
        <Footer />
      </div>
    );

  }

}

export default App;