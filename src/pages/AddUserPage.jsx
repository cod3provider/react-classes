import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { addUser } from '../redux/users/users-operations';

export const AddUserPage = () => {
  const [avatar, setAvatar] = useState('');
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmitForm = e => {
    e.preventDefault();

    const newUser = {
      avatar,
      name,
      number,
      email,
      address,
    };

    dispatch(addUser(newUser));
    navigate('/users');
  };

  const handleInputChange = e => {
    const { name, value } = e.target;
    // ({target: { name, value }})

    switch (name) {
      case 'avatar':
        setAvatar(value);
        break;
      case 'name':
        setName(value);
        break;
      case 'number':
        setNumber(value);
        break;
      case 'email':
        setEmail(value);
        break;
      case 'address':
        setAddress(value);
        break;
      default:
        return;
    }
  };

  return (
    <form onSubmit={handleSubmitForm}>
      <label>
        Avatar link
        <input
          onChange={handleInputChange}
          name="avatar"
          value={avatar}
          type="url"
        />
      </label>
      <label>
        Name
        <input
          onChange={handleInputChange}
          name="name"
          value={name}
          type="text"
        />
      </label>
      <label>
        Phone number
        <input
          onChange={handleInputChange}
          name="number"
          value={number}
          type="number"
        />
      </label>
      <label>
        Email
        <input
          onChange={handleInputChange}
          name="email"
          value={email}
          type="email"
        />
      </label>
      <label>
        Address
        <input
          onChange={handleInputChange}
          name="address"
          value={address}
          type="text"
        />
      </label>
      <button>Submit</button>
    </form>
  );
};
