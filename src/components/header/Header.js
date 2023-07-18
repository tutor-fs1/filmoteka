import { Navigation } from "./navigation/Navigation";
import { SearchForm } from "./search-form/SearchForm";
import "./Header.css";
import { Component, useState } from "react";
import { RandomMovie } from "./random-movie/RandomMovie";


export const Header = ({searchTerm, handleChange, totalPages}) => {
  const [showRandom, setShowRandom] = useState(false);
  // showRandom = false        la prima randare
  // showRandom = va fii valoare pusa cel mai recent de functia setShowState()
  const toggleShowRandom = () => {
    setShowRandom(!showRandom);
  }

  return <header className="header">
    <SearchForm
      searchTerm={searchTerm}
      handleChange={handleChange}
    />
    <Navigation />
    <h1>filmoteka</h1>
    <button onClick={toggleShowRandom}>Afiseaza film random</button>
    {showRandom && (
      <RandomMovie totalPages={totalPages} />
    )}
  </header>
}

export class HeaderClass extends Component {
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
