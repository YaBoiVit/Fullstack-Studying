import { Route , BrowserRouter, Routes} from 'react-router-dom'
import './App.css';
import AdminEdit from './Pages/AdminEdit';
import AdminAddVacation from './Pages/AdminAddVacation';
import Main from './Pages/Main';
import Register from './Pages/Register';
import UserVacations from './Pages/UserVacations';
import AdminPage from './Pages/AdminPage';
import AdminGraph from './Pages/AdminGraph';


function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/register" element={<Register />} />
          <Route path="/uservacations" element={<UserVacations />} />
          <Route path="/adminedit" element={<AdminEdit />} />
          <Route path="/adminadd" element={<AdminAddVacation />} />
          <Route path="/adminpage" element={<AdminPage/>} />
          <Route path="/admingraph" element={<AdminGraph/>} />
      </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
