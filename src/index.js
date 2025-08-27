import ReactDOM from 'react-dom/client';
import './index.css';
import {BrowserRouter , Route , Routes } from 'react-router-dom'
import Home from './components/Home';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
      <Routes>
        <Route path='/*' element={<Home></Home>}></Route>
      </Routes>
  </BrowserRouter>
);

