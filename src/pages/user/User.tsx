import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { selectUsers, selectUsersLoading, selectUsersError, fetchUsers } from './usersSlice'; 
import { useAppDispatch } from '../../redux/store';

import './user.css'


const User: React.FC = () => {
  const dispatch = useAppDispatch();
  const users = useSelector(selectUsers)
  const isLoading  = useSelector(selectUsersLoading)
  const error = useSelector(selectUsersError)
  const navigate = useNavigate()
  
  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  const handleCardClick = (userId: number) => {
    navigate(`/user/${userId}`)
  }

  return (
    <div className="user-grid">
      {users.map(user => (
        <div key={user.id} className="user-card"
        onClick={()=>{handleCardClick(user.id)}}>
          <h2>{user.name} <span>({user.username})</span></h2>
          <p><strong>Email:</strong> {user.email}</p>
          <p><strong>Address:</strong> {user.address.street}, {user.address.suite}, {user.address.city}, {user.address.zipcode}</p>
          <p><strong>Geo:</strong> Lat {user.address.geo.lat}, Lng {user.address.geo.lng}</p>
        </div>
      ))}
    </div>
  );
}

export default User