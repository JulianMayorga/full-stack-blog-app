import React from 'react';

import Header from '../Header';
import Footer from '../Footer';

import classes from './Layout.scss';

export default class Layout extends React.Component {
  render() {
    return (
      <div className={classes.Layout}>
        <Header />
        {this.props.children}
        <Footer />
      </div>
    );
  }
}

Layout.propTypes = {
  children: React.PropTypes.object
};
