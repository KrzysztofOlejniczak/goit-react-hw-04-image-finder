import ImageGalleryItem from 'components/ImageGalleryItem/ImageGalleryItem';
import PropTypes from 'prop-types';
import styles from './ImageGallery.module.css';

const ImageGallery = ({ modalOpen, photos }) => {
  const handleModal = url => {
    modalOpen(url);
  };

  return (
    <ul className={styles.ImageGallery}>
      {photos.map(photo => {
        return (
          <ImageGalleryItem
            key={photo.id}
            id={photo.id}
            urlPrev={photo.webformatURL}
            urlLarge={photo.largeImageURL}
            modalOpen={handleModal}
          />
        );
      })}
    </ul>
  );
};

ImageGallery.propTypes = {
  photos: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      webformatURL: PropTypes.string.isRequired,
      largeImageURL: PropTypes.string.isRequired,
    }).isRequired
  ),
  modalOpen: PropTypes.func.isRequired,
};

export default ImageGallery;
