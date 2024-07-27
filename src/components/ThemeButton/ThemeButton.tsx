import useTheme from '../../context/contextHook';

function ThemeToggleButton() {
  const { isDarkMode, toggleTheme } = useTheme();

  return (
    <button type="button" onClick={toggleTheme}>
      Switch to {isDarkMode ? 'Light' : 'Dark'} Mode
    </button>
  );
}

export default ThemeToggleButton;
