import { Component, useState, useEffect } from "react";
import "./Modal.css";
import { fetchMovie } from "../../utils/requests/movies";

export const Modal = ({modalIsVisible, closeModal, id}) => {
  const [data, setData] = useState(null);


  const functieCareSeApeleazaCandSeSchimbaListaDeDependente = () => {
    if(id !== null) {
      fetchMovie(id).then(movieData => {
        setData(movieData)
      }).catch(e => console.log(e));
    } else {
      setData(null);
    }
  }

  const listaDeDependente = [id];
  // inlocuit metoda componentDidUpdate
  // de fiecare data cand se schimba una din variabilele din lista de proprietati va rula functia callback
  useEffect(functieCareSeApeleazaCandSeSchimbaListaDeDependente, listaDeDependente);

  const functieCareRuleazaDoarCandSeRandeazaPrimaOara = () => {
    console.log('S-a randat componenta prima oara');
  }

  useEffect(functieCareRuleazaDoarCandSeRandeazaPrimaOara, []);

  return (
    <div id="info-modal" className="modal-wrapper" style={{
      display: modalIsVisible ? "flex" : "none",
    }}>
      <div id="modal">
        <div
          id="close-modal"
          className="backdrop"
          onClick={closeModal}
        >
          X
        </div>
        <div id="movie-card">
          {data && (
            <div>
              <h2>{data.title}</h2>
              {data.genres.map(genre => {
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
// nu mai e folosit
export class ModalClass extends Component {
  state = {
    data: null,
  }
  componentDidUpdate(prevProps, prevState, snapshot) {
    if (this.props.id !== null && prevProps.id !== this.props.id) {
      fetchMovie(this.props.id).then(data => {
        this.setState({ data: data });
      }).catch(e => console.log(e));
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
