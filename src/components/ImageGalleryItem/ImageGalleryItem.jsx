import { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './ImageGalleryItem.module.css';

export class ImageGalleryItem extends Component {
  static propTypes = {
    id: PropTypes.number.isRequired,
    urlPrev: PropTypes.string.isRequired,
    urlLarge: PropTypes.string.isRequired,
    modalOpen: PropTypes.func.isRequired,
  };

  handleClick = () => {
    const { modalOpen, urlLarge } = this.props;
    modalOpen(urlLarge);
  };

  render() {
    const { id, urlPrev } = this.props;
    return (
      <li className={styles.ImageGalleryItem}>
        <img
          src={urlPrev}
          alt={id}
          className={styles['ImageGalleryItem-image']}
          onClick={this.handleClick}
        />
      </li>
    );
  }
}
