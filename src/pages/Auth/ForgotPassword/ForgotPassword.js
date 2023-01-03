import React, { useRef, useState } from 'react';
import { Link } from "react-router-dom";
import { useAuth } from '../../../components/store/AuthStore';
import { Oval } from 'react-loader-spinner';
import Alert from '../../../ui/alerts/Alert';
import  "./forgot.css";

const ForgotPassword = () => {
    const emailRef = useRef();
    const { resetPassword } = useAuth();
    const [error, setError] = useState('');
    const [message, setMessage] = useState('');
    const [loading, setLoading] = useState(false);

    const handleSubmit = async(e) => {
        e.preventDefault();
        const emailField = emailRef.current.value;

        try {
            setMessage('');
            setError('');
            setLoading(true);
            await resetPassword(emailField).then(() => {
                setMessage("Check your inbox for further instructions");
            });
        } catch (error) {
            setError("Failed to Reset Password!");
        }

        setLoading(false);
    }

    return (
        <>
        
        <div className="container-item">
            <div className="dropForgot">
                <div className='content'>
                    <h2>
                        Password Reset
                    </h2>
                
                {
                    error && (
                        <Alert type={"error"}>{ error }</Alert>
                    )
                }
                {
                    message && (
                        <Alert type={"success"}>{ message }</Alert>
                    )
                }
                <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
                    <input type="hidden" name="remember" defaultValue="true" />
                    <div className='inputBox'>
                        
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
                    
        
                    <div className='inputBox submit'>
                    <button
                            type="submit">
                            
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
                            
                            Reset Password
                        </button>
                    </div>
                        <Link className='signIn'  to={"/signin"}>Sign In</Link>
                        <Link className='signupPassword' to={"/signup"}>Sign Up</Link>
                </form>
                </div>
            </div>
        </div>
    </>
    );
};

export default ForgotPassword;