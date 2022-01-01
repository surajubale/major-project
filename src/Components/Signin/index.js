import './styles.scss'
import Button from '../Forms/Button'
import { signInWithGoogle,auth } from './../../Firebase/utilities'
import React, { Component } from 'react'
import FormInput from '../Forms/FormInput'

const initialState  = {
    email:'',
    password:''
}

class SignIn extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             ...initialState
        }
        this.handleChange = this.handleChange.bind(this)
    }
    

    handleSubmit = async e => {
        e.preventDefault();

        const{email,password} = this.state;

        try{
            await auth.signInWithEmailAndPassword(email,password);
            this.setState({
                ...initialState
            })
        }catch(err){
            console.log(err)
        }

    }

    handleChange(e) {
        const{name,value} = e.target
        this.setState({
            [name]: value
        })
    }
    render() {
        const{email,password} = this.state
        return (          
            <div className="signin">
                <div className="wrap">
                    <h2>SignIN</h2>

                    <div className='formwrap'>
                        <form onSubmit={this.handleSubmit}>

                            <FormInput
                            type="email"
                            name="email"
                            value={email}
                            placeholder='Email'
                            onChange={this.handleChange}
                            />
                            
                            <FormInput
                            type="password"
                            name="password"
                            value={password}
                            placeholder='Password'
                            onChange={this.handleChange}
                            />

                            <button className='btn'type='submit'>Login</button>

                            <div className='socialSignIn'>
                                <div className='row'>
                                    <Button onClick={signInWithGoogle}><div className='icons'><i className="fab fa-google"></i></div>SignIn with Google</Button>
                                </div>
                                <div className='row'>
                                    <Button> <div className='icons'><i class="fab fa-facebook-square"></i></div> SignIn with FaceBook</Button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        )
    }


}



export default SignIn