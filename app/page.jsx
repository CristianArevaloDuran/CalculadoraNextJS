import './root.css';
import './page.css';
import Link from 'next/link';

export default function Page() {
  return (
    <div className='landContainer'>
        <h1 className='landTitle'>
          Calculadora, calculos estadisticos y fisicos
        </h1>
        <div className='landContent'>
          <p className='explain'>
            Esta es una calculadora que te ayudara a realizar calculos estadisticos y fisicos.
          </p>
          <p className='explain'>
            Para comenzar, selecciona una de las opciones del menu.
          </p>
          <div className='serviceCards'>
            <Link href='/calculadora' className='card'>
              <p>Calculadora</p>
              <img src="./imgs/calc.png" alt="calculadora" draggable='false' />
            </Link>
            <Link href='/estadistica' className='card'>
              <p>Estadística</p>
            </Link>
            <Link href='/fisica' className='card'>
              <p>Física</p>
            </Link>
          </div>
        </div>
    </div>
  );
}