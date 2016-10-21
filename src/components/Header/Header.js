import React from 'react';
import { Link } from 'react-router';

import classes from './Header.scss';

export default class Header extends React.Component {
  render() {
    return (
      <div className={classes.Header}>
        <div className={classes.Title}><Link to="/">[ Full Stack Blog ]</Link></div>
      </div>
    );
  }
}
