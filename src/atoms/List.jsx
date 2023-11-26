import { useElementClasses } from '@hooks/useElementClasses';
import styles from '@atoms/styles/List.module.css';

const config = {
  gaps: {
    xs: styles.gap_xs,
    s: styles.gap_s,
    m: styles.gap_m,
    l: styles.gap_l,
    xl: styles.gap_xl,
  }
}

export function List({gap, inline = false, children, className, ...props}) {
  const classes = useElementClasses();

  classes.add(styles.list);
  classes.add(styles.inline, inline);
  classes.add(config.gaps[gap]);
  classes.add(className);

  return (
    <ul className={classes.value} {...props}>
      {children}
    </ul>
  );
}
