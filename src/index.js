import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Navbar, NavbarBrand } from './react-bootstrap';
import Hello from './Hello';
import Welcom from './Welcom';
import Counter from './Counter';
import HelloAsClass from './HelloAsClass';
import HelloAsFunction from './HelloAsFunction';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Hello/>
    <Welcom/>
    <HelloAsClass who ="dat" address="da nang"/>
    <HelloAsFunction a= "10" b="5" />
    <Counter/>

    <Navbar/>
    <NavbarBrand/>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
