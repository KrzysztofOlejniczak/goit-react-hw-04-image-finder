import styles from './Modal.module.css';
import PropTypes from 'prop-types';
import { useEffect } from 'react';

const ESC_KEY = 27;

const Modal = ({ url, close }) => {
  const handleKey = e => {
    if (e.keyCode === ESC_KEY) {
      close();
    }
  };

  const handleClick = e => {
    if (e.target.tagName.toLowerCase() !== 'img') {
      close();
    }
  };

  useEffect(() => {
    document.addEventListener('keydown', handleKey);

    return () => {
      document.removeEventListener('keydown', handleKey);
    };
    // eslint-disable-next-line
  }, []);

  return (
    <div className={styles.Overlay} onClick={handleClick}>
      <div className={styles.Modal}>
        <img src={url} alt="" />
      </div>
    </div>
  );
};

Modal.propTypes = {
  url: PropTypes.string.isRequired,
  close: PropTypes.func.isRequired,
};

export default Modal;
