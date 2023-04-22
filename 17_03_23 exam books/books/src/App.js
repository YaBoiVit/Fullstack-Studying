import logo from './logo.svg';
import './App.css';
import { Route , BrowserRouter, Routes} from 'react-router-dom'
import Main from './pages/Main';


function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Main/>
    </div>
    </BrowserRouter>
  );
}

export default App;
