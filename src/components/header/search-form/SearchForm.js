import { Component } from "react";

export class SearchForm extends Component {
  render = () => {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          value={this.props.searchTerm}
          onChange={this.props.handleChange}
          type="text"
          name="search"
          autoComplete="off"
        />
        <button type="submit">search</button>
      </form>
    );
  };
}
