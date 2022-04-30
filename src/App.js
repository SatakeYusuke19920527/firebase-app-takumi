import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Page1 from './pages/CreateUser';

const App = () =>{
  return(
  <BrowserRouter>
        <Routes>
          <Route exact path="/" component={Page1} />　
        </Routes>
      </BrowserRouter>
  )
}

export default App;
