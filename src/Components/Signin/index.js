import './styles.scss'
import Button from '../Forms/Button'
import { signInWithGoogle } from './../../Firebase/utilities'
import React, { Component } from 'react'



class SignIn extends Component {

    handleSubmit = async e => {
        e.preventDefault();
    }

    render() {

        return (
            <div className="signin">
                <div className="wrap">
                    <h2>SignIN</h2>

                    <div className='formwrap'>
                        <form onSubmit={this.handleSubmit}>
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