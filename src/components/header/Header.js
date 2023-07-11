import { Navigation } from "./navigation/Navigation";
import { SearchForm } from "./search-form/SearchForm";
import "./Header.css";
import { LiveSearch } from "../common/exemple/LiveSearch";
import { Component } from "react";
import { RandomMovie } from "./random-movie/RandomMovie";

export class Header extends Component {
  state = {
    showRandom: false,
  };
  toggleRandomMovie = () => {
    this.setState({ showRandom: !this.state.showRandom });
  };

  render() {
    return (
      <header className="header">
        {/* <LiveSearch /> */} {/* exemplu similar cu tema */}
        <SearchForm
          searchTerm={this.props.searchTerm}
          handleChange={this.props.handleChange}
        />
        <Navigation />
        <h1>filmoteka</h1>
        <button onClick={this.toggleRandomMovie}>Afiseaza film random</button>
        {this.state.showRandom && (
          <RandomMovie totalPages={this.props.totalPages} />
        )}
      </header>
    );
  }
}
