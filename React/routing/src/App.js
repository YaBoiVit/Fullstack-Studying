import './App.css';
import { Route , BrowserRouter, Routes} from 'react-router-dom'
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Nav from './components/Nav';
import Show from './pages/Show';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Nav/>
      <Routes>
        <Route path = '/' element={<Home/>}/>
        <Route path = '/about' element={<About/>}/>
        <Route path = '/contact' element={<Contact/>}/>
        <Route path = '/show/:id' element={<Show/>}/>
      </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
