import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App/App.js';
import {Route, Routes} from 'react-router-dom'
import { BrowserRouter } from 'react-router-dom';


ReactDOM.render(

<BrowserRouter>

  <Routes>

    <Route path="/" element={<App />}></Route>

  </Routes>

</BrowserRouter>,


document.getElementById('root'));


