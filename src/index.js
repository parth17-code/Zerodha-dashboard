import ReactDOM from 'react-dom/client';
import './index.css';
import {BrowserRouter , Route , Routes } from 'react-router-dom'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
      <Routes>
        <Route path='/'></Route>
      </Routes>
  </BrowserRouter>
);

