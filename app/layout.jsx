import '../styles/globals.css';
import AppProviders from '../components/AppProviders';
import { Inter, Oswald } from 'next/font/google';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const oswald = Oswald({
  subsets: ['latin'],
  variable: '--font-oswald',
  display: 'swap',
});

export const metadata = {
  title: '9TO5 Consultancy',
  description: 'Curating Your Life: Style, Space, & Celebration',
  icons: {
    icon: '/favicon.svg',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${oswald.variable} bg-black text-white antialiased`}>
        <AppProviders>{children}</AppProviders>
      </body>
    </html>
  );
}
