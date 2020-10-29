import React, { Component } from 'react'
// import pokemon from './Data.js';
import MyPokemonArticle from './MyPokemonArticle.js'

// This is a presentational component 
// A Component that takes in the props and displays them 

export default class PokemonList extends Component {
    render() {

        
        
        
        return (
            <>
            {
                 this.props.pokemon.filter((pokemon) => {
                    if (!this.props.name) return true;
                    if(this.props.filter === pokemon.pokemon) return true;
                    return false;
                })
            
                    .sort((a, b) => {
                        if (this.props.order ==='descending') {
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

// const filteredPokemon = this.props.pokemon.filter((pokemon) => {

    // if (!this.props.filter) return true;

    // if (pokemon.attack === this.props.filter) return true;

    // if(pokemon.defense === this.props.filter) return true;

    // if(pokemon.hp === this.props.filter) return true;

    // if (pokemon.name === this.props.filter) return true;

    // return false