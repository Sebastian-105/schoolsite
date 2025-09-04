import './assets/css/universal.css'
import Home from './home.jsx'
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ErrorPage from './components/errorpage.jsx'
import Universal from './components/universal.jsx'

createRoot(document.getElementById('root')).render(
   <BrowserRouter>
   <Universal />
    <Routes >
      <Route
       path="/"
       element={<Home />}
       />
          <Route 
      path='/*'
      element={<ErrorPage />}
      />
    </Routes>
      
   </BrowserRouter>
)
