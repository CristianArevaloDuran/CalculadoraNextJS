'use client'

import { useRef, useState } from 'react';
import './calculadora.css';


export default function Calculadora() {
    
    const [disVal, setDisVal] = useState('');
    const display = useRef(null);
    
    const handleClick = (value) => {
        if (value === '=') {
            setDisVal(eval(disVal).toString())
            display.current.scrollLeft = display.current.scrollWidth;
        } else {
            setDisVal(disVal+value)
            display.current.scrollLeft = display.current.scrollWidth;
        }
    }
    
    const clearDisplay = () => {
        setDisVal('');
        display.current.scrollLeft = display.current.scrollWidth;
    }

    const delDisplay = () => {
        setDisVal(disVal.slice(0, -1));
        display.current.scrollLeft = display.current.scrollWidth;
    }

    const copy = () => {
        navigator.clipboard.writeText(display.current.value)
    }

    return (
        <div className="calculadora">
            <div className="display">
                <span className="after" onClick={copy}>
                    <input value={disVal} type="text" ref={display} disabled />
                </span>
            </div>
            <div className="keys">
                <button className="key" onClick={()=> handleClick('7')}>7</button>
                <button className="key" onClick={()=> handleClick('8')}>8</button>
                <button className="key" onClick={()=> handleClick('9')}>9</button>
                <button className="key" onClick={()=> handleClick('/')}>/</button>
                <button className="key" onClick={()=> handleClick('4')}>4</button>
                <button className="key" onClick={()=> handleClick('5')}>5</button>
                <button className="key" onClick={()=> handleClick('6')}>6</button>
                <button className="key" onClick={()=> handleClick('*')}>x</button>
                <button className="key" onClick={()=> handleClick('1')}>1</button>
                <button className="key" onClick={()=> handleClick('2')}>2</button>
                <button className="key" onClick={()=> handleClick('3')}>3</button>
                <button className="key" onClick={()=> handleClick('-')}>-</button>
                <button className="key" onClick={()=> handleClick('0')}>0</button>
                <button className="key" onClick={()=> handleClick('.')}>.</button>
                <button className="key" onClick={()=> handleClick('=')}>=</button>
                <button className="key" onClick={()=> handleClick('+')}>+</button>
                <button className="key" onClick={()=> clearDisplay()}>
                    <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="M280-120q-33 0-56.5-23.5T200-200v-520h-40v-80h200v-40h240v40h200v80h-40v520q0 33-23.5 56.5T680-120H280Zm400-600H280v520h400v-520ZM360-280h80v-360h-80v360Zm160 0h80v-360h-80v360ZM280-720v520-520Z"/></svg>
                    C
                </button>
                <button className="key" onClick={()=> delDisplay()}>
                    <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="M360-200q-20 0-37.5-9T294-234L120-480l174-246q11-16 28.5-25t37.5-9h400q33 0 56.5 23.5T840-680v400q0 33-23.5 56.5T760-200H360Zm400-80v-400 400Zm-400 0h400v-400H360L218-480l142 200Zm96-40 104-104 104 104 56-56-104-104 104-104-56-56-104 104-104-104-56 56 104 104-104 104 56 56Z"/></svg>
                    Del
                </button>
            </div>
        </div>
    );
}