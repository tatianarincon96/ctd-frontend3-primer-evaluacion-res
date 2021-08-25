import React, { Component } from "react";

class Opciones extends Component {
  render() {
    return (
      <div className="opciones">
        <button id="A" className="botones" onClick={this.props.handleClick}>
          A
        </button>
        <h2>{this.props.opcionA}</h2>
        <button id="B" className="botones" onClick={this.props.handleClick}>
          B
        </button>
        <h2>{this.props.opcionB}</h2>
      </div>
    );
  }
}

export default Opciones;
