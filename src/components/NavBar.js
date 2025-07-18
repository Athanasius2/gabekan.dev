import React from 'react';
import {useState} from 'react';
import {
  Outlet,
  Link,
} from "react-router-dom";

export default function NavBar() {
  return(
    <ul class="NavBar">
      <li><Link to="/">Home</Link></li>
      <li><Link to="/projects">Projects</Link></li>
      <li><Link to="/links">Links</Link></li>
      <li><Link to="/contact">Contact</Link></li>
      <li><Link to="https://login.gabekan.dev">Login</Link></li>
    </ul>
  );
}


