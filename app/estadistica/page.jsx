'use client'

import './estadistica.css'
import Calculadora from "../components/Calculadora/Calculadora";
import { useRef } from 'react';

export default function Estadistica() {

    const calc = useRef(null);
    const btn = useRef(null);

    const show = () => {
        calc.current.classList.toggle('active');
        btn.current.classList.toggle('active');
    }

    return (
        <div className="container">
            <div className="floatCalc">
                <div className="hide" ref={calc}>
                    <Calculadora />
                </div>
                <div className="calcBtn" onClick={show}>
                    <svg ref={btn} xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#5f6368"><path d="M320-240h60v-80h80v-60h-80v-80h-60v80h-80v60h80v80Zm200-30h200v-60H520v60Zm0-100h200v-60H520v60Zm44-152 56-56 56 56 42-42-56-58 56-56-42-42-56 56-56-56-42 42 56 56-56 58 42 42Zm-314-70h200v-60H250v60Zm-50 472q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h560q33 0 56.5 23.5T840-760v560q0 33-23.5 56.5T760-120H200Zm0-80h560v-560H200v560Zm0-560v560-560Z"/></svg>
                </div>
            </div>
            <div className='inputContainer'>
                <p>Ingrese los datos separados por comas</p>
                <textarea name="" id="" cols="30" rows="10" placeholder='Ej. 20, 30, 21 ...'></textarea>
            </div>
        </div>
    );
}