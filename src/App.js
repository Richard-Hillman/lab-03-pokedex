import React from 'react';
import './App.css';
import MyHeader from  './MyHeader.js'
import MyFooter from './MyFooter.js'
import PokemonList from './PokemonList.js'
import pokemonData from './Data.js'
// import DropDown from './DropDown.js'
import SearchRender from './SearchRender';

import DropDown from './DropDown';

export default class App extends React.Component {
// This is the coo Zone, I think
// set m zero state filter so all pokemon show on initial load
  state = { 
    filter:'',
    form:'',
    pokemonData:[],
    // was upordown
    sortOrder:'',
    // was sorttype
    sortType:'',
  }



  // This is where I am getting my information from and mounting it from the api.

  // handles the Submitting of my form, Sets the state and then calls for the api to get that state that has been defined by user in the form specifically. 
  handleSubmit = (e) => {
    e.preventDefault();
    this.setState({
      form: this.state.filter
    }) 
  }

  // Slightly confused here but as the user changes the text in the search bar it is working with the form to set the state for submit. This also calls the fetchpokemon which calls the api. (Do I need the api to be called or can I have the submit handle do that and the change just be set into state?)
  handleTextChange = (e) => {
    this.setState({
      filter: e.target.value
    })
  }


  // THis is handling the sorting of the ascending or descending dropdown selection and taking that value and using it to set the state for when the api is called with fetch pokemon. 
  handleOrder = (e) => {
    this.setState({
      sortOrder: e.target.value
    })
  }

  // This is handling the change in my dropdown for what category I would like to sort by. It targets user selection from dropdown and sets the state and then speaks with api to retrieve state. 
  handleSortType = (e) => {
    this.setState({
      sortType: e.target.value
    })
  }

  render() {
    return (
      <>
     
      <div className="top">

        <SearchRender
        handleSubmit={this.handleSubmit}
        handleTextChange={this.handleTextChange}
        />

        <DropDown 
        handleSortType={this.handleSortType}
        handleOrder={this.handleOrder} 
        /> 
      
       </div>

        <div className="main">

          <div className="header">
            <h1>Confessions 2020: I Used to steal Pokemon Cards, I'm sorry</h1>   
            <MyHeader />  
          </div>

          <div className="pokemonMain">
          <PokemonList
          pokemonData={pokemonData}
          filter={this.state.filter}
          sortType={this.state.sortType}
          sortOrder={this.state.sortOrder}
          />
          </div>

          <MyFooter />

       </div>
     </>
    );
  }
}




    
   

   