import React, { Component } from 'react'

// This is my basic singular pokemon article output. I use portals to grab the information from the api data.  /

export default class MyPokemonArticle extends Component {
    render() {
        return (
            <div className="pokemonArticle">
                <img className='PokemonImg' src={this.props.image} alt={this.props.alt} />
                <div>Pokemon Name:{this.props.pokemonName}</div>
                <div>Attack:{this.props.attack}</div>
                <div>Defense:{this.props.attack}</div>
                <div>HP:{this.props.hp}</div>
            </div>
        )
    }
}
