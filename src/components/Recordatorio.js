import React, { Component } from "react";

class Recordatorio extends Component {
  render() {
    return (
      <div className="recordatorio">
        <h3>Selección previa: {this.props.seleccionPrevia}</h3>
        <h4>Anteriores: </h4>
        <ul>{this.props.historial}</ul>
      </div>
    );
  }
}

export default Recordatorio;
