import React, { useState } from 'react';
import './styel.css'; // Corrected the import path
import loginPage from './LoginPage.jpg'; // Corrected the import path
import Loginsvg from './avatar.svg'; // Corrected the import path
import { useNavigate } from 'react-router-dom';
 
export default function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const navigate = useNavigate();

    const hardcodedUsername = 'Jacky';
    const hardcodedPassword = 'Jack@15122000';

    const handleUsernameChange = (event) => {
        setUsername(event.target.value);
    };

    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        if (username === hardcodedUsername && password === hardcodedPassword) {
            console.log('Success');
            setErrorMessage('');
            navigate('/landing'); 

        } else {
            setErrorMessage('Invalid Credentials');
        }   
    };

    return (
        <div className="contain">
            <div className="image-contain" id='imghide'>
                <img src={loginPage} alt="Vector Image" className="vector-image" />
            </div>
            <div className="form-contain">
                <div className="logcard">
                    <div className="card">
                        <h3>
                            <img src={Loginsvg} alt="Login Icon" style={{ height: 'auto', width: '3rem' }} />
                        </h3>
                        <h3>LOGIN</h3>
                        <form onSubmit={handleSubmit}>
                            <div className="form-group">
                                <input
                                    type="text"
                                    placeholder="User Name"
                                    onChange={handleUsernameChange}
                                    value={username}
                                    required
                                />
                            </div>
                            <div className="form-group">
                                <input
                                    type="password"
                                    name="password"
                                    onChange={handlePasswordChange}
                                    placeholder="Password"
                                    value={password}
                                    required
                                />
                            </div>
                            <div className="form-group" style={{ textAlign: 'right' }}>
                                <a href="#">Forgot Password..!</a>
                            </div>
                            {errorMessage && (
                                <div className="error-message" style={{ color: 'red' }}>
                                    {errorMessage}
                                </div>
                            )}
                            <div className="form-group">
                                <center>
                                    <button type="submit">LOGIN</button>
                                </center>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}
