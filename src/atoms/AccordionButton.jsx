import { useCallback, useState } from 'react';
import styles from '@atoms/styles/AccordionButton.module.css';

export function AccordionButton({children, ...props}) {
  const [isActive, setActive] = useState(false);
  
  const toggle = useCallback(() => {
    setActive((state) => !state);
  }, []);

  return (
    <button
      type="button"
      onClick={toggle}
      aria-expanded={isActive}
      className={styles.button}
      {...props}
    >
      {children}
    </button>
  );
}
