import React, { Component } from "react";

class Opciones extends Component {
  render() {
    return (
      <div>
        <button id="A" onClick={this.props.handleClick}>
          A
        </button>
        <h2>{this.props.opcionA}</h2>
        <button id="B" onClick={this.props.handleClick}>
          B
        </button>
        <h2>{this.props.opcionB}</h2>
      </div>
    );
  }
}

export default Opciones;
