import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://640dee551a18a5db83838ff5.mockapi.io/';

export const getUsers = createAsyncThunk(
  'users/getAll',
  async (_, { rejectedWithValue }) => {
    try {
      const { data } = await axios('/users');
      return data;
    } catch ({ response }) {
      return rejectedWithValue(response);
    }
  }
);

export const getUserById = createAsyncThunk(
  'users/getUser',
  async (id, { rejectedWithValue }) => {
    try {
      const { data } = await axios(`/users/${id}`);
      return data;
    } catch ({ response }) {
      return rejectedWithValue(response);
    }
  }
);

export const deleteUser = createAsyncThunk(
  'users/deleteUser',
  async (id, { rejectedWithValue }) => {
    try {
      await axios.delete(`/users/${id}`);
      return id;
    } catch ({ response }) {
      return rejectedWithValue(response);
    }
  }
);

export const addUser = createAsyncThunk(
  'users/add',
  async (userData, { rejectedWithValue }) => {
    try {
      const { data } = await axios.post('/users/', userData);
      return data;
    } catch ({ response }) {
      return rejectedWithValue(response);
    }
  }
);
