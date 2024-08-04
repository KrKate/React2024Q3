import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { Provider } from 'react-redux';
import { ThemeProvider } from '../context/context';
import { wrapper } from '../redux/store';

function App({ Component, pageProps }: AppProps) {
  return (
    <Provider store={wrapper.useWrappedStore(pageProps).store}>
      <ThemeProvider>
        <Component {...pageProps} />
      </ThemeProvider>
    </Provider>
  );
}

export default wrapper.withRedux(App);
