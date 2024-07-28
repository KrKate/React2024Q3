import { useContext } from 'react';
import { ThemeContext } from './context';

const useTheme = () => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('Error(((');
  }
  return context;
};
export default useTheme;
