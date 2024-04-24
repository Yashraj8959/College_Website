import React from 'react';
import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import AllRoutes from './pages/AllRoutes/AllRoutes.jsx';
function App() {
  return (
    <div className="App">
      {/* <h1>Welcome to UIT RGPV SHIVPURI</h1> */}

      <Router>
        <AllRoutes />
      </Router>
    
      
    </div>
  );
}

export default App;
