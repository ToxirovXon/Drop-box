import React, { useRef, useState } from 'react';
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from '../../../components/store/AuthStore';
import { Oval } from 'react-loader-spinner';
import Alert from '../../../ui/alerts/Alert';
import "./SignUp.css"


const SignUp = () => {
    const emailRef = useRef();
    const passwordRef = useRef();
    const passwordConfirmRef = useRef();
    const { signUp } = useAuth();
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async(e) => {
        e.preventDefault();
        const emailField = emailRef.current.value;
        const passwordField = passwordRef.current.value;
        const passwordConfirmField = passwordConfirmRef.current.value;
        if(passwordField !== passwordConfirmField) {
            return setError("Passwords don't match!");
        }

        try {
            setError('');
            setLoading(true);
            await signUp(emailField, passwordField);
        } catch (error) {
            setError("Failed to create an account!");
        }

        setMessage("Succesfuly created account");
        setLoading(false);
        navigate("/");
    }

    return (
        <>
        <div className="container-item">
            <div className="dropup">
                <div className="contentup">
                    <h1 className='h1'>
                        Sign Up
                    </h1>
                
                {
                    message && (
                        <Alert type={"success"}>{ message }</Alert>
                    )
                }
                {
                    error && (
                        <Alert type={"error"}>{ error }</Alert>
                    )
                }
                <form onSubmit={handleSubmit}>
                    <input type="hidden" name="remember" defaultValue="true" />
                    <div className='inputupBox'>
                            <label htmlFor="email-address" className="sr-only">
                                Email
                            </label>
                            <input
                                ref={emailRef}
                                id="email-address"
                                name="email"
                                type="email"
                                autoComplete="email"
                                required
                                placeholder="Email"
                            />
                            </div>
                        <div className='inputupBox'>
                            <label htmlFor="password" className="sr-only">
                                Password
                            </label>
                            <input
                                ref={passwordRef}
                                id="password"
                                name="password"
                                type="password"
                                autoComplete="current-password"
                                required
                                placeholder="Password"
                            />
                        </div>

                        <div className='inputupBox'>
                            <label htmlFor="password-confirm" className="sr-only">
                                Password Confirm
                            </label>
                            <input
                                ref={passwordConfirmRef}
                                id="password-confirm"
                                name="password"
                                type="password"
                                autoComplete="current-password"
                                required
                                placeholder="Password Confirm"
                            />
                        </div>
                    
        
                    <div className='inputupBox sign_up'>
                        <button
                                type="submit"
                            >
                            
                                {
                                    loading &&
                                    <Oval
                                    height={17}
                                    width={17}
                                    color="#fff"
                                    wrapperStyle={{}}
                                    wrapperClass=""
                                    visible={true}
                                    ariaLabel='oval-loading'
                                    secondaryColor="#fff"
                                    strokeWidth={4}
                                    strokeWidthSecondary={2}
                                    />
                                }
                            
                            Sign Up
                        </button>
                    </div>
                        <Link className="signin" to={"/signin"}>Sign In</Link>
                </form>
                </div>
            </div>
        </div>
    </>
    );
};

export default SignUp;