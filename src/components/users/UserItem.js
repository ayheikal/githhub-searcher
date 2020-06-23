import React from 'react';
import { Link } from 'react-router-dom';
const UserItem = (props) => {
  const { login, avatar_url } = props.user;

  return (
    <div className='card text-center'>
      <img
        className='round-img'
        src={avatar_url}
        style={{ width: '60px' }}
        alt='userItem'
      />
      <h3>{login}</h3>
      <Link className='btn btn-dark btn-sm my-1' to={`/user/${login}`}>
        More
      </Link>
    </div>
  );
};

export default UserItem;
