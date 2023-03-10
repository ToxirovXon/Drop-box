import React from 'react';
import { Routes, Route } from 'react-router-dom';
import SignUp from '../../pages/Auth/SignUp/SignUp';
import SignIn from '../../pages/Auth/Signin/SignIn';
import Layout from '../layouts/Layout';
import PrivateRoute from './PrivateRoute';
import Dashboard from '../../pages/Dashboard/Dashboard';
import ForgotPassword from '../../pages/Auth/ForgotPassword/ForgotPassword';
import UpdateProfile from '../../pages/Auth/UpdateProfile';

const Router = () => {
    return (
        <Routes>
            <Route path="/" element={<Layout/>}>
                <Route index element={<PrivateRoute>
                        <Dashboard/>
                    </PrivateRoute>}
                />
                <Route path="folders/:id" element={<PrivateRoute>
                        <Dashboard/>
                    </PrivateRoute>}
                />
                <Route path="/update-profile" element={<PrivateRoute>
                        <UpdateProfile/>
                    </PrivateRoute>}
                />
            </Route>
            <Route path="/signup" element={<SignUp/>}/>
            <Route path="/signin" element={<SignIn/>}/>
            <Route path="/forgot-password" element={<ForgotPassword/>}/>
        </Routes>
    );
};

export default Router;