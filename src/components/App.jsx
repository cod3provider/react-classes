import React, { Component } from 'react';
import Button from './Button/Button';
import fetchMovies from './services/MoviesAPI';
import MoviesGallery from './MoviesGallery/MoviesGallery';
import Modal from './Modal/Modal';

class App extends Component {

  state = {
    isMoviesShow: false,
    page: 1,
    movies: [],
    isLoading: false,
    currentImage: null,
  };

  componentDidUpdate(prevProps, prevState) {
    const { isMoviesShow, page } = this.state;
    if ((prevState.isMoviesShow !== isMoviesShow && isMoviesShow) || prevState.page !== page && isMoviesShow) {
      this.getMovies();
    }
    if (!isMoviesShow && isMoviesShow !== prevState.isMoviesShow) {
      this.setState({
        movies: [],
        page: 1,
      });
    }
  }

  showMoviesList = () => {
    this.setState(prevState => ({
      isMoviesShow: !prevState.isMoviesShow,
    }));
  };

  getMovies = () => {
    this.setState({ isLoading: true });

    fetchMovies(this.state.page)
    .then(({ data: { results } }) => {
      this.setState(prevState => ({ movies: [...prevState.movies, ...results] }));
    })
    .catch(error => console.log(error))
    .finally(() => this.setState({ isLoading: false }));
  };

  loadMore = () => {
    this.setState(prevState => ({
      page: prevState.page + 1,
    }));
  };

  openModal = (data) => {
    this.setState({ currentImage: data });
  };

  closeModal = () => {
    this.setState({
      currentImage: null,
    });
  };

  render() {
    const { showMoviesList, loadMore, openModal, closeModal } = this;
    const { isMoviesShow, movies, currentImage } = this.state;

    return (
      <>
        <Button
          clickHandler={showMoviesList}
          text={isMoviesShow ? 'hide movies list' : 'show movies list'}
        />
        {isMoviesShow &&
          <>
            <MoviesGallery movies={movies} showModal={openModal} />
            <Button text='Load more' clickHandler={loadMore} />
          </>
        }
        {currentImage && <Modal currentImage={currentImage} closeModal={closeModal} />}
      </>
    );
  }
}

export default App;
