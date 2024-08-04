import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { ThemeProvider } from '../context/context';
// import { wrapper } from '../redux/store';

function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default App;
