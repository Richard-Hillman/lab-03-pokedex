import React from 'react';
import './App.css';
import MyHeader from  './MyHeader.js'
import MyFooter from './MyFooter.js'
import PokemonList from './PokemonList.js'
import pokemon from './Data.js'
// import DropDown from './DropDown.js'
import SearchRender from './SearchRender';
import fetch from 'superagent';
import Sort from './DropDown';
// import {
//   BrowserRouter as Router,
//   Route,
//   Switch,
// } from 'react-router-dom';
// import Pokedex from './Pokedex.js';

export default class App extends React.Component {
// This is the coo Zone, I think
// set m zero state filter so all pokemon show on initial load
state = { 
  filter:'',
  form:'',
  pokemonData:[],
  sortType:'attack',
  UporDown:'asc',

}

fetchPokemon = async () => {
  const response = await fetch.get(`https://alchemy-pokedex.herokuapp.com/api/pokedex?pokemon=${this.state.form}&sort=${this.state.sortType}&direction=${this.state.UporDown}`);
  this.setState({ pokemonData: response.body.results });
} 

  componentDidMount = async () => {
    this.fetchPokemon();
}


handleSubmit = async (e) => {
  e.preventDefault();
  await this.setState({
    form:this.state.filter
  })
  await this.fetchPokemon();
}

handleChange = async (e) => {
  await this.setState({
    filter: e.target.value
  })
  await this.fetchPokemon();
}

handleSortType = async (e) => {
  await this.setState({
    sortType: e.target.value
  })
  await this.fetchPokemon();
}

 handleOrder = async (e) => {
  await this.setState({
    UporDown: e.target.value
  })
    await this.fetchPokemon();
  }

  render() {

    console.log(this.state);
    return (
      <>
     
      <div>
        <SearchRender
        submitProp={this.handleSubmit}
        handleChange={this.handleChange}
        // handleChangeAttack={this.handleChangeAttack}
        // handleChangeDefense={this.handleChangeDefense}
        />

      <Sort 
        handleSortType={this.handleSortType}
        handleOrder={this.handleOrder} /> 
    
      </div>

{/* ===================================================================================================== */}

        <div className="main">

        <h1>Confessions 2020: I Used to steal Pokemon Cards, I'm sorry</h1>   
    
        <MyHeader />  
        
        <div className="pokemonMain">
        <PokemonList
         pokemon={this.state.pokemonData}
        />
        </div>

        <MyFooter />

       </div>
     </>
  );
}

}



    // handleChangeAttack = e => {
    //   e.preventDefault();
    //   this.setState({
    //     form:e.target.value
    //   })
    // }

    // handleChangeDefense = e => {
    //   e.preventDefault();
    //   this.setState({
    //     form:e.target.value
    //   })
    // }

    // handleChangeHP = e => {
    //   e.preventDefault();
    //   this.setState({
    //     form:e.target.value
    //   })
    // }
    
   

   