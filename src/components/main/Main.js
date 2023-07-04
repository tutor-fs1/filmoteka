import { Component } from "react";
import "./Main.css";
import { Movie } from "./movie/Movie";
export class Main extends Component {
  state = {
    isLoading: true,
    hasError: false,
    data: false,
  };

  constructor() {
    super();
    this.fetchData();
  }

  fetchData() {
    fetch(
      `https://api.themoviedb.org/3/trending/movie/day?page=1&api_key=8b218b85545392c9f8705c30fbfd1bce`
    )
      .then(response => {
        return response.json();
      })
      .then(data => {
        this.setState({
          isLoading: false,
          hasError: false,
          data: data,
        });
      })
      .catch(err => {
        this.setState({
          isLoading: false,
          hasError: true,
          data: false,
        });
      });
  }
  render() {
    return (
      <main>
        {this.state.isLoading && <h2>Se incarca filmele</h2>}
        {this.state.hasError && <h2>Eroare la incarcarea filmelor</h2>}
        {this.state.data &&
          this.state.data.results.map(film => (
            <Movie movie={film} openModal={this.props.openModal} />
          ))}
      </main>
    );
  }
}

// export const Main = () => {
//   return (
//     <main>
//       {isLoading && <h2>Se incarca filmele</h2>}
//       {hasError && <h2>Eroare la incarcarea filmelor</h2>}
//       {data && data.results.map(film => <Movie movie={film} />)}
//     </main>
//   );
// };
