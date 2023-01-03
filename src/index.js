import React from 'react';
import ReactDOM from 'react-dom/client';
import Router from "./components/routing/Router";
import { BrowserRouter } from "react-router-dom";
import AuthStore from "./components/store/AuthStore";


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <AuthStore>
      <BrowserRouter>
        <Router/>
      </BrowserRouter>
    </AuthStore>
);

