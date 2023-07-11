import { Component } from "react";

function randomIntFromInterval(min, max) {
  // min and max included
  return Math.floor(Math.random() * (max - min + 1) + min);
}

export class RandomMovie extends Component {
  state = {
    data: null,
    interval: null,
  };

  componentDidMount = () => {
    const interval = setInterval(() => {
      const randomPage = randomIntFromInterval(1, 500);
      fetch(
        `https://api.themoviedb.org/3/trending/movie/day?page=${randomPage}&api_key=8b218b85545392c9f8705c30fbfd1bce`
      )
        .then(response => {
          return response.json();
        })
        .then(data => {
          this.setState({
            data: data.results[
              randomIntFromInterval(0, data.results.length - 1)
            ],
          });
        });
    }, 1000);

    this.setState({
      interval: interval,
    });
  };
  componentWillUnmount = () => {
    if (this.state.interval !== null) {
      console.log(
        "S-a declansat componentWillUnmount() si se sterge intervalul"
      );
      clearInterval(this.state.interval);
    }
  };
  render() {
    return (
      <div style={{ border: "2px solid red", padding: "20px" }}>
        {this.state.data ? (
          <div>{this.state.data.title}</div>
        ) : (
          <div>Loading</div>
        )}
      </div>
    );
  }
}
