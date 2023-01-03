import React, { useRef, useState } from 'react';
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from '../../../components/store/AuthStore';
import { Oval } from 'react-loader-spinner';
import Alert from '../../../ui/alerts/Alert';
import  "./signin.css";

const SignIn = () => {
    const emailRef = useRef();
    const passwordRef = useRef();
    const { signIn } = useAuth();
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const handleSubmit = async(e) => {
        e.preventDefault();
        const emailField = emailRef.current.value;
        const passwordField = passwordRef.current.value;

        try {
            setError('');
            setLoading(true);
            await signIn(emailField, passwordField).then(() => {
                navigate("/");
            });
        } catch (error) {
            setError("Failed to Sign In!");
        }

        setLoading(false);
    }

    return (
        <div className="container-item">
            <div className="drop">
                <div className='content'>
                    <h2>
                        Sign In
                    </h2>
                {
                    error && (
                        <Alert type={"error"}>{ error }</Alert>
                    )
                }
                <form onSubmit={handleSubmit}>
                    <input type="hidden" name="remember" defaultValue="true" />
                    <div className='inputinBox'>
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
                                placeholder="Enter Your Email"
                            />
                        </div>
                        <div className='inputinBox'>
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
                                placeholder="Enter Your Password"
                            />
                        </div>
        
                    <div className='inputinBox'>
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
                            Sign In
                        </button>
                    </div>
                    </form>
                    </div>
            </div>
                        <Link className="Forget" to={"/forgot-password"}>Forgot Password?</Link>
                        <Link className="signup" to={"/signup"}>Sign Up</Link>
        </div>
    );
};

export default SignIn;