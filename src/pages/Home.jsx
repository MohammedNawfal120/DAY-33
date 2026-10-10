import React from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <>
      <section className="hero">
        <div className="eyebrow">REACT ROUTER PROJECT</div>
        <h1>One app.<br /><span>Multiple pages.</span></h1>
        <p>Explore smooth client-side navigation with BrowserRouter, dynamic URLs, and reusable pages.</p>
        <Link className="button" to="/users">Explore Users →</Link>
        <Link className="button secondary" to="/about">Learn More</Link>
      </section>
      <section className="feature-grid">
        <article className="panel"><div className="feature-icon">01</div><h3>Simple navigation</h3><p>Switch between Home, About and Users using navbar links.</p></article>
        <article className="panel"><div className="feature-icon">02</div><h3>Dynamic routes</h3><p>Each user has a separate details page at /users/:id.</p></article>
        <article className="panel"><div className="feature-icon">03</div><h3>Back navigation</h3><p>Return to the user directory using useNavigate.</p></article>
      </section>
    </>
  );
}
