import Link from 'next/link';
import { useElementClasses } from '@hooks/useElementClasses';
import styles from '@atoms/styles/Button.module.css';

const config = {
  sizes: {
    m: styles.size_m,
    l: styles.size_l,
  }
}

export function Button({size, href, children, className, ...props}) {
  const classes = useElementClasses();

  classes.add(styles.button);
  classes.add(config.sizes[size]);
  classes.add(className);

  if (href) {
    return (
      <Link className={classes.value} href={href} {...props}>{children}</Link>
    );
  }

  return (
    <button className={classes.value} {...props}>{children}</button>
  );
}
