import { connect } from 'react-redux';

import PostsPage from './PostsPage';
import { fetchPosts } from '../../actions';

const mapStateToProps = (state) => {
  return {
    posts: state.posts
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchPosts: () => {
      fetchPosts(dispatch);
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PostsPage);
