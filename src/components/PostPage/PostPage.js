import React from 'react';
import { RouteTransition, presets } from 'react-router-transition';
import { MegadraftEditor, editorStateFromRaw } from 'megadraft';

import NewPostButton from '../NewPostButton';
import { post as postPropType } from '../propTypes';

import classes from './PostPage.scss';

export default class PostPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: editorStateFromRaw(props.post.editorState)
    };
    this.onChange = this.onChange.bind(this);
  }
  onChange(value) {
    this.setState({ value });
  }
  render() {
    return (
      <section>
        <NewPostButton />
        <RouteTransition className={classes.PostPage} {...presets.pop} pathname={this.props.location.pathname}>
          <MegadraftEditor
            readOnly
            editorState={this.state.value}
            onChange={this.onChange}
            />
        </RouteTransition>
      </section>
    );
  }
}

PostPage.propTypes = {
  post: postPropType,
  location: React.PropTypes.shape({
    pathname: React.PropTypes.string
  })
}
