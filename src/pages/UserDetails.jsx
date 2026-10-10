import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { users } from '../data.js';

export default function UserDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const user = users.find((person) => person.id === Number(id));

  if (!user) {
    return <section className="panel page-panel"><h1>User not found</h1><p>There is no user with ID {id}.</p><button className="button" onClick={() => navigate('/users')}>← Back to Users</button></section>;
  }

  return (
    <section className="profile-page">
      <button className="back" onClick={() => navigate('/users')}>← Back to Users</button>
      <div className="panel profile-card">
        <div className="eyebrow">USER PROFILE • ID {id}</div>
        <div className={'avatar large ' + user.color}>{user.name.split(' ').map((part) => part[0]).join('')}</div>
        <h1>{user.name}</h1><p className="profile-role">{user.role}</p>
        <div className="profile-info"><div><span>User ID</span><strong>#{user.id}</strong></div><div><span>Email address</span><strong>{user.email}</strong></div><div><span>Status</span><strong className="online">● Active</strong></div></div>
        <button className="button" onClick={() => navigate('/users')}>← Back to Users</button>
      </div>
    </section>
  );
}
