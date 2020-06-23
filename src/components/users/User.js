import React, { Fragment, useContext, useEffect } from 'react';
import Spinner from '../layouts/Spinner';
import { Link } from 'react-router-dom';
import Repos from '../repos/Repos';
import GithubContext from '../../context/github/githubContext';

const User = ({ match }) => {
  const githubContext = useContext(GithubContext);
  useEffect(() => {
    githubContext.getUser(match.params.login);
    githubContext.getUserRepos(match.params.login);
    //eslint-disable-next-line
  }, []);

  const {
    name,
    avatar_url,
    company,
    location,
    bio,
    blog,
    login,
    html_url,
    followers,
    following,
    public_repos,
    public_gists,
    hireable,
  } = githubContext.user;
  const { loading } = githubContext.loading;

  if (loading) return <Spinner />;
  return (
    <Fragment>
      <Link to='/' className='btn btn-light'>
        back to search
      </Link>
      Hireable?{' '}
      {hireable ? (
        <i className='fas fa-check text-success' />
      ) : (
        <i className='fas fa-times-circle text-danger' />
      )}
      <div className='card grid-2'>
        <div className='all-center'>
          <img
            src={avatar_url}
            alt=''
            className='round-img'
            style={{ width: '150px' }}
          />
          <h1>{name}</h1>
          <p>location: {location}</p>
        </div>
        <div>
          {bio && (
            <Fragment>
              <h3>Bio</h3>
              <p>{bio}</p>
            </Fragment>
          )}
          <a href={html_url} className='btn btn-dark my-1'>
            visit Github profile
          </a>
          <ul>
            <li>
              {login && (
                <Fragment>
                  <strong>Username:</strong>
                  {login}
                </Fragment>
              )}
            </li>
          </ul>
          <ul>
            <li>
              {company && (
                <Fragment>
                  <strong>Company:</strong>
                  {company}
                </Fragment>
              )}
            </li>
          </ul>
          <ul>
            <li>
              {blog && (
                <Fragment>
                  <strong>Website:</strong>
                  <a href={blog}>{blog}</a>
                </Fragment>
              )}
            </li>
          </ul>
        </div>
      </div>
      <div className='card text-center'>
        <div className='badge badge-primary'>Followers: {followers}</div>
        <div className='badge badge-success'>Following: {following}</div>
        <div className='badge badge-light'>Public Repos: {public_repos}</div>
        <div className='badge badge-dark'>Public Gists: {public_gists}</div>
      </div>
      <Repos repos={githubContext.repos}></Repos>
    </Fragment>
  );
};

export default User;
