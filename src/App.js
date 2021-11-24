import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import Home from './components/Home';

function App() {
   
  return (
    <Router>
      <div>
        <nav style={{display: 'flex', justifyContent: 'center'}}>
          <ul style={{display: 'flex'}}>
            <li style={{padding: 10}}>
              <Link to="/">Home</Link>
            </li>
            <li style={{padding: 10}}>
              <Link to="/about">About</Link>
            </li>
            <li style={{padding: 10}}>
              <Link to="/users">Users</Link>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="/about" element={<About />} />
          <Route path="/users" element={<Users />} />
          <Route path="/about" element={<Home />} />
        </Routes>
      </div>
    </Router>
  );
}


function About() {
  return <h2 className="mt-5 text-center">About</h2>;
}

function Users() {
  return <h2 className="mt-5 text-center">Users</h2>;
}


export default App;
