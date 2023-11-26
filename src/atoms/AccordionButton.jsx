import { useState } from 'react';
import styles from '@atoms/styles/AccordionButton.module.css';

export function AccordionButton({children, ...props}) {
  // Another approach is to use AccordionContext to share state

  const [isActive, setActive] = useState(false);
  
  const toggle = () => {
    setActive((state) => !state);
  };

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
