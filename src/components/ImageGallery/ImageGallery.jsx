import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';
import { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './ImageGallery.module.css';

export class ImageGallery extends Component {
  static propTypes = {
    photos: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
        webformatURL: PropTypes.string.isRequired,
        largeImageURL: PropTypes.string.isRequired,
      }).isRequired
    ),
    modalOpen: PropTypes.func.isRequired,
  };

  modalOpen = url => {
    const { modalOpen } = this.props;
    modalOpen(url);
  };

  render() {
    const { photos } = this.props;
    return (
      <ul className={styles.ImageGallery}>
        {photos.map(photo => {
          return (
            <ImageGalleryItem
              key={photo.id}
              id={photo.id}
              urlPrev={photo.webformatURL}
              urlLarge={photo.largeImageURL}
              modalOpen={this.modalOpen}
            />
          );
        })}
      </ul>
    );
  }
}
