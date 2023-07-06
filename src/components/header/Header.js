import { Navigation } from "./navigation/Navigation";
import { SearchForm } from "./search-form/SearchForm";
import "./Header.css";
import { LiveSearch } from "../common/exemple/LiveSearch";

export const Header = props => {
  return (
    <header className="header">
      {/* <LiveSearch /> */} {/* exemplu similar cu tema */}
      <SearchForm
        searchTerm={props.searchTerm}
        handleChange={props.handleChange}
      />
      <Navigation />
      <h1>filmoteka</h1>
    </header>
  );
};
