import { Metadata } from 'next';
import { ReactNode } from 'react';
import { Inter } from 'next/font/google';
// import { ThemeProvider } from '../context/context';
import ReduxProvider from '../redux/store/reduxProvider';

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
      <body className={inter.className}>
        <ReduxProvider>{children}</ReduxProvider>
      </body>
    </html>
  );
}

export default RootLayout;
