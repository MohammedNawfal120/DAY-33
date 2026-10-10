import React from 'react';
import { Link } from 'react-router-dom';
import { users } from '../data.js';

export default function Users() {
  return (
    <>
      <div className="page-heading"><div><div className="eyebrow">TEAM DIRECTORY</div><h1>Meet our users</h1><p>Select any user to open their dynamic profile page.</p></div><span className="count">{users.length} members</span></div>
      <div className="user-grid">
        {users.map((user) => (
          <article className="user-card" key={user.id}>
            <div className={'avatar ' + user.color}>{user.name.split(' ').map((part) => part[0]).join('')}</div>
            <h3>{user.name}</h3><p>{user.role}</p>
            <Link className="profile-link" to={'/users/' + user.id}>View Profile <span>→</span></Link>
          </article>
        ))}
      </div>
    </>
  );
}
