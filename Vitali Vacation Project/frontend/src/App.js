import logo from './logo.svg';
import { Route , BrowserRouter, Routes} from 'react-router-dom'
import './App.css';
import AdminEdit from './Pages/AdminEdit';
import AdminVacations from './Pages/AdminVacations';
import Main from './Pages/Main';
import Register from './Pages/Register';
import UserVacations from './Pages/UserVacations';
import AdminPage from './Pages/AdminPage';


function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/register" element={<Register />} />
          <Route path="/uservacations" element={<UserVacations />} />
          <Route path="/adminedit" element={<AdminEdit />} />
          <Route path="/adminvacations" element={<AdminVacations />} />
          <Route path="/adminpage" element={<AdminPage/>} />
      </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
