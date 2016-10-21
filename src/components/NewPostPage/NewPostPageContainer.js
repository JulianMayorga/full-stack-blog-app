import { connect } from 'react-redux';
import { withRouter } from 'react-router';

import NewPostPage from './NewPostPage';
import { createPost } from '../../actions';

const mapDispatchToProps = dispatch => {
  return {
    publish: post => {
      return createPost(post)(dispatch);
    }
  };
};

export default withRouter(connect(
  null,
  mapDispatchToProps
)(NewPostPage));
