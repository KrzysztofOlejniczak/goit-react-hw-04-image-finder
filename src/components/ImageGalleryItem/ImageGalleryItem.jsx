import { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './ImageGalleryItem.module.css';

export class ImageGalleryItem extends Component {
  static propTypes = {
    id: PropTypes.number,
    url: PropTypes.string,
  };

  render() {
    const { id, url } = this.props;
    return (
      <li className={styles.ImageGalleryItem}>
        <img src={url} alt={id} className={styles['ImageGalleryItem-image']} />
      </li>
    );
  }
}
