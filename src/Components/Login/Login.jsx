import React, { useContext } from 'react';
import './Login.css'
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/UserContext';

const Login = () => {
    const naviGate = useNavigate()
    const { signIn, setUser } = useContext(AuthContext)
    const location = useLocation()

    const from = location.state?.from?.pathname || "/" //aita mainly  react router er kaj
    // console.log(location)

    const handleSignIn = e => {
        e.preventDefault()
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;

        signIn(email, password)
            .then(res => {
                const user = res.user;
                console.log(user)
                setUser(user)
                naviGate(from, { replace: true })
            })
            .catch(e => console.error(e))
    }

    return (
        <div className='form-container'>
            <h2 className='form-title'> login</h2>
            <form onSubmit={handleSignIn} >
                <div className="form-control">
                    <label htmlFor="email">Email</label>
                    <input type="email" name='email' placeholder='type your email here' required />
                </div>
                <div className="form-control">
                    <label htmlFor="password">PassWord</label>
                    <input type="password" name='password' placeholder='type your password' required />
                </div>
                <input className='btn-submit' type="submit" value="Login" />
            </form>
            <p>new to ema john <Link to='/signup'> Create a new Account</Link></p>
        </div>
    );
};

export default Login;