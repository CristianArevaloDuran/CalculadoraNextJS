'use client'

import { useRef } from 'react';
import './calculadora.css';




export default function Calculadora() {
    
    const display = useRef(null);

    return (
        <div class="calculadora">
            <div class="display">
                <span class="after" id="copy">
                    <input value='' type="text" ref={display} disabled />
                </span>
            </div>
            <div class="keys">
                <button class="key" onclick=''>7</button>
                <button class="key" onclick=''>8</button>
                <button class="key" onclick=''>9</button>
                <button class="key" onclick=''>/</button>
                <button class="key" onclick=''>4</button>
                <button class="key" onclick=''>5</button>
                <button class="key" onclick=''>6</button>
                <button class="key" onclick=''>x</button>
                <button class="key" onclick=''>1</button>
                <button class="key" onclick=''>2</button>
                <button class="key" onclick=''>3</button>
                <button class="key" onclick=''>-</button>
                <button class="key" onclick=''>0</button>
                <button class="key" onclick=''>.</button>
                <button class="key" onclick=''>=</button>
                <button class="key" onclick=''>+</button>
                <button class="key" onclick=''>
                    <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="M280-120q-33 0-56.5-23.5T200-200v-520h-40v-80h200v-40h240v40h200v80h-40v520q0 33-23.5 56.5T680-120H280Zm400-600H280v520h400v-520ZM360-280h80v-360h-80v360Zm160 0h80v-360h-80v360ZM280-720v520-520Z"/></svg>
                    C
                </button>
                <button class="key" onclick=''>
                    <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="M360-200q-20 0-37.5-9T294-234L120-480l174-246q11-16 28.5-25t37.5-9h400q33 0 56.5 23.5T840-680v400q0 33-23.5 56.5T760-200H360Zm400-80v-400 400Zm-400 0h400v-400H360L218-480l142 200Zm96-40 104-104 104 104 56-56-104-104 104-104-56-56-104 104-104-104-56 56 104 104-104 104 56 56Z"/></svg>
                    Del
                </button>
            </div>
        </div>
    );
}