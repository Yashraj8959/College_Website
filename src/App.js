
import './App.css';
import Home from './screens/Home';
import { BrowserRouter as Router , Routes ,Route } from 'react-router-dom';
function App() {
  return (
    <div className="App">
    <Router>
      <div>
        <Routes>
          <Route exact path = "/" element={<Home/>}/>
        </Routes>
      </div>
    </Router>
      
    </div>
  );
}

export default App;
