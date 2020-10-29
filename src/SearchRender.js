import React, { Component } from 'react'

export default class SearchRender extends Component {
    render() {
        return (
            <div>
                <form>
                     <label htmlFor="search">Search for a Pokemon</label>
                     <input type="text" onChange={this.props.handleChange}/> 
                     <button>submit</button>
                </form>
            </div>


        )
    }
}

