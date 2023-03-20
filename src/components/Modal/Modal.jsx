import { Component } from 'react';
import styles from './Modal.module.css';
import PropTypes from 'prop-types';

const ESC_KEY = 27;

export class Modal extends Component {
  static propTypes = {
    url: PropTypes.string.isRequired,
    close: PropTypes.func.isRequired,
  };

  handleKey = e => {
    const { close } = this.props;
    if (e.keyCode === ESC_KEY) {
      close();
    }
  };

  handleClick = e => {
    const { close } = this.props;
    if (e.target.tagName.toLowerCase() !== 'img') {
      close();
    }
  };

  componentDidMount() {
    document.addEventListener('keydown', this.handleKey);
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.handleKey);
  }

  render() {
    const { url } = this.props;
    return (
      <div className={styles.Overlay} onClick={this.handleClick}>
        <div className={styles.Modal}>
          <img src={url} alt="" />
        </div>
      </div>
    );
  }
}
