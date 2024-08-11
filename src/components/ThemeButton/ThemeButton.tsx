'use client';

import useTheme from '../../context/contextHook';
import styles from './ThemeButton.module.css';

function ThemeToggleButton() {
  const { isDarkMode, toggleTheme } = useTheme();
  return (
    <button
      type="button"
      onClick={toggleTheme}
      className={`${styles.themeButton} ${isDarkMode ? styles.darkButton : styles.lightButton}`}
    >
      Switch to {isDarkMode ? 'Light' : 'Dark'} Mode
    </button>
  );
}

export default ThemeToggleButton;
