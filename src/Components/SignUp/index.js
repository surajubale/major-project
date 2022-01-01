import React, { Component } from 'react'
import FormInput from '../Forms/FormInput';
import './styles.scss'
import { auth, firestore, handleUserProfile } from './../../Firebase/utilities'

const initialState = {
    displayName: '',
    email: '',
    password: '',
    renterPassword: '',
    errors: []
}

export default class SignUp extends Component {

    constructor(props) {
        super(props);
        this.state = {
            ...initialState
        };

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e) {
        const { name, value } = e.target;
        this.setState({
            [name]: value
        })
    }

    handleFormSubmit = async event => {
        event.preventDefault();
        const { displayName, email, password, renterPassword } = this.state;

        if (displayName == '') {
            const err = ['Display should not be empty']
            this.setState({
                errors:err
            })
            return;
        }

        if (password !== renterPassword) {
            const err = ['password don\'t match']
            this.setState({
                errors: err
            });
            return;
        }

        try{
           const {user} = await auth.createUserWithEmailAndPassword(email,password);
           await handleUserProfile(user,{displayName});

           this.setState({...initialState});
           
        }catch(err){
            console.log(err)
        }
    }
    render() {

        const { displayName, email, password, renterPassword, errors } = this.state;
        return (
            <div className='signup'>
                <div className='wrap'>
                    <h2>Sign Up</h2>

                    {errors.length > 0 && (
                        <ul>
                            {errors.map((err, index) => {
                                return (
                                    <li key={index}>
                                        {err}
                                    </li>
                                );

                            })}
                        </ul>
                    )}
                    <form onSubmit={this.handleFormSubmit}>
                        <FormInput
                            type="text"
                            name="displayName"
                            value={displayName}
                            placeholder='Enter FullName'
                            onChange={this.handleChange}
                        />

                        <FormInput
                            type="email"
                            name="email"
                            value={email}
                            placeholder='Enter Email Address'
                            onChange={this.handleChange}
                        />

                        <FormInput
                            type="password"
                            name="password"
                            value={password}
                            placeholder='Password'
                            onChange={this.handleChange}
                        />

                        <FormInput
                            type="password"
                            name="renterPassword"
                            value={renterPassword}
                            placeholder='ReEnter Password'
                            onChange={this.handleChange}
                        />

                        <button className='btn'>Register</button>

                    </form>
                </div>
            </div>
        );
    }
}
