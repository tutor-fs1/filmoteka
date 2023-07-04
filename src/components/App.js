import { Component, useState } from "react";
import "./App.css";
import { Container } from "./common/Container";
import { Modal } from "./common/Modal";
import { Header } from "./header/Header";
import { Main } from "./main/Main";

class App extends Component {
  state = {
    modalIsVisible: false,
    selectedMovie: false,
  };
  constructor() {
    super();
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
          <Header />
        </Container>
        <Container>
          <Main openModal={this.openModal.bind(this)} />
        </Container>
        <Container solidColor="#dedede">footer</Container>
      </>
    );
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
      {modalIsVisible && <Modal closeModal={closeModal} id={selectedMovie} />}
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
