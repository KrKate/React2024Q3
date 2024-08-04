import { useContext } from 'react';
import { ThemeContext } from './context';

const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('Error((( Use it width Provider!');
  }
  return context;
};
export default useTheme;
