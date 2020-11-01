import React, { Component } from 'react';

import MyPokemonArticle from './MyPokemonArticle.js';

// This is a presentational component 
// A Component that takes in the props and displays them 

export default class PokemonList extends Component {
    render() {
        return (
        <>
        {
        this.props.pokemonData.filter((pokemon) => {
            if(!this.props.filter) return true;
            if(pokemon.pokemon.includes(this.props.filter)
            ) return true;
            return false
        })

        .sort((a, b) => {
            if (this.props.sortOrder === 'descending') {
                return b[this.props.sortType] - a[this.props.sortType]
            } else {
                return a[this.props.sortType] - b[this.props.sortType]
            }
        })

            
        .map((pokemon) => 
                <MyPokemonArticle
                pokemonName={pokemon.pokemon}
                pokemonType={pokemon.type_1}
                    attack={pokemon.attack}
                    defense={pokemon.defense}
                    hp={pokemon.hp}
                    image={pokemon.url_image}
                    alt={pokemon.shape}
                    />)
        }       
                    
        </>
        )
    }
}



        // const filteredPokemonData = this.props.filteredPokemonData;
        // const property = this .props.sort2;
        //     if(thiis.props.sort1 === 'ascending'){
        //         filteredPokemonData.sort(function(a, b) {
        //             if(property === 'pokemon' || property === 'type_1'){
        //                 return a[property].localCompare(b[property])
        //             } else{
        //                 return a[property] - b[property];
        //             }
        //         })
        //     } else{
        //         filteredPokemonData.sort(function(a, b) {
        //             if(property === 'pokemon' || property === 'type_1'){
        //                 return b[property].localCompare(a[property])
        //             } else{
        //                 return b[property] - a[property];
        //             }
        //         })
        //     }

// const filteredPokemon = this.props.pokemon.filter((pokemon) => {

    // if (!this.props.filter) return true;

    // if (pokemon.attack === this.props.filter) return true;

    // if(pokemon.defense === this.props.filter) return true;

    // if(pokemon.hp === this.props.filter) return true;

    // if (pokemon.name === this.props.filter) return true;

    