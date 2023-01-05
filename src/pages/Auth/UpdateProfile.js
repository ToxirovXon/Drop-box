import React, { useRef, useState } from 'react';
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from '../../components/store/AuthStore';
import { Oval } from 'react-loader-spinner';
import Alert from '../../ui/alerts/Alert';
import "./Auth.css"

const UpdateProfile = () => {
    const emailRef = useRef();
    const passwordRef = useRef();
    const passwordConfirmRef = useRef();
    const { currentUser, updatePassword, updateEmail } = useAuth();
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        const emailField = emailRef.current.value;
        const passwordField = passwordRef.current.value;
        const passwordConfirmField = passwordConfirmRef.current.value;

        if(passwordField !== passwordConfirmField) {
            return setError("Passwords don't match!");
        }

        const promises = []
        setLoading(true);
        setError('');
        if(emailField !== currentUser.email) {
            promises.push(updateEmail(emailField));
        }
        if(passwordField) {
            promises.push(updatePassword(passwordField));
        }

        Promise.all(promises).then(() => {
            navigate("/");
        }).catch(() => {
            setError("Failed to update account!");
        }).finally(() => {
            setLoading(false);
        })
    }
    return (
        <>
        <div className="container">
            <div className="dropupdate">
                <div className='content'>
                    <h2>
                        Update Profile
                    </h2>
                {
                    error && (
                        <Alert type={"error"}>{ error }</Alert>
                    )
                }
                <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
                    <input type="hidden" name="remember" defaultValue="true" />
                        <div className='input'>
                            <label htmlFor="email-address" className="sr-only">
                                Email
                            </label>
                            <input
                                defaultValue={currentUser.email}
                                ref={emailRef}
                                id="email-address"
                                name="email"
                                type="email"
                                autoComplete="email"
                                required
                                className="appearance-none rounded relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500  focus:z-10 sm:text-sm"
                                placeholder="Email"
                            />
                        </div>
                        <div className='input'>
                            <label htmlFor="password" className="sr-only">
                                Password
                            </label>
                            <input
                                ref={passwordRef}
                                id="password"
                                name="password"
                                type="password"
                                autoComplete="current-password"
                                className="mt-4 appearance-none rounded relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500  focus:z-10 sm:text-sm"
                                placeholder="New password"
                            />
                        </div>

                        <div className='input'>
                            <label htmlFor="password-confirm" className="sr-only">
                                Password Confirm
                            </label>
                            <input
                                ref={passwordConfirmRef}
                                id="password-confirm"
                                name="password"
                                type="password"
                                autoComplete="current-password"
                                className="mt-4 appearance-none rounded relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:z-10 sm:text-sm"
                                placeholder="Return password"
                            />
                        </div>
        
                    <div className='inbutBox sign_up'>
                        <button
                            type="submit"
                        >
                            <span>
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
                            </span>
                            Update Profile
                        </button>
                    </div>
                        <Link className='signin' to={"/"}>Cancel</Link>
                </form>
                </div>
            </div>
        </div>
    </>
    );
};

export default UpdateProfile;
