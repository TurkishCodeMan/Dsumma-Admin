'use client'

import React from 'react';
import { User } from '@/shared/entities/User';
import { useUsers } from '../hooks';

const UsersPage: React.FC = () => {
  const { users, loading } = useUsers();

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <h1>Users</h1>
      <ul>
        {users.map((user:User) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default UsersPage