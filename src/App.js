import React, { Component } from "react";
import Searchbar from "./components/Searchbar";
import ImageGallery from "./components/ImageGallery";
import Button from "./components/Button";
import imagesApi from "./services/images-api";
import Modal from "./components/Modal";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from "react-loader-spinner";

class App extends Component {
  state = {
    images: [],
    showModal: false,
    largeImageURL: null,
    currentPage: 1,
    searchQuery: "",
    isLoading: false,
    error: null,
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevState.searchQuery !== this.state.searchQuery) {
      this.fetchImages();
    }
  }

  toggleModal = () => {
    this.setState(({ showModal }) => ({
      showModal: !showModal,
    }));
  };

  handleModalImage = (url) => {
    this.toggleModal();
    this.setState({ largeImageURL: url });
  };

  onChangeQuery = (query) => {
    this.setState({
      searchQuery: query,
      currentPage: 1,
      images: [],
      error: null,
    });
  };

  fetchImages = () => {
    const { currentPage, searchQuery } = this.state;

    const options = {
      searchQuery,
      currentPage,
    };

    this.setState({ isLoading: true });

    imagesApi
      .fetchImages(options)
      .then((images) =>
        this.setState((prevState) => ({
          images: [...prevState.images, ...images],
          currentPage: prevState.currentPage + 1,
        }))
      )
      .catch((error) => this.setState({ error }))
      .finally(() => this.setState({ isLoading: false }));
  };

  render() {
    const { showModal, images, isLoading, largeImageURL, error } = this.state;
    const shouldRenderLoadMoreButton = images.length > 0 && !isLoading;

    return (
      <div className="App">
        {error && <h1>There is very bad error!</h1>}
        {showModal && (
          <Modal onClose={this.toggleModal}>
            <img src={largeImageURL} alt="" />
          </Modal>
        )}
        <Searchbar onSubmit={this.onChangeQuery} />
        <ImageGallery
          images={images}
          onModal={this.handleModalImage}
          largeImageURL={largeImageURL}
        />
        {isLoading && (
          <Loader
            type="Puff"
            color="#00BFFF"
            height={100}
            width={100}
            timeout={3000}
          />
        )}
        {shouldRenderLoadMoreButton && <Button onClick={this.fetchImages} />}
      </div>
    );
  }
}

export default App;
