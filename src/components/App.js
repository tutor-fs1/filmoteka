import { Component, useState } from "react";
import "./App.css";
import { Container } from "./common/Container";
import { Modal } from "./common/Modal";
import { Header } from "./header/Header";
import { Main } from "./main/Main";

class App extends Component {
  fetchInitialData() {
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
  fetchSearchData = searchTerm => {
    fetch(
      `https://api.themoviedb.org/3/search/movie?page=1&api_key=8b218b85545392c9f8705c30fbfd1bce&query=${searchTerm}`
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
  };
  handleChange = e => {
    const searchTerm = e.target.value;
    this.setState({
      searchTerm: searchTerm,
    });
    if (!searchTerm.length) {
      this.fetchInitialData();
    } else {
      this.fetchSearchData(searchTerm);
    }
  };
  render() {
    return (
      <>
        {this.state.modalIsVisible && (
          <Modal
            closeModal={this.closeModal.bind(this)}
            id={this.state.selectedMovie}
          />
        )}
        <Container>
          <Header
            searchTerm={this.state.searchTerm}
            handleChange={this.handleChange}
          />
        </Container>
        <Container>
          <Main
            searchTerm={this.state.searchTerm}
            data={this.state.data}
            hasError={this.state.hasError}
            isLoading={this.state.isLoading}
            openModal={this.openModal.bind(this)}
          />
        </Container>
        <Container solidColor="#dedede">footer</Container>
      </>
    );
  }
  state = {
    modalIsVisible: false,
    selectedMovie: false,
    isLoading: true,
    hasError: false,
    data: false,
    searchTerm: "",
  };
  constructor() {
    super();
    this.fetchInitialData();
  }
  openModal(id) {
    this.setState({
      modalIsVisible: true,
      selectedMovie: id,
    });
  }
  closeModal() {
    this.setState({
      modalIsVisible: false,
      selectedMovie: false,
    });
  }
}

const AppFunctional = () => {
  const [modalIsVisible, setModalsIsVisisble] = useState(true);
  const [id, setId] = useState(false);

  const openModal = id => {
    setModalsIsVisisble(true);
    setId(id);
  };

  const closeModal = () => {
    setModalsIsVisisble(false);
    setId(false);
  };

  return (
    <>
      {modalIsVisible && (
        <Modal closeModal={closeModal} id={this.props.selectedMovie} />
      )}
      <Container>
        <Header />
      </Container>
      <Container>
        <Main openModal={openModal.bind(this)} />
      </Container>
      <Container solidColor="#dedede">footer</Container>
    </>
  );
};

export default App;
