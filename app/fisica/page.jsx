'use client'

import './fisica.css'
import Calculadora from "../components/Calculadora/Calculadora";
import { useEffect, useRef, useState } from 'react';
import convert from 'convert-units';

export default function Fisica() {
    const calc = useRef(null);
    const btn = useRef(null);

    const show = () => {
        calc.current.classList.toggle('active');
        btn.current.classList.toggle('active');
    }

    const [type, setType] = useState('length');
    const [from, setFrom] = useState('mm');
    const [to, setTo] = useState('mm');
    const resRef = useRef(null);
    const [value, setValue] = useState(0);

    const convertTypes = [
        {value: 'length', label: 'Longitud'},
        {value: 'weight', label: 'Peso'},
        {value: 'time', label: 'Tiempo'}
    ];

    const timeUnits = [
        {value: 's', label: 'Segundos'},
        {value: 'min', label: 'Minutos'},
        {value: 'h', label: 'Horas'},
        {value: 'd', label: 'Días'},
        {value: 'week', label: 'Semanas'}
    ];

    const weightUnits = [
        {value: 'g', label: 'Gramos'},
        {value: 'kg', label: 'Kilogramos'},
        {value: 'lb', label: 'Libras'},
        {value: 'oz', label: 'Onzas'}
    ];

    const lengthUnits = [
        {value: 'mm', label: 'Milímetros'},
        {value: 'cm', label: 'Centímetros'},
        {value: 'm', label: 'Metros'},
        {value: 'km', label: 'Kilómetros'},
        {value: 'in', label: 'Pulgadas'},
        {value: 'ft', label: 'Pies'},
        {value: 'mi', label: 'Millas'}
    ];

    const changeType = (e) => {
        if (e.target.value === 'length') {
            setFrom('mm');
            setTo('mm');
            setType('length');
        } else if (e.target.value === 'weight') {
            setFrom('g');
            setTo('g');
            setType('weight');
        } else if (e.target.value === 'time') {
            setFrom('s');
            setTo('s');
            setType('time');
        }
    }

    useEffect(() => {
        if (value !== 0) {
            resRef.current.value = convert(value).from(from).to(to);
        }
    }, [value]);

    return (
        <div className='container'>
            <div className="floatCalc">
                <div className="hide" ref={calc}>
                    <Calculadora />
                </div>
                <div className="calcBtn" onClick={show}>
                    <svg ref={btn} xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#5f6368"><path d="M320-240h60v-80h80v-60h-80v-80h-60v80h-80v60h80v80Zm200-30h200v-60H520v60Zm0-100h200v-60H520v60Zm44-152 56-56 56 56 42-42-56-58 56-56-42-42-56 56-56-56-42 42 56 56-56 58 42 42Zm-314-70h200v-60H250v60Zm-50 472q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h560q33 0 56.5 23.5T840-760v560q0 33-23.5 56.5T760-120H200Zm0-80h560v-560H200v560Zm0-560v560-560Z"/></svg>
                </div>
            </div>
            <h1 className='title'>Convertidor de 
                <select name="type" onChange={(e) => changeType(e)}>
                    {
                        convertTypes.map((type, index) => {
                            return <option key={index} value={type.value}>{type.label}</option>
                        })
                    }
                </select>
            </h1>
            <div className='converter'>
                <h2>Convertir</h2>
                <div className='unitContainer'>
                    <div className='from'>
                        <input type='number' min={0} placeholder='...' onChange={(e) => setValue(e.target.value)} />
                        <select name="from" onChange={(e) => setFrom(e.target.value)}>
                            {
                                type === 'length' ? lengthUnits.map((unit, index) => {
                                    return <option key={index} value={unit.value}>{unit.label}</option>
                                }) : type === 'weight' ? weightUnits.map((unit, index) => {
                                    return <option key={index} value={unit.value}>{unit.label}</option>
                                }) : type === 'time' ? timeUnits.map((unit, index) => {
                                    return <option key={index} value={unit.value}>{unit.label}</option>
                                }) : ''
                            }
                        </select>
                    </div>
                    <div className='equalSign'>
                        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#5f6368"><path d="M80-120v-80h360v-447q-26-9-45-28t-28-45H240l120 280q0 50-41 85t-99 35q-58 0-99-35t-41-85l120-280h-80v-80h247q12-35 43-57.5t70-22.5q39 0 70 22.5t43 57.5h247v80h-80l120 280q0 50-41 85t-99 35q-58 0-99-35t-41-85l120-280H593q-9 26-28 45t-45 28v447h360v80H80Zm585-320h150l-75-174-75 174Zm-520 0h150l-75-174-75 174Zm335-280q17 0 28.5-11.5T520-760q0-17-11.5-28.5T480-800q-17 0-28.5 11.5T440-760q0 17 11.5 28.5T480-720Z"/></svg>
                    </div>
                    <div className='to'>
                        <input type='number' min={0} placeholder='...' disabled ref={resRef}/>
                        <select name="to" onChange={(e) => setTo(e.target.value)}>
                            {
                                type === 'length' ? lengthUnits.map((unit, index) => {
                                    return <option key={index} value={unit.value}>{unit.label}</option>
                                }) : type === 'weight' ? weightUnits.map((unit, index) => {
                                    return <option key={index} value={unit.value}>{unit.label}</option>
                                }) : type === 'time' ? timeUnits.map((unit, index) => {
                                    return <option key={index} value={unit.value}>{unit.label}</option>
                                }) : ''
                            }
                        </select>
                    </div>
                </div>
            </div>
        </div>
    );
}