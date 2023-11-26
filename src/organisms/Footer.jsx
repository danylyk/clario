import Link from 'next/link';
import Image from 'next/image';

import styles from '@organisms/styles/Footer.module.css';
import logo from '@static/images/logo.svg';

export function Footer() {
  return (
    <div className={styles.container}>
      <Link className={styles.logo} href="/">
        <Image
          alt='Clario'
          src={logo}
        />
      </Link>
      <p className="text_5">
        © 2023 Clario Tech DMCC<br />
        All rights reserved.
      </p>
    </div>
  )
}