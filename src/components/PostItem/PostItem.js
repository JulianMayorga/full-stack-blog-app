import React from 'react';
import { Link } from 'react-router';
import classNames from 'classnames';

import { post as postPropType } from '../propTypes';

import classes from './PostItem.scss';

export default class PostItem extends React.Component {
  render() {
    return (
      <section className={classNames(classes.PostItem, 'panel', 'panel-default')}>
        <section className={classNames(classes.Header, 'panel-body')}>
          <h1 className={classes.Title}><Link className={classes.Link} to={`/posts/${this.props.post._id}`}>{this.props.post.editorState.blocks[0].text}</Link></h1>
          <span className={classes.Date}>{new Date(this.props.post.date).toDateString()}</span>
        </section>
        <Link className={classes.ReadMore} to={`/posts/${this.props.post._id}`}>Read more...</Link>
      </section>
    );
  }
}

PostItem.propTypes = {
  post: postPropType,
};
