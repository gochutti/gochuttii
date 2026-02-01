import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';

// AWS Amplify Setup
import { Amplify } from "aws-amplify";
import awsExports from "./aws-exports.js"; 

// Initialize Amplify BEFORE rendering the app
Amplify.configure(awsExports);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);