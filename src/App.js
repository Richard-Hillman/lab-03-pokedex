import React from 'react';
import './App.css';
import MyHeader from  './MyHeader.js'
import MyFooter from './MyFooter.js'
import PokemonList from './PokemonList.js'
import pokemon from './Data.js'
import DropDown from './DropDown.js'
import SearchRender from './SearchRender';


export default class App extends React.Component {
// This is the coo Zone, I think
// set m zero state filter so all pokemon show on initial load
state = { 
  filter:'',
  sortType:'',
  order:'',
  inputValue:'',
  attack:'',
  defense:'',
}

    handleSubmit = e => {
      e.preventDefault();
      this.setState({
        form:e.target.value
      })
    }

    handleChangeAttack = e => {
      e.preventDefault();
      this.setState({
        form:e.target.value
      })
    }

    handleChangeDefense = e => {
      e.preventDefault();
      this.setState({
        form:e.target.value
      })
    }

    handleChangeHP = e => {
      e.preventDefault();
      this.setState({
        form:e.target.value
      })
    }

    handleSubmit = e => {
      e.preventDefault();
      this.setState({
        form:e.target.value
      })
    }

    handleOrder = e => {
      this.setState({
        order: e.target.value
      })
    }

    handleChange = e => {
      this.setState({
        filter: e.target.value
      })
    }

    handleSortType = e => {
        this.setState({
          sortType: e.target.value
        })
    }


  render() {
    return (
      <>
     
      <div>
        <SearchRender
        handleSubmit={this.handleSubmit}
        handleChange={this.handleChange}
        handleChangeAttack={this.handleChangeAttack}
        handleChangeDefense={this.handleChangeDefense}
        />

        <DropDown handlechange={this.handleChange} />
      </div>

{/* ===================================================================================================== */}

        <div className="main">

        <h1>Confessions 2020: I Used to steal Pokemon Cards, I'm sorry</h1>   
    
        <MyHeader />  
        
        <div className="pokemonMain">
        <PokemonList
         pokemon={pokemon}
         filter={this.state.filter}
         sortType={this.state.sortType}
         order={this.state.order} />
        </div>

      
        <sort 
        handleSortType={this.handleSortType}
        handleOrder={this.handleOrder} />

        <MyFooter />

       </div>
     </>
  );
}

}