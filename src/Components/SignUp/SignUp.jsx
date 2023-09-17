import React, { useContext, useState } from 'react';
import './SignUp.css'
import { Link } from 'react-router-dom';
import { AuthContext } from '../../contexts/UserContext';
const SignUp = () => {
    const { signUp, setUser } = useContext(AuthContext)


    const [error, setError] = useState(null)
    const handlesubmit = (e) => {
        e.preventDefault()
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        const confirm = form.confirm.value;


        if (password !== confirm) {
            setError('you password not mached')
            return
        }

        signUp(email, password)
            .then(res => {
                const user = res.user;
                console.log(user)
                setUser(user)
                form.reset()

            })
            .catch(e => console.error(e))
        console.log(email, password, confirm)
    }


    return (
        <div className='form-container'>
            <h2 className='form-title'> Sign Up</h2>
            <form onSubmit={handlesubmit}>
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

                <input className='btn-submit' type="submit" value="signup" />
                <p className='text-error'><small>{error}</small></p>
            </form>
            <p>Already Have an Account? <Link to='/login'> Login</Link></p>
        </div>
    );
};

export default SignUp;