import * as ReactDOM from "react-dom";
import {
  Outlet,
  Link,
} from "react-router-dom";


import logo from './logo.svg';
import './App.css';

import NavBar from './components/NavBar';

export default function App() {
  return (
    <div className="App">
      <header className="App-header">
        <NavBar />
        <div className="content">
          <Outlet />
        </div>
      </header>
    </div>
  );
}
