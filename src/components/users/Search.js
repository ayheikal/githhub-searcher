import React, { useState } from 'react';
import PropTypes from 'prop-types';

const Search = ({ setAlert, searchUsers, showClear, clearSearch }) => {
  const [text, setText] = useState('');

  const textHandler = (e) => {
    setText(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    if (text === '') {
      setAlert('search can not be empty', 'light');
    } else {
      searchUsers(text);
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
        {showClear && (
          <button className='btn btn-light btn-block' onClick={clearSearch}>
            clear
          </button>
        )}
      </form>
    </div>
  );
};

export default Search;
Search.propTypes = {
  searchUsers: PropTypes.func.isRequired,
  clearSearch: PropTypes.func.isRequired,
  showClear: PropTypes.bool.isRequired,
  setAlert: PropTypes.func.isRequired,
};
