import { useElementClasses } from "@hooks/useElementClasses";
import { Header as HeaderStatic } from "@organisms/Header";
import { HeaderWithButton as HeaderFixed } from "@organisms/HeaderWithButton";
import styles from '@templates/styles/Header.module.css';

export function Header({isFixed = false, ...props}) {
  const classes = useElementClasses();

  classes.add(styles.fixed);
  classes.add(styles.active, isFixed);

  return (
    <header {...props}>
      <div className={styles.static}>
        <div className="container">
          <HeaderStatic />
        </div>
      </div>
      <div className={classes.value}>
        <div className="container">
          <HeaderFixed />
        </div>
      </div>
    </header>
  )
}