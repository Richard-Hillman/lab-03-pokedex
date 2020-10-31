import React, { Component } from 'react'

export default class Sort extends Component {
    render() {
        return (
            <div>
                <select onChange={this.props.handleSortType}>
                    <option value="attack">attack</option>
                    <option value="defense">defense</option>
                    <option value="type">type</option>
                    <option value="hp">HP</option>
                </select>

                <select onChange={this.props.handleOrder}>
                    <option value="asc">ascending</option>
                    <option value="desc">descending</option>
                </select>
            </div>
        )
    }
}



































// import React, { Component } from 'react'

// export default class DropDown extends Component {
//     render() {
//         return (
//             <div>
//                 {/* <select onchange={this.props.handleChange}>
//                     <option.attack=
//                 </select> */}

//                 <select onChange={this.props.handleChange}>
//                     <option value=''>Show Me All Pokemon</option>
//                     <option value='beedrill'>Beedrill</option>
//                     <option value='blastoise'>Blastoise</option>
//                     <option value='bulbasaur'>Bulbasaur</option>
//                     <option value='caterpie'>Caterpie</option>
//                     <option value='charizard'>Charizard</option>
//                     <option value='charmander'>Charmander</option>
//                     <option value='charmeleon'>Charmeleon</option>
//                     <option value='ivysaur'>IvySaur</option>
//                     <option value='kakuna'>Kakuna</option>
//                     <option value='metapod'>Metapod</option>
//                     <option value='pidgey'>Pidgey</option>
//                     <option value='squirtle'>Squirtle</option>
//                     <option value='wartortle'>Wartortle</option>
//                     <option value='weedle'>Weedle</option>
            
               
//                 </select>
//             </div>
//         )
//     }
// }
