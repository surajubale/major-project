import React from 'react';
import './styles.scss'
import logo from './../../Assets/logo.png'
import { Link } from 'react-router-dom';

const Header = props => {
    return (
        <div className='header'>
            <div className='wrap'>
                <div className='logo'>
                    <Link to="/">
                        <img src={logo} alt="logo" />
                    </Link>
                </div>
            </div>
            <div className='callToAction'>
                <ul>
                    <li>
                        <Link to="/Registration">
                           Register
                        </Link>
                    </li>
                    <li>
                        <Link to="/Login">
                            Login 
                        </Link>
                    </li>
                </ul>

            </div>
        </div>
    );
};

export default Header;