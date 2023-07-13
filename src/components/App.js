import { Component, useState } from "react";
import "./App.css";
import { Container } from "./common/Container";
import { Modal } from "./common/Modal";
import { Header } from "./header/Header";
import { Main } from "./main/Main";

class App extends Component {
  fetchData() {
    fetch(
      `https://api.themoviedb.org/3/trending/movie/day?page=${this.state.currentPage}&api_key=8b218b85545392c9f8705c30fbfd1bce`
    )
      .then(response => {
        return response.json();
      })
      .then(data => {
        this.setState({
          hasError: false,
          data: data,
        });
      })
      .catch(err => {
        this.setState({
          hasError: true,
          data: false,
        });
      })
      .finally(() => {
        this.setState({
          isLoading: false,
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
      this.fetchData();
    } else {
      this.fetchSearchData(searchTerm);
    }
  };
  navigateToPage(page) {
    console.log("s-a chemat navigateToPage");
    this.setState({
      currentPage: page,
    });
  }
  componentDidUpdate(prevProps, prevState) {
    if (this.state.currentPage !== prevState.currentPage) {
      this.fetchData();
    }
  }
  render() {
    return (
      <>
        <Modal
          modalIsVisible={this.state.modalIsVisible}
          closeModal={this.closeModal.bind(this)}
          id={this.state.selectedMovie}
        />

        <Container>
          <Header
            totalPages={this.state.data ? this.state.data.totalPages : null}
            searchTerm={this.state.searchTerm}
            handleChange={this.handleChange}
          />
        </Container>
        <Container>
          <Main
            navigateToPage={this.navigateToPage.bind(this)}
            searchTerm={this.state.searchTerm}
            data={this.state.data}
            hasError={this.state.hasError}
            isLoading={this.state.isLoading}
            openModal={this.openModal.bind(this)}
            currentPage={this.state.currentPage}
          />
        </Container>
        <Container solidColor="#dedede">footer</Container>
      </>
    );
  }
  state = {
    modalIsVisible: false,
    selectedMovie: null,
    isLoading: true,
    hasError: false,
    data: false,
    searchTerm: "",
    currentPage: 1,
  };
  constructor() {
    super();
    this.fetchData();
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
      selectedMovie: null,
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
