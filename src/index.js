import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Sidebar from './Components/SideBar/Sidebar';
import { ColorProvider as ThemeProvider } from './Components/ThemeContext';
import { BrowserRouter as Router } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ThemeProvider>
      <Router>
        <Sidebar>
          <App />
        </Sidebar>
      </Router>
    </ThemeProvider>
  </React.StrictMode>
);

reportWebVitals();
