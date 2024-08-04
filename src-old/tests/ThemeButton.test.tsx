// import { fireEvent, render, screen } from '@testing-library/react';
// import { vi } from 'vitest';
// import ThemeButton from '../components/ThemeButton/ThemeButton';
// import { ThemeProvider, ThemeContext } from '../context/context';

// describe('ThemeToggleButton', () => {
//   it('check that this component is render', () => {
//     render(
//       <ThemeProvider>
//         <ThemeButton />
//       </ThemeProvider>
//     );

//     const button = screen.getByText('Switch to Dark Mode');
//     expect(button).toBeInTheDocument();
//   });

//   it('Check component can be accessed by the toggleTheme button', () => {
//     const toggleTheme = vi.fn();
//     const themeValue = { isDarkMode: false, toggleTheme };

//     render(
//       <ThemeProvider>
//         <ThemeContext.Provider value={themeValue}>
//           <ThemeButton />
//         </ThemeContext.Provider>
//       </ThemeProvider>
//     );

//     const button = screen.getByText('Switch to Dark Mode');
//     fireEvent.click(button);
//     expect(toggleTheme).toHaveBeenCalled();
//   });
// });
