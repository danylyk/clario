import { useElementClasses } from '@hooks/useElementClasses';
import styles from '@atoms/styles/ListItem.module.css';

const config = {
  gaps: {
    s: styles.gap_s,
    m: styles.gap_m,
  }
}

export function ListItem({gap, children, ...props}) {
  const classes = useElementClasses();

  classes.add(styles.item);
  classes.add(config.gaps[gap]);

  return (
    <li className={classes.value} {...props}>
      {children}
    </li>
  );
}
