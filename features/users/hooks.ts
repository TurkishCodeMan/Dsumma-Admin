'use client'

import { useState, useEffect } from 'react';
import { getUsers } from './api';

export const useUsers = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getUsers().then(users => {
      setUsers(users);
      setLoading(false);
    });
  }, []);

  return { users, loading };
};
