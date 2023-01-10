import React from 'react';
import './App.css';
import { configureStore } from "@reduxjs/toolkit";
import { Provider} from "react-redux";
import reducers from './redux/reducers';
import Home from './pages/Home';
import Userform from './pages/Userform';
import Usertable from './pages/Usertable';
import HooksRedux from './pages/hooks/HooksRedux';


const store = configureStore({reducer : reducers});

function App() {
  return (
  <div className='App'>
    <Provider store={store}>
      {/* <Home></Home> */}
      <HooksRedux/>
      <div className='row'>
        <div className='col-9'>
          <Usertable/>
        </div>
        <div className='col-3'>
          <Userform/>
        </div>
      </div>
    </Provider>
  </div>
  );
}

export default App;
