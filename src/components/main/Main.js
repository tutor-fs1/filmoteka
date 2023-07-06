import { Component } from "react";
import "./Main.css";
import { Movie } from "./movie/Movie";
export class Main extends Component {
  constructor() {
    super();
  }
  render() {
    return (
      <main>
        {this.props.isLoading && <h2>Se incarca filmele</h2>}
        {this.props.hasError && <h2>Eroare la incarcarea filmelor</h2>}
        {this.props.data &&
          this.props.data.results.map(film => (
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
