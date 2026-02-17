import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { Home, Hobbies } from './pages';
import { Sidebar, Footer } from './components';
import { ThemeProvider } from './contexts/ThemeContext';
import './styles/App.css';

const MainPage = () => (
  <main className="main-content">
    <Home />
  </main>
);

const HobbiesPage = () => (
  <main className="main-content">
    <Hobbies />
  </main>
);

const App = () => {
  return (
    <ThemeProvider>
      <Router>
        <div className="app">
          <Sidebar />
          <div className="page-shell">
            <Routes>
              <Route path="/" element={<MainPage />} />
              <Route path="/hobbies" element={<HobbiesPage />} />
            </Routes>
            <Footer />
          </div>
        </div>
      </Router>
    </ThemeProvider>
  );
};

export default App;
