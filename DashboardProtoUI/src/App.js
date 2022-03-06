import {BrowserRouter} from "react-router-dom";
import logo from './logo.svg';
import './App.css';
import WrapperComponent from "./components/WrapperComponent";
import Dashboard from './components/Dashboard';
import Login from './components/Login';

function App() {
  return (
    <div className="App">  
        <BrowserRouter>
          <WrapperComponent />
        </BrowserRouter>
    </div>
  );
}

export default App;