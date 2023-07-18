import { Component, useEffect, useState } from "react";
import { fetchRandomPage } from "../../../utils/requests/movies";

function randomIntFromInterval(min, max) {
  // min and max included
  return Math.floor(Math.random() * (max - min + 1) + min);
}

export const RandomMovie = () => {
  const [data, setData] = useState(null);
  const [intervalId, setIntervalId] = useState(null);

  const functieCareSeApeleazaLaPrimaRandare = () => {
    // aici creez un nou "interval", si tin id-ul intr-o variabila
    const temporaryIntervalId = setInterval(() => {
      const randomPage = randomIntFromInterval(1, 500);
      fetchRandomPage(randomPage).then((responseData) => {
        let randomMovie = randomIntFromInterval(0, responseData.results.length - 1);
        randomMovie = responseData.results[randomMovie];
        setData(randomMovie);
      }).catch(e => console.log(e));
    }, 500);
    // aici setez acest id in state-ul intern al componentei
    setIntervalId(temporaryIntervalId);
  }

  const functieCareSeApeleazaInainteDeStergere = () => {
    if (intervalId !== null) {
      // if(!interval) 0
      clearInterval(intervalId);
    }
  }

  useEffect(() => {
    functieCareSeApeleazaLaPrimaRandare();
    return functieCareSeApeleazaInainteDeStergere;
  }, []);

return <div style={{ border: "2px solid red", padding: "20px" }}>
    {data                        // if(data) {
      ? <div>{data.title}</div>  // afiseaza ceva } else  
      : <div>Loading</div>       // afiseaza altceva}
    }                            
</div>
}

export class RandomMovieClass extends Component {
  state = {
    data: null,
    interval: null,
  };

  componentDidMount = () => {
    const interval = setInterval(() => {
      const randomPage = randomIntFromInterval(1, 500);
        fetchRandomPage(randomPage).then(data => {
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
