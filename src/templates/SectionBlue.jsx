import Image from 'next/image';

import styles from '@templates/styles/SectionBlue.module.css';
import art from '@static/images/art-element-0.svg';

export function SectionBlue({children, ...props}) {
  return (
    <section className={styles.section} {...props}>
      <div className={styles.art}>
        <Image
          src={art}
          width={160}
          height={160}
          alt=""
        />
      </div>
      <div className="container">
        {children}
      </div>
    </section>
  );
}