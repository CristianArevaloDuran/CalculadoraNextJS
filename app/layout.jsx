'use client';

import Nav from './components/Nav/Nav';
import Pokemon from './components/Pokemon/Pokemon';
import './layout.css';
import './root.css';
import {usePathname} from 'next/navigation';

export default function RootLayout({ children }) {
  const pathname = usePathname();

  return (
    <html lang="en">
      <head>
        <title>Calculadora</title>
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
