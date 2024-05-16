'use client';

import Nav from './components/Nav/Nav';
import Pokemon from './components/Pokemon/Pokemon';
import './layout.css';
import './root.css';
import {usePathname} from 'next/navigation';

export default function RootLayout({ children }) {
  const pathname = usePathname();

  return (
    <html lang="es">
      <head>
        <title>Calculadora</title>
        <link rel="shortcut icon" href="./favicon.ico" type="image/x-icon" />
      </head>
      <body>
        <div className='container'>
          <Nav />
          {pathname != '/' && <Pokemon />}
          {children}
        </div>
      </body>
    </html>
  );
}
