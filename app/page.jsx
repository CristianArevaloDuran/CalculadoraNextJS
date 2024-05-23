import './root.css';
import './page.css';
import Link from 'next/link';

export default function Page() {
  return (
    <div className='landContainer'>
        <h1 className='landTitle'>
          Calculadora, calculos estadísticos y físicos
        </h1>
        <div className='landContent'>
          <div className='content'>  
            <p className='explain'>
              Esta es una calculadora que te ayudara a realizar calculos estadísticos y conversión de magnitudes físicas.
            </p>
            <p className='explain'>
              Para comenzar, selecciona una de las opciones del menu, o usa la barra de navegación en la esquina superior izquierda.
            </p>
            <div className='serviceCards'>
              <Link href='/calculadora' className='card'>
                <p>Calculadora</p>
                <img src="./imgs/calc.png" alt="calculadora" draggable='false' />
              </Link>
              <Link href='/estadistica' className='card'>
                <p>Estadística</p>
                <img src="./imgs/estats.png" alt="calculadora" draggable='false' />
              </Link>
              <Link href='/fisica' className='card'>
                <p>Física</p>
                <img src="./imgs/physics.png" alt="calculadora" draggable='false' />
              </Link>
          </div>
          </div>
        </div>
    </div>
  );
}