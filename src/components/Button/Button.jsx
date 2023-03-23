import styles from './Button.module.css';
import PropTypes from 'prop-types';

const Button = ({ page, onClick }) => {
  const handleClick = e => {
    e.preventDefault();
    const nextPage = page + 1;
    onClick(nextPage);
  };

  return (
    <button className={styles.Button} type="button" onClick={handleClick}>
      Load more
    </button>
  );
};

Button.propTypes = {
  page: PropTypes.number.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default Button;
