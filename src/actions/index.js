import axios from 'axios';

const apiUrl = process.env.API_URL ? process.env.API_URL : window.__API_URL__;

export const FETCH_POSTS = 'FETCH_POSTS';
export const FETCH_POSTS_SUCCESS = 'FETCH_POSTS_SUCCESS';
export const FETCH_POSTS_FAILURE = 'FETCH_POSTS_FAILURE';

export const CREATE_POST = 'CREATE_POST';
export const CREATE_POST_SUCCESS = 'CREATE_POST_SUCCESS';
export const CREATE_POST_FAILURE = 'CREATE_POST_FAILURE';

export const fetchPostsSuccess = res => {
  return {
    type: FETCH_POSTS_SUCCESS,
    posts: res.data
  };
};

export const fetchPostsFailure = err => {
  return {
    type: FETCH_POSTS_FAILURE,
    err
  };
};


export const fetchPosts = dispatch => {
  dispatch({
    type: FETCH_POSTS
  });
  return axios(`${apiUrl}/posts`) // eslint-disable-line
    .then(res => dispatch(fetchPostsSuccess(res)))
    .catch(err => dispatch(fetchPostsFailure(err)));
};

export const createPostSuccess = post => {
  return {
    type: CREATE_POST_SUCCESS,
    post
  };
};

export const createPostFailure = err => {
  return {
    type: CREATE_POST_FAILURE,
    err
  };
};

export const createPost = post => dispatch => {
  dispatch({
    type: CREATE_POST,
    post
  });
  return axios.post(`${apiUrl}/posts`, post) // eslint-disable-line
    .then(res => dispatch(createPostSuccess(res)))
    .catch(err => dispatch(createPostFailure(err)));
};

