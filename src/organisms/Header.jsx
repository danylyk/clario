import Link from 'next/link';
import Image from 'next/image';

import styles from '@organisms/styles/Header.module.css';
import logo from '@static/images/logo.svg';

export function Header() {
  return (
    <div className={styles.container}>
      <Link className={styles.logo} href="/">
        <Image
          alt='Clario'
          src={logo}
        />
      </Link>
    </div>
  )
}