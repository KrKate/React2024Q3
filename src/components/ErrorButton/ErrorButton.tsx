import { Component, ReactNode } from 'react';
import styles from './ErrorButton.module.css';

interface StateType {
  hasError: boolean;
}

class ErrorButton extends Component<object, StateType> {
  constructor(props: object) {
    super(props);
    this.state = {
      hasError: false,
    };
  }

  private handleCreateError = () => {
    this.setState({
      hasError: true,
    });
  };

  render(): ReactNode {
    const { hasError } = this.state;
    if (hasError) {
      throw Error('Test error');
    }
    return (
      <button
        type="button"
        className={styles.errorButton}
        onClick={this.handleCreateError}
      >
        Create an Error
      </button>
    );
  }
}

export default ErrorButton;
