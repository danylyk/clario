import styles from '@atoms/styles/AccordionPanel.module.css';

export function AccordionPanel({children, ...props}) {
  return (
    <div className={styles.panel} {...props}>
      {children}
    </div>
  );
}
