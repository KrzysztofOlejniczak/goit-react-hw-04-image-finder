import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';
import { Component } from 'react';
// import PropTypes from 'prop-types';
import styles from './ImageGallery.module.css';

export class ImageGallery extends Component {
  //   static propTypes = {
  //     children: PropTypes.element,
  //   };

  render() {
    const { photos } = this.props;
    // const { children } = this.props;
    return (
      <ul className={styles.ImageGallery}>
        {photos.map(photo => {
          return (
            <ImageGalleryItem
              key={photo.id}
              id={photo.id}
              url={photo.webformatURL}
            />
          );
        })}
      </ul>
    );
  }
}
