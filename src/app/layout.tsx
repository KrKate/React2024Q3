import { Metadata } from 'next';
import { ReactNode, Suspense } from 'react';
import { Inter } from 'next/font/google';
import ReduxProvider from '../redux/store/reduxProvider';
import { ThemeProvider } from '../context/context';
import Loader from '../components/Loader/Loader';

const inter = Inter({ subsets: ['latin'], weight: ['400'] });

export const metadata: Metadata = {
  title: 'Product market',
  description: 'Amazing market!',
};

function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/assets/favicon.png" />
      </head>
      <ThemeProvider>
        <Suspense fallback={<Loader />}>
          <body className={inter.className}>
            <ReduxProvider>{children}</ReduxProvider>
          </body>
        </Suspense>
      </ThemeProvider>
    </html>
  );
}

export default RootLayout;
