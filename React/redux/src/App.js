import React from 'react';
import './App.css';
import { configureStore } from "@reduxjs/toolkit";
import { Provider} from "react-redux";
import reducers from './redux/reducers';
import Home from './pages/Home';


const store = configureStore({reducer : reducers});

function App() {
  return (
  <div className='App'>
    <Provider store={store}>
      <Home></Home>
    </Provider>
  </div>
  );
}

export default App;
