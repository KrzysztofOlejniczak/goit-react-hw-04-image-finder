import { Component } from 'react';
import styles from './Button.module.css';
import PropTypes from 'prop-types';

export class Button extends Component {
  static propTypes = {
    page: PropTypes.number.isRequired,
    onClick: PropTypes.func.isRequired,
  };

  handleClick = e => {
    e.preventDefault();
    const { page, onClick } = this.props;
    const nextPage = page + 1;
    onClick(nextPage);
  };

  render() {
    return (
      <button
        className={styles.Button}
        type="button"
        onClick={this.handleClick}
      >
        Load more
      </button>
    );
  }
}
