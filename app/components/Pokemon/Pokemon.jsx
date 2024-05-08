'use client';

import {usePokemon} from '../../../hooks/usePokemon/usePokemon';
import React, {useState, useEffect} from 'react';
import Loading from '../Loading/Loading';
import './pokemon.css';

export default function Pokemon() {
    
    const {pokemon, loading, refetchPokemon} = usePokemon();

    return (
        <div className='pokemonContainer'>
            {
                loading 
                    ? <Loading /> 
                    : <>
                        <div className='imgContainer'>
                            <img className='pokemonImg' src={pokemon.sprites.front_default} alt={pokemon.name} draggable='false' />
                        </div>
                        <p className='pokemonName' title={pokemon.name}>{pokemon.name}</p>
                        <div className='reload' onClick={refetchPokemon}>
                            <div className='relContainer'>
                                <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#5f6368"><path d="M480-160q-134 0-227-93t-93-227q0-134 93-227t227-93q69 0 132 28.5T720-690v-110h80v280H520v-80h168q-32-56-87.5-88T480-720q-100 0-170 70t-70 170q0 100 70 170t170 70q77 0 139-44t87-116h84q-28 106-114 173t-196 67Z"/></svg>
                                <p>Pokémon Nuevo</p>
                            </div>
                        </div>
                    </>
            }
        </div>
    )
}