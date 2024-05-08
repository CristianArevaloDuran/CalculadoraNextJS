import Nav from './components/Nav';
import layoutcss from './layout.css';
import rootcss from './root.css';
import Pokemon from './components/Pokemon/Pokemon';

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
