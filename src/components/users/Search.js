import React, { useState, useContext, useEffect } from 'react';
import GithubContext from '../../context/github/githubContext';
import AlertContext from '../../context/alert/alertContext';
const Search = () => {
  const githubContext = useContext(GithubContext);
  const alertContext = useContext(AlertContext);
  const [text, setText] = useState('');

  useEffect(() => {
    githubContext.getUsers();
    //eslint-disable-next-line
  }, []);
  const textHandler = (e) => {
    setText(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    if (text === '') {
      alertContext.setAlert('search can not be empty', 'light');
    } else {
      githubContext.searchUsers(text);
      setText('');
    }
  };

  return (
    <div>
      <form className='form' onSubmit={submitHandler}>
        <input
          type='text'
          name='text'
          placeholder='search users..'
          onChange={textHandler}
        />
        <input
          type='submit'
          value='search'
          className='btn btn-dark btn-block'
        />
        {githubContext.users.length > 0 && (
          <button
            className='btn btn-light btn-block'
            onClick={githubContext.clearUsers}
          >
            clear
          </button>
        )}
      </form>
    </div>
  );
};

export default Search;
