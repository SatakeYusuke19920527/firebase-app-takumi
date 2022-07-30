import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Page1 from './pages/Login';
import Page2 from './pages/CreateUser';
import Page3 from './pages/Main';

const App = () =>{
  return(
  <BrowserRouter>
        <Routes>
          <Route index element={<Page1 />} />　
          <Route path='page2' element={<Page2 />} />　
          <Route path='page3' element={<Page3 />} />　
        </Routes>
      </BrowserRouter>
  )
}

export default App;
