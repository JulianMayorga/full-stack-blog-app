import React from 'react';
import classNames from 'classnames';

import classes from './Button.scss';

export default class Button extends React.Component {
  render() {
    return (
      <button className={classNames(classes.Button, this.props.className)} onClick={this.props.onClick}>{this.props.children}</button>
    );
  }
}

Button.propTypes = {
  className: React.PropTypes.string,
  onClick: React.PropTypes.func,
  children: React.PropTypes.any
};
