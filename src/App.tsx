import { Outlet } from "react-router-dom";
import "./App.css";
import NavBar from "./components/NavBar.tsx";


function App() {
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

export default App;
