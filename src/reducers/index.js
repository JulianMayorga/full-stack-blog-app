export default function app(state = {}, action) {
  switch (action.type) {
    case 'FETCH_POSTS_SUCCESS':
      return Object.assign({}, state, { posts: action.posts });
    default:
      return state;
  }
}
