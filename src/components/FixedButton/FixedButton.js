import React from 'react';

import Button from '../Button';

import classes from './FixedButton.scss';

export default class FixedButton extends React.Component {
  render() {
    return (
      <div className={classes.FixedButton}>
        <Button {...this.props}>{this.props.children}</Button>
      </div>
    );
  }
}

FixedButton.propTypes = {
  children: React.PropTypes.any
};
