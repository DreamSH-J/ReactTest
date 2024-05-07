import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import NotificationList from './Chapter6/NotificationList';
import Accommodate from './Chapter7/Accommodate';
import ConfirmButtonF from './Chapter8/ConfirmButtonF';
import LandingPage from './Chapter9/LandingPage';
import Calculator from './Chapter12/Calculator';
import WelcomeDialog from './Chapter13/WelcomeDialog';
import Dialog from './Chapter13/Dialog';
import ProfileCard from './Chapter13/ProfileCard';
import DarkOrLight from './Chapter14/DarkOrLight';

const root = ReactDOM.createRoot(document.getElementById('root'));
  root.render(
    <React.StrictMode>
      <DarkOrLight />
    </React.StrictMode>
  );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
