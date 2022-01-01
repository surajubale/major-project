import React from 'react';
import './styles.scss'
import logo from './../../Assets/logo.png'
import { Link } from 'react-router-dom';
import { auth } from './../../Firebase/utilities';

const Header = props => {
    const { currentUser } = props;
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
                {!currentUser && (
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
                )}

                {currentUser && (
                    <ul>
                        <li>
                            <span onClick={() => auth.signOut()}>
                            Logout
                            </span>
                        </li>
                    </ul>
                )}

            </div>
        </div>
    );
};

Header.defaultProps = {
    currentUser: null
}

export default Header;