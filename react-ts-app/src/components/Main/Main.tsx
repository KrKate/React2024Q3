import React from 'react';
import styles from './Main.module.css';

class Main extends React.PureComponent {
  render() {
    return (
      <div className={styles.header}>
        <input placeholder="Enter something" type="text" />
        <button type="button">Search</button>
      </div>
    );
  }
}

export default Main;
