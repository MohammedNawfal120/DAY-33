import React from 'react';
import { Link } from 'react-router-dom';

export default function About() {
  return (
    <section className="panel page-panel">
      <div className="eyebrow">ABOUT THIS PROJECT</div>
      <h1>Built with React Router.</h1>
      <p>This mini website demonstrates client-side routing without reloading the entire page.</p>
      <div className="steps">
        <div><b>BrowserRouter</b><span>Wraps the application in main.jsx.</span></div>
        <div><b>Routes & Route</b><span>Connect URL paths with page components.</span></div>
        <div><b>Link & NavLink</b><span>Move between pages from the navbar.</span></div>
        <div><b>useParams & useNavigate</b><span>Read dynamic user IDs and go back to the user list.</span></div>
      </div>
      <Link className="button" to="/users">Meet Our Users →</Link>
    </section>
  );
}
