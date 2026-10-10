import React from 'react';
import { NavLink, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home.jsx';
import About from './pages/About.jsx';
import Users from './pages/Users.jsx';
import UserDetails from './pages/UserDetails.jsx';

export default function App() {
  return (
    <div className="app">
      <header className="navbar">
        <Link className="brand" to="/"><span className="brand-mark">R</span> RouteSpace</Link>
        <nav>
          <NavLink to="/" end>Home</NavLink>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/users">Users</NavLink>
        </nav>
        <span className="nav-tag">Day 33 · React Router</span>
      </header>
      <main className="content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/users" element={<Users />} />
          <Route path="/users/:id" element={<UserDetails />} />
          <Route path="*" element={<div className="panel"><h2>Page not found</h2><Link className="button" to="/">Go Home</Link></div>} />
        </Routes>
      </main>
      <footer>React Router practice project <span>Day 33 • BrowserRouter</span></footer>
    </div>
  );
}
