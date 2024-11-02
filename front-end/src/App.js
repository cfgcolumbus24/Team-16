import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import CenteredTitle from './components/CenteredTitle';
import About from './pages/About';
import Main from "./pages/Main"; 
import Directory from './pages/Directory';
import Events from './pages/Events';
import Feed from './pages/Feed';
import Opportunities from './pages/Opportunities';
import Signup from './pages/Signup';
import Login from './pages/Login';
import Profile from './pages/Profile'; // Import Profile component
import Resources from './pages/Resources';

function App() {
  return (

      <div className="min-h-screen flex flex-col bg-gray-100">
        <Navbar />
        <div className="flex-1">
          <Routes>
            <Route path="/" element={<Main />} />
            {/* <Route path="/network" element={<CenteredTitle text="LMCC Alumni Network" />} /> */}
            <Route path="/about" element={<About />} />
            <Route path="/directory" element={<Directory />} />
            <Route path="/events" element={<Events />} />
            <Route path="/feed" element={<Feed />} />
            <Route path="/opportunities" element={<Opportunities />} />
            
            <Route path="/signup" element={<Signup />} />
            <Route path="/login" element={<Login />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/resources" element={<Resources />} />
          </Routes>
        </div>
      </div>
    
  );
}

export default App;
