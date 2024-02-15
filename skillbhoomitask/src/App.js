import './App.css';
import Sidebar from './Components/Sidebar/Sidebar';
import Accessories from './Components/Accessories/Accessories';
import { BrowserRouter,Routes,Route } from 'react-router-dom';


function App() {
  return (
    <>
    <div className="App">
      <BrowserRouter>
      <Sidebar /> 
      <Accessories/>
      </BrowserRouter> 

     
      </div>
    </>
  );
}

export default App;
