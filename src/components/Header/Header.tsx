import React from 'react';
import styles from './Header.module.css';

class Header extends React.PureComponent {
  render() {
    return (
      <div className={styles.header}>
        <button type="button">Search</button>
      </div>
    );
  }
}

export default Header;
