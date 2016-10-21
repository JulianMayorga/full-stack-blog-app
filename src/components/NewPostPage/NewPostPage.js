import React from 'react';
import { RouteTransition, presets } from 'react-router-transition';
import { MegadraftEditor, editorStateFromRaw, editorStateToJSON } from 'megadraft';
import classNames from 'classnames';

import FixedButton from '../FixedButton';

import classes from './NewPostPage.scss';

const initial = {
  entityMap: {},
  blocks: [
    {
      'key': 'ag6qs',
      'text': 'Title',
      'type': 'header-two',
      'depth': 0,
      'inlineStyleRanges': [],
      'entityRanges': []
    },
    {
      'key': '59kd9',
      'text': 'Tell your story...',
      'type': 'unstyled',
      'depth': 0,
      'inlineStyleRanges': [],
      'entityRanges': []
    }
  ]
};

export default class NewPostPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: editorStateFromRaw(initial)
    };
    this.onChange = this.onChange.bind(this);
    this.publish = this.publish.bind(this);
  }
  onChange(value) {
    this.setState({ value });
  }
  publish() {
    this.props.publish(JSON.parse(editorStateToJSON(this.state.value)))
      .then(() => this.props.router.push('/'));
  }
  render() {
    return (
      <section className={classes.NewPostPage}>
        <FixedButton className={classNames(classes.Button, 'btn')} onClick={this.publish}>{'{ Publish }'}</FixedButton>
        <RouteTransition {...presets.pop} pathname={this.props.location.pathname}>
          <MegadraftEditor
            editorState={this.state.value}
            onChange={this.onChange}
            />
        </RouteTransition>
      </section>
    );
  }
}

NewPostPage.propTypes = {
  router: React.PropTypes.shape({
    push: React.PropTypes.func.isRequired
  }).isRequired,
  location: React.PropTypes.shape({
    pathname: React.PropTypes.string
  }),
  publish: React.PropTypes.func
};
