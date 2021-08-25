import data from './data';
import React, { Component } from 'react';
import Opciones from './Opciones';
import Recordatorio from './Recordatorio';

class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            historia: 0,
            opcionA: 0,
            opcionB: 0,
        }
    };

    handleClickA = () => {
        this.setState( {
           historia: this.state.historia +1
            }
        )
    }

    render() {
        return (
        <div>
            
            <h1>{data[this.state.historia].historia}</h1>
            <Opciones handleClick={this.handleClickA} opcionA={data[this.state.opcionA].opcionA} opcionB={data[this.state.opcionB].opcionB}/>
            <Recordatorio />
        </div>
    )
    }
}

export default Main;