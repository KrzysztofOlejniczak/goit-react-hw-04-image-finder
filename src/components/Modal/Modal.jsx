import { Component } from 'react';
import styles from './Modal.module.css';

export class Modal extends Component {
  render() {
    const { bigUrl, id } = this.props;
    return (
      <div className={styles.Overlay}>
        <div className={styles.Modal}>
          <img src={bigUrl} alt={id} />
        </div>
      </div>
    );
  }
}
