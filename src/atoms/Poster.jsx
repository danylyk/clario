import { useElementClasses } from '@hooks/useElementClasses';
import styles from '@atoms/styles/Poster.module.css';

export function Poster({color, height, hasOverlay = true, children, ...props}) {
  const classes = useElementClasses();

  classes.add(styles.poster);
  classes.add(styles.poster_overlay, hasOverlay);

  const style = {
    '--poster-color': color,
    maxHeight: height || 'auto'
  };

  return (
    <div className={classes.value} style={style} {...props}>
      <div className={styles.poster_container}>
        {children}
      </div>
    </div>
  );
}
