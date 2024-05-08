'use client'

import { useState, useEffect} from "react";


export const usePokemon = () => {
    const [pokemon, setPokemon] = useState('');
    const [loading, setLoading] = useState(true);
    
    const fetchPokemon = async () => {
        setLoading(true);
        setTimeout(async () => {
            const random = Math.floor(Math.random() * 1000);
            const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${random}`);
            const data = await response.json();
            setPokemon(data);
            setLoading(false);
        }, 1000);
    }

    useEffect(() => {
        fetchPokemon();
    }, []);

    const refetchPokemon = () => {
        fetchPokemon();
    }
    
    return {pokemon, loading, refetchPokemon};
}