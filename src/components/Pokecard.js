import React, { Component } from 'react';
import styled from 'styled-components';

const POKE_API = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/";
const Styles = styled.div`
    .Pokecard {
        background-color: #ddd;
        border: 2px solid mediumseagreen;
    }


`;

class Pokecard extends Component {
    render() {
        let imgSrc = `${POKE_API}${this.props.id}.png`
        return (
            <Styles>
                <div className="Pokecard">
                    <h1>{this.props.name}</h1>
                    <img src={imgSrc} alt={this.props.name}/>
                    <div>Type: {this.props.type}</div>
                    <div>Experience: {this.props.exp}</div>
                </div>
            </Styles>
        );
    }
}

export default Pokecard;