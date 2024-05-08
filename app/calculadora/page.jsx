'use client'

import './calc.css';
import Calculadora from "../components/Calculadora/Calculadora";

export default function Home() {
  return (
    <div>
      <h1 className="title">Calculadora simple</h1>
      <Calculadora />
    </div>
  );
}
