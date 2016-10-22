import React from 'react';

import classes from './Footer.scss';

export default class Footer extends React.Component {
  render() {
    return (
      <div className={classes.Footer}>
        <a href="https://github.com/JulianMayorga">Made with ❤ by @Julian</a>
      </div>
    );
  }
}
