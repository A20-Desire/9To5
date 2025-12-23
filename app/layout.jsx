import '../styles/globals.css';

export const metadata = {
  title: '9TO5 Consultancy',
  description: 'Curating Your Life: Style, Space, & Celebration',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&family=Oswald:wght@200;300;400;500;600;700&display=swap" rel="stylesheet" />
      </head>
      <body className="bg-white text-charcoal antialiased">
        {children}
      </body>
    </html>
  );
}
