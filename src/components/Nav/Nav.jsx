import React, { PureComponent } from 'react';
import Type from 'prop-types';
import classNames from 'classnames/bind';
import styles from './Nav.module.scss';

const cn = classNames.bind(styles);

class Nav extends PureComponent {
  static propTypes = {
    activeMenuId: Type.number.isRequired,
    items: Type.arrayOf(Type.string).isRequired,
  };

  render() {
    const { activeMenuId, items } = this.props;

    return (
      <nav className={styles.nav}>
        {items.map((item, idx) => {
          /* eslint-disable */
          return (
            <a
              key={idx}
              href="#"
              className={cn({
                link: true,
                active: activeMenuId === idx,
              })}
            >
              {item}
            </a>
          );
          /* eslint-enable */
        })}
      </nav>
    );
  }
}

export default Nav;
