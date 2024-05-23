'use client'

import Link from 'next/link';
import './nav.css';
import { usePathname } from 'next/navigation';

function handleClick() {
    document.querySelector('.navBtn svg').classList.toggle('active');
    document.querySelector('.nav-content').classList.toggle('active');
}

const links = [
    {
        name: 'Calculadora',
        url: '/calculadora',
    },
    {
        name: 'Estadistica',
        url: '/estadistica',
    },
    {
        name: 'Física',
        url: '/fisica',
    }
];


export default function Nav() {
    
    const pathname = usePathname();

    return (
        <>
            <div className="navBtn" onClick={handleClick}>
                <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#5f6368"><path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z"/></svg>
            </div>
            <div className="nav-content">
                <h1>Calculadoras</h1>
                {
                    links.map((link, index) => (
                        <Link key={index}  className={pathname == link.url ? 'active' : null} href={link.url}>{link.name}</Link>
                    ))
                }
            </div>
        </>
    );
}