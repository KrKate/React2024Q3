import { ReactNode } from 'react';
import { vi } from 'vitest';
import { renderHook } from '@testing-library/react';
import useTheme from '../context/contextHook';
import { ThemeContext, ThemeProvider } from '../context/context';

describe('useTheme', () => {
  it('Returns the context value', () => {
    const themeValue = { isDarkMode: false, toggleTheme: vi.fn() };

    const { result } = renderHook(() => useTheme(), {
      wrapper: ({ children }: { children: ReactNode }) => (
        <ThemeProvider>
          <ThemeContext.Provider value={themeValue}>
            {children}
          </ThemeContext.Provider>
        </ThemeProvider>
      ),
    });

    expect(result.current).toEqual(themeValue);
  });

  it('Throws an error if the context is not found', () => {
    expect(() => renderHook(() => useTheme()).result).toThrow('Error(((');
  });
});
