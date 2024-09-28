import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Menu from './pages/Menu';
import Games from './pages/Games';
import Videos from './pages/Videos';
import Contact from './pages/Contact';
import './App.css'; // Ensure CSS is imported

function App() {
  const [currentPage, setCurrentPage] = useState('menu');

  const renderPage = () => {
    switch (currentPage) {
      case 'menu':
        return <Menu />;
      case 'games':
        return <Games />;
      case 'videos':
        return <Videos />;
      case 'contact':
        return <Contact />;
      default:
        return <Menu />;
    }
  };

  return (
    <div className="App">
      <Navbar setCurrentPage={setCurrentPage} />
      <div className="main-content">
        {renderPage()}
      </div>
    </div>
  );
}

export default App;
