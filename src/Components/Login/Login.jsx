import React from 'react';
import './Login.css'
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <div className='form-container'>
            <h2 className='form-title'> login</h2>
            <form >
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