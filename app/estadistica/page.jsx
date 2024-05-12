'use client'

import './estadistica.css'
import Calculadora from "../components/Calculadora/Calculadora";
import { useRef, useState } from 'react';
import CalcEstadistica from '../components/CalcEstadistica/CalcEstadistica';

export default function Estadistica() {

    const calc = useRef(null);
    const btn = useRef(null);
    const datos = useRef(null);
    const moveUp = useRef(null);

    const [data, setData] = useState([]);

    const show = () => {
        calc.current.classList.toggle('active');
        btn.current.classList.toggle('active');
    }

    const btnSetData = () => {
        if (datos.current.value.trim().length != 0) {
            setData(datos.current.value.split(',').map(Number));
            moveUp.current.classList.add('moveUp');
        }
    }

    return (
        <div className="container" ref={moveUp}>
            <div className="floatCalc">
                <div className="hide" ref={calc}>
                    <Calculadora />
                </div>
                <div className="calcBtn" onClick={show}>
                    <svg ref={btn} xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#5f6368"><path d="M320-240h60v-80h80v-60h-80v-80h-60v80h-80v60h80v80Zm200-30h200v-60H520v60Zm0-100h200v-60H520v60Zm44-152 56-56 56 56 42-42-56-58 56-56-42-42-56 56-56-56-42 42 56 56-56 58 42 42Zm-314-70h200v-60H250v60Zm-50 472q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h560q33 0 56.5 23.5T840-760v560q0 33-23.5 56.5T760-120H200Zm0-80h560v-560H200v560Zm0-560v560-560Z"/></svg>
                </div>
            </div>
            <div className='inputContainer'>
                <p>Ingresa los datos que deseas <br /> utilizar <span> separados por comas: </span></p>
                <textarea placeholder='Ej. 20, 30, 21 ...' ref={datos}></textarea>
                <button onClick={btnSetData}>
                    <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#5f6368"><path d="M400-240v-80h62l105-120-105-120h-66l-64 344q-8 45-37 70.5T221-120q-45 0-73-24t-28-64q0-32 17-51.5t43-19.5q25 0 42.5 17t17.5 41q0 5-.5 9t-1.5 9q5-1 8.5-5.5T252-221l62-339H200v-80h129l21-114q7-38 37.5-62t72.5-24q44 0 72 26t28 65q0 30-17 49.5T500-680q-25 0-42.5-17T440-739q0-5 .5-9t1.5-9q-6 2-9 6t-5 12l-17 99h189v80h-32l52 59 52-59h-32v-80h200v80h-62L673-440l105 120h62v80H640v-80h32l-52-60-52 60h32v80H400Z"/></svg>
                    Calcular
                </button>
            </div>
            <div className='resultsContainer'>
                <CalcEstadistica data={data} />
            </div>
        </div>
    );
}