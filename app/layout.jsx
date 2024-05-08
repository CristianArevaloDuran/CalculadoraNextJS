import Nav from './components/Nav/Nav';
import Pokemon from './components/Pokemon/Pokemon';
import './layout.css';
import './root.css';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>Calculadora</title>
      </head>
      <body>
        <div className='container'>
          <Nav />
          <Pokemon />
          {children}
        </div>
      </body>
    </html>
  );
}
