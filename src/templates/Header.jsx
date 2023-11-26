import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";

import { useElementClasses } from "@hooks/useElementClasses";
import { useIntersectionObserver } from "@hooks/useIntersectionObserver";

import styles from '@templates/styles/Header.module.css';
import logo from '@static/images/logo.svg';

export function Header({targetToMakeFixed, children, ...props}) {
  const [fixed, setFixed] = useState(false);
  
  const classes = useElementClasses();
  const observer = useIntersectionObserver((entries) => {
    setFixed(entries.every((entry) => {
      return !entry.isIntersecting;
    }));
  });

  useEffect(() => {
    observer.observe(targetToMakeFixed.current);

    return () => {
      observer.unobserve(targetToMakeFixed.current);
    }
  }, []);

  classes.add(styles.fixed);
  classes.add(styles.active, fixed);

  return (
    <header {...props}>
      <div className={styles.static}>
        <div className="container">
          <Link className={styles.logo} href="/">
            <Image
              alt=''
              src={logo}
            />
          </Link>
        </div>
      </div>
      <div className={classes.value}>
        <div className="container">
          <Link href="/" className={styles.logo}>
            <Image
              alt=''
              src={logo}
            />
          </Link>

          {children}
        </div>
      </div>
    </header>
  );
}