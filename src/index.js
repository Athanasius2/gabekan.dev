import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import {
  BrowserRouter,
  RouterProvider,
  Route,
  Routes,
  Link,
} from "react-router-dom";

import WpmTextbox from './components/WpmTextbox';
import App from './App';
import Login from './Login';
import Projects from './Projects';
import Contact from './Contact';
import Links from './Links';
import Home from './Home';

import { Amplify } from 'aws-amplify';
//import amplifyOutputs from './amplify_outputs.json';

//Amplify.configure(amplifyOutputs);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Home />} />
          <Route path="wpm" element={<WpmTextbox />} />
          <Route path="login" element={<Login />} />
          <Route path="projects" element={<Projects />} />
          <Route path="contact" element={<Contact />} />
          <Route path="links" element={<Links />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
