'use client';

import Link from 'next/link';
import navcss from './nav.css';

function handleClick() {
    document.querySelector('.navBtn svg').classList.toggle('active');
    document.querySelector('.nav-content').classList.toggle('active');
}

const links = [
    {
        name: 'Calculadora',
        url: '/',
    },
    {
        name: 'Estadistica',
        url: '/estadistica',
    }
];

export default function Nav() {
    return (
        <>
            <div className="navBtn" onClick={handleClick}>
                <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#5f6368"><path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z"/></svg>
            </div>
            <div className="nav-content">
                <h1>Servicios</h1>
                {
                    links.map((link, index) => (
                        <Link key={index} href={link.url}>{link.name}</Link>
                    ))
                }
            </div>
        </>
    );
}