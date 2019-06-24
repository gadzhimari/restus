import React, { Component } from 'react';
import { Nav, Logo } from '..';
import styles from './Header.module.scss';

const menuLinks = ['Overview', 'Tables', 'Guests', 'Delivery'];

class Header extends Component {
  state = {
    activeMenuId: 1,
  };

  render() {
    const { activeMenuId } = this.state;

    return (
      <header className={styles.header}>
        <div className={styles.wrapper}>
          <Logo />
          <Nav activeMenuId={activeMenuId} items={menuLinks} />
        </div>
      </header>
    );
  }
}

export default Header;
