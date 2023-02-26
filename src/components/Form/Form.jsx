import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { nanoid } from 'nanoid';
import { useDispatch } from 'react-redux';

import { addUser } from '../../redux/users/usersSlice';

export const Form = () => {
  const [name, setName] = useState('');
  const [age, setAge] = useState(0);

  const dispatch = useDispatch();

  const navigate = useNavigate();

  const handleChange = e => {
    const name = e.target.name;
    const value = e.target.value;
    name === 'name' ? setName(value) : setAge(value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    console.log('work');
    const newUser = {
      id: nanoid(),
      name,
      age,
      status: 'offline',
    };
    dispatch(addUser(newUser));
    navigate('/');
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input name="name" type="text" onChange={handleChange} />
      </label>
      <label>
        Age:
        <input name="age" type="text" onChange={handleChange} />
      </label>
      <button type="submit">Save</button>
    </form>
  );
};
