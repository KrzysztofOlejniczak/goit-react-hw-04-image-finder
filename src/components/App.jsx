import { Component } from 'react';
import { Button } from './Button/Button';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Loader } from './Loader/Loader';
import { Modal } from './Modal/Modal';
import { Searchbar } from './Searchbar/Searchbar';
import api from './services/api';

const INITIAL_STATE = {
  isLoading: false,
  photos: [],
  page: 1,
  query: '',
  modal: '',
};

export class App extends Component {
  state = {
    ...INITIAL_STATE,
  };

  searchImg = async (query, page) => {
    this.setState({ isLoading: true });
    const response = await api(query, page);
    let photos = [];
    response.data.hits.forEach(photo => {
      photos.push({
        id: photo.id,
        webformatURL: photo.webformatURL,
        largeImageURL: photo.largeImageURL,
      });
    });
    if (page === 1) {
      const maxPage = Math.ceil(
        response.data.totalHits / response.data.hits.length
      );
      this.setState(prevS => {
        return {
          query,
          photos,
          page,
          maxPage,
          isLoading: false,
        };
      });
    } else {
      this.setState(prevS => {
        return {
          query,
          photos: [...this.state.photos, ...photos],
          page,
          isLoading: false,
        };
      });
    }
  };

  modalOpen = url => {
    this.setState(prevS => {
      return {
        modal: url,
      };
    });
  };

  modalClose = url => {
    this.setState(prevS => {
      return {
        modal: '',
      };
    });
  };

  render() {
    const { page, maxPage, query, photos, isLoading, modal } = this.state;
    return (
      <div className=".app">
        <Searchbar onSubmit={this.searchImg} />
        <ImageGallery photos={photos} modalOpen={this.modalOpen} />
        {isLoading && <Loader />}
        {photos.length > 0 && !isLoading && page < maxPage && (
          <Button
            page={page}
            onClick={nextPage => this.searchImg(query, nextPage)}
          />
        )}

        {modal.length > 0 && <Modal url={modal} close={this.modalClose} />}
      </div>
    );
  }
}
