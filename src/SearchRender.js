import React, { Component } from 'react'

export default class SearchRender extends Component {
    render() {
        return (
            <div>
                <form onSubmit={this.props.handleSubmit}>
                     <label htmlFor="search">Search for a Pokemon</label>
                     <input type="text" onChange={this.props.handleTextChange}/> 
                     <button>submit</button>
                </form>
            </div>


        )
    }
}

