import LinkHref from 'next/link';
import { Link as LinkTo } from 'react-scroll';
import { useElementClasses } from '@hooks/useElementClasses';
import styles from '@atoms/styles/Button.module.css';

const config = {
  sizes: {
    m: styles.size_m,
    l: styles.size_l,
  }
}

export function Button({size, href, to, children, className, ...props}) {
  const classes = useElementClasses();

  classes.add(styles.button);
  classes.add(config.sizes[size]);
  classes.add(className);

  if (to) {
    return (
      <LinkTo className={classes.value} to={to} smooth duration={500} offset={-56} {...props}>{children}</LinkTo>
    );
  }

  if (href) {
    return (
      <LinkHref className={classes.value} href={href} {...props}>{children}</LinkHref>
    );
  }

  return (
    <button className={classes.value} {...props}>{children}</button>
  );
}
