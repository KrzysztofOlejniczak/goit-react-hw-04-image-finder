import { Component } from 'react';
import styles from './Button.module.css';

export class Button extends Component {
  render() {
    const { onClick } = this.props;
    return (
      <button className={styles.Button} type="button" onClick={onClick}>
        Load more
      </button>
    );
  }
}
