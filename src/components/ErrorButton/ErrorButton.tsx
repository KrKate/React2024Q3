import { useState } from 'react';
import styles from './ErrorButton.module.css';

function ErrorButton() {
  const [hasError, setHasError] = useState<boolean>(false);

  const handleCreateError = () => {
    setHasError(true);
  };

  if (hasError) {
    throw Error('Test error');
  }
  return (
    <button
      type="button"
      className={styles.errorButton}
      onClick={handleCreateError}
    >
      Create an Error
    </button>
  );
}

export default ErrorButton;
