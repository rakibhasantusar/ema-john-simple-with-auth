import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import logo from '../../images/Logo.svg'
import './Header.css'
import { AuthContext } from '../../contexts/UserContext';

const Header = () => {
    const { user, logOUt } = useContext(AuthContext)
    const navigate = useNavigate()

    const handleLogout = () => {
        logOUt()
            .then(() => {
                navigate('/')

            })
            .catch(e => console.log(e))
    }

    return (
        <nav className='header'>
            <img src={logo} alt="" />
            <p style={{ color: '#FFF' }}>HI! Email: {user && user?.email}</p>
            <div>
                <Link to="/">Shop</Link>
                <Link to="/orders">Orders</Link>
                <Link to="/inventory">Inventory</Link>
                <Link to="/about">About</Link>
                {user?.uid ?
                    <button style={{ padding: '10px 15px', backgroundColor: 'rgb(255, 153, 0)', color: '#fff', marginLeft: '20px' }} onClick={handleLogout}>Log Out</button>
                    :
                    <>
                        <Link to="/login">Login</Link>
                        <Link to="/signup">Sign-Up</Link>
                    </>
                }
            </div>
        </nav>
    );
};

export default Header;