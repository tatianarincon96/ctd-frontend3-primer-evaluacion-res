import data from "./data";
import React, { Component } from "react";
import Opciones from "./Opciones";
import Recordatorio from "./Recordatorio";

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      contador: 0,
      seleccionPrevia: "",
      historial: [],
    };
  }

  handleClickA = (e) => {
    const id = e.target.id;
    if (id === "A" && this.state.seleccionPrevia !== "A") {
      this.setState({
        contador: this.state.contador + 1,
        seleccionPrevia: "A",
      });
    } else if (id === "A" && this.state.seleccionPrevia === "A") {
      this.setState({
        contador: this.state.contador + 2,
      });
    } else if (id === "B" && this.state.seleccionPrevia === "A") {
      this.setState({
        contador: this.state.contador + 3,
        seleccionPrevia: "B",
      });
    } else if (id === "B") {
      this.setState({
        contador: this.state.contador + 2,
        seleccionPrevia: "B",
      });
    }
  };

  render() {
    return (
      <div>
        <h1>{data[this.state.contador].historia}</h1>
        <Opciones
          handleClick={this.handleClickA}
          opcionA={data[this.state.contador].opciones.a}
          opcionB={data[this.state.contador].opciones.b}
        />
        <Recordatorio seleccionPrevia={this.state.seleccionPrevia} />
      </div>
    );
  }
}

export default Main;
