import { Component } from "react";
import "./Modal.css";

export class Modal extends Component {
  state = {
    data: null,
  };
  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log("component is rerendering");
    if (this.props.id !== null && prevProps.id !== this.props.id) {
      fetch(
        `https://api.themoviedb.org/3/movie/${this.props.id}?api_key=8b218b85545392c9f8705c30fbfd1bce`
      )
        .then(res => res.json())
        .then(data => {
          console.log(data);
          this.setState({
            data: data,
          });
        })
        .catch(e => console.log(e));
    }
    // https://api.themoviedb.org/3/movie/430?api_key=${key
    // daca s-a schimbat id-ul
    // si daca id-ul NU este false
    // sa fac un fetch() catre API cu noul id
  }
  render() {
    const styles = {
      display: this.props.modalIsVisible ? "flex" : "none",
    };
    return (
      <div id="info-modal" className="modal-wrapper" style={styles}>
        <div id="modal">
          <div
            id="close-modal"
            className="backdrop"
            onClick={this.props.closeModal}
          >
            X
          </div>
          <div id="movie-card">
            {this.state.data && (
              <div>
                <h2>{this.state.data.title}</h2>
                {this.state.data.genres.map(genre => {
                  return (
                    <span
                      key={genre.id}
                      style={{
                        border: "1px solid black",
                        borderRadius: "5px",
                        margin: "5px",
                      }}
                    >
                      {genre.name}
                    </span>
                  );
                })}
              </div>
            )}
          </div>
        </div>
      </div>
    );
  }
}
