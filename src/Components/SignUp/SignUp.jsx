import React from 'react';
import './SignUp.css'
import { Link } from 'react-router-dom';
const SignUp = () => {
    return (
        <div className='form-container'>
            <h2 className='form-title'> Sign Up</h2>
            <form >
                <div className="form-control">
                    <label htmlFor="email">Email</label>
                    <input type="email" name='email' placeholder='type your email here' required />
                </div>
                <div className="form-control">
                    <label htmlFor="password">PassWord</label>
                    <input type="password" name='password' placeholder='type your password' required />
                </div>
                <div className="form-control">
                    <label htmlFor="confirm">Confirm PassWord</label>
                    <input type="password" name='confirm' placeholder='type your password' required />
                </div>
                <input className='btn-submit' type="submit" value="Login" />
            </form>
            <p>Already Have an Account? <Link to='/login'> Login</Link></p>
        </div>
    );
};

export default SignUp;