import PropTypes from 'prop-types';
import styles from './ImageGalleryItem.module.css';

const ImageGalleryItem = ({ id, urlPrev, modalOpen, urlLarge }) => {
  const handleClick = () => {
    modalOpen(urlLarge);
  };

  return (
    <li className={styles.ImageGalleryItem}>
      <img
        src={urlPrev}
        alt={id}
        className={styles['ImageGalleryItem-image']}
        onClick={handleClick}
      />
    </li>
  );
};

ImageGalleryItem.propTypes = {
  id: PropTypes.number.isRequired,
  urlPrev: PropTypes.string.isRequired,
  urlLarge: PropTypes.string.isRequired,
  modalOpen: PropTypes.func.isRequired,
};

export default ImageGalleryItem;
