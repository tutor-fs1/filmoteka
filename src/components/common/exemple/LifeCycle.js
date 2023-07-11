import { Component } from "react";
import "./LifeCycle.css";

export class LifeCycle extends Component {
  state = {
    color: "black",
    backgroundColor: "white",
  };
  toggleBackgroundColor = () => {
    this.setState({
      backgroundColor:
        this.state.backgroundColor === "white" ? "black" : "white",
    });
  };

  componentDidUpdate() {
    if (this.state.color === this.state.backgroundColor) {
      this.setState({
        color: this.state.color === "white" ? "black" : "white",
      });
    }
  }

  render() {
    return (
      <div className="life-cycle">
        <h1
          style={{
            color: this.state.color,
            backgroundColor: this.state.backgroundColor,
          }}
        >
          Aceasta e componenta LifeCycle
        </h1>
        <button onClick={this.toggleBackgroundColor}>Schimba componenta</button>
      </div>
    );
  }
}

// class ComponentaAAA extends Component {
//   constructor() {
//     super();
//     console.log("S-a creeat componenta AAA constructor()");
//   }
//   componentDidMount() {
//     console.log("ComponentaAAA a fost desenata prima oara componentDidMount()");
//   }
//   componentDidUpdate(prevProps, prevState, snapshot) {
//     console.log("LifeCycleChild s-a redesenat componentDidUpdate()");
//   }
//   componentWillUnmount() {
//     console.log("ComponentaAAA a fost stearsa componentWillUnmount()");
//   }
//   render() {
//     return <div>Aceasta e componenta AAA</div>;
//   }
// }

// class ComponentaBBB extends Component {
//   constructor() {
//     super();
//     console.log("S-a creeat componenta BBB constructor()");
//   }
//   componentDidMount() {
//     console.log("ComponentaBBB a fost desenata prima oara componentDidMount()");
//   }
//   componentDidUpdate(prevProps, prevState, snapshot) {
//     console.log("ComponentaBBB s-a redesenat componentDidUpdate()");
//   }
//   componentWillUnmount() {
//     console.log("ComponentaBBB a fost stearsa componentWillUnmount()");
//   }
//   render() {
//     return <div>Aceasta e Componenta BBB</div>;
//   }
// }
