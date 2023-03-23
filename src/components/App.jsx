import { useState } from 'react';
import Button from './Button/Button';
import ImageGallery from './ImageGallery/ImageGallery';
import Loader from './Loader/Loader';
import Modal from './Modal/Modal';
import Searchbar from './Searchbar/Searchbar';
import api from './services/api';

const INITIAL_STATE = {
  isLoading: false,
  photos: [],
  page: 1,
  maxPage: 0,
  query: '',
  modal: '',
};

const App = () => {
  const [page, setPage] = useState(INITIAL_STATE.page);
  const [maxPage, setMaxPage] = useState(INITIAL_STATE.maxPage);
  const [query, setQuery] = useState(INITIAL_STATE.query);
  const [photos, setPhotos] = useState(INITIAL_STATE.photos);
  const [isLoading, setIsLoading] = useState(INITIAL_STATE.isLoading);
  const [modal, setModal] = useState(INITIAL_STATE.modal);

  const searchImg = async (query, page) => {
    setIsLoading(true);
    const response = await api(query, page);
    let photosFromApi = [];
    response.data.hits.forEach(photo => {
      photosFromApi.push({
        id: photo.id,
        webformatURL: photo.webformatURL,
        largeImageURL: photo.largeImageURL,
      });
    });
    if (page === 1) {
      const maxPage = Math.ceil(
        response.data.totalHits / response.data.hits.length
      );
      setQuery(query);
      setPhotos(photosFromApi);
      setPage(page);
      setMaxPage(maxPage);
      setIsLoading(false);
    } else {
      setQuery(query);
      setPhotos([...photos, ...photosFromApi]);
      setPage(page);
      setIsLoading(false);
    }
  };

  const modalOpen = url => {
    setModal(url);
  };

  const modalClose = url => {
    setModal(INITIAL_STATE.modal);
  };

  return (
    <div className="app">
      <Searchbar onSubmit={searchImg} />
      <ImageGallery photos={photos} modalOpen={modalOpen} />
      {isLoading && <Loader />}
      {photos.length > 0 && page < maxPage && (
        <Button page={page} onClick={nextPage => searchImg(query, nextPage)} />
      )}

      {modal.length > 0 && <Modal url={modal} close={modalClose} />}
    </div>
  );
};

export default App;
