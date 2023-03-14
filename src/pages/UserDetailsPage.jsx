import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, useNavigate } from 'react-router-dom';

import { deleteUser, getUserById } from '../redux/users/users-operations';
import { selectCurrentUser } from '../redux/users/users-selectors';

export const UserDetailsPage = () => {
  const dispatch = useDispatch();
  const { id } = useParams();

  useEffect(() => {
    dispatch(getUserById(id));
  }, [dispatch, id]);

  const navigate = useNavigate();
  const user = useSelector(selectCurrentUser);

  const onDeleteUser = id => {
    dispatch(deleteUser(id));
    navigate('/users');
  };

  return (
    <>
      {user && (
        <div>
          <img src={user.avatar} alt="" />
          <p>{user.name}</p>
          <p>{user.phone}</p>
          <p>{user.email}</p>
          <p>{user.address}</p>
          <button type="button" onClick={() => onDeleteUser(id)}>
            Delete
          </button>
        </div>
      )}
    </>
  );
};
