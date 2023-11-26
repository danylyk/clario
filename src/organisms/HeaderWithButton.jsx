import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@atoms/Button';

import styles from '@organisms/styles/HeaderWithButton.module.css';
import logo from '@static/images/logo.svg';

export function HeaderWithButton() {
  return (
    <div className={styles.container}>
      <Link href="/" className={styles.logo}>
        <Image
          alt='Clario'
          src={logo}
        />
      </Link>

      <Button size="m">Protect me now</Button>
    </div>
  )
}