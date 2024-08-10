import { Metadata } from 'next';
import { ReactNode } from 'react';
import { Provider } from 'react-redux';
import { ThemeProvider } from '../context/context';
import { wrapper } from '../redux/store';

export const metadats: Metadata = {
  title: 'Product market',
  description: 'Amazing market!',
};

function RootLayout({ children }: { children: ReactNode }) {
  const { store } = wrapper.useWrappedStore({});

  return (
    <html lang="en">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
        <link rel="icon" href="/assets/favicon.png" />
      </head>
      <body>
        <Provider store={store}>
          <ThemeProvider>{children}</ThemeProvider>
        </Provider>
      </body>
    </html>
  );
}

export default RootLayout;
