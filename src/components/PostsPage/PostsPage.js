import React from 'react';
import { RouteTransition, presets } from 'react-router-transition';

import PostItem from '../PostItem';
import NewPostButton from '../NewPostButton';
import { post as postPropType } from '../propTypes';

import classes from './PostsPage.scss';

export default class PostsPage extends React.Component {
  componentWillMount() {
    this.props.fetchPosts();
  }
  render() {
    return (
      <section>
        <NewPostButton />
        <RouteTransition {...presets.pop} pathname={this.props.location.pathname}>
          <section className={classes.PostsItems}>
            {this.props.posts.map(post => <PostItem key={post._id} post={post} />)}
          </section>
        </RouteTransition>
      </section>
    );
  }
}

PostsPage.defaultProps = {
  posts: []
};

PostsPage.propTypes = {
  location: React.PropTypes.shape({
    pathname: React.PropTypes.string
  }),
  posts: React.PropTypes.arrayOf(postPropType),
  fetchPosts: React.PropTypes.func
}
