import React from 'react';
import classNames from 'classnames';

import Header from '../Header';

import classes from './Layout.scss';

function onScroll(onDown, onUp) {
  let lastScrollTop = 0;
  window.onscroll = (ev) => {
    if (window.scrollY > lastScrollTop) {
      onDown(ev);
    } else if (window.scrollY < lastScrollTop) {
      onUp(ev);
    }
    lastScrollTop = window.scrollY;
  };
}

export default class Layout extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      direction: '',
    };
  }
  componentDidMount() {
    const onScrollDown = () => {
      if (this.state.direction !== 'down') {
        this.setState({ direction: 'down' });
      }
    };
    const onScrollUp = (ev) => {
      if (window.scrollY === 0) {
        this.setState({ direction: 'up' });
      }
    };
    onScroll(onScrollDown, onScrollUp);
  }
  render() {
    return (
      <div className={classNames(classes.Layout, this.state.direction)}>
        <Header />
        {this.props.children}
      </div>
    );
  }
}

Layout.propTypes = {
  children: React.PropTypes.object
};
