import {BrowserRouter, Switch, Route} from "react-router-dom";
import logo from './logo.svg';
import './App.css';
import Dashboard from './components/Dashboard';
import Login from './components/Login';

function App() {
  return (
    <div className="App">  
        
      <Login />
 
    </div>
  );
}

export default App;
