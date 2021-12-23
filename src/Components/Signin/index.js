import './styles.scss'
import Button from '../Forms/Button'

const SignIn = props => {
    return (
        <div className="signin">
            <div className="wrap">
                <h2>SignIN</h2>

                <div className='formwrap'>
                    <form>
                        <div className='socialSignIn'>
                            <div className='row'>
                                <Button><div className='icons'><i className="fab fa-google"></i></div>SignIn with Google</Button>
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

export default SignIn