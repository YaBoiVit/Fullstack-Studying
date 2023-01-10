import logo from './logo.svg';
import './App.css';
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from 'react-redux';
import reducers from './redux/reducers';
import HooksReduxPage from './pages/HooksReduxPage';

const store = configureStore({ reducer: reducers })

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <HooksReduxPage/>
      </Provider>
    </div>
  );
}

export default App;
